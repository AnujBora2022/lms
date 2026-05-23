import { NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      courseId,
      amount,
    } = body;

    // ❗ Basic validation
    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature ||
      !courseId
    ) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    // 🔐 Create signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign)
      .digest("hex");

    // ❌ Invalid signature
    if (expectedSign !== razorpay_signature) {
      return new NextResponse("Invalid signature", { status: 400 });
    }

        // ✅ 1. SAVE PAYMENT (HERE 👇)
    await db.payment.create({
      data: {
        userId: user.id,
        courseId,
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        amount: amount,
        status: "success",
      },
    });


    // ✅ Prevent duplicate purchase
    await db.purchase.upsert({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId,
        },
      },
      update: {},
      create: {
        userId: user.id,
        courseId,
      },
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.log("[VERIFY_PAYMENT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

import { db } from "@/lib/db";
import { razorpay } from "@/lib/razorpay_lib";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// import Razorpay from "razorpay";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
){
  try{
    const user = await currentUser();

    if(!user || !user.id  || !user.emailAddresses?.[0]?.emailAddress){
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const {courseId} = await params;

    const course = await db.course.findUnique({
      where:{
        id: courseId,
        isPublished: true,
      }
    });

    if(!course){
      return new NextResponse("Course not found", { status: 404 });
    }

    const purchase = await db.purchase.findUnique({
      where:{
        userId_courseId: {
          userId: user.id,
          courseId: courseId,
        }
      }
    });

    if(purchase){
      return new NextResponse("Already Purchased", { status: 400 });
    }

    const order = await razorpay.orders.create({
      amount: Math.round((course.price ?? 0) * 100),
      currency: "INR",
      receipt: `c_${course.id.slice(0, 6)}_${Date.now()}`,
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });


    


  }catch(error){
    console.log("[COURSE_ID_CHECKOUT]", error);
    return new Response("Internal Error", { status: 500 });
  }
}

// const line_items = razorpay.orders.create(
    //   {
    //     amount: course.price! * 100,
    //     currency: "INR",
    //     receipt: `receipt_order_${Math.random() * 1000}`,
    //   }
    // )

    // return NextResponse.json(line_items);


    // const razorpayOrder = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/razorpay/order`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ amount: course.price! * 100 }),
    // });

    // const order = await razorpayOrder.json();
    // if(!razorpayOrder.ok){
    //   return new NextResponse("Failed to create order", { status: 500 });
    // }

    // await db.purchase.create({
    //   data:{
    //     userId: user.id,
    //     courseId: params.courseId,
    //     razorpayOrderId: order.id,
    //     amount: course.price,
    //     status: "pending",
    //   }
    // });

    // return NextResponse.json(order);

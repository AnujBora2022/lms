import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ courseId: string; attachmentId: string }> }
) {
  try {
    const { userId } = await auth();
    const { courseId, attachmentId } = await params; // 👈 await the whole params

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: {
        id: courseId,        // 👈 use destructured values
        userId: userId,
      }
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const attachment = await db.attachment.delete({
      where: {
        courseId: courseId,  // 👈 use destructured values
        id: attachmentId,
      }
    });

    return NextResponse.json(attachment);

  } catch (error) {
    console.log("ATTACHMENT_ID", error);
    return new Response("Internal Error", { status: 500 });
  }
}
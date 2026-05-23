import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string, chapterId: string } }
){
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const {courseId} = await params;
    const {chapterId} = await params;

    const ownCourse = await db.course.findUnique({
      where:{
        id: courseId,
        userId: userId,
      }
    });



    if (!ownCourse) {
      return new NextResponse("Unauthorized", { status: 401 });
    }


    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
        courseId: courseId,
      },
    });

    const muxData = await db.muxData.findUnique({
      where: {
        chapterId: chapterId,
      },
    });

    if(!chapter || !muxData || !chapter.title || !chapter.description || !chapter.videoUrl) {
      return new NextResponse("Missing Required Fields", { status: 400});
    }


    const publishedChapter = await db.chapter.update({
      where: {
        id: chapterId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedChapter);
     
  } catch (error) {
    console.log("[CHAPTER PUBLISH] ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
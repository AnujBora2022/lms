import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  {params}:{params:{courseId:string, chapterId:string}}
){
  try{
    const {userId} = await auth();
    if(!userId){
      return new Response("Unauthorized", {status: 401});
    }
    const {courseId, chapterId} = await params;

    const {isCompleted} = await req.json();

    const userProgress = await db.userProgress.upsert({
      where:{
        userId_chapterId:{
          userId,
          chapterId,
        }
      },
      update:{
        isCompleted,
      },
      create:{
        userId,
        chapterId,
        isCompleted,
      }
    })

    return NextResponse.json(userProgress);
  }catch(error){
    console.log("[CHAPTER_ID_PROGRESS]", error);
    return new Response("Internal Error", {status: 500});
  }
}

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";



export async function POST(req: Request) {
  try{
    const { userId } = await auth();
    const {title} = await req.json();

    if(!userId){
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if(!isTeacher(userId)){
      return new NextResponse("Forbidden", { status: 403 })
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      }
    })

    return NextResponse.json(course);

  }catch(error){
    console.error("[COURSES] ", error);
    return new NextResponse("Internal Error", { status: 500 })
  }
}
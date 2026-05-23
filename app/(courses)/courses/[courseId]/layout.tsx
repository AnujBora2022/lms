import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { getProgress } from "@/actions/get-progress";
import { CourseSidebar } from "./_components/course-sidebar";
import { CourseNavbar } from "./_components/course-navbar";
import Script from "next/script";

const CourseLayout = async ({
  children,
  params
}:{
  children: React.ReactNode,
  params: {courseId:string}
})=>{
  const {userId} = await auth();
  if(!userId){
    return redirect('/');
  }

  const {courseId} = await params;

  const course = await db.course.findUnique({
    where:{
      id: courseId,
    },
    include:{
      chapters:{
        where:{
          isPublished: true,
        },
        include:{
          userProgress:{
            where:{
              userId: userId,
            }
          }
        },
        orderBy: {
          position: "asc",
        },
      }
    }
  });

  if(!course){
    return redirect('/');
  }

  const progressCount = await getProgress(userId, course.id);

  return(
    <div className="h-full">
    {/* ✅ Razorpay Script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <CourseNavbar
          course = {course}
          progressCount = {progressCount}
        />
      </div>
      <div className="max-md:hidden h-full w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar
          course={course}
          progressCount={progressCount}
        />
      </div>
      <main className="md:pl-80 pt-[80px] h-full">
        {children}
      </main>
      
    </div>
  )
}

export default CourseLayout;
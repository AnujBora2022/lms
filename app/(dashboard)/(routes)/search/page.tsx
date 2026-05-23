import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


import { db } from "@/lib/db";
import { SearchInput } from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";


import { Categories } from "./_components/categories";
import { CoursesList } from "@/components/courses-list";

interface SearchPageProps{
  searchParams:{
    title:string,
    categoryId:string
  }
}

// const searchPage = async ({
//   searchParams,
// }:SearchPageProps) => {
//   const {userId }= await auth();

//   if(!userId){
//     return redirect('/');
  
//   }
//   const categories = await db.category.findMany({
//     orderBy:{
//       name:"asc",
//     }
//   });

//   const courses = await getCourses({
//     userId,
//     ...searchParams,

//   })

//   return ( 
//     <>
//       <div className="px-6 pt-6 max-md:block md:hidden md:mb-0 ">
//         <SearchInput/>
//       </div>
//       <div className="p-6">
//         <Categories
//           items = {categories}
//         />
//       </div>
//     </>

//    );
// }
 
// export default searchPage;

const searchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ title?: string; categoryId?: string }>;
}) => {
  const params = await searchParams; // ✅ unwrap

  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...params, // ✅ now safe
  });

  return (
    <>
      <div className="px-6 pt-6 max-md:block md:hidden md:mb-0">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <Categories items={categories} />
        <CoursesList items={courses} />
        
      </div>

    </>
  );
};

export default searchPage;

// "use client";
// import { useAuth, UserButton } from "@clerk/nextjs";
// import { usePathname, useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { LogOut } from "lucide-react";
// import Link from "next/link";
// import { SearchInput } from "./search-input";
// import { isTeacher } from "@/lib/teacher";
// export const NavbarRoutes=()=>{
//   const pathname = usePathname();
//   const {userId} = useAuth();
//   const router = useRouter();


//   const isTeacherPage = pathname?.startsWith("/teacher");
//   const isCoursePage= pathname?.includes("/courses");
//   const isSearchPage = pathname === "/search";

//   return(
//     <>
//       {isSearchPage  && (
//         <div className="max-md:hidden md:block ">
          
//           <SearchInput/>
//         </div>
//       )}
//       <div className="flex gap-x-2 ml-auto" >
//         {isTeacherPage || isCoursePage?(
//           <Link href="/">
//             <Button size="sm" variant="ghost" >
//               <LogOut className="h-4 w-4 mr-2"/>
//               Exit
//             </Button>
//           </Link>
//         ): isTeacher(userId)?(
//           <Link href="/teacher/courses">
//             <Button size="sm" variant="ghost">
//               Teacher mode
//             </Button>
//           </Link>
//         ):null}
//         <UserButton  />
//       </div>
//     </>
//   )
// }


// "use client";

// import { useAuth, UserButton } from "@clerk/nextjs";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { LogOut } from "lucide-react";
// import Link from "next/link";
// import { SearchInput } from "./search-input";
// import { isTeacher } from "@/lib/teacher";

// export const NavbarRoutes = () => {
//   const pathname = usePathname();
//   const { userId } = useAuth();

//   const isTeacherPage = pathname?.startsWith("/teacher");
//   const isSearchPage = pathname === "/search";

//   const showExit = isTeacherPage;
//   const showTeacherMode = !isTeacherPage && isTeacher(userId);

//   console.log("USER ID:", userId);

//   return (
//     <>
//       {isSearchPage && (
//         <div className="max-md:hidden md:block">
//           <SearchInput />
//         </div>
//       )}

//       <div className="flex gap-x-2 ml-auto">
//         {showExit && (
//           <Link href="/">
//             <Button size="sm" variant="ghost">
//               <LogOut className="h-4 w-4 mr-2" />
//               Exit
//             </Button>
//           </Link>
//         )}

//         {showTeacherMode && (
//           <Link href="/teacher/courses">
//             <Button size="sm" variant="ghost">
//               Teacher mode
//             </Button>
//           </Link>
//         )}

//         <UserButton />
//       </div>
//     </>
//   );
// };


"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { isTeacher } from "@/lib/teacher";

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const { userId, isLoaded } = useAuth();

  if (!isLoaded) return null;

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isSearchPage = pathname === "/search";

  const showExit = isTeacherPage;
  const showTeacherMode = !isTeacherPage && isTeacher(userId);


  return (
    <>
      {isSearchPage && (
        <div className="max-md:hidden md:block">
          <SearchInput />
        </div>
      )}

      <div className="flex gap-x-2 ml-auto">
        {showExit && (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        )}

        {showTeacherMode && (
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Teacher mode
            </Button>
          </Link>
        )}

        <UserButton />
      </div>
    </>
  );
};

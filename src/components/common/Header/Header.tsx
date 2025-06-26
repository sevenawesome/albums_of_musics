import React from "react";

export default function Header({children}: {children: React.ReactNode}) {
   return <>
         <header className="fixed top-0 left-0 z-50 w-full h-16 bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600 p-1">
           {children}
         </header>
   </>
}
// "use client"

// import * as React from "react"
// import { Check, ChevronsUpDown } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// interface ComboboxProps {
//   options:{label :string; value:string}[];
//   value?:string;
//   onChange:(value:string)=>void;
// };



// export const Combobox = ({
//   options,
//   value,
//   onChange
// }:ComboboxProps) =>{
//   const [open, setOpen] = React.useState(false)

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-full justify-between"
//         >
//           {value
//             ? options.find((option) => option.value === value)?.label
//             : "Select option..."}
//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-fill p-0">
//         <Command>
//           <CommandInput placeholder="Search option..." />
//           <CommandList>
//             <CommandEmpty>No Option found.</CommandEmpty>
//             <CommandGroup>
//               {options.map((option) => (
//                 <CommandItem
//                   key={option.value}
//                   value={option.value}
//                   onSelect={() => {
//                     onChange(option.value === value ? "" : option.value)
//                     setOpen(false)
//                   }}
//                 >
//                   <Check
//                     className={cn(
//                       "mr-2 h-4 w-4",
//                       value === option.value ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                   {option.label}
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   )
// }

// "use client";

// import * as React from "react";
// import { Check, ChevronsUpDown } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";

// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// interface ComboboxProps {
//   options: {
//     label: string;
//     value: string;
//   }[];
//   value?: string;
//   onChange: (value: string) => void;
// }

// export const Combobox = ({
//   options,
//   value,
//   onChange,
// }: ComboboxProps) => {
//   const [open, setOpen] =
//     React.useState(false);

//   return (
//     <Popover
//       open={open}
//       onOpenChange={setOpen}
//     >
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-full justify-between"
//         >
//           {value
//             ? options.find(
//                 (option) =>
//                   option.value === value
//               )?.label
//             : "Select category..."}

//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>

//       <PopoverContent
//         className="w-[400px] p-0"
//         align="start"
//       >
//         <Command>
//           <CommandInput placeholder="Search category..." />

//           <CommandList>
//             <CommandEmpty>
//               No category found.
//             </CommandEmpty>

//             <CommandGroup>
//               {options.map((option) => (
//                 <CommandItem
//                   key={option.value}
//                   value={option.label}
//                   onSelect={() => {
//                     onChange(
//                       option.value
//                     );
//                     setOpen(false);
//                   }}
//                 >
//                   <Check
//                     className={cn(
//                       "mr-2 h-4 w-4",
//                       value ===
//                         option.value
//                         ? "opacity-100"
//                         : "opacity-0"
//                     )}
//                   />

//                   {option.label}
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// };


// "use client";

// import * as React from "react";
// import { Check, ChevronsUpDown } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// interface ComboboxProps {
//   options: {
//     label: string;
//     value: string;
//   }[];
//   value?: string;
//   onChange: (value: string) => void;
// }

// export const Combobox = ({
//   options,
//   value,
//   onChange,
// }: ComboboxProps) => {
//   const [open, setOpen] =
//     React.useState(false);

//   return (
//     <Popover
//       open={open}
//       onOpenChange={setOpen}
//     >
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           className="w-full justify-between"
//         >
//           {value
//             ? options.find(
//                 (option) =>
//                   option.value === value
//               )?.label
//             : "Select category..."}

//           <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
//         </Button>
//       </PopoverTrigger>

//       {/* <PopoverContent
//         className="w-full p-0"
//       >
//         <Command>
//           <CommandInput placeholder="Search category..." />

//           <CommandList>
//             <CommandEmpty>
//               No category found.
//             </CommandEmpty>

//             <CommandGroup heading="Categories">
//               {options.map((option) => (
//                 <CommandItem
//                   key={option.value}
//                   value={option.label.toLowerCase()}
//                   onSelect={() => {
//                     onChange(
//                       option.value
//                     );
//                     setOpen(false);
//                   }}
//                 >
//                   <Check
//                     className={cn(
//                       "mr-2 h-4 w-4",
//                       value ===
//                         option.value
//                         ? "opacity-100"
//                         : "opacity-0"
//                     )}
//                   />

//                   {option.label}
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent> */}
//       <PopoverContent className="w-[300px] p-4">
//         <div className="space-y-2">
//           {options.map((option) => (
//             <button
//               key={option.value}
//               type="button"
//               className="block w-full text-left border p-2 rounded"
//               onClick={() => {
//                 onChange(option.value);
//                 setOpen(false);
//               }}
//             >
//               {option.label}
//             </button>
//           ))}
//         </div>
//       </PopoverContent>   
//     </Popover>
//   );
// };





// "use client";

// import * as React from "react";

// interface ComboboxProps {
//   options: {
//     label: string;
//     value: string;
//   }[];
//   value?: string;
//   onChange: (value: string) => void;
// }

// export const Combobox = ({
//   options,
//   value,
//   onChange,
// }: ComboboxProps) => {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <div className="relative w-full">
//       <button
//         type="button"
//         onClick={() => setOpen(!open)}
//         className="w-full border rounded-md p-2 text-left bg-white"
//       >
//         {value
//           ? options.find(
//               (option) =>
//                 option.value === value
//             )?.label
//           : "Select category"}
//       </button>

//       {open && (
//         <div className="absolute z-50 mt-2 w-full border rounded-md bg-white shadow-lg">
//           {options.map((option) => (
//             <button
//               key={option.value}
//               type="button"
//               className="block w-full text-left p-2 hover:bg-gray-100"
//               onClick={() => {
//                 onChange(option.value);
//                 setOpen(false);
//               }}
//             >
//               {option.label}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };



"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComboboxProps {
  options: {
    label: string;
    value: string;
  }[];
  value?: string;
  onChange: (value: string) => void;
}

export const Combobox = ({
  options,
  value,
  onChange,
}: ComboboxProps) => {
  const [open, setOpen] =
    React.useState(false);

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between"
        >
          {value
            ? options.find(
                (option) =>
                  option.value === value
              )?.label
            : "Select category"}

          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-[300px] p-0"
        align="start"
      >
        <Command>
          <CommandInput placeholder="Search..." />

          <CommandList>
            <CommandEmpty>
              No category found.
            </CommandEmpty>

            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value ===
                        option.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
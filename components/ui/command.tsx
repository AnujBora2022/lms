// "use client"

// import * as React from "react"
// import { Command as CommandPrimitive } from "cmdk"
// import { SearchIcon } from "lucide-react"

// import { cn } from "@/lib/utils"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"

// function Command({
//   className,
//   ...props
// }: React.ComponentProps<typeof CommandPrimitive>) {
//   return (
//     <CommandPrimitive
//       data-slot="command"
//       className={cn(
//         "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function CommandDialog({
//   title = "Command Palette",
//   description = "Search for a command to run...",
//   children,
//   className,
//   showCloseButton = true,
//   ...props
// }: React.ComponentProps<typeof Dialog> & {
//   title?: string
//   description?: string
//   className?: string
//   showCloseButton?: boolean
// }) {
//   return (
//     <Dialog {...props}>
//       <DialogHeader className="sr-only">
//         <DialogTitle>{title}</DialogTitle>
//         <DialogDescription>{description}</DialogDescription>
//       </DialogHeader>
//       <DialogContent
//         className={cn("overflow-hidden p-0", className)}
//         showCloseButton={showCloseButton}
//       >
//         <Command className="**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
//           {children}
//         </Command>
//       </DialogContent>
//     </Dialog>
//   )
// }

// function CommandInput({
//   className,
//   ...props
// }: React.ComponentProps<typeof CommandPrimitive.Input>) {
//   return (
//     <div
//       data-slot="command-input-wrapper"
//       className="flex h-9 items-center gap-2 border-b px-3"
//     >
//       <SearchIcon className="size-4 shrink-0 opacity-50" />
//       <CommandPrimitive.Input
//         data-slot="command-input"
//         className={cn(
//           "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
//           className
//         )}
//         {...props}
//       />
//     </div>
//   )
// }

// function CommandList({
//   className,
//   ...props
// }: React.ComponentProps<typeof CommandPrimitive.List>) {
//   return (
//     <CommandPrimitive.List
//       data-slot="command-list"
//       className={cn(
//         "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function CommandEmpty({
//   ...props
// }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
//   return (
//     <CommandPrimitive.Empty
//       data-slot="command-empty"
//       className="py-6 text-center text-sm"
//       {...props}
//     />
//   )
// }

// function CommandGroup({
//   className,
//   ...props
// }: React.ComponentProps<typeof CommandPrimitive.Group>) {
//   return (
//     <CommandPrimitive.Group
//       data-slot="command-group"
//       className={cn(
//         "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function CommandSeparator({
//   className,
//   ...props
// }: React.ComponentProps<typeof CommandPrimitive.Separator>) {
//   return (
//     <CommandPrimitive.Separator
//       data-slot="command-separator"
//       className={cn("-mx-1 h-px bg-border", className)}
//       {...props}
//     />
//   )
// }

// function CommandItem({
//   className,
//   ...props
// }: React.ComponentProps<typeof CommandPrimitive.Item>) {
//   return (
//     <CommandPrimitive.Item
//       data-slot="command-item"
//       className={cn(
//         "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function CommandShortcut({
//   className,
//   ...props
// }: React.ComponentProps<"span">) {
//   return (
//     <span
//       data-slot="command-shortcut"
//       className={cn(
//         "ml-auto text-xs tracking-widest text-muted-foreground",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// export {
//   Command,
//   CommandDialog,
//   CommandInput,
//   CommandList,
//   CommandEmpty,
//   CommandGroup,
//   CommandItem,
//   CommandShortcut,
//   CommandSeparator,
// }



// "use client";

// import * as React from "react";
// // import { Command as CommandPrimitive } from "cmdk";
// import * as CommandPrimitive from "cmdk";
// import { Search } from "lucide-react";

// import { cn } from "@/lib/utils";

// // const Command = React.forwardRef<
// //   React.ElementRef<typeof CommandPrimitive>,
// //   React.ComponentPropsWithoutRef<typeof CommandPrimitive>
// // >(({ className, ...props }, ref) => (
// //   <CommandPrimitive
// //     ref={ref}
// //     className={cn(
// //       "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-black",
// //       className
// //     )}
// //     {...props}
// //   />
// // ));

// const Command = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.Command>,
//   React.ComponentPropsWithoutRef<
//     typeof CommandPrimitive.Command
//   >
// >(({ className, ...props }, ref) => (
//   <CommandPrimitive.Command
//     ref={ref}
//     className={cn(
//       "flex h-full w-full flex-col overflow-hidden rounded-md bg-white",
//       className
//     )}
//     {...props}
//   />
// ));

// Command.displayName = CommandPrimitive.displayName;

// const CommandInput = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.Input>,
//   React.ComponentPropsWithoutRef<
//     typeof CommandPrimitive.Input
//   >
// >(({ className, ...props }, ref) => (
//   <div className="flex items-center border-b px-3">
//     <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />

//     <CommandPrimitive.Input
//       ref={ref}
//       className={cn(
//         "flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-gray-400",
//         className
//       )}
//       {...props}
//     />
//   </div>
// ));

// CommandInput.displayName =
//   CommandPrimitive.Input.displayName;

// const CommandList = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.List>,
//   React.ComponentPropsWithoutRef<
//     typeof CommandPrimitive.List
//   >
// >(({ className, ...props }, ref) => (
//   <CommandPrimitive.List
//     ref={ref}
//     className={cn(
//       "max-h-[300px] overflow-y-auto",
//       className
//     )}
//     {...props}
//   />
// ));

// Command.displayName = CommandPrimitive.displayName;

// const CommandEmpty = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.Empty>,
//   React.ComponentPropsWithoutRef<
//     typeof CommandPrimitive.Empty
//   >
// >((props, ref) => (
//   <CommandPrimitive.Empty
//     ref={ref}
//     className="py-6 text-center text-sm"
//     {...props}
//   />
// ));

// CommandEmpty.displayName =
//   CommandPrimitive.Empty.displayName;

// const CommandGroup = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.Group>,
//   React.ComponentPropsWithoutRef<
//     typeof CommandPrimitive.Group
//   >
// >(({ className, ...props }, ref) => (
//   <CommandPrimitive.Group
//     ref={ref}
//     className={cn("p-1", className)}
//     {...props}
//   />
// ));

// CommandGroup.displayName =
//   CommandPrimitive.Group.displayName;

// const CommandItem = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.Item>,
//   React.ComponentPropsWithoutRef<
//     typeof CommandPrimitive.Item
//   >
// >(({ className, ...props }, ref) => (
//   <CommandPrimitive.Item
//     ref={ref}
//     className={cn(
//       "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none hover:bg-gray-100 data-[selected=true]:bg-gray-100",
//       className
//     )}
//     {...props}
//   />
// ));

// CommandItem.displayName =
//   CommandPrimitive.Item.displayName;

// export {
//   Command,
//   CommandInput,
//   CommandList,
//   CommandEmpty,
//   CommandGroup,
//   CommandItem,
// };


// "use client";

// import * as React from "react";
// import {
//   Command as CommandPrimitive,
// } from "cmdk";
// import { Search } from "lucide-react";

// import { cn } from "@/lib/utils";

// const Command = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive>,
//   React.ComponentPropsWithoutRef<
//     typeof CommandPrimitive
//   >
// >(({ className, ...props }, ref) => (
//   <CommandPrimitive
//     ref={ref}
//     className={cn(
//       "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-black",
//       className
//     )}
//     {...props}
//   />
// ));

// Command.displayName = "Command";

// const CommandInput = ({
//   className,
//   ...props
// }: React.InputHTMLAttributes<HTMLInputElement>) => {
//   return (
//     <div className="flex items-center border-b px-3">
//       <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />

//       <input
//         className={cn(
//           "flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-gray-400",
//           className
//         )}
//         {...props}
//       />
//     </div>
//   );
// };

// const CommandList = ({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) => (
//   <div
//     className={cn(
//       "max-h-[300px] overflow-y-auto",
//       className
//     )}
//     {...props}
//   />
// );

// const CommandEmpty = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => (
//   <div className="py-6 text-center text-sm">
//     {children}
//   </div>
// );

// const CommandGroup = ({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) => (
//   <div
//     className={cn("p-1", className)}
//     {...props}
//   />
// );

// const CommandItem = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none hover:bg-gray-100",
//       className
//     )}
//     {...props}
//   />
// ));

// CommandItem.displayName = "CommandItem";

// export {
//   Command,
//   CommandInput,
//   CommandList,
//   CommandEmpty,
//   CommandGroup,
//   CommandItem,
// };




"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-black",
      className
    )}
    {...props}
  />
));

Command.displayName = "Command";

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />

    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-gray-400",
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = "CommandInput";

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "max-h-[300px] overflow-y-auto overflow-x-hidden",
      className
    )}
    {...props}
  />
));

CommandList.displayName = "CommandList";

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
));

CommandEmpty.displayName = "CommandEmpty";

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn("p-1", className)}
    {...props}
  />
));

CommandGroup.displayName = "CommandGroup";

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none hover:bg-gray-100 data-[selected=true]:bg-gray-100",
      className
    )}
    {...props}
  />
));

CommandItem.displayName = "CommandItem";

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
};
// "use client";

// import dynamic from "next/dynamic";

// import { useMemo } from "react";

// interface EditorProps{
//   onChange: (value: string) => void;
//   value: string;
// }

// export const Editor = ({
//   onChange,
//   value,
// }:EditorProps) => {
//   const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), {
//     ssr: false
//   }), []);

//   return(
//     <div className="bg-white">
//       <ReactQuill theme="snow" value={value} onChange={onChange} />
//     </div>
//   )
// }


// "use client";

// import dynamic from "next/dynamic";

// interface EditorProps {
//   onChange: (value: string) => void;
//   value: string;
// }

// const ReactQuill = dynamic(
//   async () => {
//     const { default: RQ } = await import("react-quill");
//     // eslint-disable-next-line react/display-name
//     return ({ forwardedRef, ...props }: any) => <RQ ref={forwardedRef} {...props} />;
//   },
//   { ssr: false }
// );

// export const Editor = ({ onChange, value }: EditorProps) => {
//   return (
//     <div className="bg-white">
//       <ReactQuill
//         theme="snow"
//         value={value}
//         onChange={onChange}
//         forwardedRef={null}
//       />
//     </div>
//   );
// };

// "use client";

// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";

// interface EditorProps {
//   onChange: (value: string) => void;
//   value: string;
// }

// export const Editor = ({ onChange, value }: EditorProps) => {
//   const editor = useEditor({
//      immediatelyRender: false, // 👈 add this
//     extensions: [StarterKit],
//     content: value,
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//   });

//   return (
//     <div className="bg-white border rounded-md">
//       <EditorContent editor={editor} />
//     </div>
//   );
// };

// "use client";

// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import { Bold, Italic, Strikethrough, List, ListOrdered, Heading2 } from "lucide-react";

// interface EditorProps {
//   onChange: (value: string) => void;
//   value: string;
// }

// const Toolbar = ({ editor }: { editor: any }) => {
//   if (!editor) return null;

//   return (
//     <div className="border border-input bg-transparent flex flex-wrap gap-1 p-1 rounded-t-md">
//       <button
//         type="button"
//         onClick={() => editor.chain().focus().toggleBold().run()}
//         className={`p-2 rounded hover:bg-slate-200 ${editor.isActive("bold") ? "bg-slate-200" : ""}`}
//       >
//         <Bold className="h-4 w-4" />
//       </button>
//       <button
//         type="button"
//         onClick={() => editor.chain().focus().toggleItalic().run()}
//         className={`p-2 rounded hover:bg-slate-200 ${editor.isActive("italic") ? "bg-slate-200" : ""}`}
//       >
//         <Italic className="h-4 w-4" />
//       </button>
//       <button
//         type="button"
//         onClick={() => editor.chain().focus().toggleStrike().run()}
//         className={`p-2 rounded hover:bg-slate-200 ${editor.isActive("strike") ? "bg-slate-200" : ""}`}
//       >
//         <Strikethrough className="h-4 w-4" />
//       </button>
//       <button
//         type="button"
//         onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//         className={`p-2 rounded hover:bg-slate-200 ${editor.isActive("heading", { level: 2 }) ? "bg-slate-200" : ""}`}
//       >
//         <Heading2 className="h-4 w-4" />
//       </button>
//       <button
//         type="button"
//         onClick={() => editor.chain().focus().toggleBulletList().run()}
//         className={`p-2 rounded hover:bg-slate-200 ${editor.isActive("bulletList") ? "bg-slate-200" : ""}`}
//       >
//         <List className="h-4 w-4" />
//       </button>
//       <button
//         type="button"
//         onClick={() => editor.chain().focus().toggleOrderedList().run()}
//         className={`p-2 rounded hover:bg-slate-200 ${editor.isActive("orderedList") ? "bg-slate-200" : ""}`}
//       >
//         <ListOrdered className="h-4 w-4" />
//       </button>
//     </div>
//   );
// };

// export const Editor = ({ onChange, value }: EditorProps) => {
//   const editor = useEditor({
//     immediatelyRender: false,
//     extensions: [StarterKit],
//     content: value,
//     editorProps: {
//       attributes: {
//         class: "min-h-[150px] p-3 focus:outline-none prose max-w-none",
//       },
//     },
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//   });

//   return (
//     <div className="bg-white border border-input rounded-md">
//       <Toolbar editor={editor} />
//       <EditorContent editor={editor} />
//     </div>
//   );
// };



"use client";

import dynamic from "next/dynamic";

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export const Editor = ({ onChange, value }: EditorProps) => {
  return (
    <div className="bg-white">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
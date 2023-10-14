import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Placeholder from "@tiptap/extension-placeholder";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { toast } from "sonner";

interface CustomWindow extends Window {
  create_note: HTMLDialogElement;
}

declare const window: CustomWindow;
export default function CreateNote({
  refetch,
}: {
  refetch: () => Promise<void>;
}) {
  const { userId } = useAuth();
  const [background, setBackground] = useState("bg-green");

  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "text-2xl h-full font-semibold text-[#000] leading-normal m-5 mx-auto focus:outline-none",
      },
    },
    extensions: [
      Document,
      Paragraph,
      Text,
      Placeholder.configure({
        placeholder: "What are you feeling...",
      }),
    ],
  });

  const handleSubmit = async () => {
    if (!editor?.getText()) return 0;

    try {
      await supabase.from("notes").insert({
        content: editor.getText(),
        color: background,
        user_id: userId as string,
      });

      editor.commands.clearContent(true);
      refetch();
      window.create_note.close();
    } catch (err) {
      editor?.commands.clearContent(true);
      window.create_note.close();
      return err;
    }
  };

  return (
    <>
      <dialog
        id="create_note"
        onClose={() =>
          toast.promise(handleSubmit(), {
            loading: "Loading",
            error: "An error occurred",
            success: "Memo created",
          })
        }
        className="backdrop-blur-sm modal modal-middle"
      >
        <div
          className={`modal-box p-0 ${background} flex flex-col w-[30rem] h-[30rem]`}
        >
          <div className="editor-section px-8 py-4 h-full">
            <EditorContent editor={editor} />
          </div>
          <div className="flex mt-auto px-0 w-full">
            {[
              "bg-green",
              "bg-yellow",
              "bg-orange",
              "bg-blue",
              "bg-purple",
              "bg-pink",
              "bg-red",
            ].map((bg) => (
              <button
                key={bg}
                onClick={() => setBackground(bg)}
                className={`btn btn-ghost border-0 w-auto flex-1 rounded-none mr-auto ${
                  background === bg && "border-t-4 border-primary"
                } ${bg} hover:${bg}-dark`}
              ></button>
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

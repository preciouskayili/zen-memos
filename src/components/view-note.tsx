import { TrashIcon } from "@iconicicons/react";
import { supabase } from "../lib/supabase";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "sonner";

type Note = {
  color: string;
  content: string;
  created_at: string;
  id: number;
  user_id: string;
};

interface CustomWindow extends Window {
  view_note: HTMLDialogElement;
}

declare const window: CustomWindow;

export default function ViewNote({
  activeMemo,
  refetch,
}: {
  activeMemo: Note | null;
  refetch: () => Promise<void>;
}) {
  const { userId } = useAuth();
  const handleDelete = async () => {
    if (activeMemo) {
      try {
        await supabase
          .from("notes")
          .delete()
          .eq("user_id", userId as string)
          .eq("id", activeMemo.id);

        refetch();
        window.view_note.close();
      } catch (err) {
        toast("Error");
      }
    }
  };
  return (
    <>
      <dialog id="view_note" className="modal backdrop-blur-sm">
        {activeMemo ? (
          <>
            <div
              className={`modal-box px-8 py-5 flex flex-col sm:w-[20rem] md:w-[30rem] h-[30rem] text-2xl ${activeMemo?.color}-dark font-semibold text-[#000] leading-normal m-5`}
            >
              <p>{activeMemo?.content}</p>
              <div className="flex mt-auto w-full">
                <button
                  onClick={() => handleDelete()}
                  className="btn text-[tomato] btn-white rounded-full w-full"
                >
                  <TrashIcon fill="#FF6347" />
                </button>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </>
        ) : null}
      </dialog>
    </>
  );
}

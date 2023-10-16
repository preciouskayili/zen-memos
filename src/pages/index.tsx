import Nav from "../components/ui/nav";
import Note from "../components/note";
import CreateNote from "../components/create-note";
import { useAuth } from "@clerk/clerk-react";
import ViewNote from "../components/view-note";
import EmptyState from "../components/empty-state";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import moment from "moment";

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

const Index = () => {
  const { userId } = useAuth();
  const [notes, setNotes] = useState<Note[] | null>(null);
  const [selectedMemo, setSelectedMemo] = useState<Note | null>(null);

  const getNotes = async () => {
    const { data } = await supabase
      .from("notes")
      .select()
      .eq("user_id", userId as string);

    setNotes(data);
  };

  const viewNote = (note: Note) => {
    setSelectedMemo(note);
    window.view_note.showModal();
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <CreateNote refetch={getNotes} />
      <div className="top-0 sticky">
        <Nav />
      </div>
      <ViewNote refetch={getNotes} activeMemo={selectedMemo} />
      <div className="flex flex-wrap">
        {notes?.length ? (
          <>
            {notes.map((note) => (
              <>
                <label
                  className={`w-full sm:w-6/12 md:6/12 lg:w-4/12 ${note.color} hover:${note.color}-dark flex flex-col h-[30rem] transition-all cursor-pointer p-10`}
                  onClick={() => viewNote(note)}
                >
                  <p className="text-2xl font-semibold text-[#000] leading-normal">
                    {note.content}
                  </p>
                  <div className="items-end mt-auto">
                    <p className="badge border-0 rounded-md bg-black/80 text-white text-xs">
                      {moment(note.created_at).fromNow()}
                    </p>
                  </div>
                </label>
              </>
            ))}
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default Index;

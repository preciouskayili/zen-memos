import Nav from "@/components/ui/nav";
import Note from "./note";
import CreateNote from "./create-note";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import ViewNote from "./view-note";
import EmptyState from "@/components/empty-state";

type Data = {
  id: string;
  content: string;
  color: string;
  author: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};

async function getNotes(): Promise<Data[]> {
  const { userId } = auth();

  if (!userId) {
    return [];
  }

  const data = await prisma.notes.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function Home() {
  const notes = await getNotes();
  return (
    <div>
      <CreateNote />
      <div className="top-0 sticky">
        <Nav />
      </div>
      <div className="flex flex-wrap">
        {notes.length ? (
          <>
            {notes.map((note) => (
              <>
                <ViewNote postId={note.id} />
                <Note
                  key={note.id}
                  id={note.id}
                  color={note.color}
                  content={note.content}
                  createdAt={note.createdAt}
                />
              </>
            ))}
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

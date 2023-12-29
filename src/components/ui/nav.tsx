import { PlusIcon, SearchIcon } from "@iconicicons/react";
import { UserButton } from "@clerk/clerk-react";

interface CustomWindow extends Window {
  create_note: HTMLDialogElement;
}

declare const window: CustomWindow;

export default function Nav() {
  return (
    <div className="navbar bg-white/80 backdrop-blur-lg">
      <div className="navbar-start">
        <a href="/" className="btn text-[#000] btn-ghost normal-case text-xl">
          zenmemos
        </a>
      </div>

      <div className="navbar-end space-x-2">
        <button
          onClick={() => window.create_note.showModal()}
          className="h-[34px] w-[34px] flex items-center justify-center rounded-full bg-black/10"
        >
          <PlusIcon />
        </button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

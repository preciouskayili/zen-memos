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
      <div className="navbar-center flex-grow">
        <div className="flex w-full sm:w-[30rem] h-12 normal-case rounded-xl bg-black/5 font-semibold text-sm">
          <span className="flex items-center justify-center ml-3">
            <SearchIcon />
            <input
              placeholder="Find your memos"
              className="
            input flex-grow bg-transparent focus:outline-none 
            placeholder:text-[#000] placeholder:font-normal placeholder:text-sm
          "
            />
          </span>
        </div>
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

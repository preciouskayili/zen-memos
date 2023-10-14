import { PlusIcon } from "@iconicicons/react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-dotted h-[30rem] w-[30rem]">
      <div>
        <PlusIcon />
      </div>
      <p>Create your first memo</p>
    </div>
  );
}

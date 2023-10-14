"use client";
import moment from "moment";

export default function Note({
  id,
  color,
  content,
  createdAt,
}: {
  id: string;
  color: string;
  content: string;
  createdAt: Date;
}) {
  return (
    <label
      className={`w-full sm:w-6/12 md:w-4/12 ${color} hover:${color}-dark flex flex-col h-[30rem] transition-all cursor-pointer p-10`}
      htmlFor={`${`view_note_${id}`}`}
    >
      <p className="text-2xl font-semibold text-[#000] leading-normal">
        {content}
      </p>
      <div className="items-end mt-auto">
        <p className="badge border-0 rounded-md bg-black/80 text-white text-xs">
          {moment(createdAt).fromNow()}
        </p>
      </div>
    </label>
  );
}

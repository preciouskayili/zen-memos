export default function EmptyState() {
  return (
    <div className="flex flex-col items-center cursor-pointer justify-center bg-purple-dark/10 sm:w-[20rem] md:w-[30rem] h-[30rem]">
      <div className="p-3 flex flex-col items-center justify-center h-full">
        <div className="rounded-full animate-bounce h-36 w-36 bg-red" />
        <h1 className="text-xl font-bold mt-5">
          You haven't written any memos
        </h1>
        <p className="text-sm text-gray-50">Click to get started</p>
      </div>
      <div className="flex mt-auto px-0 w-full backdrop-blur-md">
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
            className={`btn btn-ghost border-0 w-auto flex-1 rounded-none mr-auto ${bg}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

"use client";


export default function Error() {

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <p className="text-md">Something went wrong, but don&rsquo;t fret</p>
      <button
        onClick={() => window.location.reload()}
        className="btn btn-primary btn-sm mt-3 rounded-full w-fit"
      >
        Try again
      </button>
    </div>
  );
}

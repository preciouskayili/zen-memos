"use client";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 animate-spin icon icon-tabler icon-tabler-loader-2"
        width={44}
        height={44}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3a9 9 0 1 0 9 9" />
      </svg>
    </div>
  );
}

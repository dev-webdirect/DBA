"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold">Something went wrong</h1>

        <button
          onClick={() => reset()}
          className="rounded-lg bg-black px-5 py-2.5 text-sm text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

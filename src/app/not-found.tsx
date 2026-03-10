import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-6 text-neutral-500">
          The page you are looking for does not exist.
        </p>

        <Link href="/" className="rounded-lg bg-black px-5 py-2.5 text-sm text-white">
          Go back home
        </Link>
      </div>
    </div>
  );
}

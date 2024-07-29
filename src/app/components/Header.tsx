import Link from "next/link";

export default async function Header() {
  return (
    <div className="container flex items-center justify-between mx-auto my-4">
      <Link href={"/home"} className="font-bold text-xl">
        Job Board
      </Link>
      <nav className="flex gap-2">
        <Link
          className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4"
          href={"/"} //Todo : add the sign in url here
        >
          Login
        </Link>
        <Link
          className="rounded-md py-1 px-2 sm:py-2 sm:px-4 bg-blue-600 text-white"
          href={"/new-listing"} //:Todo add the url here to create a new job post
        >
          Post a job
        </Link>
      </nav>
    </div>
  );
}

"use client";
import Link from "next/link";
import { postName } from "@/app/actions";

export default function Index() {
  return (
    <div>
      <h1 className={"text-3xl mb-8"}>Home page</h1>
      <Link href={"/profile"}>Go to profile page</Link>

      <div className={"p-2 border bg-gray-200"}>
        <p className={"text-xs mb-2"}>
          This form submits using API route handlers
        </p>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.target as HTMLFormElement);
            const data = Object.fromEntries(formData.entries());

            // send data to server
            await fetch("/api", {
              method: "POST",
              body: JSON.stringify(data),
            });
          }}
        >
          <label htmlFor={"name"}>Name</label>
          <input type="text" id="name" name="name" required />
          <button className={"bg-green-500 p-2 rounded-md block mt-4"}>
            Submit
          </button>
        </form>
      </div>

      <div className={"p-2 border bg-gray-200 mt-8"}>
        <p className={"text-xs mb-2"}>
          This form submits using server actions (and blocks navigation)
        </p>
        <form action={postName}>
          <label htmlFor={"name"}>Name</label>
          <input type="text" id="name" name="name" required />
          <button className={"bg-red-500 p-2 rounded-md block mt-4"}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

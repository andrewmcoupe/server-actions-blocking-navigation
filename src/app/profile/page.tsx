import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <h1 className={"text-3xl mb-8"}>Profile page</h1>
      <Link href={"/"}>Go to homepage</Link>
    </div>
  );
}

import Link from "next/link";
import { FC } from "react";

interface NoContentProps {
  contentType: string;
}

export const NoContent: FC<NoContentProps> = ({ contentType }) => {
  return (
    <div className="mt-64 text-center">
      <h1 className="text-xl text-black dark:text-white ">
        Oh, it looks like you don't have any {contentType}.
      </h1>
      <Link href="/submission/create">
        <p className="mt-1 text-blue-500 underline">Create one</p>
      </Link>
    </div>
  );
};

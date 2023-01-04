import { FC, useContext, useState } from "react";
import Head from "next/head";
import { Sidebar } from "../ui/Sidebar";
import { tw } from "../../utils";
import { UIContext } from "../../context/ui";

interface Props {
  title: string;
  pageDescription: string;
  children: React.ReactNode;
}

export const HomeLayout: FC<Props> = ({ children, title, pageDescription }) => {
  const { darkMode } = useContext(UIContext);

  return (
    <div className={tw("h-full ", darkMode ? "dark" : "")}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <main className="flex bg-white dark:bg-slate-900">
        <Sidebar />
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};

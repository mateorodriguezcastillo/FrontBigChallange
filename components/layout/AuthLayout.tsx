import { FC, useContext } from "react";
import Head from "next/head";
import { tw } from "../../utils";
import { UIContext } from "../../context/ui";
import { DarkModeIcon, LightModeIcon } from "../icons/Icons";

interface HomeLayoutProps {
  title: string;
  pageDescription: string;
  children: React.ReactNode;
}

export const AuthLayout: FC<HomeLayoutProps> = ({
  title,
  pageDescription,
  children,
}) => {
  const { darkMode, activateDarkMode, deactivateDarkMode } =
    useContext(UIContext);

  return (
    <div className={tw("h-screen", { dark: darkMode })}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <main className="flex h-full">
        <div
          className="flex h-full w-full justify-end bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/images/auth-background.jpeg)",
          }}
        >
          <div className="h-full w-4/12 bg-gray-300 bg-opacity-60 dark:bg-black dark:bg-opacity-70">
            <div className="m-auto mt-20 flex h-3/5 w-9/12 flex-col justify-between">
              {children}
              <button
                id="theme-toggle"
                type="button"
                className="text-whte ml-auto mr-auto mb-6 h-14 w-14 rounded-lg p-2.5 text-sm hover:bg-gray-300 focus:outline-none dark:hover:bg-gray-700"
                onClick={darkMode ? deactivateDarkMode : activateDarkMode}
              >
                {darkMode ? (
                  <DarkModeIcon className="h-8 w-8 text-white" />
                ) : (
                  <LightModeIcon className="h-8 w-8 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

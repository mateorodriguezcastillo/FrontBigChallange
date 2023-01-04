import { useContext } from "react";
import { UIContext } from "../../context/ui";
import {
  HomeIcon,
  NewSubmissionIcon,
  DarkModeIcon,
  LightModeIcon,
} from "../icons";

export const Sidebar = () => {
  const { darkMode, activateDarkMode, deactivateDarkMode } =
    useContext(UIContext);

  const tabs = [
    {
      name: "Home",
      icon: <HomeIcon />,
      href: "/",
    },
    {
      name: "New Submission",
      icon: <NewSubmissionIcon />,
      href: "/submission/create",
    },
  ];

  return (
    <>
      <aside className="h-screen w-72" aria-label="Sidebar">
        <div className="h-full overflow-y-auto bg-gray-900 py-4 px-3 dark:border-r dark:border-slate-700 dark:bg-black ">
          <div className="mt-1 flex h-full flex-col justify-between">
            <ul className="space-y-2">
              {tabs.map((tab, index) => (
                <li key={tab.href}>
                  <a
                    href={tab.href}
                    className="flex items-center rounded-lg p-3 text-base font-normal text-white hover:bg-gray-700"
                  >
                    {tab.icon}
                    <span className="ml-3 flex-1 whitespace-nowrap text-sm">
                      {tab.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className=" flex w-full items-center justify-between">
              <div className="flex items-center justify-center space-x-2">
                <div>
                  <img
                    className="rounded-full"
                    src="https://i.ibb.co/L1LQtBm/Ellipse-1.png"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <p className="cursor-pointer text-sm leading-5 text-white">
                    Ronald Richards
                  </p>
                  <p className="cursor-pointer text-xs leading-3 text-gray-300">
                    Sign Out
                  </p>
                </div>
              </div>
              <button
                id="theme-toggle"
                type="button"
                className="text-whte rounded-lg p-2.5 text-sm hover:bg-gray-700 focus:outline-none"
                onClick={darkMode ? deactivateDarkMode : activateDarkMode}
              >
                {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

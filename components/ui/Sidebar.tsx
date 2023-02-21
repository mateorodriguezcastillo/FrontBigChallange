import { useContext } from "react";
import { useRouter } from "next/router";
import { UIContext } from "../../context/ui";
import { useAuthStore } from "../../src/store/auth";
import { logoutUser } from "../../services/SubmissionService";
import {
  HomeIcon,
  NewSubmissionIcon,
  DarkModeIcon,
  LightModeIcon,
  UserIcon,
} from "../icons";
import { useMutation } from "react-query";

const tabs = [
  {
    name: "Home",
    icon: <HomeIcon />,
    href: "/",
    restrictions: ["doctor", "patient"],
  },
  {
    name: "New Submission",
    icon: <NewSubmissionIcon />,
    href: "/submission/create",
    restrictions: ["patient"],
  },
];

export const Sidebar = () => {
  const { darkMode, activateDarkMode, deactivateDarkMode } =
    useContext(UIContext);

  const router = useRouter();
  const { user, setUser, setToken } = useAuthStore();

  const mutationLogout = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      setToken("");
      setUser(null);
      router.push("/auth/login");
    },
  });

  const handleLogout = () => {
    mutationLogout.mutate();
  };

  return (
    <>
      <aside className="h-screen w-72" aria-label="Sidebar">
        <div className="h-full overflow-y-auto bg-gray-900 py-4 px-3 dark:border-r dark:border-slate-700 dark:bg-black ">
          <div className="mt-1 flex h-full flex-col justify-between">
            {user && (
              <ul className="space-y-2">
                {tabs
                  .filter((tab) => tab.restrictions.includes(user.role_name))
                  .map((tab) => (
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
            )}
            <div className=" flex w-full items-center justify-between">
              <div className="flex items-center justify-center space-x-2">
                <div>
                  <UserIcon className="h-10 w-10" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  {user && (
                    <>
                      <p className="cursor-pointer text-sm leading-5 text-white">
                        {user.name}
                      </p>
                      <button type="button" onClick={handleLogout}>
                        <p className="cursor-pointer text-xs leading-3 text-gray-300">
                          Sign Out
                        </p>
                      </button>
                    </>
                  )}
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

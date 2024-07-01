import { UserCard } from "./components/UserCard";
import iconMoon from "./assets/img/icon/icon-moon.svg";
import iconSun from "./assets/img/icon/icon-sun.svg";
import iconSearch from "./assets/img/icon/icon-search.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState({});
  const [error, setError] = useState();

  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme") !== null) {
      return localStorage.getItem("theme");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    }
  });

  const handleChangeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  localStorage.setItem("theme", theme);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleUserSearch = async (event, userName) => {
    if (event) {
      event.preventDefault();
    }

    const key = import.meta.env.VITE_REACT_APP_GITHUB_API_KEY;

    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`,
        {
          headers: { Authorization: `Bearer ${key}`, 
        },
        },
      );
      setUserData(response.data);
      setUserName("");
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  useEffect(() => {
    handleUserSearch(null, "leididelapuente13");
  }, []);

  return (
    <div className="min-h-screen border-2 border-solid border-white-200 bg-white-200 font-mono text-github-300 dark:border-github-500 dark:bg-github-500 dark:text-white-100">
      <main className="mx-auto my-4 flex w-full max-w-xl flex-col justify-items-center px-3 py-4 lg:max-w-2xl">
        <header className="mb-5 flex flex-row items-center justify-between">
          <h2 className="text-3xl font-bold text-github-300 dark:text-white-100">
            devfinder
          </h2>
          <button
            className="font-bold uppercase text-github-300 dark:text-white-100"
            onClick={handleChangeTheme}
          >
            {theme === "light" ? "Dark" : "Light"}{" "}
            <img src={theme === "light" ? iconMoon : iconSun} />
          </button>
        </header>
        {error && (
          <div className="mb-2 flex justify-end text-xs text-red-600 dark:text-red-400">
            <p>User does not exist</p>
          </div>
        )}
        <form
          onSubmit={(e) => {
            handleUserSearch(e, userName);
          }}
          className="light-shadow dark:dark-shadow mb-4 flex gap-1 rounded-lg bg-white-100 px-3 py-2 dark:bg-github-400"
        >
          <img src={iconSearch} alt="" className="h-5 w-5 self-center" />
          <input
            type="text"
            value={userName}
            placeholder="Search GitHub username..."
            onChange={(e) => setUserName(e.target.value)}
            className="w-3/5 flex-grow text-lg text-github-300 outline-none placeholder:text-github-300 dark:bg-github-400 dark:text-white-100 dark:placeholder:text-white-100"
          />
          <button
            type="submit"
            className="h-10 min-w-fit rounded-lg bg-github-200 px-3 py-1 font-bold text-white-100 hover:bg-github-100"
          >
            Search
          </button>
        </form>
        <UserCard user={userData} />
      </main>
    </div>
  );
}
export default App;

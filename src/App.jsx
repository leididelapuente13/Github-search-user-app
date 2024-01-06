import { UserCard } from "./components/UserCard";
import iconMoon from "./assets/img/icon-moon.svg";
import iconSun from "./assets/img/icon-sun.svg";
import iconSearch from "./assets/img/icon-search.svg";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState("");
  const [error, setError] = useState();

  const user = {
    avatar_url:
      "https://i.pinimg.com/originals/88/f9/7b/88f97b667be99a794e956f8440ea60f2.jpg",
    name: "monalisa octocat",
    login: "octocat",
    created_at: "2009-04-25T19:38:52Z",
    bio: "There once was...",
    public_repos: 2,
    followers: 20,
    following: 0,
    location: "San Francisco",
    blog: "https://github.com/blog",
    twitter_username: "monatheoctocat",
    company: "GitHub",
  };

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const handleChangeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleUserSearch = async (event, userName) => {
    event.preventDefault();
    const key = import.meta.env.VITE_REACT_APP_GITHUB_API_KEY;
    try {
      const response = await axios.get(`https://api.github.com/users/${userName}`, {
        headers: { 'Authorization': `Bearer ${key}`},
      });
      setUserData(response.data); 
      setUserName("");
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  return (
    <div className="min-h-screen border-2 border-solid border-white-200 bg-white-200 font-mono text-github-300 dark:border-github-500 dark:bg-github-500 dark:text-white-100">
      <main className="mx-auto my-4 flex w-full max-w-xl flex-col justify-items-center px-3 py-4 lg:max-w-2xl">
        <header className="mb-5 flex flex-row items-center justify-between">
          <h2 className="text-3xl font-bold text-github-300 dark:text-white-100">
            devfinder
          </h2>
          {/* //TODO: add svg tags to change the color of the icons  */}
          <button
            className="font-bold uppercase text-github-300 dark:text-white-100"
            onClick={handleChangeTheme}
          >
            {theme === "light" ? "Dark" : "Light"}{" "}
            <img src={theme === "light" ? iconMoon : iconSun} />
          </button>
        </header>
        {error && <div className="text-red-600 mb-2 flex justify-end text-xs dark:text-red-400">
          <p>
            User does not exist
          </p>
        </div>}
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
        <UserCard user={userData === "" ? user : userData} />
      </main>
    </div>
  );
}
export default App;

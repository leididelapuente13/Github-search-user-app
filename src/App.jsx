import { UserCard } from "./components/UserCard";
import iconMoon from './assets/img/icon-moon.svg'
import iconSearch from './assets/img/icon-search.svg'
function App() {
	const user = {
		avatar_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKItrmteWSpbTNV6PLo7_Gbt6igSgwY-Mj2pPwSDbLYQ9Gi59Q",
		name: "monalisa octocat",
        login: "octocat",
        created_at: "1-30-2020",
        bio: "There once was...",
        public_repos: 2,
        followers: 20,
        following: 0,
        location: "San Francisco",
        blog: "https://github.com/blog",
        twitter_username: "monatheoctocat",
        company: "GitHub"
	}
	return (
		<main className="px-3 py-4  flex flex-col justify-items-center max-w-2xl w-11/12 my-4 mx-auto">
            <header className="flex flex-row justify-between items-center mb-5">
                <h2 className="text-github-300 text-3xl font-bold">devfinder</h2>
                <button className="text-github-300 uppercase">Light <img src={iconMoon}/></button>
            </header>
            <div className="bg-white-100 mb-4 px-3 py-2 flex gap-2 light-shadow rounded-lg">
                <img src={iconSearch} alt="" className="w-5 h-5 self-center"/>
                <input type="text" placeholder= "Search GitHub username..." className="flex-auto outline-none text-github-300 placeholder:text-github-300"/>
                <button type="button" className="bg-github-200 h-10 w-24 py-1 px-3 text-white-100 rounded-lg font-bold hover:bg-github-100">Search</button>
            </div>
			<UserCard user={user}/>
		</main>
	);
}
export default App;
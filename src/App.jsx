import { UserCard } from "./components/UserCard";

function App() {
	const user = {
		avatar_url: "https://github.com/images/error/octocat_happy.gif",
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
		<div>
			<UserCard user={user}/>
		</div>
	);
}
export default App;

import iconCompany from "../assets/img/icon-company.svg";
import iconLocation from "../assets/img/icon-location.svg";
import iconTwitter from "../assets/img/icon-twitter.svg";
import iconWebsite from "../assets/img/icon-website.svg";

import PropTypes from "prop-types";

export const UserCard = ({ user }) => {
  return (
    <div className="light-shadow rounded-xl bg-white-100 py-3 px-4">
      <div className="mb-2 flex items-center gap-2 py-1">
        <img
          src={user.avatar_url}
          alt="icon"
          className="w-2/12 max-w-16 rounded-full"
        />
        <div>
          <p className="text-lg font-semibold text-github-600">{user.name}</p>
          <p className="text-github-200">{user.login}</p>
          <p>{`Joined ${user.created_at}`}</p>
        </div>
      </div>
      <p className="my-2">{user.bio}</p>
      <div className="bg-white-200 grid grid-cols-3 place-items-center rounded-lg px-3 py-4 my-4">
        <p>Repositories</p>
        <p>Followers</p>
        <p>Following</p>
        <p className="text-github-600 font-bold">{user.public_repos}</p>
        <p className="text-github-600 font-bold">{user.followers}</p>
        <p className="text-github-600 font-bold">{user.following}</p>
      </div>
      <div className="leading-9">
        <p>
          <img src={iconLocation} alt="location icon" /> {user.location}
        </p>
        <a href={user.blog} target="_blank" rel="noreferrer">
          <img src={iconWebsite} alt="link icon" /> {user.blog}
        </a>
        <p>
          <img src={iconTwitter} alt="twitter icon" /> {user.twitter_username}
        </p>
        <p>
          <img src={iconCompany} alt="building icon" /> {user.company}
        </p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    bio: PropTypes.string,
    public_repos: PropTypes.number,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    blog: PropTypes.string,
    twitter_username: PropTypes.string,
    company: PropTypes.string,
  }),
};

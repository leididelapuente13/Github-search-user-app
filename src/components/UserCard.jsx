import moment from "moment";
import iconCompany from "../assets/img/icon/icon-company.svg";
import iconLocation from "../assets/img/icon/icon-location.svg";
import iconTwitter from "../assets/img/icon/icon-twitter.svg";
import iconWebsite from "../assets/img/icon/icon-website.svg";

import PropTypes from "prop-types";

export const UserCard = ({ user }) => {
  return (
    <div className="light-shadow rounded-xl bg-white-100 px-5 pt-4 pb-5 dark:bg-github-400 dark:dark-shadow">
      <div className="mb-2 flex items-center gap-6 py-1 lg:gap-x-8 lg:mb-0 lg">
        <img
          src={user.avatar_url}
          alt="icon"
          className="w-3/12 max-w-28 rounded-full"
        />
        <div className="w-full grid lg:grid-cols-2 lg:-mt-10 lg:mb-0">
          <div>
          <p className="text-lg font-semibold text-github-600 dark:text-white-100">{user.name ? user.name : "Not available"}</p>
          <p className="text-github-200">{user.login}</p>
          </div>
          <p className="lg:text-right lg:col-start-2 lg:row-start-1 border-black">{`Joined ${moment(user.created_at, "YYYY-MM-DDTHH:mm:ssZ").format("DD MMMM YYYY")}`}</p>
        </div>
      </div>
      <p className="my-2 lg:ml-36 lg:-mt-10 lg:mb-8 dark:text-gray-400">{user.bio ? user.bio : "This profile has no bio"}</p>
      <div className="w-full my-4 grid grid-cols-3 gap-x-1 place-items-center rounded-lg bg-white-200 px-3 py-4 lg:w-3/4 lg:ml-36 lg:mb-7 dark:bg-github-500">
        <p className="text-sm">Repos</p>
        <p className="text-sm">Followers</p>
        <p className="text-sm">Following</p>
        <p className="font-bold text-github-600 text-xl dark:text-white-100">{user.public_repos}</p>
        <p className="font-bold text-github-600 text-xl dark:text-white-100">{user.followers}</p>
        <p className="font-bold text-github-600 text-xl dark:text-white-100">{user.following}</p>
      </div>
      {/* //TODO: add svg tags to change the color of the icons  */}
      <div className="leading-9 flex flex-col md:flex-row md:gap-24 md:justify-center lg:ml-28
       lg:w-50 lg:gap-10 lg:pb-2">
        <div>
          <p>
            <img src={iconLocation} alt="location icon"/> {user.location ? user.location : "Not available"}
          </p>
          <a href={user.blog} target="_blank" rel="noreferrer">
            <img src={iconWebsite} alt="link icon" /> {user.blog ? user.blog : "Not available"}
          </a>
        </div>
        <div>
          <p >
            <img src={iconTwitter} alt="twitter icon" /> {user.twitter_username ? `@${user.twitter_username}` : "Not available"}
          </p>
          <p>
            <img src={iconCompany} alt="building icon" /> {user.company ? user.company : "Not available"}
          </p>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
    created_at: PropTypes.string,
    bio: PropTypes.string,
    public_repos: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
    location: PropTypes.string,
    blog: PropTypes.string,
    twitter_username: PropTypes.string,
    company: PropTypes.string,
  }),
};

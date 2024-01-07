import moment from "moment";
import iconCompany from "../assets/img/icon/icon-company.svg";
import iconLocation from "../assets/img/icon/icon-location.svg";
import iconTwitter from "../assets/img/icon/icon-twitter.svg";
import iconWebsite from "../assets/img/icon/icon-website.svg";

import PropTypes from "prop-types";

export const UserCard = ({ user }) => {
  return (
    <div className="light-shadow dark:dark-shadow rounded-xl bg-white-100 px-5 pb-5 pt-4 dark:bg-github-400">
      <div className="lg mb-2 flex items-center gap-6 py-1 lg:mb-0 lg:gap-x-8">
        <img
          src={user.avatar_url}
          alt="icon"
          className="w-3/12 max-w-28 rounded-full"
        />
        <div className="grid w-full lg:-mt-10 lg:mb-0 lg:grid-cols-2">
          <div>
            <p className="text-lg font-semibold text-github-600 dark:text-white-100">
              {user.name ? user.name : "Not available"}
            </p>
            <p className="text-github-200">{user.login}</p>
          </div>
          <p className="border-black lg:col-start-2 lg:row-start-1 lg:text-right">{`Joined ${moment(
            user.created_at,
            "YYYY-MM-DDTHH:mm:ssZ",
          ).format("DD MMMM YYYY")}`}</p>
        </div>
      </div>
      <p className="my-2 lg:-mt-10 lg:mb-8 lg:ml-36 dark:text-gray-400">
        {user.bio ? user.bio : "This profile has no bio"}
      </p>
      <div className="my-4 grid w-full grid-cols-3 place-items-center gap-x-1 rounded-lg bg-white-200 px-3 py-4 lg:mb-7 lg:ml-36 lg:w-3/4 dark:bg-github-500">
        <p className="text-sm">Repos</p>
        <p className="text-sm">Followers</p>
        <p className="text-sm">Following</p>
        <p className="text-xl font-bold text-github-600 dark:text-white-100">
          {user.public_repos}
        </p>
        <p className="text-xl font-bold text-github-600 dark:text-white-100">
          {user.followers}
        </p>
        <p className="text-xl font-bold text-github-600 dark:text-white-100">
          {user.following}
        </p>
      </div>
      {/* //TODO: add svg tags to change the color of the icons  */}
      <div
        className="lg:w-50 flex flex-col leading-9 md:flex-row md:justify-center md:gap-24
       lg:ml-28 lg:gap-10 lg:pb-2"
      >
        <div>
          <p>
            <img src={iconLocation} alt="location icon" />{" "}
            {user.location ? user.location : "Not available"}
          </p>
          <a href={user.blog} target="_blank" rel="noreferrer">
            <img src={iconWebsite} alt="link icon" />{" "}
            {user.blog ? user.blog : "Not available"}
          </a>
        </div>
        <div>
          <p>
            <img src={iconTwitter} alt="twitter icon" />{" "}
            {user.twitter_username
              ? `@${user.twitter_username}`
              : "Not available"}
          </p>
          <p>
            <img src={iconCompany} alt="building icon" />{" "}
            {user.company ? user.company : "Not available"}
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

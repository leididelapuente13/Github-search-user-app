import iconCompany from "../assets/img/icon-company.svg";
import iconLocation from "../assets/img/icon-location.svg";
import iconTwitter from "../assets/img/icon-twitter.svg";
import iconWebsite from "../assets/img/icon-website.svg";

import PropTypes from 'prop-types'; 

export const UserCard = ({ user }) => {
  return (
    <div>
      <div>
        <img src={user.avatar_url} alt="" />
        <div>
          <p>{user.name}</p>
          <p>{user.login}</p>
          <p>{`Joined ${user.created_at}`}</p>
        </div>
      </div>
      <p>{user.bio}</p>
      <div>
        <p>{user.public_repos}</p>
        <p>{user.followers}</p>
        <p>{user.following}</p>
      </div>
      <div>
        <p><img src={iconLocation} alt="location icon" />{user.location}</p>
        <a href={user.blog} target="_blank" rel="noreferrer"><img src={iconWebsite} alt="link icon" />{user.blog}</a>
        <p><img src={iconTwitter} alt="twitter icon" /> {user.twitter_username}</p>
        <p><img src={iconCompany} alt="building icon" /> {user.company}</p>
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
        company: PropTypes.string
    })
}

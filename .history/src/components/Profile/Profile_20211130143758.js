import PropTypes from 'prop-types';
import ProfileStyles from './Profile.module.css';

console.log(ProfileStyles);

export default function Profile({
  profileImg,
  profileName,
  profileTag,
  profileLoc,
  profileFoll,
  profileViews,
  profileLikes,
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={profileImg} alt="" className="" />
        <p className="name">{profileName}</p>
        <p className="tag">{profileTag}</p>
        <p className="location">{profileLoc}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{profileFoll}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{profileViews}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{profileLikes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

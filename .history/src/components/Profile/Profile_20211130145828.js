import PropTypes from 'prop-types';
import styles from './Profile.module.scss';

export default function Profile({
  profileImg,
  profileName,
  profileTag,
  profileLoc,
  profileFoll,
  profileViews,
  profileLikes,
}) {
  console.log(styles);

  return (
    <div className="profile">
      <div className="profile__description">
        <img src={profileImg} alt="" />
        <p className="profile__name">{profileName}</p>
        <p className="profile__tag">{profileTag}</p>
        <p className="profile__location">{profileLoc}</p>
      </div>

      <ul className="profile__stats">
        <li>
          <span className="profile__label">Followers</span>
          <span className="profile__quantity">{profileFoll}</span>
        </li>

        <li>
          <span className="profile__label">Views</span>
          <span className="profile__quantity">{profileViews}</span>
        </li>

        <li>
          <span className="profile__label">Likes</span>
          <span className="profile__quantity">{profileLikes}</span>
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
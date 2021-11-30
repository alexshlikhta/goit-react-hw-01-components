import PropTypes from 'prop-types';
import s from './Profile.module.scss';

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
    <div className={s.profile}>
      <div className={s.profile__description}>
        <img src={profileImg} alt="" />
        <p className={s.profile__name}>{profileName}</p>
        <p className={s.profile__tag}>{profileTag}</p>
        <p className={s.profile__location}>{profileLoc}</p>
      </div>

      <ul className={s.profile__stats}>
        <li>
          <span className={s.profile__label}>Followers</span>
          <span className={s.profile__label}>{profileFoll}</span>
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

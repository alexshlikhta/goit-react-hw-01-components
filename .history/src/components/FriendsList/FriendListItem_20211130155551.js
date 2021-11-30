import PropTypes from 'prop-types';
import s from './FriendList.module.scss';

export default function FriendList({ friends }) {
  return (
    <div className={s.friends}>
      <ul className="friend-list">
        {friends.map((item, index) => {
          return (
            <li key={index} className="item">
              <span className={item.isOnline ? 'green' : 'red'}></span>
              <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
              <p className="name">{item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

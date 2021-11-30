import PropTypes from 'prop-types';
import s from './FriendList.module.scss';
export default function FriendList({ friends }) {
  return (
    <div className={s.friends}>
      <ul className={s.friends__list}>
        {friends.map((item, index) => {
          return (
            <li key={index} className={s.friends__item}>
              <span className={`${s.friends__status} ${item.isOnline ?? 'red'}`}></span>
              <img className={s.friends__avatar} src={item.avatar} alt="User avatar" width="48" />
              <p className={s.friends__name}>{item.name}</p>
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

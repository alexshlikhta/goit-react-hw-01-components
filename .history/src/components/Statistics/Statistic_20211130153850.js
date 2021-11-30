import PropTypes from 'prop-types';
import s from './Statistic.module.css';

export default function Statistic({ stats }) {
  return (
    <div className={s.statistics}>
      <h2 className={s.statistics__title}>Upload stats</h2>

      <ul className={s.statistics__list}>
        {stats.map(item => {
          return (
            <li key={item.id} className={s.statistics__item}>
              <span className={s.statistics__label}>{item.label}</span>
              <span className={s.statistics__percentage}>{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Statistic.propTypes = {
  data: PropTypes.array,
};

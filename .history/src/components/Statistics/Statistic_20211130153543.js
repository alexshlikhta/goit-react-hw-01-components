import PropTypes from 'prop-types';
import Statistic from './Profile.module.css';

export default function Statistic({ stats }) {
  return (
    <div className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(item => {
          return (
            <li key={item.id} className="item">
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}</span>
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

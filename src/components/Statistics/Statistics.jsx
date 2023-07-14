import PropTypes from "prop-types";
import { StatisticSection } from './Statistics.styled';
import { getRandomColor } from '../../utils/getRandomColor';

export const Statistics = ({ title, stats }) => (

    <StatisticSection>
        {title && <h2>{title}</h2>}
        
        <ul className="stat-list">
            {stats.map(stat => (
                <li
                    className="item"
                    key={stat.id}
                    style={{ backgroundColor: getRandomColor() }}
                >
                    <span className="label">{ stat.label }</span>
                    <span className="percentage">{ stat.percentage }%</span>
                </li>
            ))}
        </ul>

    </StatisticSection>
);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired
};
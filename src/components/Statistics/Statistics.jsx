import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => (

    <section>
        {title ?? <h2>{title}</h2>}
        
        <ul className="stat-list">
            {stats.map(stat => (
                <li className="item" key={stat.id}>
                    <span className="label">{ stat.label }</span>
                    <span className="percentage">{ stat.percentage }%</span>
                </li>
            ))}
        </ul>

    </section>
);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arreyOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired
};
import PropTypes from 'prop-types';
import { TransactionBlock } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => (
    <TransactionBlock>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(trns => (
                <tr key={trns.id}>
                    <td>{trns.type}</td>
                    <td>{trns.amount}</td>
                    <td>{trns.currency}</td>
                </tr>
            ))}           
        </tbody>
    </TransactionBlock>
);

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired
};
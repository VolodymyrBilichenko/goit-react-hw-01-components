import PropTypes from 'prop-types';
import { getRandomColor } from '../../utils/getRandomColor';
import { online, offline } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (

    <li className="item" style={{ backgroundColor: getRandomColor() }}>
        <span className={`status ${ isOnline ? online : offline}`}></span>
        <img className="avatar" src={ avatar } alt="User avatar" width="48" />
        <p className="name">{ name }</p>
    </li>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
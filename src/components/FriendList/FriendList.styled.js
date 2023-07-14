import { styled } from 'styled-components';

export const online = 'online';
export const offline = 'offline';

export const FriendSection = styled.ul`
    padding: 0;
    margin: 100px 0;
    list-style-type: none;
    width: 100%;

    .item{
        display: flex;
        align-items: center;
        gap: 30px;
        margin: 0 auto;
        margin-bottom: 25px;
        padding: 20px;
        padding-right: 40px;
        border-radius: 15px;
        max-width: 300px;
        justify-content: center;

        &:last-child{
            margin-bottom: 0;
        }

        .name{
            font-size: 15px;
            font-weight: 600;
            color: #f5f5f5;
        }

        .status{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: auto;
        }

        .online{
            background-color: green;
        }
        .offline{
            background-color: red;
        }
    }
`
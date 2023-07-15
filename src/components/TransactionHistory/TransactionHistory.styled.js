import { styled } from 'styled-components';

export const TransactionBlock = styled.table`
    width: 100%;
    max-width: 600px;
    text-align: center;
    background-color: #582a45;
    padding: 30px 20px;
    border-radius: 15px;
    font-weight: 600;

    th{
        padding: 15px;
        font-size: 25px;
        color: #f5f5f5;
    }

    td{
        border: 2px solid #000;
        font-size: 20px;
        color: #f5f5f5;
        opacity: 0.5;
    }
`
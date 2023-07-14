import { styled } from 'styled-components'

export const StatisticSection = styled.section`
    font-family: 'Monserat';
    width: 100%;
    max-width: 1200px;
    h2{
        font-size: 35px;
        color: #00a1bf;
        text-align: center;
    }
    .stat-list{
        display: flex;
        width: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        padding: 35px;
        background-color: #00a1bf;
        border-radius: 15px;
        justify-content: space-between;

        .item{
            padding: 25px 75px;
            border-radius: 15px;
            color: #f5f5f5;
            font-weight: 600;
            font-size: 25px;
            display: flex;
            flex-direction: column;

            .percentage{
                margin-top: 10px;
            }
        }
    }
`  
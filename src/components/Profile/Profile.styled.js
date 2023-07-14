import { styled } from 'styled-components'

export const ProfileCard = styled.div`
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    background-color: #DCDCDC;
    box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    text-align: center;
    font-family: "Montserrat";
    font-weight: 600;
    padding: 30px;
    .avatar{
        width: 100%;
        max-width: 150px;
        border: 10px solid #DCDCDC;
        border-radius: 50%;
        margin-top: -90px;
        background-color: #FFF0F5;
    }
    .name{ 
        font-size: 35px;
        margin-bottom: 12px;
        color: #742da6;
    }
    .tag{
        margin-bottom: 12px;
        font-size: 20px;
        color: #934752;
    }
    .location{
        font-size: 20px;
        margin-bottom: 12px;
        color: #742da6;
    }

    .stats{
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        padding: 0;
        width: 100%;

        li{
            display: flex;
            flex-direction: column;

            .label{
                font-size: 20px;
                color: #934752;
                margin-bottom: 10px;
            }
            .quantity{
                font-size: 20px;
                color: #742da6;
            }
        }
    }
`

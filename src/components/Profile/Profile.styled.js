import { styled } from 'styled-components'

export const ProfileCard = styled.div`
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    background-color: #DCDCDC;
    box-shadow: 0 2px 6px -2px rgba(0,0,0,0.26);
    border-radius: 10px;
    .avatar{
        width: 100%;
        max-width: 150px;
        border: 10px solid #DCDCDC;
        border-radius: 50%;
        margin-top: -70px;
        background-color: #FFF0F5;
    }
    .name{
        font-size: ("Montserrat",24px,3px,400,30px); 
        margin-bottom: 12px;
    }
`

import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
    margin: -60px 10px 0 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

`

export const MountArea = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    width: 260px;
    justify-content: center;
`

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25;
    cursor: pointer;
`

export const MonthTitle = styled.div`
    text-align: center;
`

export const ResumeArea = styled.div`
    gap: 30px;
    display: flex;

    
    @media screen and (max-width: 350px){
        flex-direction: column;
        gap: 0;
    }
`
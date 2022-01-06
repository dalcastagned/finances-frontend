import styled from "styled-components";

export const Container = styled.div`
    width: 240px;
`

export const ContainerTop = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    background-color: ${props => props.color};
    border: none;
    border-radius: 10px 10px 0 0;
    padding: 10px;

    button {
        position: absolute;
        right: 10px;
        border: none;
        background-color: transparent;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }

    p {
        color: #fff;
    }
`

export const ContainerInfo = styled.div`
    border: 2px solid ${props => props.color};
    border-radius: 0 0 10px 10px;
`

export const Date = styled.p`
    padding: 10px 10px 5px 10px;
`

export const Value = styled.p`
    padding: 5px 10px 10px 10px;

    span {
        color: ${props => props.color};
        font-weight: bold;
    }
`

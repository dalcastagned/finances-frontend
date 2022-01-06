import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 20px;
`

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #666;
    margin-bottom: 5px;
`

export const Info = styled.div`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#000'};
`

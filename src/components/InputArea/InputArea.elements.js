import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 10px 0 10px;
`;

export const ContainerInputs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 680px){
        grid-template-columns: 1fr 1fr;
    }

    
    @media screen and (max-width: 380px){
        grid-template-columns: 1fr;
    }
`;

export const InputLabel = styled.label`
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
export const ButtonLabel = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;
export const Button = styled.button`
    width: 200px;
    height: 30px;
    padding: 0 5px;
    border: none;
    border-radius: 5px;
    background-color: #006db2;
    color: #fff;
    cursor: pointer;
`;

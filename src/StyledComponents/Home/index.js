import styled from 'styled-components';

export const MainContainer = styled.div`     
    height: 100vh;
    margin: 0;
    padding: 0;
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    input{
        width: 300px;
        height: 30px;
        outline: none;
        border: solid 1px #000;
        font-size: 20px;
        padding: 10px
    }
    button{
        height: auto;
        border: solid 1px #f00;
        outline: none;
    }
`

export const FormBook = styled.form`  
    display: flex;    
`
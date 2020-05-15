import styled from 'styled-components'

export const BookContainer = styled.div`
    width: 450px;
    height: 300px;
    border: solid 1px #cbf3f0;    
    background: #cbf3f0;
    margin-bottom: 10px;
    padding: 10px;
    
    span{
        font-size: 18px;
        color: #4682b4
    }
`

export const Book = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;

    img{
        margin-top: 20px;
        max-width: max-content;
    }
`
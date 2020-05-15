import React, {useState} from 'react'
import {BooksContainer, MainContainer, FormContainer, FormBook} from '../../StyledComponents/Home/index'

import axios from 'axios'
import token from '../../environment/token'

const Header = () => {

    const [search, setSearch] = useState('')
    const [results, setResult] = useState(null)
    const [warning, setWarning] = useState(false)

    const getBooks = () => {    
        if(!!search){
        setWarning(false)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=`+token)
        .then(({data}) => {      
            setResult(data.items)
            console.log(data.items)
        })}else{
            setWarning(true)
        }
    }

    const handleInput = e =>{
        let {value} = e.target
        setSearch(value)               
    }

    return(
        <>
            <div>
                <h1>Bookz</h1>

                <FormBook onChange={handleInput}>
                <input onChange={handleInput} name="search" type="text" value={search} placeholder="Find"/>
                <button onClick={getBooks} type="button">Find</button>
                </FormBook>
            </div>
        </>
    )
}

export default Header
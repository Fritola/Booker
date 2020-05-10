import React, {useState, useEffect} from 'react';
import axios from 'axios'
import token from './environment/token'
import {MainContainer, FormContainer, FormBook} from './StyledComponents/Home/index'

function App() {

  const [search, setSearch] = useState('')

  const getBooks = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=`+token)
    .then(({data}) => {
      console.log(data.items)
    })
  }

  const handleInput = e =>{
    let {value} = e.target
    setSearch(value)               
  }
  
  return (
    <MainContainer>    
      <FormContainer>
        <FormBook onChange={handleInput}>
          <input onChange={handleInput} name="search" type="text" value={search} placeholder="Find"/>
          <button onClick={getBooks} type="button">Find</button>
        </FormBook>
      </FormContainer>

    </MainContainer>
  );
}

export default App;

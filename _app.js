import React, {useState, useEffect} from 'react';
import axios from 'axios'
import token from './environment/token'
import {BooksContainer, MainContainer, FormContainer, FormBook} from './StyledComponents/Home/index'

// import Header from './Components/Header/index.js'
import BookCard from './Components/BookCard'

function App() {

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
  
  return (    
    <MainContainer>    
      {/* <Header /> */}
      <FormContainer>
        {warning && <p>Missing something</p>}
        <FormBook onChange={handleInput}>
          <input onChange={handleInput} name="search" type="text" value={search} placeholder="Find"/>
          <button onClick={getBooks} type="button">Find</button>
        </FormBook>
      </FormContainer>

      <BooksContainer>
      {results && 
        results.map((result, i) =>                   
              <BookCard info={result}/>     
          )}
        </BooksContainer>

    </MainContainer>
  );
}

export default App;

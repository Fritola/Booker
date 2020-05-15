import React from 'react'
import {BookContainer, Book} from '../../StyledComponents/BookCard/index'

const BookCard = ({info}) => {
    const title = info.volumeInfo.title
    const image = info.volumeInfo.imageLinks.thumbnail
    // const desc = info.searchInfo.textSnippet
    console.log(info)
    
    return (
        <BookContainer>
            <Book>
                <span>{title}</span>

                <div>
                    {/* {desc !== undefined && <span>{desc}</span>} */}
                    <img src={image} alt=""/>
                </div>
            </Book>
        </BookContainer>
    )
}

export default BookCard
import React,{useState, useReducer} from 'react'
import books from '~/src/books'
import SimilarBookCard from './SimilarBookCard'
import settings from '~/src/config/settings'


const SimilarBookList = ({similarBooks}) => {

  const visibleBooksInit = similarBooks.slice(0, settings.visibleSimilarBooksCount);
  const hiddenBooksInit = similarBooks.slice(settings.visibleSimilarBooksCount, similarBooks.length);
  const [hiddenBooks, setHiddenBooks] = useState(hiddenBooksInit);
  const [visibleBooks, setVisibleBooks] = useState(visibleBooksInit);
  
 
  const changeSimilarBooks = (currentId) => {
    let newVisibleBooks = visibleBooks.filter(book => book.id != currentId); 
    if (hiddenBooks.length > 0)
    {
      let newHiddenBooks = [...hiddenBooks]
        newVisibleBooks.push(newHiddenBooks.pop())
        setHiddenBooks(newHiddenBooks)
    }
    setVisibleBooks(newVisibleBooks);  
  }

  return (   
    visibleBooks.map((book) => (
    <div key={book.id}>
      <SimilarBookCard  book={book} changeSimilarBooks={() => changeSimilarBooks(book.id)}/>
    </div>
    )));
}  

export default SimilarBookList

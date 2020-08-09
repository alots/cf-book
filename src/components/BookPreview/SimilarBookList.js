import React,{useState, useCallback} from 'react'
import SimilarBookCard from './SimilarBookCard'
import settings from '~/src/config/settings'


const SimilarBookList = ({similarBooks}) => {
  const visibleBooksInit = similarBooks.slice(0, settings.visibleSimilarBooksCount);
  const hiddenBooksInit = similarBooks.slice(settings.visibleSimilarBooksCount, similarBooks.length);
  const [state, setState] = useState({
    visibleBooks: visibleBooksInit,
    hiddenBooks: hiddenBooksInit
  });
  
  const changeSimilarBooks = useCallback((currentId) => {
    setState((prevState) => {
      let newState = {};
      newState.visibleBooks = prevState.visibleBooks.filter(book => book.id != currentId);
      newState.hiddenBooks = [];

      if (prevState.hiddenBooks.length > 0)
        {
          newState.hiddenBooks = [...prevState.hiddenBooks]
          newState.visibleBooks.push(newState.hiddenBooks.pop())
        }
      return newState
      })
  },[]);

  return (   
    state.visibleBooks.map((book) => (
      <SimilarBookCard key={book.id}  book={book} changeSimilarBooks={changeSimilarBooks}/>

    )));
}  

export default SimilarBookList

import React,{useEffect,useState} from "react";
import BookPreviewContainer from "../BookPreview/BookPreviewContainer";

const superagent = require('superagent');

const BookPreviewPage = () => {
  const [records, setRecords] = useState(null);
  useEffect(() => {
    superagent
      .get('https://run.mocky.io/v3/e08716ee-87d0-4ae1-a6b3-9d57d1e580c0')
      .then(res => {
        let newRecords = res.body[0];
        setRecords(newRecords);
      })
  },[]);
   
  return (
    <>
    {
      records ?
      <BookPreviewContainer book={records} />
      : <div style={ {"color": "white"}}> Loading... </div>
    }
    </>
  );
};

export default BookPreviewPage;

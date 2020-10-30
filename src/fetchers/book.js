import api from "../config/api";

const superagent = require("superagent");
const bookAdapter = {
  transformAllBooks: (rawBooks) => {
    return {
      id: rawBooks.id,
      cover: rawBooks.fields.cover,
      title: rawBooks.fields.tittle,
    };
  },
  transformBook: (rawBook) => {
    return {
      id: rawBook.book_id,
      cover: rawBook.cover,
      description: rawBook.description,
      minPrice: rawBook.minPrice,
      progressInPercent: rawBook.progressInPercent,
      shortDescription: rawBook.shortDescription,
      title: rawBook.tittle,
      suggestedPrice: rawBook.suggestedPrice,
    };
  },
  transformAuthor: (rawAuthor) => {
    return {
      id: rawAuthor.id,
      name: rawAuthor.name,
      email: rawAuthor.email,
      avatar: rawAuthor.avatar,
      authorInformation: rawAuthor.authorInformation,
    };
  },
  transformSimilarBook: (rawBook) => {
    return {
      id: rawBook.book_id,
      title: rawBook.tittle,
      cover: rawBook.cover,
    };
  },
};

export const fetchBook = async (id) => {
  const bookResponse = await superagent.get(api.book(id));

  const authorIds = bookResponse.body.fields.authors;
  const authorRequests = authorIds.map((id) => superagent.get(api.author(id)));

  const similarBookIds = bookResponse.body.fields.similarBooks;
  const similarBookRequests = similarBookIds.map((id) =>
    superagent.get(api.author(id))
  );

  const authorResponses = await Promise.all(authorRequests);
  const similarBookResponses = await Promise.all(similarBookRequests);

  const book = bookAdapter.transformBook(bookResponse.body.fields);

  const authors = authorResponses.map((resp) => {
    return bookAdapter.transformAuthor(resp.body.fields);
  });

  const similarBooks = similarBookResponses.map((resp) => {
    return bookAdapter.transformSimilarBook(resp.body.fields);
  });

  return {
    ...book,
    authors,
    similarBooks,
  };
};

export const fetchAllBooks = async () => {
  const bookResponse = await superagent.get(api.books());
  const books = bookResponse.body.records.map((book) =>
    bookAdapter.transformAllBooks(book)
  );

  return [...books];
};

const basePath = "https://api.airtable.com/v0/appqaPL3oJGcygSpA";
const apiKey = "keyLHl1eyjepFd4wi";

const api = {
  book: (id) => `${basePath}/books/${id}?api_key=${apiKey}`,
  author: (id) => `${basePath}/authors/${id}?api_key=${apiKey}`,
  books: () => `${basePath}/books?api_key=${apiKey}`,
};

export default api;

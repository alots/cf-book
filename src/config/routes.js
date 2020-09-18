export const routes = {
  booksList: "/books",
  bookPreview: "/books/:id",
  userQuestion: "/user-question",
};

export const linkUrl = (path, pathParams) => {
  let url = path;
  if (pathParams) {
    Object.keys(pathParams).forEach((param) => {
      url = url.replace(`:${param}`, pathParams[param]);
    });
  }

  return url;
};

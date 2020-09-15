const routes = {
  booksList: "/books",
  bookPreview: "/books/:id",
  userQuestion: "/user-question",
  linkUrl: (path, pathParams) => {
    let url = path;
    if (pathParams) {
      Object.keys(pathParams).forEach((param) => {
        url = url.replace(`:${param}`, pathParams[param]);
      });
    }

    return url;
  },
};
export default routes;

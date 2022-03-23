import React, { createContext, useState, useContext } from "react";

export const BOOK_CONTEXT = createContext();

export const useApi = () => {
  return useContext(BOOK_CONTEXT);
};

const BOOKPROVIDER = ({ children }) => {
  const [book, setBook] = useState([]);
  const [bookFlag, setBookFlag] = useState(false);
  const [selectedBook, setSelectedBook] = useState({
    title: "",
    author: "",
    status: "Available"
  });

  return (
    <BOOK_CONTEXT.Provider
      value={{
        name: "Saif",
        book,
        setBook,
        setSelectedBook: setSelectedBook,
        selectedBook: selectedBook,
        bookFlag,
        setBookFlag
      }}
    >
      {children}
    </BOOK_CONTEXT.Provider>
  );
};

export default BOOKPROVIDER;

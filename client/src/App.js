import "./App.css";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import Header from "./components/Header";
import { useEffect } from "react";
import axios from "axios";
import { useApi } from "./contextApi";

function App() {
  const { setBook } = useApi();

  useEffect(() => {
    axios
      .get("https://booklistnodejsapi.herokuapp.com/api/v1/books")
      .then((data) => setBook(data.data.book))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <BookForm />
      <BookTable />
    </>
  );
}

export default App;

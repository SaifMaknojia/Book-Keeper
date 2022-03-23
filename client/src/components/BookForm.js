import React from "react";
import { Form, InputGroup, Container, Button } from "react-bootstrap";
import { useApi } from "../contextApi";
import axios from "axios";
const BookForm = () => {
  const {
    book,
    setBook,
    selectedBook,
    setSelectedBook,
    setBookFlag,
    bookFlag
  } = useApi();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedBook({ ...selectedBook, [name]: value });
  };

  const setBookToDefault = () => {
    setSelectedBook({
      title: "",
      author: "",
      status: "Available"
    });
  };

  const handleAdd = () => {
    axios
      .post("https://booklistnodejsapi.herokuapp.com/api/v1/books", {
        title: selectedBook.title,
        author: selectedBook.author,
        status: selectedBook.status
      })
      .then((data) => {
        setBook([...book, data.data.book]);
        setBookToDefault();
      })
      .catch(function (error) {
        alert("there is an empty input", error);
      });
  };

  const handleUpdate = () => {
    setBookFlag(false);
    axios
      .patch(
        `https://booklistnodejsapi.herokuapp.com/api/v1/books/${selectedBook._id}`,
        {
          title: selectedBook.title,
          author: selectedBook.author,
          status: selectedBook.status
        }
      )
      .then((data) => {
        setBook(
          book.map((b) => {
            if (b._id === selectedBook._id) {
              return {
                ...b,
                title: selectedBook.title,
                author: selectedBook.author,
                status: selectedBook.status
              };
            }
            return b;
          })
        );
        setBookToDefault();
      });
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Form onSubmit={(e) => e.preventDefault()} className="width-400">
        <Form.Group className="mt-1">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="text-capitalize"
            onChange={handleChange}
            value={selectedBook.title}
            type="text"
            name="title"
            placeholder="Book Title"
          />
        </Form.Group>
        <Form.Group className="mt-1">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            className="text-capitalize"
            name="author"
            type="text"
            placeholder="Author"
            onChange={handleChange}
            value={selectedBook.author}
          />
        </Form.Group>
        <InputGroup className="my-3 d-flex justify-content-between align-items-center width-400">
          <Button
            // onChange={(e) => setStatus(e.target.value)}
            onClick={handleChange}
            name="status"
            className="width-197"
            variant="danger"
            value="Available"
          >
            Available
          </Button>
          <Button
            // onChange={(e) => setStatus(e.target.value)}
            onClick={handleChange}
            type="submit"
            name="status"
            value="Not Available"
            className="width-197"
            variant="success"
          >
            Not Available
          </Button>
        </InputGroup>
        {bookFlag ? (
          <Button onClick={handleUpdate} className="width-400">
            Update
          </Button>
        ) : (
          <Button onClick={handleAdd} className="width-400">
            Add
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default BookForm;

import React from "react";
import { Table, Container } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { useApi } from "../contextApi";

const BookTable = () => {
  const { book, setBook, setSelectedBook, setBookFlag } = useApi();

  const handleDelete = (data) => {
    const updatedArray = book.filter((book) => book._id !== data._id);
    axios
      .delete(
        `https://booklistnodejsapi.herokuapp.com/api/v1/books/${data._id}`
      )
      .then(() => setBook(updatedArray));
  };

  const handleEdit = (data) => {
    setBookFlag(true);
    setSelectedBook({
      author: data.author,
      title: data.title,
      status: data.status,
      _id: data._id
    });
  };

  return (
    <>
      {book.length > 0 && (
        <Container className="d-flex justify-content-center align-item-center my-5">
          <Table style={{ border: "none", width: "800px" }}>
            <thead className="border border-top-1 border-dark-2">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="border border-1">
              {book.map((info, index) => (
                <tr key={info._id} className="border border-1">
                  <td>{index + 1}</td>
                  <td className="text-capitalize">{info.title}</td>
                  <td className="text-capitalize">{info.author}</td>
                  <td className="text-capitalize">{info.status}</td>
                  <td className="d-flex justify-content-evenly align-items-center border-0">
                    <FiEdit
                      onClick={() => handleEdit(info)}
                      cursor={"pointer"}
                      size={22}
                      color="grey"
                    />
                    <MdDeleteOutline
                      onClick={() => handleDelete(info)}
                      cursor={"pointer"}
                      size={27}
                      color="red"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};

export default BookTable;

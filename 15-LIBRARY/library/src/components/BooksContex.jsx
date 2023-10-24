import React, { createContext, useState, useEffect } from "react";
// import Library from "../../Datas/db";
import axios from "axios";

export const BooksContex = createContext();

const BooksContextProvider = (props) => {
  const [author, setAuthor] = useState("");
  const [country, setCountry] = useState("");
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [bookLink, setBookLink] = useState("");
  const [pages, setPages] = useState("");
  const [year, setYear] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [books, setBooks] = useState([]);
  const [Library, setLibrary] = useState([]);
  const [idLibrary, setIdLibrary] = useState();
  const [idBooks, setIdBooks] = useState();
  const [isLoad,setIsLoad]=useState(false)


  const [control, setControl] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Library")
      .then((response) => {
        setLibrary(response.data);
        setControl(!Find("Library", title));
      })
      .catch((error) => {
        console.error("Veri Alınamadı:", error);
      });
      axios
      .get("http://localhost:3000/myBooks")
      .then((response) => {
        setBooks(response.data);
        setControl(!Find("Library", title));
      })
      .catch((error) => {
        console.error("Veri Alınamadı:", error);
      });
    console.log(isLoad)
  }, [isLoad]);

  const Find = (getData, title) => {
    if (getData === "Library") {
      const result = Library.filter((book) => {
        return title === book.title;
      });
      return result;
    } else {
      const result = books.find((book) => title === book.title);
      const isBookFound = !!result;
      return isBookFound;
    }
  };

  const deleteBook = () => {
    const bookToDelete = books.find((book) => title === book.title);
    console.log("delete book çalışıyor  ");
    if (title.length > 0) {
      if (bookToDelete) {
        const { id } = bookToDelete;
        axios
          .delete(`http://localhost:3000/myBooks/${id}`)
          .then(function (response) {
            console.log("Kitap başarıyla silindi:", response);
            // Kitap başarıyla silindiğinde yapılacak işlemler buraya eklenebilir
          })
          .catch(function (error) {
            console.error("Kitap silinirken hata oluştu:", error);
            alert("Bu kitap , kitap lisetenizde bulunmuyor");
          });
      }
    } else {
      alert("Lütfen silmek istediğiniz kitabı giriniz");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/myBooks")
      .then((response) => {
        setBooks(response.data);
        setControl(!Find("", title)); //eğer listede kitabı bulduysa false olcak  olmadıysa da true
      })
      .catch((error) => {
        console.error("Veri Alınamadı:", error);
      });
  }, [title, control]);

  const handleSelect = (searchKey) => {
    setTitle(searchKey);
    console.log(searchKey);
    const x = Library.filter((book) => {
      const result = book.title === searchKey;
      return result;
    });
    const y = books.filter((book) => {
      const result = book.title === searchKey;
      return result;
    });
    setIdLibrary(x[0].id)
    setIdBooks(y[0].id)

  };

  const handlePost = () => {
    if (title.length > 0) {
      if (control) {
        axios
          .post("http://localhost:3000/myBooks", {
            author,
            country,
            imageLink,
            language,
            bookLink,
            pages,
            title,
            year,
          })
          .then(function () {
            setControl(false);
          })
          .catch(function (error) {
            console.log(error);
          });

          axios
          .post("http://localhost:3001/Library", {
            author,
            country,
            imageLink,
            language,
            bookLink,
            pages,
            title,
            year,
          })
          .then(function () {
            setControl(false);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        alert("Kitap zaten mevcut");
      }
    } else {
      alert("Başlık girmeniz gerekmektedir");
    }
  };

  return (
    <BooksContex.Provider
      value={{
        author,
        country,
        imageLink,
        language,
        bookLink,
        pages,
        title,
        year,
        books,
        Library,
        idLibrary,
        idBooks,
        isLoad,
        setAuthor,
        setCountry,
        setImageLink,
        setLanguage,
        setBookLink,
        setPages,
        setTitle,
        setYear,
        handleSelect,
        handlePost,
        Find,
        deleteBook,
        setIsLoad
      }}
    >
      {props.children}
    </BooksContex.Provider>
  );
};

export default BooksContextProvider;

import React from "react";
import './books.css';


export interface BookType {

    title: string;
    description: string;
    imageurl: string;

} 

const booklist:BookType[] = [
    {
        title: 'book1',
        description: 'the book is about a superhero who saves the world and fights evil',
        imageurl: ''
    },
    {
        title: 'book2',
        description: 'the book is about a detective who solves crimes and catches criminals',
        imageurl: ''
    },
    {
        title: 'book3',
        description: 'the book is about a scientist who discovers a new cure for a disease',
        imageurl: ''
    },
];

function Book(book: BookType) {

    const [showDescription, setShowDescription] = React.useState(false);

    return <div className="book-content">
        <div className="book-card">
            <div className="book-row">
                <span className="book-title">
                    Title
                </span>
                <span className="book-value">{book.title}</span>
            </div>

            <div className="book-row">
                    <span className="book-label">
                        Description
                    </span>
                <div className="book-value">
                    <div className={`description-content ${showDescription ? 'expanded' : 'collapsed'}`}>
                        {showDescription ? book.description : 'Click to show full description'}
                    </div>
                </div>

            </div>

            <div className="book-row">
                <span className="book-label">
                    Image
                </span>
                <span className="book-value">{book.imageurl != '' ? <img src={book.imageurl} alt="book image" /> : 'No image available'}</span>
            </div>
        </div>
        <button className="book-button" onClick={() => setShowDescription(!showDescription)}>
            {showDescription ? 'Hide description' : 'Show description'}
        </button>
    </div>

}

export default function BooksList() {

   const [books, setBooks] = React.useState<BookType[]>(booklist);

  return (
    <div className="books-container">
        {books && books.map((book:BookType)=>{
            return <Book key={book.title} {...book} />;
        })}

        <button className="add-book-button" onClick = {() => setBooks([...books, {title: 'book4', description: 'a book description', imageurl: ''}])}>
            Add book
        </button>
    </div>
  )

}


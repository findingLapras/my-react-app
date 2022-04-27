import './App.css';
import Book from './components/Book';

function App() {

  const books = [

    {
      title: 'Caterpillar',
      author: 'spin_backwards',
      id: 1
    },
    {
      title: 'Pikachu',
      author: 'spin_forwards',
      id: 2
    },
    {
      title: 'How To Program',
      author: 'spin_faster',
      id: 3
    }

  ]

  return (
    <>
      <h1>My First React App</h1>
      <ul>
        {books.map(book => ( <Book key={book.id} {...book} /> ))}
      </ul>
    </>
  )
}

export default App;

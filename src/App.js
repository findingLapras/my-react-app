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
    <div className="bg-gray-300 h-screen">
      <h1 className="text-3xl font-bold underline">New Title</h1>
      <p className="text-blue-400 underline">this is a paragraph.</p>

      <ul>
        {books.map(book => ( <Book key={book.id} {...book} /> ))}
      </ul>
    </div>
  )
}

export default App;

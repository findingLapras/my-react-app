import './App.css';
import Book from './components/Book';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react';
import { MdBuild , MdCall } from "react-icons/md"
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';

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
    <div className="bg-gray-100 h-screen">
<Stack direction='row' spacing={4}>
  <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
    Email
  </Button>
  <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
    Call us
  </Button>
</Stack>

<Stack direction='row' spacing={4}>
  <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
    Settings
  </Button>
  <Button rightIcon={<MdCall />} colorScheme='blue' variant='outline'>
    Call us
  </Button>
</Stack>
      <Button colorScheme='blue'>Button</Button>
      <h1 className="text-3xl font-bold underline">New Title</h1>
      <p className="text-blue-400 underline">this is a paragraph.</p>

      

      <ul>
        {books.map(book => ( <Book key={book.id} {...book} /> ))}
      </ul>
    </div>
  )
}

export default App;

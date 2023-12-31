import ChatBot from 'react-simple-chatbot'
import './App.css'

function App() {

  return (
    <>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: '4',
          },
          {
            id: '4',
            message: 'What number I am thinking?',
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 1, label: 'Number 1', trigger: '6' },
              { value: 2, label: 'Number 2', trigger: '7' },
              { value: 3, label: 'Number 3', trigger: '7' },
            ],
          },
          {
            id: '7',
            message: 'Wrong answer, try again.',
            trigger: '5',
          },
          {
            id: '6',
            message: 'Awesome! You are a telepath!',
            end: true,
          },
        ]}
      />
    </>
  )
}

export default App

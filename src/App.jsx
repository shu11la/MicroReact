// import './App.css'
import { createElement } from './micro-react/'

function App() {
  const element = createElement(
    'h1',
    {
      id: 'title',
      class: 'hello',
    },
    'Hello World',
    createElement('h2', null, 'Hello')
  )
  return console.log(element)
}

export default App

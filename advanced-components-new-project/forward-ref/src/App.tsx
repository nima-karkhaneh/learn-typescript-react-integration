import Button from './components/Button'
import Container from './components/Container'
import Input from './components/Input'

function App() {


  function handleClick() {
    console.log("I got clicked!")
  }

  return (
    <main>
      <Container as="button" onClick={handleClick}>Click me!</Container>
    </main>
  )
}

export default App

import './App.css'

const Hello = (props) => {
  return (
    <div>
      <p>Hola {props.name}, tienes {props.age} años</p>
    </div>
  )
}

const App = () => {
  const name = 'Lener VM'
  const age = 25

  const friends = [
    'Peter',
    'Maya',
  ]


  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <p>{friends}</p>
    </>
  )
}


export default App

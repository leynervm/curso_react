function Header(props) {
  return (
    <h1>{props.course.name}</h1>
  )
}

function Content(props) {
  return (
    <>
      {props.parts.map(part => (
        <Part key={part.name} name={part.name} exercises={part.exercises} />
      ))}
    </>
  )
}

function Part(props) {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

function Total(props) {

  let total = 0;
  props.parts.map(part => total += part.exercises);

  return (
    <p>Number of exercises {total}</p>
  )
}

function App() {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App

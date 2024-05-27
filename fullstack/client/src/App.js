

function App(){

  async function fetchData(){
    const data = await fetch('http://localhost:4000/todo/gettodolist')
    const body = await data.json()
    console.log(body)
  }

  return (
    <div>
      <p>hello </p>
      
      <button onClick={fetchData}>ping server</button>
    </div>
  )
}

export default App
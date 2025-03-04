import './App.css'

function App() {
  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C', '.']
  return (
    <div className='App'>
      <h1>Calculator</h1>
      <form>
        <input type='text' />
      </form>
      <div className='container'>
        {
          arr.map((item, idx)=>{
            return <button id ={item}key={idx} className='cell'>{item} </button>
          })
        }
      </div>
    </div>
  )
}

export default App

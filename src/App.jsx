import { useState } from 'react'
import './App.css'

function App() {
  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C', '.']
  const [value, setValue]  = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  console.log(value);
  
  const handleClick = (e) => {
    const id = e.target.id
    console.log((id));
    if(id === 'C'){
      setValue('')
    }
    else if(id === '='){
      //Produce result
    }
    else{
      setValue((val)=> val+id)
    }
  }

  return (
    <div className='App'>
      <h1>Calculator</h1>
      <form>
        <input type='text' onChange={handleChange} value={value}/>
      </form>
      <div className='container' onClick={handleClick}>
        {
          arr.map((item, idx)=>{
            return <button id ={item} key={idx} className='cell'>{item} </button>
          })
        }
      </div>
    </div>
  )
}

export default App

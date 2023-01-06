import { useState } from 'react'

import './App.css'


function App() {
  const [note, setNote] = useState('')

  const handleChange = (event) => {
    setNote(event.target.value)
  }

  return (
    <div className="App">
      <div className="inp-area">
        <input onChange={handleChange} type="text" id="inp" placeholder='type here..' />
        <button onClick={''}>Save</button>
      </div>

      <div className="notes">
        
        <div className="note">
          <div id='text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ea, cumque, a, porro velit tempora molestias optio neque dolorum ut laudantium qui facilis iure dicta illum quia deleniti. Cum, vitae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt eaque repellendus necessitatibus sit officiis fugiat quia a deserunt soluta mollitia nemo nostrum, commodi delectus nesciunt ullam aut, magnam alias modi.
          </div>
          <span id='extra'>
            buttons
            </span>
        </div>
      </div>
    </div>

  )
}

export default App

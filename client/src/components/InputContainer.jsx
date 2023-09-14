import React from 'react'

const InputContainer = () => {
  return (
    <div className='InputContainer'>
        <div className="input-container">
        <input
          value={inpText}
          onChange={(e) => {
            setInpText(e.target.value);
          }}
          type="text"
          id="inp"
          className="input dark"
          placeholder="Type here..."
        />
        <textarea
          value={areaText}
          onChange={(e) => {
            setAreaText(e.target.value);
          }}
          id="text-area"
          className="textarea dark"
          placeholder="Type here..."
          rows="4"
        ></textarea>
        <button onClick={addTodo} className="button save dark">
          Save
        </button>
      </div>
    </div>
  )
}

export default InputContainer
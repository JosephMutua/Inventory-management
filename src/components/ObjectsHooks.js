import React, {useState} from 'react';

function ObjectsHooks() {
    const [name, setName] = useState({fistName: '', lastName: ''})
  return (
    <div>
      <input type='text'
      value = {name.fistName}
      onChange = {e => setName({...name, fistName: e.target.value})}/>

      <input type ='text'
      value ={name.lastName} 
      onChange= {e => setName({...name, lastName: e.target.value})}/>
      
      <h2>The FistName is - {name.fistName}</h2>
      <h2>The LastName is - {name.lastName}</h2>
    </div>
  )
}

export default ObjectsHooks

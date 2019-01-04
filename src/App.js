


import React from 'react';


const App = () => {
  
  const profiles =[
    {name: "Taro", age: 10},
    {name: "Hanako", age: 8},
    {name: "Noname"}
  ]  
  
  return (
    <div>
      {
        profiles.map((profile, index )=> {
          return <User name={profile.name} age={profile.age} kwy={profile.index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi!!{props.name} and {props.age}</div>
}

User.defaultProps ={
  age:1
}

export default App;

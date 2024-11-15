import React from 'react'


const names=["abhishek","rahul","sonu","monu","hello"]


export default function Hello(props) {
  return (
    <div>
        <h1>hello:{props.detail.name} </h1>

        <ul>
            {names.map((value,index)=>(
                <li key={index}><h1>{value}</h1></li>
            ))}
        </ul>
      
    </div>
  )
}

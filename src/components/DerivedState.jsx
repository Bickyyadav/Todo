import React, { useState } from 'react'

export default function DerivedState() {
const [users, setusers] = useState([
    {name:"Saroj", age:25},
    {name: "Abinash",age: 24},
    {name: "bicky",age: 25}
]);

console.log(users);
const usercount = users.length;
console.log(usercount);


  return (
    <div>
<h1>user list</h1>
<ul>
    {users.map((user, index) => (
<li key={index}>
    {user.name} - {user.age} years old 
    
</li>
    ))} 
</ul>
<p>Total user : {usercount}</p>
    </div>
  )
}

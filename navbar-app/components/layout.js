import React from 'react'

function NavBar(){

  return(
    <div>
      <ul>
        <li>
          <a href="/">Home</a> 
        </li>
        <li>
          <a href="/documents">Home</a>
           </li>
        <li>
          <a href="/project">Home</a> 
          </li>
      </ul>
    </div>
  )

}

export default function Layout({children}) {
  return (
    <>
    <NavBar/>
    <div>{children}</div>
    </>
  )
}

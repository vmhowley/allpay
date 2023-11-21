import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  const [user, setUser] = React.useState({
    name: "benito",
    authenticated: true,
  });

  return (
        <Navigation user={user.name}/>
    )
    
    function Navigation() {
      
      return (
        <>
      <header>
        <Link className="site-logo bg-gradient-to-tr from-red-500 to-blue-500 text-transparent bg-clip-text">Welcome {user.name}</Link>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/ebank"}> Internet Banking</Link>
          <Link to={"/about"}> About</Link>
          <Link to={"/about"}> Profile</Link>

        </nav>
      </header>
    </>
  );
}
}
export default Home
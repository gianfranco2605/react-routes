import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products')
  }
  return (
    <>
      <h1>Home</h1>
      <p>
        Go to <Link to='/products'>List of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  )
}

export default HomePage;
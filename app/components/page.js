import React from 'react'

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#39584d' }}>
  <div className="container-fluid ">
    <a className="navbar-brand text-white fw-bold" style={{fontSize:'40px'}} href="#">Jfurni.</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" style={{margin:'0% 0% 0% 35%'}}>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <header className="navbar navbar-expand-md fixed-top navbar-dark bg-primary">
          <h1 className="navbar-brand mx-5">Portfolio</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavBar">
              <span className="navbar-toggler-icon"></span></button>
          <nav className="navbar-collapse collapse" id="myNavBar">
              <ul className="navbar-nav gap-3">
                  <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
                  <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                  <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
                  <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
                  <li className="nav-item"><a href="#project" className="nav-link">Project</a></li>
                  <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
              </ul>
          </nav>
      </header>
      <Outlet />
    </>
  )
}

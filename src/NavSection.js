import React from 'react'

export default function NavSection() {
  return (
    <div className='mt-3'>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">  
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  )
}

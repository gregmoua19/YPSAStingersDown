import React  from 'react';
import './collapsableSidebar.css';
function App(){
    return (
    <div class="page-container">
    <nav class="nav">
      <div class="nav__border"></div>
      <a href="#" class="nav__link">
        <div class="nav__icon-container">
          <i class="material-icons">menu</i>
        </div>
        <span class="nav__label">YPS Attendance Tracker</span>
      </a>
      <a href="#" class="nav__link">
        <div class="nav__icon-container">
          <i class="material-icons">home</i>
        </div>
        <span class="nav__label">Home</span>
      </a>    
      <div class="logout">
        <a href="#" class="nav__link">
            <div class="nav__icon-container">
              <i class="material-icons">logout</i>
            </div>
            <span class="nav__label">Log Out</span>
          </a>
      </div>
    </nav>
    <main class="main">
    </main>
  </div>
    )
    {
      const collapsedClass = "nav--collapsed";
      const lsKey = "navCollapsed";
      const nav = document.querySelector(".nav");
      const navBorder = nav.querySelector(".nav__border");
      if (localStorage.getItem(lsKey) === "true") {
        nav.classList.add(collapsedClass);
      }
      navBorder.addEventListener("click", () => {
        nav.classList.toggle(collapsedClass);
        localStorage.setItem(lsKey, nav.classList.contains(collapsedClass));
      });
    }
}
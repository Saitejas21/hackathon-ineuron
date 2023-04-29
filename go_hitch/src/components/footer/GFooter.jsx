import React from 'react'
import './GFooter.css'

function GFooter() {
  return (
    <section>
      <footer class="top">
        {/* <img src="logo.svg" /> */}
        <div class="links">
          <div>
            <h2>About</h2>
            <a>Directus Core</a>
            <a>Open Data Platform</a>
            <a>Feature List</a>
            <a>Road Map</a>
            <a>Marketplace</a>
          </div>
          <div>
            <h2>Cloud</h2>
            <a>Dashboard</a>
            <a>Register</a>
            <a>Pricing</a>
            <a>System Status</a>
            <a>Partner Program</a>
          </div>
        </div>
      </footer>
      <footer class="bottom">
        <div class="legal">
          <span> © 2023 All rights reserved </span>
          <a> License </a>
          <a> Terms </a>
          <a> Privacy </a>
        </div>
        <div class="links">
          <a class="fa-brands fa-github"></a>
          <a class="fa-brands fa-linkedin"></a>
          <a class="fa-brands fa-docker"></a>
        </div>
      </footer>
    </section>
  )
}

export default GFooter
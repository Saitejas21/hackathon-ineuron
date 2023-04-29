import React from 'react'
import './GHero.css'

function GHero() {
  return (
    <div className="hero-section">
        <div className="outer-wrap">
            <div className="top-inner">
            </div>
            <div className="address-select">
                <div className="input-box">
                <input type="text" class="form-control" placeholder='Leaving from' />
                </div>
                <div className="input-box">
                <input type="text" class="form-control" placeholder='Going to' />
                </div>
                <div className="two-input">
                    <div className="input-box">
                    <input type="date" class="form-control" />
                    </div>
                    <div className="input-box">
                    <input type="number" value="1" class="form-control" />
                    </div>
                </div>
                <button class="btn-search">Search</button>

            </div>
        </div>
    </div>
  )
}

export default GHero
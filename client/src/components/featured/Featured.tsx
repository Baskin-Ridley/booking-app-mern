import React from 'react'
import "./featured.css" 
const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
            alt="placeholder"
            className="featuredImg"/>
            <div className="featuredTitles">
                <h1>London</h1>
                <h1>224 properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
            alt="placeholder"
            className="featuredImg"/>
            <div className="featuredTitles">
                <h1>London</h1>
                <h1>242 properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
            alt="placeholder"
            className="featuredImg"/>
            <div className="featuredTitles">
                <h1>London</h1>
                <h1>304 properties</h1>
            </div>
        </div>

    </div>
  )
}

export default Featured 
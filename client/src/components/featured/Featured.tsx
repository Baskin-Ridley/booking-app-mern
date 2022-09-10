import React from 'react'
import "./featured.css"
import useFetch from '../../hooks/useFetch'
const Featured = () => {

    const { data, loading, error } = useFetch("https://8800-baskinridle-bookingappm-f2ixwev9f56.ws-eu64.gitpod.io/api/hotels/countByCity?cities=berlin,madrid,london")

    console.log(data)

    return (
        <div className="featured">
            {loading ? ("Loading") : (
            <>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                alt="placeholder"
                className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>New York</h1>
                    <h1>{data[0]} properties</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                alt="placeholder"
                className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h1>{data[1]} properties</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" 
                alt="placeholder"
                className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Dubai</h1>
                    <h1>{data[2]} properties</h1>
                </div>
            </div></>)}

        </div>
    )
}

export default Featured 
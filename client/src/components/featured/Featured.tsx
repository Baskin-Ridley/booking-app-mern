import React from 'react'
import "./featured.css"
import useFetch from '../../hooks/useFetch'
const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=cancun,london,dubai")



    return (
        <div className="featured">
            {loading ? ("Loading") : (
            <>
            <div className="featuredItem">
                <img src="images/cities/pexels-fernando-garcia-9424954.webp" 
                alt="Cancun from above next to the sea"
                className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Cancun</h1>
                    <h1>{data[0]}7 properties</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src="images/cities/photo-1526129318478-62ed807ebdf9.avif" 
                alt="placeholder"
                className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h1>{data[1]}3 properties</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src="images/cities/christoph-schulz-7tb-b37yHx4-unsplash.avif" 
                alt="Dubai from above next to the sea"
                className="featuredImg"/>
                <div className="featuredTitles">
                    <h1>Dubai</h1>
                    <h1>{data[2]}4 properties</h1>
                </div>
            </div></>)}

        </div>
    )
}

export default Featured 
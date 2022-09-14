// @ts-nocheck
import React from 'react'
import useFetch from '../../hooks/useFetch'
import './propertyList.css'

const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels/countByType");
  
    const images = [
      "images/types/hotel.webp",
      "images/types/apartment.jpg",
      "images/types/resort.jpg",
      "images/types/villa.jpg",
      "images/types/cabin.jpg",
    ];
    return (
      <div className="pList">
        {loading ? (
          "loading"
        ) : (
          <>
            {data &&
              images.map((img,i) => (
                <div className="pListItem" key={i}>
                  <img
                    src={img}
                    alt=""
                    className="pListImg"
                  />
                  <div className="pListTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    );
  };
  

export default PropertyList
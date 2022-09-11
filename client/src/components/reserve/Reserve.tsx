// @ts-nocheck
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useFetch from "../../hooks/useFetch"
import { useState } from "react"
import "./reserve.css"
import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"
const Reserve = ({ setOpen, hotelId }) => {

  const [selectedRooms, setSelectedRooms ] = useState([])
  const { data, loading, error } = useFetch(`https://8800-baskinridle-bookingappm-f2ixwev9f56.ws-eu64.gitpod.io/api/hotels/room/${hotelId}`)
  const { date } = useContext(SearchContext)

  const getDatesInRange = (startDate, endDate)=>{

    const start = new Date(startDate)
    const end = new Date(endDate)

    const date = new Date (start.getTime());
    
    let list = []

    while (date <= end){
      list.push(new Date(date).getTime())
      date.setDate(date.getDate()+1)
    }
    return list
  }
  const allDates = getDatesInRange(date[0].startDate, date[0].endDate)


  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound
  }

  const handleSelect = (e) => {
    const checked = e.target.checked
    const value = e.target.value
    setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter(item=>item !==value))
  }

  const handleClick = () => {

  }

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)}/>
        <span>Select your rooms:</span>
        {data.map(item => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">Max People: <b>{item.maxPeople}</b></div>
              <div className="rPrice">£{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map(roomNumber=>(
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)}
                  />
                </div>  
              ))}
              <button onClick={handleClick} className="rButton">

              </button>



            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reserve
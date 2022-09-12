// @ts-nocheck
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useFetch from "../../hooks/useFetch"
import { useState } from "react"
import "./reserve.css"
import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"
import { useNavigate } from "react-router-dom"
const Reserve = ({ setOpen, hotelId }) => {

  const [selectedRooms, setSelectedRooms ] = useState([])
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`)
  const { date } = useContext(SearchContext)
  const navigate = useNavigate()
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

  const handleClick = async () => {

    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`https://8800-baskinridle-bookingappm-f2ixwev9f56.ws-eu64.gitpod.io/api/auth/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })

      );
      setOpen(false);
      navigate("/");
    } catch (err) {
      console.log("hi")
    }
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Maximum Guests: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">£{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  )
}

export default Reserve
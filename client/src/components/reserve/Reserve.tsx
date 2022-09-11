// @ts-nocheck
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useFetch from "../../hooks/useFetch"

import "./reserve.css"
const Reserve = ({ setOpen, hotelId }) => {

  const [selectedRooms, setSelectedRooms ] = useState([])

  const { data, loading, error } = useFetch(`https://8800-baskinridle-bookingappm-f2ixwev9f56.ws-eu64.gitpod.io/api/hotels/room/${hotelId}`)

  const handleSelect = (e) => {
    const selected = e.target.checked
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
                  <input type="checkbox" value={roomNumber._id} onChange={handleSelect}/>
                </div>  
              ))}




            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reserve
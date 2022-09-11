// @ts-nocheck
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./reserve.css"
const Reserve = ({ setOpen, hotelId }) => {

  const { data, loading, error } = useFetch(`https://8800-baskinridle-bookingappm-f2ixwev9f56.ws-eu64.gitpod.io/api/hotels/room/${hotelId}`)
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)}/>
        <span>Select your rooms:</span>
      </div>
    </div>
  )
}

export default Reserve
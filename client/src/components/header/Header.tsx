// @ts-nocheck
import {useState, useContext} from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from '../../context/AuthContext'

const Header = ({type}) => {

    const [destination, setDestination] = useState("london");

    const [openDate, setOpenDate] = useState(false);

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(new Date()+1),
          key: 'selection'
        }
      ]);
    
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {return {
            ...prev, [name]: operation === 'i' ? prev[name] + 1 : prev[name] - 1}})
    }

    const navigate = useNavigate()
    const { user } = useContext(AuthContext);

    const {dispatch} = useContext(SearchContext)

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, date, options } });
        navigate("/hotels", { state: { destination, date, options }});
    };

    const handleLoginClick = () => {
        navigate("/login");
    };

  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
             <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
                
            </div>
            { type !== "list" &&
                <> <h1  className="headerTitle">
                Find your next stay
            </h1>
            <p className="headerDesc">
                Search low prices on hotels, homes and much more...
            </p>
            {!user &&
            <button onClick={handleLoginClick} className="headerBtn">Sign In / Register</button>
            }
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input type="text" 
                    placeholder="Search stays" 
                    className="headerSearchInput"
                    onChange={e=>setDestination(e.target.value.toLowerCase())}
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                    {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                    />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span 
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText">{`${options.adult} adult ${options.children} children ${options.room} room`}</span>
                    {openOptions &&<div className="options" >
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" 
                                disabled={options.adult <= 1}
                                onClick={()=>handleOption("adult", "d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                            </div>

                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" 
                                disabled={options.children <= 0}
                                onClick={()=>handleOption("children", "d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>  
                            </div>

                        </div>
                        <div className="optionItem">
                            <span className="optionText">Rooms</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" 
                                disabled={options.room <= 1}
                                onClick={()=>handleOption("room", "d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterButton"
                                onClick={()=>handleOption("room", "i")}>+</button>
                            </div>

                        </div>
                    </div>}
                </div>

                <div className="headerSearchItem">
                   <button className="headerBtn" onClick={handleSearch}>Search</button> 
                </div>
            </div></>}
        </div>
       
        
    </div>
  )
}

export default Header
//@ts-nocheck
import {useState} from 'react'
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/Header'
import "./list.css"
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'

const List = () => {

  const location = useLocation()
  console.log(location)
  const [destination,setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options)
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(999)

  const { data, loading, error, refetch } = useFetch(`https://8800-baskinridle-bookingappm-f2ixwev9f56.ws-eu63.gitpod.io/api/hotels?city=${destination}`)


  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="destination">Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label htmlFor="check-in date">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                </span>
                {openDate && 
                <DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                />}
            </div>
            <div className="lsItem">
              <label htmlFor="options">Options</label>
              <div className="lsOptions">

              
                <div className="lsOptionItem">
                  <span className="lsOptionText"
                  >
                    Min price <small>per night</small>
                  </span>
                  <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText"
                  >
                    Max price <small>per night</small>
                  </span>
                  <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText"
                  >
                    Adult
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText"
                  >
                    Children
                  </span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText"
                  >
                    Room
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
                </div>
                </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
            {data.map(item=>(

              <SearchItem item={item} key={item._id}/>
            ))}
            </>}
          </div>
        </div>

      </div>
    </div>
  )
}

export default List
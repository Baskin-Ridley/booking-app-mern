// @ts-nocheck
import { useEffect } from "react"
import {useState} from "react"
import axios from "axios"

const useFetch = (urlEntry: any) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    let url = "";
  



    //url = "api" + urlEntry; typically works but not on hotels page


    if (process.env.NODE_ENV === "production") {
      url = "/api" + urlEntry;
      console.log({url})
    } else {
      url = urlEntry;
      console.log({url})
    }
  

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await axios.get(url);

          setData(res.data);
        } catch (err) {
          setError(err);
        }
        setLoading(false);
      };
      fetchData();
    }, [url]);
  
    const reFetch = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
  
    return { data, loading, error, reFetch };
  };
  
  export default useFetch;
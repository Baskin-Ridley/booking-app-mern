// @ts-nocheck
import React, { useEffect } from "react"
import {useState} from "react"
import axios from "axios"

const useFetch = (url: any) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    console.log(url)
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await axios.get(url);

          setData(res.data);
          console.log("success fetching data")
          console.log(data)
        } catch (err) {
          setError(err);
          console.log("error fetching data")
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
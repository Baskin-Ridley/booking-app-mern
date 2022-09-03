// @ts-nocheck

import React, { useEffect } from "react"
import {useState} from "react"
import axios from "axios"

export const useFetch = (url: any) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>
        setLoading(true)
        try{
            const res = axios.get(url)
            setData(res.data);
        }catch(err){
            setError(err);
        }
        setLoading(false)
    fetchData()
    },[url])
};


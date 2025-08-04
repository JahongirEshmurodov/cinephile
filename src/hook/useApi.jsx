import React, { useState } from 'react'
import axios from "axios";
function useApi() {
    const [data, setdata] = useState([])
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(true)
    async function getData(url) {
        setloading(true)
        try {
            let { data } = await axios({
                method: "GET",
                url: import.meta.env.VITE_URL + url,
                params: { language: 'ru-RU', page: page },
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
                }
            })
            if (data.results) {
                setdata(data.results)
            } else {
                setdata(data)
            }
            setloading(false)
        } catch (error) {
            console.log(error);
        }
    }
    return { getData, data, loading, page, setpage }
}

export default useApi
import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/siddhantpardhi")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData()
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github followers: {data.followers}
            {/* <img src={data.avatar_url} alt="" /> */}
        </div>
    )
}

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/siddhantpardhi")
    return response.json()
}
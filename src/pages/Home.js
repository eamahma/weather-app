import React, {useState} from 'react'
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

function Home() {

    const [citySearched, setCitySearched] = useState("");
    const [getWeather, { loading, data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
        // variables: { name: "Vancouver"},
        variables: { name: citySearched},
    })

    if (error) return <h1>Error found</h1>
    if (data) {
        console.log(data);
    }
    return (
        <div className="home">
            <h1>Search for Weather</h1>
            <input type="text" placeholder="City name ...." onChange = {(event) => {setCitySearched(event.target.value)}}/>      
            <button onClick={() => getWeather() }>Search</button>      
        </div>
    )
}

export default Home

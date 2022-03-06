import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { FETCH_RESTAURANTS } from '../graphql/queries'
// importing Components
import Navbar from '../components/navbar/Navbar'
import Map from '../components/map/Map'
import RestaurantList from '../components/restaurantList/RestaurantList'

// importing CSS styles
import '../App.css'

const Home = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Tsiran",
            position: { lat: -34.397, lng: 150.644 },
            rateSumm: "4.4",
            feedbacks: [
                {
                    name: "Ashot",
                    body: "Great Place",
                    rate: 4
                }
            ]
        },
        {
            id: 2,
            name: "Tsiran",
            position: { lat: -34.397, lng: 151.644 },
            rateSumm: "5",
            feedbacks: [
                {
                    name: "Ashot",
                    body: "Great Place",
                    rate: 4
                }
            ]
        },
        {
            id: 3,
            name: "Tsiran",
            position: { lat: -34.397, lng: 152.644 },
            rateSumm: "0",
            feedbacks: [
                {
                    name: "Ashot",
                    body: "Great Place",
                    rate: 4
                }
            ]
        }
    ])
    const [selected, setSelected] = useState({ lat: -34.397, lng: 151.644 })

    const { loading, data: res } = useQuery(FETCH_RESTAURANTS)

    const handleSelectedRestaurantChange = (positions) => {
        setSelected(positions)
    }

    if (!loading) {
        console.log(res.getRestaurants);
    }

    return (
        <>
            <Navbar />
            <div className="home-wrapper" >

                <RestaurantList data={data} handleSelectedRestaurantChange={handleSelectedRestaurantChange} />
                <Map data={data} selected={selected} />


            </div>
        </>
    )
}

export default Home
import React, { useState } from 'react'
import RatingStars from '../components/ratingStars/RatingStars'
import FeedbackInput from '../components/feedback/FeedbackInput'
import FeedbackCard from '../components/feedback/FeedbackCard'
import Voting from '../components/feedback/Voting'



const Restaurant = () => {

    const [data, setData] = useState(
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
        })

    return (
        <div>
            <div className="restaurant-main-photo">

            </div>
            <div className="restaurant-name-and-rating">
                {data.name}
                <Voting   votable={false} rate={data.rateSumm} />
            </div>
            <div className="restaurant-leave-feedback-part">
                <FeedbackInput />
            </div>
            <div className="restaurant-feedbacks">
                <FeedbackCard />
            </div>
        </div>
    )
}

export default Restaurant
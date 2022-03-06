import React from 'react'
import TextField from "@mui/material/TextField"
import Voting from './Voting'
import Button from '@mui/material/Button';

// importing CSS styles
import './feedback.css'

const FeedbackInput = () => {

    const handleRating = (some) => {
        return console.log(some)
    }

    return (
        <>
            <div className="feedback-input">
                <TextField style={{ minWidth: "250px" }} className="feedback-input-name" id="demo-helper-text-misaligned-no-helper" required label="Name" />
                <Voting handleRating={handleRating} votable={true} rate={0} />
                <TextField
                    style={{ minWidth: "250px" }}
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue=""
                    required
                />
                <Button variant="contained" onClick={() => { }}>Submit</Button>
            </div>

        </>
    )
}

export default FeedbackInput
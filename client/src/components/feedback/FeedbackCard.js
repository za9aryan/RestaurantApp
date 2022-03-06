import React from 'react'
import { Grid, Paper } from "@material-ui/core";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RatingStars from '../ratingStars/RatingStars'


import Voting from './Voting'

import "./feedback.css";




const FeedbackCard = () => {

    const handleRating = (some) => {
        return console.log(some)
    }

    handleRating(4)

    return (
        <div style={{ padding: 14 }} className="App">
            <h1>Feedbacks</h1>
            <Paper style={{ padding: "40px 20px", marginBottom: "5px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <AccountCircleIcon />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: "0 0 5px 0", textAlign: "left" }}>Michel Michel</h4>
                        <Voting handleRating={handleRating} votable={false} rate={3} />
                        <p style={{ textAlign: "left" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                            Suspendisse congue vulputate lobortis. Pellentesque at interdum
                            tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                            sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                            metus, efficitur lobortis nisi quis, molestie porttitor metus.
                            Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                            tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.{" "}
                        </p>

                    </Grid>
                </Grid>

            </Paper>
            <Paper style={{ padding: "40px 20px", marginBottom: "5px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <AccountCircleIcon />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
                        <p style={{ textAlign: "left" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                            Suspendisse congue vulputate lobortis. Pellentesque at interdum
                            tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                            sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                            metus, efficitur lobortis nisi quis, molestie porttitor metus.
                            Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                            tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.{" "}
                        </p>

                    </Grid>
                </Grid>

            </Paper>
        </div>
    )
}

export default FeedbackCard
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';

// importing Componenets
import Voting from '../feedback/Voting'

// importing CSS styles
import './restaurantList.css'

export default function AlignItemsList({ handleSelectedRestaurantChange, data }) {
    const navigate = useNavigate()

    // const [data, setData] = useState([
    //     {
    //         id: 1,
    //         name: "Tsiran",
    //         position: "46 88",
    //         rateSumm: "4.4",
    //         feedbacks: [
    //             {
    //                 name: "Ashot",
    //                 body: "Great Place",
    //                 rate: 4
    //             }
    //         ]
    //     },
    //     {
    //         id: 2,
    //         name: "Tsiran",
    //         position: "46 88",
    //         rateSumm: "5",
    //         feedbacks: [
    //             {
    //                 name: "Ashot",
    //                 body: "Great Place",
    //                 rate: 4
    //             }
    //         ]
    //     },
    //     {
    //         id: 3,
    //         name: "Tsiran",
    //         position: "46 88",
    //         rateSumm: "0",
    //         feedbacks: [
    //             {
    //                 name: "Ashot",
    //                 body: "Great Place",
    //                 rate: 4
    //             }
    //         ]
    //     }
    // ])

    const handleListClick = (restaurantPositions) => {
        handleSelectedRestaurantChange(restaurantPositions)
    }

    const handleButtonClick = (restId) => {
        navigate(`/restaurant/${restId}`)
    }



    const renderRestaurantsList = ({ name, rateSumm, feedbacks, id, position }) => {
        return (
            <div key={id}>
                <ListItem onClick={() => handleListClick(position)} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={feedbacks.length > 0 ? (
                            <React.Fragment>
                                <Voting votable={false} rate={rateSumm} handle />
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {feedbacks[0].name}
                                </Typography>
                                {` - "${feedbacks[0].body}" Rated - ${feedbacks[0].rate}`}
                            </React.Fragment>) : null}
                    />
                    <Button onClick={() => handleButtonClick(id)} className="view-button" variant="contained">View Restaurant</Button>
                </ListItem>
                <Divider variant="inset" component="li" />
            </div>
        )
    }

    return (
        <List style={{ width: '50%' }}>
            {data.map(renderRestaurantsList)}
        </List>
    );
}
import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@mui/material/Rating';


const Voting = ({ handleRating = ()=>{}, rate, votable }) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        handleRating(value)
    }, [value])

    return (
        <>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >

                {votable ? (<>
                    <Rating
                        name="simple-controlled"
                        value={Number(value)}
                        onChange={(event, newValue) => {
                            setValue(Number(newValue))
                        }}
                    /></>) : (<Rating name="read-only" value={Number(rate)} readOnly />)}
            </Box>
        </>
    )
}

export default Voting
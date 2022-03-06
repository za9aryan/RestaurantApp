import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@mui/material/Rating';

const RatingStars = (props) => {
    const [value, setValue] = useState(props.rate);

    useEffect(() => {
    }, [value])

    return (
        <>
            <button onClick={() => props.func("asdasd")}>something</button>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >

                {props.votable ? (<>
                    <Rating
                        name="simple-controlled"
                        value={Number(value)}
                        onChange={(event, newValue) => {
                            setValue(Number(newValue))
                        }}
                    /></>) : (<Rating name="read-only" value={Number(props.rate)} readOnly />)}
            </Box>
        </>
    );
}

export default RatingStars
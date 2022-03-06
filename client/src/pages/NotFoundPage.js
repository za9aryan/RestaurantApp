import React from 'react'
import DangerousIcon from '@mui/icons-material/Dangerous';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div className="not-found">
            <h1><DangerousIcon /> Not Found Requested Page <DangerousIcon /></h1>
            <Button variant="contained" onClick={() => navigate('/')}>Homepage</Button>
        </div>
    )
}

export default NotFoundPage
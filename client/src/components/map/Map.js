import React, { useState, useEffect } from 'react'
import { compose, withProps } from "recompose";
import { useNavigate } from 'react-router-dom'


// importing Map module
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";


const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `calc(100vh - 80px)`, width: "50%" }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(({ data: { data }, selectedRestaurant }) => {
    const [show, setShow] = useState("")
    const navigate = useNavigate()

    const handleMarkerHover = (restData) => {
        setShow(restData.id)
    }

    const onMarkerClick = (restId, e) => {
        navigate(`/restaurant/${restId}`)
    }

    const renderMarkers = (markerPositions) => {
        return <Marker
            key={markerPositions.id}
            onClick={(e) => onMarkerClick(markerPositions.id)}
            onMouseOver={(e) => handleMarkerHover(markerPositions)}
            position={markerPositions.position}
            onMouseOut={() => setShow("")}
        >
            {show === markerPositions.id && <InfoWindow><h4>{markerPositions.name} {markerPositions.id}</h4></InfoWindow>}
        </Marker>
    }

    return (
        <>
            <GoogleMap
                defaultZoom={10}
                center={selectedRestaurant}
            >
                {data.map(renderMarkers)}
            </GoogleMap>
        </>
    )
}

)

const Map = (props) => {
    return (
        <>
            <MyMapComponent data={props} selectedRestaurant={props.selected} />
        </>
    )
}

export default Map
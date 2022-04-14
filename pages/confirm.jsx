import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map/Map";

export default function Confirm() {
    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()


    const getPickupCoordinates = () => {
        const pickup = "Santa Monica"
        /* Fetch Function */
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoicmFqZXNobTE3IiwiYSI6ImNrdm92OHo4djd6Z3MydXF3ank1NjF4N3IifQ.lAlVui9fWMcOxuJ8qTP0zQ",
                limit: 1
            })
        )
            .then(res => res.json())
            .then(data => {
                setPickupCoordinates(data.features[0].center)
            })
    }

    const getDropoffCoordinates = () => {
        const dropoff = "Tokyo"
        /* Fetch Function */
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoicmFqZXNobTE3IiwiYSI6ImNrdm92OHo4djd6Z3MydXF3ank1NjF4N3IifQ.lAlVui9fWMcOxuJ8qTP0zQ",
                limit: 1
            }))
            .then(res => res.json())
            .then(data => {
                setDropoffCoordinates(data.features[0].center)
            })
    }

    useEffect(() => {
        getPickupCoordinates()
        getDropoffCoordinates()
    }, [])


    return (
        <Wrapper>
            <Map />
            <RideContainer />
            <RideSelector>
                
            </RideSelector>
            <ConfirmButton />
        </Wrapper>
    );
}

const Wrapper = tw.div`
    flex h-screen flex-col
`

const RideContainer = tw.div`
    flex-1 
`
const RideSelector = tw.div`
    
`

const ConfirmButton = tw.div`
    
`
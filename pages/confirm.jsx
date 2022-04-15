import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector/RideSelector";

export default function Confirm() {

    const router = useRouter();
    const { pickup, dropoff } = router.query;

    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCoordinates = (pickup) => {
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

    const getDropoffCoordinates = (dropoff) => {
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
        getPickupCoordinates(pickup)
        getDropoffCoordinates(dropoff)
    }, [pickup, dropoff])


    return (
        <Wrapper>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer >
                <RideSelector />
                <ConfirmButtonContainer>
                    Confirm UberX
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    );
}

const Wrapper = tw.div`
    flex h-screen flex-col
`

const RideContainer = tw.div`
    flex-1 flex flex-col
`
/* const RideSelector = tw.div`
    
` */

const ConfirmButtonContainer = tw.div`
    bg-black text-white
`

/* const ConfirmButton = tw.div`
    
` */
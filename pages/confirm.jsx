import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Map from "./components/Map/Map";
import RideSelector from "./components/RideSelector/RideSelector";

export default function Confirm() {

    const router = useRouter();
    const { pickup, dropoff } = router.query;

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

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
            <ButtonContainer>
                <Link href="/search" >
                    <BackButtonn src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </ButtonContainer>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer >
                <RideSelector
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    );
}

const Wrapper = tw.div`
    flex h-screen flex-col
`

const ButtonContainer = tw.div`
    rounded-full absolute top-4 left-4 z-10 bg-white shadow-md
    cousor-pointer
`

const BackButtonn = tw.img`
    h-full object-contain
`

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
    border-t-2
`

const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl
`
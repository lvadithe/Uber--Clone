import React from "react";
import tw from "tailwind-styled-components";
import Car from "../Car/Car";

export default function RideSelector () {
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CardList>
                <Car />
            </CardList>
        </Wrapper>
    );
}

const Wrapper = tw.div`
    flex-1 
`

const Title = tw.div`
    text-gray-500 text-center text-sm py-2 border-b
`

const CardList = tw.div`
    
`
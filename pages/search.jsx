import React from 'react'
import tw from "tailwind-styled-components"

export default function Search() {
    return (
        <Wrapper>
            {/* Button container */}
            <ButtonContainer>
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </ButtonContainer>
            {/* Input container */}
            <InputContainer>
                <FromToiCons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                </FromToiCons>
            </InputContainer>
            {/* Saved Places */}

            {/* Confirm Location */}
        </Wrapper>
    )
}

const Wrapper = tw.div`
    bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
    bg-white px-4
`

const BackButton = tw.img`
    h-12
`

const InputContainer = tw.div`
    
`

const FromToiCons = tw.div`
    
`

const Circle = tw.img`

`


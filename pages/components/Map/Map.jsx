import { useEffect } from "react"
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
    'pk.eyJ1IjoidmFkaXRoIiwiYSI6ImNsMXF1c3BtYjB0NTczZG9oMXA2ZWh1YzMifQ.f9VlOnbl7w4IlmytBBAbxQ';


export default function Map() {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 3,
        })
    }, [])

    return (
        <Wrapper id='map'>

        </Wrapper>
    )
}


const Wrapper = tw.div`
    flex-1
`

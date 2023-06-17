import React from 'react'
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Box } from '@mui/material';
import Sidebar from '../sidebar/Sidebar';
import DataModal from '../data modal/DataModal'
import { useQuery } from 'react-query';
import {get_geocoding_data} from '../../services/api/geoData'

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VyeWEzMiIsImEiOiJjbGl6ZHFud2swOGp5M21wOXJuZGoxdXpvIn0.owRtH6Vr5uE331j_uV_2tA';

const MapComponent = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(85.4592);
    const [lat, setLat] = useState(18.0697);
    const [zoom, setZoom] = useState(1);
    const [open, setOpen] = useState(false)

    useEffect(() => {

        // FOR RENDERING THE MAP//

        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        // TO GET THE CURRENT CORDINATES AS CURSOR MOVES //

        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    }, []);

    // FUNCTION TO GET THE CLICKED CORDINATE AND TO OPEN THE DATA MODAL //


    const handleClickCordinate = async() => {
        setOpen(!open)
        handleClick()
    }

    // REACT QUERY FUNCTION FOR FETCHING THE GEOCODING DATA //

    const { data, isLoading, refetch } = useQuery(['data', lat, lng], () => get_geocoding_data(lat,lng));
    const handleClick=()=>{
        refetch()
    }
   

    return (
        <div>
            <Box onClick={() => handleClickCordinate(map.current.getCenter().lng.toFixed(4))} sx={{ width: '100%', height: '100vh' }} ref={mapContainer}>
                <Sidebar lat={lat} lng={lng} />
                <DataModal open={open} handleClickCordinate={handleClickCordinate} isLoading={isLoading} data={data} />
            </Box>
        </div>
    )
}

export default MapComponent
import axios from "axios";

const apikey ='6d800afd2a9340c6b8bbe3b53eba8d4f'

export const get_geocoding_data = (lat,lng) => {
   return axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=${apikey}`)
   .then((response) => response?.data?.results)
   
}
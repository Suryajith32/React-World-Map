import React from 'react'
import MapComponent from '../../components/mapComponent/MapComponent'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();


const Home = () => {
    return (
        <div>
            <QueryClientProvider client={queryClient}> 
                <MapComponent />
            </QueryClientProvider>
        </div>
    )
}

export default Home
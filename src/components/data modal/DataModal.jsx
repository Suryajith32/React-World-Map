import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material';


export default function BasicModal({ open, handleClickCordinate,data }) {
    const handleClose = () => {
        handleClickCordinate()
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box display='flex' justifyContent='center' alignItems='center'
                    sx={{
                        width: '50em', height: '70vh', position: 'absolute',
                        color: '#FFFFFF', fontFamily: 'monospace',
                        zIndex: 1, top: '100px', left: 0, m: '12px', borderRadius: '4px'
                    }}>
                    <Stack direction='column' spacing={5}>
                        {data && data?.map((item, index) => (
                            <Box key={index}>
                                <Typography fontFamily='monospace'>Latitude :{item?.lat}</Typography>
                                <Typography fontFamily='monospace'>Longitude :{item?.lon}</Typography>
                                <Typography fontFamily='monospace'>Country :{item?.country}</Typography>
                                <Typography fontFamily='monospace'>Countrycode :{item?.country_code}</Typography>
                                <Typography fontFamily='monospace'>Popularity :{item?.rank?.popularity}</Typography>
                                <Typography fontFamily='monospace'>Address Line 1:{item?.address_line1}</Typography>
                                <Typography fontFamily='monospace'>Address Line 2:{item?.address_line2}</Typography>
                                <Typography fontFamily='monospace'>county :{item?.county}</Typography>
                                <Typography fontFamily='monospace'>City :{item?.city}</Typography>
                                <Typography fontFamily='monospace'>Street :{item?.street}</Typography>
                                <Typography fontFamily='monospace'>State :{item?.state}</Typography>
                                <Typography fontFamily='monospace'>State District :{item?.state_district}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
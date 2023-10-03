
import { Box, Button, TextField, Typography } from '@mui/material';
import Title from '../../hooks/title';





const Subscribe = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin:'50px',


            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center ',
                alignItems: 'center',
                alignContent: 'center',
                margin: 'auto',
                marginTop: '70px',
                marginBottom: '50px',

            }}>
                <Typography variant="h3" className="title-sub">
                    Subscribe To Newsletter
                </Typography>
                <Typography variant="h6" className="text-sub">
                    Subscribe to our newsletter to get amazing offers in future.
                </Typography>
            </Box>


            <Box
            sx={{
                display:'flex',
                justifyContent:'center',
                alignContent:'center',
                flexDirection:'row'
            }}
            >
                <TextField
                placeholder='Enter your email'
                sx={{
                    padding:'20px',
                    width:'300px',
                    marginRight:0,
                   
                }}
                className='input-mobile'
                >

                </TextField>
                <Button
                variant='contained'
                sx={{
                    margin:'auto',
                    padding:'15px',
                    background:'#42454A',
                    "&:hover":{
                        color:'#42454A',
                        background:'#fff',
                        border:'1px solid #42454A'
                    }

                }}
                className='btn-mobile'
                >
                    Get start
                </Button>
            </Box>
        </Box>
    );
}

export default Subscribe;
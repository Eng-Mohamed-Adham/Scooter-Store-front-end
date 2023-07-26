import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'


const data = [
    {
        title:'105',
        unit:'lbs',
        text:'Net Weeight'
    },
    {
        title:'26',
        unit:'mph',
        text:'Top Speed'
    },
    {
        title:'38',
        unit:'miles',
        text:'Max Range'
    },
    {
        title:'89',
        unit:'nm',
        text:'Max Torques'
    },
    {
        title:'22%',
        unit:'slope',
        text:'Hill Climbing'
    },
    {
        title:'2',
        unit:'X',
        text:'Hydralic Disc Brakes'
    },
]

const Header = () => {

    let content = (
        <Box sx={{ flexGrow: 1 ,marginTop:'35px'}}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={4} sm={12}>
                    <Box>
                        <Typography
                            variant='h1'
                            className='header-title'
                            >
                            LET'S RIDE <span>THE FUTURE.</span>
                        </Typography>
                        <hr className='hr' />
                        <Typography variant='h6' className='para-header'>
                            Simple and sleek design with users in mind.
                        </Typography>
                        <Box sx={{
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'center',
                            alignContent:'center',
                            marginTop:'50px',
                        }}>
                            <ButtonGroup className='btn-buy'>
                                <Button
                                sx={{
                        
                                    padding: '20px',
                                    borderRadius: '3px',
                                    color: '#fff !important',
                                    background: '#42454A',
                                    border: 'none',
                                    "&:hover": {
                                        color: '#42454A !important',
                                        background: '#fff',
                                        border: '1px solid #42454A',
                                    }
                                }}
                                >
                                <FontAwesomeIcon icon={faArrowRight} />
                                </Button>
                                <Typography variant='h6'
                                className='btn-text'
                                >Buy now</Typography>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Typography variant='h6' className='work-text'>
                                    Watch our video how it works
                                </Typography>
                                <Button sx={{
                                    border:'none',
                                    "&:hover":{
                                        border:'none'
                                    }
                                }}>
                                    <img src='play-button.png' alt='.' />
                                </Button>

                            </ButtonGroup>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={8} sm={12}>
                    <Box className='header-left'>
                        <Box className='img-header'>
                            <img className='img-scooter' src='scooter1.png' alt='.' />
                        </Box>
                        <Box>

                            <ButtonGroup className='btn-group-slid'

                            >

                                <Typography variant='h3'
                                sx={{
                                    color:"#42454A",
                                    marginRight:'10px',
                                }}>
                                    01
                                </Typography>
                                <Button variant='outlined'
                                    sx={{
                                        color: '#42454A',
                                        background: '#fff',
                                        padding: '20px',
                                        borderRadius: '30px',
                                        border: '1px solid #42454A',
                                        "&:hover": {
                                            color: '#fff !important',
                                            background: '#42454A',
                                            border: 'none'
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </Button>
                                <Button variant='outlined'
                                    sx={{
                                        color: '#42454A',
                                        background: '#fff',
                                        padding: '20px',
                                        borderRadius: '30px',
                                        border: '1px solid #42454A',
                                        "&:hover": {
                                            color: '#fff !important',
                                            background: '#42454A',
                                            border: 'none'
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </Button>

                            </ButtonGroup>
                        </Box>
                    </Box>
                </Grid>

                <Grid container item xs={12} md={12} sm={12} sx={{justifyContent:'center'}}>
                    <Box sx={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                        flexWrap:'wrap',
                    
                        
                    }}>
                        {
                            data.map(item => {
                                return(
                                    <Box
                                    className='header-end'
                                    key={item.unit}
                                    >
                                    <Typography variant='h3' className='header-end-title' >
                                        {item.title}
                                        <span>{item.unit}</span>
                                    </Typography>
                                    <Typography variant='h6' className='header-end-text'>
                                        {item.text}
                                    </Typography>
                                    </Box>

                                )
                            })
                        }
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
    return content
}

export default Header;
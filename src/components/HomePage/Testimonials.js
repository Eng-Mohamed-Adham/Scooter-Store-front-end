import { Box, Button, Typography } from "@mui/material";
import Testi from "../../hooks/Testi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'
const data = [
    {
        rating:5,
        text:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.',
        img:'testi1.png',
        name:'Serhiy Hipskyy',
        title:'CEO Universal'
    },
    {
        rating:5,
        text:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
        img:'testi2.png',
        name:'Justus Menke',
        title:'CEO Eronaman'
    },
    {
        rating:5,
        text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
        img:'testi3.png',
        name:'Britain Eriksen',
        title:'CEO Universal'
    },
]

const Tesimonials = () => {
    return (
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'50px',
        }} 
        >
            <Typography 
            variant="h3"
            sx={{
                color:'#42454A',
                fontWeight:'bolder',
                marginBottom:'50px',
                marginTop:'150px',


            }}
            >
                Testimonials
            </Typography>
            <Box
            sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                flexWrap:'wrap'

            }} 
            >
                {
                    data.map(item => (
                        <Testi key={item.name} title={item.title} name={item.name} img={item.img} text={item.text} rating={item.rating} />
                    ))
                }
            </Box>
            <Box>
            <Button variant='outlined'
                                    sx={{
                                        width:'70px',
                                        height:'70px',
                                        color: '#42454A',
                                        background: '#fff',
                                        padding: '20px',
                                        borderRadius: '50%',
                                        border: '1px solid #42454A',
                                        margin:'10px',
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
                                        width:'70px',
                                        height:'70px',
                                        color: '#42454A',
                                        background: '#fff',
                                        padding: '20px',
                                        borderRadius: '50%',
                                        border: '1px solid #42454A',
                                        margin:'10px',
                                        "&:hover": {
                                            color: '#fff !important',
                                            background: '#42454A',
                                            border: 'none'
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </Button>
            </Box>
        </Box>
    );
}
 
export default Tesimonials;
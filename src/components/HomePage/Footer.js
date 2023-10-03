import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, List, ListItem, Typography } from "@mui/material";
import {faSquareInstagram} from '@fortawesome/free-solid-svg-icons'




const Footer = () => {
   
    return (
    
        <Box
        sx={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:{xs:'center',md:'flex-start'},
            alignItems:'center',
            marginLeft:'0px',
            background:'#42454A',
            color:'#fff'
            

        }}
        >
            <Box
            sx={{
                marginLeft:'0',
                display:{xs:'none',md:'flex'}
            

            }}
            >
                <img 
                src="footer1.png" alt='.'
                style={{
                }}
                />
            </Box>
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',


                }}
            >
                <Box
                sx={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignItems:'center',
                    margin:{xs:'50px', md:'auto'}

                }}>
                    <Box>
                        <Typography>
                            About
                        </Typography>
                        <List>
                            <ListItem>
                                Company
                            </ListItem>
                            <ListItem>
                                Teams
                            </ListItem>
                            <ListItem>
                                Profile
                            </ListItem>
                            <ListItem>
                                Careers
                            </ListItem>
                        
                        </List>
                    </Box>

                    <Box>
                        <Typography>
                            Resources
                        </Typography>
                        <List>
                            <ListItem>
                                Contact
                            </ListItem>
                            <ListItem>
                                Application
                            </ListItem>
                            <ListItem>
                                FQA Features
                            </ListItem>
                        
                        </List>
                    </Box>
                    <Box>
                        <Typography>
                            Legals
                        </Typography>
                        <List>
                            <ListItem>
                                Copyright Privacy
                            </ListItem>
                            <ListItem>
                                Policy Disclaimer
                            </ListItem>
                            <ListItem>
                                Profile
                            </ListItem>
                            <ListItem>
                                Terms
                            </ListItem>
                        
                        </List>
                    </Box>
                </Box>
                <Box
                sx={{
                    display:'flex',
                    flexDirection:'row-reverse',
                    justifyContent:{xs:'center',md:'flex-srart'},
                    alignItems:'center'
                }}
                >
                    <img style={{margin:'10px'}} src='facebook.png' alt='.' />
                    <img style={{margin:'10px'}} src='twitter.png' alt='.' />
                    <img src='instagramm.png' alt='.' style={{margin:'10px'}} />

                </Box>
            </Box>
          
        </Box>
           
    );
}
 
export default Footer;
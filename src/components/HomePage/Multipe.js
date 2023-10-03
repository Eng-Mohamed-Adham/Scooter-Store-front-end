import { Box, Button, Typography } from "@mui/material";
import Title from "../../hooks/title";
import Note from "../../hooks/Note";


const data = [
    {
        text:'Material : Aluminium alloy',
    },
    {
        text:'Color : Black'
    },
    {
        text:'Capacity : 45lbs'
    },
    {
        text:'Ease : Steady & adjustable'
    },
]

const Multiple = () => {

    let title = 'Multiple Accessories'
    let text = 'There are multiple modes for the scooter for your multiple needs.'
    return (
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'50px',
            marginTop:'50px'

        }}
        >  
            <Title title={title} text={text} />
            <Box sx={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Box
            
                >
                <Typography variant="h3" className="multiple-golf" >
                        Golf Bag Rock
                    </Typography>
                    <Box sx={{display:'flex',flexDirection:'column'}}>
                        {data.map(item => (
                            <Note key={item.text} text={item.text} />
                        ))}
                    </Box>
                    
                </Box>
                <Box 
                        sx={{
                            display:'flex',
                            flexDirection:'row',
                            flexWrap:'wrap',
                            justifyContent:'center',
                            alignItems:'center'

                        }}
                       
                        >
                    <img
                

                    className="img-mobile" src="multiple1.png" alt="." />
                    <img src="multiple2.png" alt="." className="img-mobile" />

                </Box>
            </Box>
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'row',
                    flexWrap:'wrap',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Box 
                            sx={{
                                display:'flex',
                                flexDirection:'row',
                                flexWrap:'wrap',
                                justifyContent:'center',
                                alignItems:'center'

                            }}
                            >
                        <img className="img-mobile" src="multiple3.png" alt="." />
                        <img src="multiple4.png" alt="." className="img-mobile" />

                    </Box>

                    <Box
            
                >
                <Typography variant="h3" className="multiple-golf" >
                    Shopping Rock
                    </Typography>
                    <Box sx={{display:'flex',flexDirection:'column'}}>
                        {data.map(item => (
                            <Note key={item.text} text={item.text} />
                        ))}
                    </Box>
                    
                </Box>
            </Box>
            <Box>
                <Button variant="outlined" 
                sx={{
                    color:'#42454A',
                    background:'#fff',
                    border:'1px solid #42454A',
                    "&:hover":{
                        color:'#fff',
                        background:'#42454A',
                        border:'none',
                    }
                }}
                >
                    More Accessories Coming Soon
                </Button>
            </Box>
        </Box>
    );
}
 
export default Multiple;
import { Box,Rating, Typography } from "@mui/material";
import * as React from 'react';




const Testi = ({rating,text,img,name,title}) => {
    const [value, setValue] = React.useState(rating);


    let content = (
        <Box
        sx={{
            width:'360px',
            height:'366px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
            margin:'20px',

        }}
        >
            <Box
            sx={{
                margin:'10px',
                color:'#FE8B75 !important',

            }}
            >
                <Rating name="read-only" value={value} readOnly 
                    sx={{
                        color:'#FE8B75 !important',
                    }}
                />

            </Box>
        <Typography 
        variant="h6"

        sx={{
            color:'#42454A',
            fontSize:'20px',
            margin:'20px'
        }}
        >
            {text}
        </Typography>
        <Box>
            <Box sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                margin:'20px',

            }}>
         
            <img src={img} alt={name} />
                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                }}>

                <Typography             
                variant="h6"
                margin='20px' 
                sx={{
                    color:'#42454A',
                    fontWeight:'bold',
                    marginBottom:'0'
                    
                }}>
                        {name}
                    
                </Typography>
                <Typography
                    variant="h6"

                    sx={{
                    color:'#42454A',
                    fontSize:'15px',
                    marginTop:'0'

                    }}
                    >
                {title}
                </Typography>
                </Box>
               

               
            </Box>
        
        </Box>
        </Box>
    )
    return content
}
 
export default Testi;
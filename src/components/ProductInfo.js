import { Box, Typography } from "@mui/material";
import Title from "../hooks/title";
import Note from "../hooks/Note";

    const data = [
        {
            
            text:'Lightweight aircraft grade aluminium frame'
        },
        {
            
            text:'Car grade lithium battery'
        },
        {
            
            text:'Self-balanced'
        },
        {
            
            text:'Plug n play'
        },
        {
            
            text:'Quick release adapter'
        },
        {
            
            text:'RFID key card'
        },
    ]
const ProductInfo = () => {
        let title = 'Product Information'
        let text = 'Our Scooter has following unique design and technology features.'
        
    let content = (
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'center',
            
        }}>
            <img src='product-img.png' alt='.' className="img-mobile" />
            <Box>
                {
                    data.map(item => (
                        <Typography
                    variant="h6"
                    key={item.text}
                    >
                        <Note  text={item.text} />
                    </Typography>
                    ))
                }
            </Box>
        </Box>
    )
    return(
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
        }}>
            <Title title={title} text={text} />
                {content}
        </Box>
    )
}
 
export default ProductInfo;
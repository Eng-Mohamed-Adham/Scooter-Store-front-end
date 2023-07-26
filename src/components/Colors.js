import { Box } from "@mui/material";
import Title from "../hooks/title";
import Tap from "./Tap";



const Colors = () => {



  
    return (  
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center'
        }} 
        >
        <Title title='Colors' text='Checkout our products colors.' />
            <Tap />
        </Box>
    );
}
 
export default Colors;
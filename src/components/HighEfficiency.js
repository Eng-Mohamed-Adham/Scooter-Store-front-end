import { Box } from "@mui/material";
import Title from "../hooks/title";



const HighEfficiency = () => {
    let title = 'High Efficiency Motor'
    let text = 'More torque for powerful riding with 22% maximum hill climbing capability.'


    return (
        <Box
  

        sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
        }}>
            <Title title={title} text={text} />
            <img
          

            src="high-img.png" alt="." />
        </Box>
    );
}
 
export default HighEfficiency;
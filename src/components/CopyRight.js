import { Box, Typography } from "@mui/material";




const CopyRight = () => {

    let date = new Date();
    let year = date.getFullYear()

    return ( 
        
        <Box
        sx={{
            background:'#42454A',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'#fff'
        }}
        >
        <Typography variant="h6">
        © Copyright {year}. All rights reserved.
        </Typography>
    </Box>
    );
}
 
export default CopyRight;
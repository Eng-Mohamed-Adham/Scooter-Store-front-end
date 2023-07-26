import { Box, Typography } from "@mui/material";



const Title = ({title,text}) => {
    let content = (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center ',
            alignItems:'center',
            alignContent:'center',
            margin:'auto',
            marginTop:'70px',
            marginBottom:'50px',

        }}>
            <Typography variant="h1" className="title-hook">
                {title}
            </Typography>
            <Typography variant="h6" className="text-hook">
                {text}
            </Typography>
        </Box>
    )
    return content
}
 
export default Title;
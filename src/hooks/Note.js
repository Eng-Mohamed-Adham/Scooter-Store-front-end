import { Box, ButtonGroup, Typography } from "@mui/material";



const Note = ({text}) => {

    return (
        <Box 
        sx={{

        }}
        >
            <ButtonGroup variant="h5"  className="note-hook">
            <img src='Icon.png' alt={text}/>
                {text}
            </ButtonGroup>
        </Box>
    );
}
 
export default Note;
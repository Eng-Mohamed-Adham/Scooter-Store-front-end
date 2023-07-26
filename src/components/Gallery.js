
import { Box, Button } from '@mui/material';
import Title from '../hooks/title';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'


const Gallery = () => {
    let title = 'Gallery'
    let text = 'View gallery of our products and make yourself satisfied with our creation.'

    let content = (
        <Box 
        sx={{
            margin:'auto'
        }}
        >

                <Box
                sx={{
                    display:'flex',
                    flexDirection:'row',
                    flexWrap:'wrap',
                    justifyContent:'center',
                    alignItems:'center',

                }}
                >  
                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                }}
                > 
                <Box
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                }}
                >
                    <img
                    style={{
                        width:{xs:'fit-content',md:'max-width'}

                    }}
                    src='gallery2.png' alt='.'
                    className="img-mobile"
                    />

                </Box> 
                <Button className='btn-gallery img-mobile'>
                    Battery Images
                </Button>
                <Button className='btn-gallery img-mobile'>
                    Spare Parts Images
                </Button>
                <Button className='btn-gallery img-mobile'>
                    Charging Cable Images
                </Button>
                </Box>
                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'space-around'
                }}
                >
                    <img src='gallery1.png'  alt='.' className="img-mobile"/>
                    <img src='gallery3.png' alt='.' className="img-mobile" />
                </Box>

                </Box>
         
      </Box>
    )
    return (
        <Box>
            <Title title={title} text={text} />
            {content}
        </Box>
    );
}
 
export default Gallery;
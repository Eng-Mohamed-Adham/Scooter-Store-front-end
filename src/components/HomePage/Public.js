import { Box } from "@mui/system";
import NavBar from "./Navbar";
import Header from "./Header";
import ProductInfo from "./ProductInfo";
import HighEfficiency from "./HighEfficiency";
import Multiple from "./Multipe";
import Gallery from "./Gallery";
import Colors from "./Colors";
import Tap from "./Tap";
import Tesimonials from "./Testimonials";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import CopyRight from "./CopyRight";



const Public = () => {

    let content = (
        <Box>
            <NavBar />
            <Header />
            <ProductInfo />
            <HighEfficiency />
            <Multiple />
            <Gallery />
            <Colors />
            <Tesimonials />
            <Subscribe />
            <Footer />
            <CopyRight />
        </Box>
    )
    return content
}
 
export default Public;
import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./header";
const layout = ({ children }) => {
    return (
        <>
    <Header/>
    <Navbar />
        { children }
    <Footer />
    </>
      );
    }
    

export default layout;
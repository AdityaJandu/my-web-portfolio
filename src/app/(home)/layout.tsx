import Footer from "@/modules/home/components/layout/Footer";
import Navbar from "@/modules/home/components/layout/Navbar";


interface props {
    children: React.ReactNode;
}

const Layout = ({ children }: props) => {
    return (
        <>
          <Navbar />
            {children}
          <Footer />
        </>
    );
};

export default Layout;

import Navbar from "./Navbar"
import Footer from "./Footer"
const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Navbar />
            </header>
            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-gray-800 text-white">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
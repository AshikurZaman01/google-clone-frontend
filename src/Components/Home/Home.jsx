import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Roots from '../Roots/Roots';
import Footer from '../Footer/Footer';

const Home = () => {

    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}></Navbar>
                <Roots></Roots>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;
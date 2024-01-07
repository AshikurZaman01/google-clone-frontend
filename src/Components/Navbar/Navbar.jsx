import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";

const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div>
            <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
                <div className="flex justify-between items-center space-x-5 w-screen">
                    <Link to={'/'}>
                        <p className="text-2xl font-bold bg-blue-500 py-1 px-2 rounded flex items-center justify-center gap-1 dark:bg-gray-500 dark:text-gray-900">Goolge <CiSearch /></p>
                    </Link>

                    <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-2xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">
                        {darkTheme ? <GoSun /> : <FaRegMoon />}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Navbar;
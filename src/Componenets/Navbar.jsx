import { BsQuestion, BsGearFill } from 'react-icons/bs';
import { FaLock, FaPoo } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="top-0 left-0 h-16 w-screen m-0
                        flex flex-row
                        bg-gray-900 text-white shadow">
            <NavBarIcon icon={<BsQuestion size="28"/>} text="About"/>
            <NavBarIcon icon={<FaLock size="28"/>} text="Login"/>
        </div>
    )
}

const NavBarIcon = ({ icon, text }) => {
    return (
        <div className="navbar-icon group">
            {icon}
            <span className="navbar-tooltip group-hover:scale-100 z-50">
                {text}
            </span>
        </div>
    )
}

export default Navbar
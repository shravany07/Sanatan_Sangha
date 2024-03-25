import '../styles/navBar.css'
import logo from '../assets/logo.png'
import SearchBox from "./SearchBar.component";
import ImageAvatars from "./profile.component";
import LanguageIcon from '@mui/icons-material/Language';
const NavBarComponent=()=>{
    return(
        <div className="nav-box-container">
            <img src={logo} alt="Logo" className="nav-bar-logo"/>
            <div className="menu-box">
                <div className="menu-item">Home</div>
                <div className="menu-item">Category</div>
                <div className="menu-item">Contact</div>
                <div className="menu-item">About-Us</div>
                <div className="search-box"><SearchBox/></div>
                <div className="menu-item" ><LanguageIcon/></div>
                <div className="profile-pic"><ImageAvatars/></div>
            </div>
        </div>
    )
}

export default NavBarComponent
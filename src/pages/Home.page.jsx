import '../styles/homePage.css'
import NavBarComponent from "../Components/NavBar.component";
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic 4.jpg'



const HomePage = () => {
    return (
        <>
            <NavBarComponent/>
            <div className='image-container'>
                <div className="img-box-1">
                    <img src={pic2}   alt="title 1 "/>
                </div>
                <div className="img-box-1">
                    <img src={pic3}  alt="title 2"/>
                </div>
                <div className="img-box-1">
                    <img src={pic1}  alt="title 3"/>
                </div>
                <div className="img-box-1">
                    <img src={pic4}  alt="title 4"/>
                </div>

            </div>
        </>

    )
};

export default HomePage
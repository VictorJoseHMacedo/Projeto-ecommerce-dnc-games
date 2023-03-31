import './index.scss'
import banner1 from "../../assets/banner-1.png";
import banner2 from "../../assets/banner-2.png";
import banner3 from "../../assets/banner-3.png";
import banner4 from "../../assets/banner-4.png";

const Banner = () => {
  return (
    <div className="carrosel"  id='next'>
        <div className="container-banner" id='img'>
            <img src={banner1} alt='banner 1' />
            <img src={banner2} alt='banner 2' />
            <img src={banner3} alt='banner 3' />
            <img src={banner4} alt='banner 4' />


        </div>
    </div>
  )
}


export default Banner
import './style.scss';
import Larissa from '../../assets/larissa.jpeg';


const Banner = ({ children }) => {
  return (
    <>
      <section id="banner">
        <div className="imglari">
          <img src={Larissa} alt="lari" />
        </div>
        <div className="banner-text">
          {children}
        </div>
      </section>
    </>
  )
}

export default Banner;
import '../assets/css/animate.css';
import '../assets/css/bootsnav.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/linearicons.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/owl.theme.default.min.css';
import '../assets/css/responsive.css';
import '../assets/css/style.css';
function Brand() {
  return (
		<section id="brand" className="brand">
    <div className="container">
      <div className="brand-area">
        <div className="owl-carousel owl-theme brand-item">
          <div className="item">
            <a href="/">
              <img src={require("../assets/images/brand/br1.png")} alt="person" />
            </a>
          </div>
          {/*/.item*/}
          <div className="item">
            <a href="/">
              <img src={require("../assets/images/brand/br2.png" )}alt="person" />
            </a>
          </div>
          {/*/.item*/}
          <div className="item">
            <a href="/">
              <img src={require("../assets/images/brand/br3.png")} alt="person" />
            </a>
          </div>
          {/*/.item*/}
          <div className="item">
            <a href="/">
              <img src={require("../assets/images/brand/br4.png" )}alt="person" />
            </a>
          </div>
          {/*/.item*/}
          <div className="item">
            <a href="/">
              <img src={require("../assets/images/brand/br5.png" )}alt="person" />
            </a>
          </div>
          {/*/.item*/}
          <div className="item">
            <a href="/">
              <img src={require("../assets/images/brand/br6.png")} alt="person" />
            </a>
          </div>
          {/*/.item*/}
        </div>
        {/*/.owl-carousel*/}
      </div>
      {/*/.clients-area*/}
    </div>
    {/*/.container*/}
  </section>
  );
}

export default Brand;
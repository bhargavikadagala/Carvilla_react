
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

function NewCars() {
  return (
		<section id="new-cars" className="new-cars">
    <div className="container">
      <div className="section-header">
        <p>
          checkout <span>the</span> latest cars
        </p>
        <h2>newest cars</h2>
      </div>
      {/*/.section-header*/}
      <div className="new-cars-content">
        <div className="owl-carousel owl-theme" id="new-cars-carousel">
          <div className="new-cars-item">
            <div className="single-new-cars-item">
              <div className="row">
                <div className="col-md-7 col-sm-12">
                  <div className="new-cars-model">
									
                    <img src="../assets/images/new-cars-model/ncm1.png" alt="img"/>
									
                  </div>
                  {/*/.new-cars-img*/}
                </div>
                <div className="col-md-5 col-sm-12">
                  <div className="new-cars-txt">
                    <h2>
                      <a href="/">
                        chevrolet camaro <span> za100</span>
                      </a>
                    </h2>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="new-cars-para2">
                      Sed ut pers unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium.
                    </p>
                    <button
                      className="welcome-btn new-cars-btn"
                      onclick="window.location.href='#'"
                    >
                      view details
                    </button>
                  </div>
                  {/*/.new-cars-txt*/}
                </div>
                {/*/.col*/}
              </div>
              {/*/.row*/}
            </div>
            {/*/.single-new-cars-item*/}
          </div>
          {/*/.new-cars-item*/}
          <div className="new-cars-item">
            <div className="single-new-cars-item">
              <div className="row">
                <div className="col-md-7 col-sm-12">
                  <div className="new-cars-img">
                    <img src={require("../assets/images/new-cars-model/ncm2.png")}alt="img" />
                  </div>
                  {/*/.new-cars-img*/}
                </div>
                <div className="col-md-5 col-sm-12">
                  <div className="new-cars-txt">
                    <h2>
                      <a href="/">BMW series-3 wagon</a>
                    </h2>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="new-cars-para2">
                      Sed ut pers unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium.
                    </p>
                    <button
                      className="welcome-btn new-cars-btn"
                      onclick="window.location.href='#'"
                    >
                      view details
                    </button>
                  </div>
                  {/*/.new-cars-txt*/}
                </div>
                {/*/.col*/}
              </div>
              {/*/.row*/}
            </div>
            {/*/.single-new-cars-item*/}
          </div>
          {/*/.new-cars-item*/}
          <div className="new-cars-item">
            <div className="single-new-cars-item">
              <div className="row">
                <div className="col-md-7 col-sm-12">
                  <div className="new-cars-img">
                    <img src="/static/media/ncm3.42ef491fbac9f84ae9b4.png" alt="img"/>
                  </div>
                  {/*/.new-cars-img*/}
                </div>
                <div className="col-md-5 col-sm-12">
                  <div className="new-cars-txt">
                    <h2>
                      <a href="/">ferrari 488 superfast</a>
                    </h2>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="new-cars-para2">
                      Sed ut pers unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium.
                    </p>
                    <button
                      className="welcome-btn new-cars-btn"
                      onclick="window.location.href='#'"
                    >
                      view details
                    </button>
                  </div>
                  {/*/.new-cars-txt*/}
                </div>
                {/*/.col*/}
              </div>
              {/*/.row*/}
            </div>
            {/*/.single-new-cars-item*/}
          </div>
          {/*/.new-cars-item*/}
        </div>
        {/*/#new-cars-carousel*/}
      </div>
      {/*/.new-cars-content*/}
    </div>
    {/*/.container*/}
  </section>
  );
}

export default NewCars;

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

function ClientsSay() {
  return (
		<section id="clients-say" className="clients-say">
    <div className="container">
      <div className="section-header">
        <h2>what our clients say</h2>
      </div>
      {/*/.section-header*/}
      <div className="row">
        <div className="owl-carousel testimonial-carousel">
          <div className="col-sm-3 col-xs-12">
            <div className="single-testimonial-box">
              <div className="testimonial-description">
                <div className="testimonial-info">
                  <div className="testimonial-img">
                    <img src={require("../assets/images/clients/c1.png")}alt="person" />
                  </div>
                  {/*/.testimonial-img*/}
                </div>
                {/*/.testimonial-info*/}
                <div className="testimonial-comment">
                  <p>
                    Sed ut pers unde omnis iste natus error sit voluptatem
                    accusantium dolor laudan rem aperiam, eaque ipsa quae ab
                    illo inventore verit.
                  </p>
                </div>
                {/*/.testimonial-comment*/}
                <div className="testimonial-person">
                  <h2>
                    <a href="/">tomas lili</a>
                  </h2>
                  <h4>new york</h4>
                </div>
                {/*/.testimonial-person*/}
              </div>
              {/*/.testimonial-description*/}
            </div>
            {/*/.single-testimonial-box*/}
          </div>
          {/*/.col*/}
          <div className="col-sm-3 col-xs-12">
            <div className="single-testimonial-box">
              <div className="testimonial-description">
                <div className="testimonial-info">
                  <div className="testimonial-img">
                    <img src={require("../assets/images/clients/c2.png")} alt="person" />
                  </div>
                  {/*/.testimonial-img*/}
                </div>
                {/*/.testimonial-info*/}
                <div className="testimonial-comment">
                  <p>
                    Sed ut pers unde omnis iste natus error sit voluptatem
                    accusantium dolor laudan rem aperiam, eaque ipsa quae ab
                    illo inventore verit.
                  </p>
                </div>
                {/*/.testimonial-comment*/}
                <div className="testimonial-person">
                  <h2>
                    <a href="/">romi rain</a>
                  </h2>
                  <h4>london</h4>
                </div>
                {/*/.testimonial-person*/}
              </div>
              {/*/.testimonial-description*/}
            </div>
            {/*/.single-testimonial-box*/}
          </div>
          {/*/.col*/}
          <div className="col-sm-3 col-xs-12">
            <div className="single-testimonial-box">
              <div className="testimonial-description">
                <div className="testimonial-info">
                  <div className="testimonial-img">
                    <img src={require("../assets/images/clients/c3.png")}alt="person" />
                  </div>
                  {/*/.testimonial-img*/}
                </div>
                {/*/.testimonial-info*/}
                <div className="testimonial-comment">
                  <p>
                    Sed ut pers unde omnis iste natus error sit voluptatem
                    accusantium dolor laudan rem aperiam, eaque ipsa quae ab
                    illo inventore verit.
                  </p>
                </div>
                {/*/.testimonial-comment*/}
                <div className="testimonial-person">
                  <h2>
                    <a href="/">john doe</a>
                  </h2>
                  <h4>washington</h4>
                </div>
                {/*/.testimonial-person*/}
              </div>
              {/*/.testimonial-description*/}
            </div>
            {/*/.single-testimonial-box*/}
          </div>
          {/*/.col*/}
        </div>
        {/*/.testimonial-carousel*/}
      </div>
      {/*/.row*/}
    </div>
    {/*/.container*/}
  </section>
  );
}

export default ClientsSay;
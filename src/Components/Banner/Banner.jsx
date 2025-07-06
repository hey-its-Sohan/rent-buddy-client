import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import celebration from '../../assets/celebration.jpg'
import banner2 from '../../assets/banner2.jpg'
import verified from '../../assets/verified.jpg'
import nearbyRoomies from '../../assets/nearbyRoomies.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router';
const Banner = () => {
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoHeight={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* slider 1 */}
          <SwiperSlide>
            <div
              className="hero h-[500px] mb-10"
              style={{
                backgroundImage:
                  `url(${banner2})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-2xl">
                  <h1 className="mb-5 text-4xl font-bold">Find Your Perfect Roommate.</h1>
                  <p className="mb-5">
                    Connect with like-minded roommates based on <br /> budget, lifestyle, and location.
                  </p>
                  <button className="btn shadow-none border-none bg-cyan-500 text-white">Get Started</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* slider 2 */}
          <SwiperSlide>
            <div
              className="hero h-[500px] mb-10"
              style={{
                backgroundImage:
                  `url(${nearbyRoomies})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-4xl font-bold">Smart Filters. Real People.</h1>
                  <p className="mb-5">
                    Use location, rent, and lifestyle preferences to <br />find your ideal match.
                  </p>
                  <Link to={'/browseListing'}><button className="btn shadow-none border-none bg-cyan-500 text-white">Browse Listings</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* slider 3 */}
          <SwiperSlide>
            <div
              className="hero h-[500px] mb-10"
              style={{
                backgroundImage:
                  `url(${verified})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-2xl">
                  <h1 className="mb-5 text-4xl font-bold">Verified Roommates You Can Trust.</h1>
                  <p className="mb-5">
                    Every profile goes through checks, so you can <br /> feel safe and confident.
                  </p>
                  <button className="btn shadow-none border-none bg-cyan-500 text-white">Learn More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* slider 4 */}
          <SwiperSlide>
            <div
              className="hero h-[500px] mb-10"
              style={{
                backgroundImage:
                  `url(${celebration})`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-3xl font-bold">Your New Chapter Starts Here</h1>
                  <p className="mb-5">
                    From matching to move-in—RentBuddy helps <br />every step of the way.
                  </p>
                  <Link to={"/addPost"}><button className="btn shadow-none border-none bg-cyan-500 text-white ">Add Your Listing</button></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>

      </div>






      {/* <div
        className="hero h-[500px] mb-10"
        style={{
          backgroundImage:
            `url(${bannerCover})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default Banner;
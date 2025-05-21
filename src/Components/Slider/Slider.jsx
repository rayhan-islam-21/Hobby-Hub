import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useTypewriter } from "react-simple-typewriter";
import human from "../../assets/Humaaans - Friend Meeting.png";
import AuthContext from "../../AuthContext/AuthContext";

export const Slider = () => {
  const { user, loading } = useContext(AuthContext);
  const [text] = useTypewriter({
    words: [`${user?.displayName}`],
    loop: 0,
  });
  const [text2] = useTypewriter({
    words: ["Hobbyists"],
    loop: 0,
  });

  return (
    <div className="w-full max-w-[1260px] h-64 lg:h-[400px] mx-auto my-4">
      {" "}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
         autoplay={{
          delay: 4000,
          disableOnInteraction: false,
       }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        <SwiperSlide className="text-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center justify-center px-6 md:px-10 py-4 gap-6">
            {/* Left: Text Section */}
            <div className="flex flex-col items-center md:items-start justify-center h-full lg:gap-4 md:gap-3 gap-2 text-center md:text-left">
              {loading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : user?.photoURL ? (
                <>
                  <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
                    Welcome back, <span className="text-red-500">{text}</span>!
                  </h1>
                  <p className=" md:text-lg lg:flex md:flex hidden text-gray-300 max-w-md">
                    Explore a community built around hobbies you love. Let your
                    passion grow!
                  </p>
                </>
              ) : (
                <>
                  <h1 className=" text-lg lg:text-2xl md:text-3xl font-bold leading-tight">
                    The Biggest Community of{" "}
                    <span className="text-red-600 md:text-2xl lg:text-2xl">{text2}</span>
                  </h1>
                  <p className="md:text-lg text-xl lg:flex md:flex hidden opacity-75 max-w-md">
                    Discover new interests, share your talents, and find your
                    people — all in one place.
                  </p>
                </>
              )}
            </div>

            {/* Right: Image Section */}
            <div className="flex justify-center md:justify-end">
              <img
                src={human}
                alt="Illustration of people"
                className="max-h-[220px] md:max-h-[300px] w-auto object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative text-white">
          <img
            src="https://i.ibb.co/5h7ybh22/sujith-devanagari-Yev4-Py-Yn-ZC4-unsplash.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover object-center absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-opacity-50 z-10 flex flex-col items-center justify-center px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Fuel Your Passion
            </h2>
            <p className="text-xs md:text-lg mt-2 max-w-xl">
              Find your tribe and turn your hobbies into lifelong friendships.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative text-white">
          <img
            src="https://i.ibb.co/cznVTYB/smiling-asian-traveller-tourist-girl-face-mask-standing-near-suitcase-with-two-tickets-passpo.jpg"
            alt="Slide 2"
            className="w-full h-full md:object-cover object-center lg:object-cover absolute inset-0 z-0"
          />
          <div className="absolute inset-0  bg-opacity-50 z-10 flex flex-col items-center justify-center px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Travel Meets Community
            </h2>
            <p className="text-xs md:text-lg mt-2 max-w-xl">
              Share your journeys and discover fellow travel lovers nearby.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative text-white">
          <img
            src="https://i.ibb.co/0j42ZWyY/sarah-b-O2-GCr83q-Cdg-unsplash.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover object-center absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-opacity-50 z-10 flex flex-col items-center justify-center px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Create with Confidence
            </h2>
            <p className="text-xs md:text-lg mt-2 max-w-xl">
              Connect with artists, photographers, and creators just like you.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative text-white">
          <img
            src="https://i.ibb.co/zTT0TFwZ/nick-fewings-o-TRC4-C6-HZb-M-unsplash.jpg"
            alt="Slide 4"
            className="w-full h-full object-cover object-center absolute inset-0 z-0"
          />
          <div className="absolute inset-0  bg-opacity-50 z-10 flex flex-col items-center justify-center px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Your Hobby, Your Story
            </h2>
            <p className="text-xs md:text-lg mt-2 max-w-xl">
              Be part of a movement that celebrates every unique passion.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

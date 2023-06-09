import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DonguOnboardingLogo from "../../assets/svgComponents/donguOnboardingLogoSvg";
import SlideContent from "./slideContent";
import DonguSmallLogoSvg from "../../assets/svgComponents/donguOnboardingSmallLogoSvg";
import OnboardingMiddleLogo1 from "../../assets/svgComponents/onBoadringMiddleLogo1";
import OnboardingMiddleLogo2 from "../../assets/svgComponents/onboardingMiddleLogo2";
import OnboardingMiddleLogo3 from "../../assets/svgComponents/onboardingMiddleLogo3";
import OnboardingMiddleLogo4 from "../../assets/svgComponents/onboardingMiddleLogo4";
// import styles from './onboarding.module.css'
import "./onboarding.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

interface SliderRef {
  slickGoTo: (slideId: number) => void;
  slickNext: () => void;
}

const Onboarding = () => {
  // used ref to go to last slide
  const sliderRef = useRef<SliderRef>();
  console.log(sliderRef);
  // hide dots on the last slide
  const [isHideDots, setIsHideDots] = useState(false);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: !isHideDots,
    centerPadding: "0px",
    centerMode: true,
    afterChange: (currentSlide: number) => {
      setIsHideDots(currentSlide === 4);
    },
  };

  const goToLastSlide = () => {
    sliderRef.current?.slickGoTo(4);
  };
  const goToNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const slideContent = [
    {
      top: <DonguOnboardingLogo />,
      middle: (
        <p className="font-normal w-[264px] h-[120px] mt-16 text-xl leading-[30px] text-center">
          Gıda israfıyla savaşmak, gezegenimizi korumak için çıktığımız
          yolculukta <br /> <b>aramıza hoş geldin!</b>
        </p>
      ),
      src: "/onboardingBottom1.svg",
      desc: "Sana yakın restoran ve kafelerden birini seç.",
    },
    {
      top: <DonguSmallLogoSvg />,
      middle: <OnboardingMiddleLogo1 className="mt-[25px]" />,
      src: "/onboardingBottom2.svg",
      desc: "Paketini rezerve et.",
    },
    {
      top: <DonguSmallLogoSvg />,
      middle: <OnboardingMiddleLogo2 className="mt-[25px]" />,
      src: "/onboardingBottom3.svg",
      desc: "Online ödeme yöntemi ile siparişini tamamlayabilirsin.",
    },
    {
      top: <DonguSmallLogoSvg />,
      middle: <OnboardingMiddleLogo3 className="mt-[25px]" />,
      src: "/onboardingBottom4.svg",
      desc: "Paketini restorandan alabilirsin ya da restoran sana göndersin.",
    },
    {
      top: <DonguSmallLogoSvg />,
      middle: <OnboardingMiddleLogo4 className="mt-[54px]" />,
      src: "/onboardingBottom5.svg",
      desc: "Gezegenimizi korumak için çıktığımız bu yolda bizi yalnız bırakmadığın için teşekkürler!",
    },
  ];

  return (
    <div className="myCustomSlider">
      <Slider {...settings} ref={sliderRef as React.LegacyRef<Slider>}>
        {slideContent.map((item, index) => {
          return (
            <SlideContent
              top={item.top}
              middle={item.middle}
              src={item.src}
              desc={item.desc}
              key={index}
            />
          );
        })}
      </Slider>
      <div className=" w-full fixed bottom-[42px] left-0 font-poppins font-medium text-base">
        <div className="w-full text-base font-medium text-primary-text">
          {!isHideDots ? (
            <div className="flex items-center justify-between w-full">
              <button
                className="h-6  text-center ml-[23px]"
                onClick={() => goToLastSlide()}
              >
                Tümünü Geç
              </button>
              <button
                className="w-[107px] h-12 rounded-[36px] bg-[#EEF2F9] text-center mr-[19px]"
                onClick={() => goToNextSlide()}
              >
                Devam
              </button>
            </div>
          ) : (
            <div className="pl-5 pr-5">
              <Link to="/home">
                <button
                  onClick={() => localStorage.setItem("onboarding", "false")}
                  className="h-12 bg-[#8FD89F] text-[#FFFFFF] block w-full rounded-full text-center"
                >
                  Hadi Başlayalım!
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

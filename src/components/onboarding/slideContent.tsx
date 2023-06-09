interface SlideContentType {
  top: JSX.Element;
  middle: JSX.Element;
  src: string;
  desc: string;
}

const SlideContent = ({ top, middle, src, desc }: SlideContentType) => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen font-poppins">
      <div className="h-[469px] w-full pt-[108px]">
        <div className="flex justify-center ">{top}</div>
        <div className="flex justify-center">{middle}</div>
      </div>

      <div className="flex flex-col items-center flex-1 w-full">
        <div
          className={`w-full flex h-[97px]`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: `left top`,
            backgroundAttachment: "scroll",
          }}
        ></div>
        <p className="text-[#F38262] w-[260px] font-semibold text-xl leading-[30px] text-center">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SlideContent;


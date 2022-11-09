import './Banner.css';
// import bannerBg from '../../../assets/banner/bannerBg.jpg';

const Banner = () => {

  return (
    <div className="banner h-96 lg:h-[500px] bg-cover relative flex items-center justify-center text-white text-center rounded-lg mx-5">
      <div className='absolute z-10'>
        <h4 className='text-xl md:text-2xl'>Welcome to</h4>
        <h1 className='text-3xl md:text-5xl font-semibold'>SK Consultancy</h1>
      </div>
    </div>
  );
}

export default Banner;

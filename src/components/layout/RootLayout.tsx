import Header from './Header';
import Footer from './Footer/index';
import { Outlet } from 'react-router-dom';
import './SiteLayout.scss';
// import MainSliderOne from './MainSlider';
import './MainSlider/index';
const RootSiteLayout = () => {
  return (
    <div className='main' id='main'>
      <Header />
      {/* <MainSliderOne/> */}
      <Outlet />
      {/* <MainSliderOne/> */}

      <Footer />
    </div>
  );
};

export default RootSiteLayout;

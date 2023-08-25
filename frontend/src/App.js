import './App.css';
import ContactUs from './components/pages/ContactUs/ContactUs';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnnouncementBar from './components/announcement-bar/AnnouncementBar';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import NewReleases from './components/pages/NewReleases/NewReleases';
// import Grid4 from './components/grid/Grid4';
import Chains from './components/pages/Chains/Chains';
import Rings from './components/pages/Rings/Rings';
import Bracelets from './components/pages/Bracelets/Bracelets';
import FAQs from './components/pages/FAQs/FAQs';
import ProductDescription from './components/pages/Product description/ProductDescription';
import Account from './components/pages/Account/Account';
import SignUp from './components/SignUp/SignUp';
import Checkout from './components/Checkout/Checkout'
import SecondaryNav from './components/SecondaryNav/SecondaryNav';
import ComingSoon from './components/ComingSoon/ComingSoon';
import ReturnRefund from './components/pages/ReturnRefund/ReturnRefund';
import WarrantyCoverage from './components/pages/WarrantyCoverage/WarrantyCoverage';
import LimitedDrops from './components/pages/LimitedDrops/LimitedDrops';
import BraceletDescription from './components/pages/bracelet-description/BraceletDescription';
import ChainDescription from './components/pages/chain description/ChainDescription'
import CheckoutSuccess from './components/Checkout success/CheckoutSuccess'
import AdminPanel from './AdminPanel/AdminPanel';
import LimitedDropsDescription from './components/pages/limited Drop Description/LimitedDropsDescription'
import NewReleasesDescription from './components/pages/NewReleases Description/NewReleasesDescription';
import PendantDescription from './components/pages/pendants/PendantDescription';
import RingsProduct from './AdminPanel/RingsProduct';
import Orders from './AdminPanel/Orders';
import PrivateRoutes from './features/PrivateRoutes';
import CheckoutCart from './components/CheckoutCart/CheckoutCart'

import BraceletGrid from './components/braceletGrid/BraceletGrid';
import RingGrid from './components/ringGrid/RingGrid';
import ChainGrid from './components/chainGrid/ChainGrid';
import RingSortingBar from './components/ringSortingBar/RingSortingBar';
import BraceletSortingBar from './components/braceletSortingBar/BraceletSortingBar';

import AuthorisedRoutes from './features/AuthorizedRoutes';
import Users from './AdminPanel/Users';
import Pendants from './components/pages/pendants/Pendants';
import PendantGrid from './components/pages/pendants/PendantGrid';


import StickyNav from './components/StickyNav';
import NewReleaseGrid from './components/newReleaseGrid/NewReleaseGrid';
import LimitedDropGrid from './components/limitedDropsGrid/LimitedDropsGrid';
import LimitedDropGridSortingBar from './components/limitedDropGridSortingBar/LimitedDropGridSortingBar';





function App() {
  return (
    <Router>
      <AnnouncementBar />
      <StickyNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/new-releases' element={<NewReleases />} />
        {/* <Route path='/grid4*4' element={<Grid4 />} /> */}
        <Route path='/bracelet-grid' element={<BraceletGrid />} />
        <Route path='/ring-grid' element={<RingGrid />} />
        <Route path='/pendant-grid' element={<PendantGrid />} />
        <Route path='/chain-grid' element={<ChainGrid />} />
        <Route path='/limited-drop-grid' element={<LimitedDropGrid />} />
        <Route path='/new-release-grid' element={<NewReleaseGrid />} />
        <Route path='/limited-drop-grid-sorting-bar' element={<LimitedDropGridSortingBar />} />

        <Route path='/ring-sorting' element={<RingSortingBar />} />
        <Route path='/bracelet-sorting' element={<BraceletSortingBar />} />
        
        <Route path='/Pendants' element={<Pendants />} />
        <Route path='/chains' element={<Chains />} />
        <Route path='/Rings' element={<Rings />} />
        <Route path='/Bracelets' element={<Bracelets />} />
        <Route path='/faq' element={<FAQs />} />
        <Route path='/product-description/:id' element={<ProductDescription />} />
        <Route path='/bracelet-description/:id' element={<BraceletDescription />} />
        <Route path='/chain-description/:id' element={<ChainDescription />} />
        <Route path='/account/login' element={<Account />} />
        <Route path='/account/signup' element={<SignUp />} />
        
        
        <Route path='/checkout' element={<Checkout />} />
        
        
        <Route path='/coming-soon' element={<ComingSoon />} />
        <Route path='/warranty-coverage' element={<WarrantyCoverage />} />
        <Route path='/return-refund' element={<ReturnRefund />} />
        <Route path='/limited-drops' element={<LimitedDrops />} />

        <Route element={<AuthorisedRoutes />}>
        <Route path='/Admin-panel' element={<AdminPanel />} />
        <Route path='/admin-panel/orders' element={<Orders />} />
        <Route path='/admin-panel/users' element={<Users />} />
        </Route>

        <Route path='/faq' element={<FAQs />} />
        <Route path='/product-description/:id' element={<ProductDescription />} />
        <Route path='/bracelet-description/:id' element={<BraceletDescription />} />
        <Route path='/chain-description/:id' element={<ChainDescription />} />
        <Route path='/limitedDrop-description/:id' element={<LimitedDropsDescription />} />
        <Route path='/newReleases-description/:id' element={<NewReleasesDescription />} />
        <Route path='/pendant-description/:id' element={<PendantDescription />} />
        <Route path='/account/login' element={<Account />} />
        <Route path='/account/signup' element={<SignUp />} />
        <Route path='/coming-soon' element={<ComingSoon />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkout-success' element={<CheckoutSuccess />} />
        <Route path='/warranty-coverage' element={<WarrantyCoverage />} />
        <Route path='/return-refund' element={<ReturnRefund />} />
        <Route path='/limited-drops' element={<LimitedDrops />} />
        <Route path='/ring-product' element={<RingsProduct />} />

        

        <Route path='/checkout-cart' element={<CheckoutCart />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

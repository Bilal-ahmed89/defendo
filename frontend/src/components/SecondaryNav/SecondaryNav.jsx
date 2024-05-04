import React, { useEffect, useState } from 'react';
import './SecondaryNavStyles.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useSearchProductsQuery } from '../../features/search';
import { selectCurrentToken } from '../../features/authSlice';
import { useSelector } from 'react-redux';
function SecondaryNav() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const url = `products?search=${searchQuery}`
  const { data, error, isLoading } = useSearchProductsQuery(url)
  const token = useSelector(selectCurrentToken)
  const handleSearch = async () => {

    try {

      setSearchResults(
        (data?.braceletDetails || []).concat(
          data?.chainDetails || [],
          data?.limitedDropDetails || [],
          data?.ringDetails || [],
          data?.newReleaseDetails || []
        )
      )
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  };
  useEffect(() => {

    const offCanvas = document.getElementById('offcanvasRight');
    if (offCanvas) {
      const offCanvasCloseButton = offCanvas.querySelector('.btn-close');
      if (offCanvasCloseButton) {
        offCanvasCloseButton.click();
      }
    }
  }, [window.location.pathname]);



  return (

    <div className="secondary-nav-wrapper ">
      <div className="row p-1">
        <div className="container p-0 px-4">
          <div className="col-md-2 col-sm-none"></div>
          <div className="col-md-8 col-lg-8 mid col-sm-10">
            <ul className='p-0 my-2 parent'>

              <li className='list-none '>
                <div className="dropdown2">
                  <div className='dropdown2-btn btn text-dark text-uppercase'>
                   <span> category</span>  <i className="bi bi-chevron-down down-arrow mx-1"></i>
                  </div>
                  <div className="dropmenu2">
                    <div className="row p-3">
                      <div className="col-md-4 left-col">
                        <ul className='p-1'>
                          <h5 className='text-uppercase fs-6 fw-bold p-1 mb-3 fs-5'>outwear</h5>

                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/coming-soon">Shirts</Link><span style={{ fontSize: '10px', textDecoration: 'underline' }} className='text-dark p-1 rounded-1 ms-4 '>Coming Soon</span></li>
                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/coming-soon">T-shirts</Link><span style={{ fontSize: '10px', textDecoration: 'underline' }} className='text-dark p-1  rounded-1 ms-4 '>Coming Soon</span></li>
                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/coming-soon">Hoodies</Link> <span style={{ fontSize: '10px', textDecoration: 'underline' }} className='text-dark p-1 rounded-1 ms-4 '>Coming Soon</span></li>
                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/coming-soon">Track suits</Link> <span style={{ fontSize: '10px', textDecoration: 'underline' }} className='text-dark p-1 rounded-1 ms-4 '>Coming Soon</span></li>
                        </ul>
                      </div>
                      <div className="col-md-4 mid-col">

                        <ul className='p-1'>
                          <h5 className='text-uppercase fs-6 fw-bold p-1 mb-3 fs-5'>Accessories</h5>

                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/Pendants">Pendants</Link></li>
                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/chains">Chains </Link></li>
                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/Rings">Rings </Link></li>
                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/Bracelets">Bracelets</Link></li>
                        </ul>
                      </div>
                      <div className="col-md-4 right-col">
                        <ul className='p-1'>
                          <h5 className='text-uppercase fs-6 fw-bold p-1 mb-3 fs-5'> pants</h5>

                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to='/coming-soon'>Trousers</Link><span style={{ fontSize: '10px', textDecoration: 'underline' }} className='text-dark p-1 rounded-1 ms-4 '>Coming Soon</span></li>
                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to='/coming-soon'>Shorts  </Link><span style={{ fontSize: '10px', textDecoration: 'underline' }} className='text-dark p-1 rounded-1 ms-4'>Coming Soon</span></li>
                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to='/coming-soon'>sweatpants</Link><span style={{ fontSize: '10px', textDecoration: 'underline' }} className='text-dark p-1  rounded-1 ms-4'>Coming Soon</span></li>
                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to='/coming-soon'>Jeans</Link><span style={{ fontSize: '10px', textDecoration: 'underline' }} className='text-dark p-1  rounded-1 ms-4'>Coming Soon</span></li>
                        </ul>

                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='list-none '>
                <div className="dropdown1">
                  <div className='dropdown1-btn btn text-dark text-uppercase'>
                   <span> All Collections</span> <i className="bi bi-chevron-down down-arrow mx-1"></i>
                  </div>
                  <div className="dropmenu1">
                    <ul className='p-1'>
                      <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/coming-soon">Jackets - coming soon </Link></li>
                      <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/coming-soon">Hoodies - coming soon </Link></li>
                      <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/coming-soon">Shirts - coming soon </Link></li>
                      <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/coming-soon">Track suits - coming soon</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <Link to="/coming-soon" className='text-decor noeffect'><li className='list-none text-uppercase me-4 d-none d-md-block p-1' ><span>The Resurrection</span></li></Link>



              <li className='list-none '>
                <div className="dropdown3">
                  <div className='dropdown3-btn btn text-dark text-uppercase'>
                   <span> about us</span> <i className="bi bi-chevron-down down-arrow mx-1"></i>
                  </div>
                  <div className="dropmenu3">
                    <ul className='p-1'>
                      <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/contact">Contact Us</Link></li>
                      <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/faq">FAQs</Link></li>
                      <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/warranty-coverage">Warranty Coverage</Link></li>
                      <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/return-refund">Returns & Refunds</Link></li>
                      {
                        token ?
                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to=""></Link></li>
                          :
                          <li className='list-none m-2'><Link className='text-decor fs-6 text-dark text-uppercase' to="/account/login">Account</Link></li>
                      }
                    </ul>
                  </div>
                </div>
              </li>

            </ul>
          </div>
          <div className="col-md-2 end m-1">

            <button class="btn w-25 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-search fs-5 mx-1 text-dark"></i></button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <button type="button" class="btn-close d-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              <div class="offcanvas-header">
              </div>
              <div class="offcanvas-body">
                <div className="search-input">
                  <input className='w-100 p-2' placeholder='Search' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                  <button type='submit' onClick={handleSearch} className='btn p-2 w-25'><i class="icon bi bi-search"></i></button>
                </div>

                {searchResults.length >= 1 && (
                  <div className='py-3 row m-0' >
                    {searchResults.map((item, idx) => (
                      <Link to={`/${item.productId}/${item._id}`} className='p-0'><div key={idx} className='d-flex mb-3 border border-dark p-0'>
                        <div className='col-3'>
                          <img src={item.img[0]} alt="" width='80' height='80' />
                        </div>
                        <div className="col-9">
                          <h6 className='text-center pt-2'>{item.name}</h6>
                          <p className='text-center'>{item.price}</p>
                        </div>
                      </div>
                      </Link>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondaryNav
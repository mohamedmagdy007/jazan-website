import React, { Fragment, useState } from "react";
import Logo1 from "../../../images/logo1@2x.png";
import Logo2 from "../../../images/logo2@2x.png";
import "./Navbar.css";
import SideBar from "./SideBar";
import Backdrop from "./Backdrop";
import { Link } from "react-router-dom";
// import { FaAlignRight } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, updateIsOpen] = useState(false);
  const toggleSidebar = () => {
    updateIsOpen((prevState) => !prevState);
  };
  return (
    <div className="navbar-background">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-8 col-lg-6 col-xl-4">
            <div className="d-flex justify-content-center">
              <img src={Logo2} alt="logo1" className="img-fluid logo-one" />
              <img src={Logo1} alt="logo2" className="img-fluid logo-two" />
            </div>
          </div>
          <div className="col-4 col-lg-6 col-xl-8">
            <ul className="itemsNavbar d-none d-xl-flex mb-0 justify-content-start">
              <li className="nav-item dropdown dropdown-one me-1 active">
                <span className=" dropdown-toggle">الرئيسية</span>
              </li>
              <li className="nav-item dropdown dropdown-one me-1">
                <Link to="/jazan_region" className=" dropdown-toggle">منطقة جازان</Link>
                <ul className="dropdown-menu dropdown-menu-two">
                  <li>
                    <a className="dropdown-item" href="#">
                      منطقة جازان
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      المحافظات
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      البلديات
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      المراكز
                    </a>
                  </li>
                </ul>
              </li>
              
              <li className="me-1 dropdown dropdown-two">
                <span className="dropdown-toggle">
                  المراصد الحضرية
                </span>
                <ul className="dropdown-menu dropdown-menu-two">
                  <li>
                    <a className="dropdown-item" href="#">
                      تاريخ المراصد
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      المراصد بالمملكة
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      مرصد جازان
                    </a>
                  </li>
                </ul>
              </li>
              <li className="me-1 dropdown dropdown-two">
                <span className=" dropdown-toggle">الفريق</span>
                <ul className="dropdown-menu dropdown-menu-two">
                  <li>
                    <a className="dropdown-item" href="#">
                      المجلس الاعلى
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      فريق العمل
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      شركائنا
                    </a>
                  </li>
                </ul>
              </li>
              <li className="me-1 dropdown dropdown-two">
                <span className="dropdown-toggle " role="button">
                  المكتبة الاعلامية
                </span>
                <ul className="dropdown-menu dropdown-menu-two">
                  <li className="dropdown dropend dropdown-three btn-group">
                    <span className="dropdown-item dropend dropdown-toggle ">
                      مكتبة الصور
                    </span>
                    <ul className="dropdown-menu  dropdown-menu-three">
                      <li>
                        <a className="dropdown-item" href="#">
                          زيارة المرصد لأبو عريش
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          زيارة المرصد لأبو عريش
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          زيارة المرصد لأبو عريش
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      مكتبة الفيديو
                    </a>
                  </li>
                </ul>
              </li>
              <li className="me-1">التقارير</li>
              <li className="me-1">اخبار المرصد</li>
              <li className="me-1 last-item" ><Link to="/contactus">اتصل بنا </Link></li>
            </ul>
            <button
              className="d-block d-xl-none m-auto button"
              onClick={toggleSidebar}
            >
              {/* <FaAlignRight /> */}
              ------
            </button>
          </div>
        </div>
      </div>
      <SideBar isOpen={isOpen} />
      <Backdrop toggle={() => toggleSidebar()} isOpen={isOpen} />
    </div>
  );
};

export default Navbar;

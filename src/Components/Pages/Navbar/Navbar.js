import React, { useState } from "react";
import Logo1 from "../../../images/logo1@2x.png";
import Logo2 from "../../../images/logo2@2x.png";
import "./Navbar.css";
import SideBar from "./SideBar";
import Backdrop from "./Backdrop";
import { Link } from "react-router-dom";
import JazanTab from "../Jazan-tab/JazanTab";
import "bootstrap/js/dist/tab";
import ProvincesTab from "../Jazan-tab/ProvincesTab";
import Municipalities from "../Jazan-tab/Municipalities";
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
                <Link to="/jazan_region" className=" dropdown-toggle">
                  منطقة جازان
                </Link>
                <ul className="dropdown-menu dropdown-menu-two">
                  <div
                    className="d-flex nav-tabs tabsNavbar text-center"
                    id="myTab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <span
                        className="dropdown-item nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                      >
                        منطقة جازان
                      </span>
                    </li>
                    <li class="nav-item" role="presentation">
                      <span
                        className="dropdown-item nav-link"
                        id="provinces-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#provinces-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="provinces-tab-pane"
                        aria-selected="false"
                      >
                        المحافظات
                      </span>
                    </li>
                    <li class="nav-item" role="presentation">
                      <span
                        className="dropdown-item nav-link"
                        id="municipalities-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#municipalities-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="municipalities-tab-pane"
                        aria-selected="false"
                      >
                        البلديات
                      </span>
                    </li>

                    <li class="nav-item" role="presentation">
                      <span
                        className="dropdown-item nav-link"
                        id="centers-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#centers-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="centers-tab-pane"
                        aria-selected="false"
                      >
                        المراكز
                      </span>
                    </li>
                  </div>
                  <div class="tab-content mt-2" id="myTabContent">
                    <JazanTab
                      classess={"tab-pane fade show active"}
                      id="home-tab-pane"
                      role="tabpanel"
                      arialabelledby="home-tab"
                      tabindex="0"
                    />
                    <ProvincesTab
                      classess={"tab-pane fade"}
                      id="provinces-tab-pane"
                      role="tabpanel"
                      arialabelledby="provinces-tab"
                      tabindex="0"
                    />
                    <Municipalities
                      classess={"tab-pane fade"}
                      id="municipalities-tab-pane"
                      role="tabpanel"
                      arialabelledby="municipalities-tab"
                      tabindex="0"
                    />
                  </div>
                </ul>
              </li>

              <li className="me-1 dropdown dropdown-two">
                <span className="dropdown-toggle">المراصد الحضرية</span>
                <ul className="dropdown-menu dropdown-menu-two">
                  <li>
                    <span className="dropdown-item">تاريخ المراصد</span>
                  </li>
                  <li>
                    <span className="dropdown-item">المراصد بالمملكة</span>
                  </li>
                  <li>
                    <span className="dropdown-item">مرصد جازان</span>
                  </li>
                  <li>
                    <sapn className="dropdown-item">الاطار العام للمؤشرات</sapn>
                  </li>
                </ul>
              </li>
              <li className="me-1 dropdown dropdown-two">
                <span className=" dropdown-toggle">الفريق</span>
                <ul className="dropdown-menu dropdown-menu-two">
                  <li>
                    <span className="dropdown-item">المجلس الاعلى</span>
                  </li>
                  <li>
                    <span className="dropdown-item">فريق العمل</span>
                  </li>
                  <li>
                    <span className="dropdown-item">شركائنا</span>
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
                        <span className="dropdown-item">
                          زيارة المرصد لأبو عريش
                        </span>
                      </li>
                      <li>
                        <span className="dropdown-item">
                          زيارة المرصد لأبو عريش
                        </span>
                      </li>
                      <li>
                        <span className="dropdown-item">
                          زيارة المرصد لأبو عريش
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="dropdown-item">مكتبة الفيديو</span>
                  </li>
                </ul>
              </li>
              <li className="me-1">التقارير</li>
              <li className="me-1">اخبار المرصد</li>
              <li className="me-1 last-item">
                <Link to="/contactus">اتصل بنا </Link>
              </li>
            </ul>
            <button
              className="d-block d-xl-none m-auto button"
              onClick={toggleSidebar}
            >
              {isOpen === true ? (
                <i class="fa-solid fa-xmark fs-2"></i>
              ) : (
                <i class="fa-solid fa-align-justify fs-2"></i>
              )}
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

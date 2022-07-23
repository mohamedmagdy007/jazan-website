import React, { useState } from "react";
import { Link } from "react-router-dom";

// import "bootstrap/js/dist/dropdown";

const SideBar = ({ isOpen }) => {
  const [dropdownOne, setDropdownOne] = useState(false);
  const [dropdownTwo, setDropdownTwo] = useState(false);
  const [dropdownThree, setDropdownThree] = useState(false);
  const [dropdownFour, setDropdownFour] = useState(false);
  const [dropdownFive, setDropdownFive] = useState(false);
  const dropdownOneHandler = () => {
    setDropdownOne((prevState) => !prevState);
  };
  const dropdownTwoHandler = () => {
    setDropdownTwo((prevState) => !prevState);
  };
  const dropdownThreeHandler = () => {
    setDropdownThree((prevState) => !prevState);
  };
  const dropdownFourHandler = () => {
    setDropdownFour((prevState) => !prevState);
  };
  const dropdownFiveHandler = () => {
    setDropdownFive((prevState) => !prevState);
  };
  return (
    <aside className={`d-block d-xl-none ${isOpen ? "sidebar-open" : null}`}>
      <ul className="itemsNavbar d-block d-xl-none">
        <li className="me-1 active">
          <span className="">الرئيسية</span>
        </li>
        <li
          className={`dropdown me-1 ${
            dropdownOne === true ? "dropup" : "dropdown"
          }`}
        >
          <Link
            to="/jazan_region"
            className=" dropdown-toggle"
            onClick={dropdownOneHandler}
          >
            منطقة جازان
          </Link>
          <ul
            className={`p-0 droplist ${
              dropdownOne === true ? "showddroplist" : "visually-hidden"
            }`}
          >
            <li>
              <Link to="/jazan" className="dropdown-item">
                منطقة جازان
              </Link>
            </li>
            <li>
              <Link to="/provinces" className="dropdown-item">
                المحافظات
              </Link>
            </li>
            <li>
              <Link to="/jazanMunici" className="dropdown-item">
                البلديات
              </Link>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                المراكز
              </a>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown me-1 ${
            dropdownTwo === true ? "dropup" : "dropdown"
          }`}
        >
          <span className=" dropdown-toggle" onClick={dropdownTwoHandler}>
            المراصد الحضرية
          </span>
          <ul
            className={`p-0 droplist ${
              dropdownTwo === true ? "showddroplist" : "visually-hidden"
            }`}
          >
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
              <span className="dropdown-item">الاطار العام للمؤشرات</span>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown me-1 ${
            dropdownThree === true ? "dropup" : "dropdown"
          }`}
        >
          <span className=" dropdown-toggle" onClick={dropdownThreeHandler}>
            الفريق
          </span>
          <ul
            className={`p-0 droplist ${
              dropdownThree === true ? "showddroplist" : "visually-hidden"
            }`}
          >
            <li>
              <sapn className="dropdown-item">المجلس الاعلى</sapn>
            </li>
            <li>
              <sapn className="dropdown-item">فريق العمل</sapn>
            </li>
            <li>
              <span className="dropdown-item">شركائنا</span>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown me-1 ${
            dropdownFour === true ? "dropup" : "dropdown"
          }`}
        >
          <span className="dropdown-toggle " onClick={dropdownFourHandler}>
            المكتبة الاعلانية
          </span>
          <ul
            className={`p-0 droplist ${
              dropdownFour === true ? "showddroplist" : "visually-hidden"
            }`}
          >
            <li className={`dropend me-1`}>
              <span
                className="dropdown-item dropdown-toggle "
                onClick={dropdownFiveHandler}
              >
                مكتبة الصور
              </span>
              <ul
                className={`p-0 droplist ${
                  dropdownFive === true ? "showddroplist" : "visually-hidden"
                }`}
              >
                <li>
                  <span className="dropdown-item">زيارة المرصد لأبو عريش</span>
                </li>
                <li>
                  <span className="dropdown-item">زيارة المرصد لأبو عريش</span>
                </li>
                <li>
                  <span className="dropdown-item">زيارة المرصد لأبو عريش</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="dropdown-item">مكتبة الفيديو</span>
            </li>
          </ul>
        </li>
        <li className="me-1">المكتبة الاعلانية</li>
        <li className="me-1">التقارير</li>
        <li className="me-1">اخبار المرصد</li>
        <li className="me-1 last-item mt-2">
          <Link to="/contactus">اتصل بنا </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;

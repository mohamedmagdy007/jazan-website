import React, { useState } from "react";

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
        <li className="dropdown me-1 ">
          <span
            className=" dropdown-toggle"
            onClick={dropdownOneHandler}
          >
            الرئيسية
          </span>
          <ul
            className={`p-0 droplist ${
              dropdownOne === true ? "show" : "visually-hidden"
            }`}
          >
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

        <li className="me-1 dropdown">
          <span
            className=" dropdown-toggle"
            onClick={dropdownTwoHandler}
          >
            المراصد الحضرية
          </span>
          <ul
            className={`p-0 droplist ${
              dropdownTwo === true ? "show" : "visually-hidden"
            }`}
          >
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
        <li className="me-1 dropdown dropdown-two ">
          <span
            className=" dropdown-toggle"
            onClick={dropdownThreeHandler}
          >
            الفريق
          </span>
          <ul
            className={`p-0 droplist ${
              dropdownThree === true ? "show" : "visually-hidden"
            }`}
          >
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
        <li className="me-1 dropdown">
          <span
            className="dropdown-toggle "
            onClick={dropdownFourHandler}
          >
            المكتبة الاعلانية
          </span>
          <ul
            className={`p-0 droplist ${
              dropdownFour === true ? "show" : "visually-hidden"
            }`}
          >
            <li className="dropdown dropend dropdown-three btn-group">
              <span
                className="dropdown-item dropdown-toggle "
                onClick={dropdownFiveHandler}
              >
                مكتبة الصور
              </span>
              <ul
                className={`p-0 droplist ${
                  dropdownFive === true ? "show" : "visually-hidden"
                }`}
              >
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
        <li className="me-1">المكتبة الاعلانية</li>
        <li className="me-1">التقارير</li>
        <li className="me-1">اخبار المرصد</li>
        <li className="me-1">اتصل بنا</li>
      </ul>
    </aside>
  );
};

export default SideBar;

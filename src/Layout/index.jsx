import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const index = () => {
  const [toggleCollapseBtn, setToggleCollapseBtn] = useState(false);
  const [toggleCollapseBtn2, setToggleCollapseBtn2] = useState(false);
  const [toggleCollapseBtn3, setToggleCollapseBtn3] = useState(false);
  return (
    <div>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li classNameName="flex">
              <NavLink
                to="/index"
                className="flex  p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group"
              >
                <span className="ms-3  ">PsyEdu</span>
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => setToggleCollapseBtn(!toggleCollapseBtn)}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Natijalar
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`${
                  toggleCollapseBtn ? "visible" : "hidden"
                } py-2 space-y-2`}
              >
                <li classNameName="pl-6">
                  <NavLink
                    to="results/bosh-test-nat"
                    className="flex items-center  w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Boshlang'ich test natijalari
                  </NavLink>
                </li>
                <li classNameName="pl-6">
                  <NavLink
                    to="results/dars-test-nat"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Darsdagi test natijalari
                  </NavLink>
                </li>
                <li classNameName="pl-6">
                  <NavLink
                    to="results/yak-test-nat"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Yakuniy test natijalari
                  </NavLink>
                </li>
                <li classNameName="pl-6">
                  <NavLink
                    to="results/kategory-test-nat"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Kategory test natijalari
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="kategories"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Kategoriyalar
                </span>
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => setToggleCollapseBtn2(!toggleCollapseBtn2)}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Testlar
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`${
                  toggleCollapseBtn2 ? "visible" : "hidden"
                } py-2 space-y-2`}
              >
                <li>
                  <NavLink
                    to="tests/boshlangich-test"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Boshlang'ich test
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="tests/doimiy-test"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Doimiy test
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="tests/yakuniy-test"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Yakuniy test
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => setToggleCollapseBtn3(!toggleCollapseBtn3)}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Darslar
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`${
                  toggleCollapseBtn3 ? "visible" : "hidden"
                } py-2 space-y-2`}
              >
                <li>
                  <NavLink
                    to="lessons/module-qoshish"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Module qo'shish
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="lessons/dars-qoshish"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Dars qo'shish
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="lessons/test-qoshish"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Test qo'shish
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="ads"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Reklamalar</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="regions"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Viloyatlar</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="signout "
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Chiqish</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed  dark:border-gray-700">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default index;

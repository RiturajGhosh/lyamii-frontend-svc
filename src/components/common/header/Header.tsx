import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

export type HeaderList = {
  name: string;
  path: string;
};
const Header: FC = () => {
  const [headers, setHeaders] = useState<HeaderList[]>([]);
  const [, updateExpanded] = useState(false);
  const [, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const loggedIn = true;
  const headerList: HeaderList[] = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/" },
    { name: "FAQs", path: "/" },
    { name: "Login", path: "/" },
  ];
  const loggedHeaderList: HeaderList[] = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/" },
    { name: "FAQs", path: "/" },
    { name: "My Account", path: "/" },
  ];

  useEffect(() => {
    if (loggedIn) {
      setHeaders(loggedHeaderList);
    } else {
      setHeaders(headerList);
    }
  }, [loggedIn]);

  return (
    <>
      <header>
        <div className={style.currentPage}>
          <h3>Lyamii.com</h3>
        </div>

        <div className="flex-grow-0" id="responsive-navbar-nav">
          <nav className="ml-auto row d-flex">
            {headers?.map((header: HeaderList, index: number) => {
              return (
                <Link
                  className={style.link}
                  key={index}
                  to={header.path}
                  onClick={() => updateExpanded(false)}
                >
                  <p className="body">{header?.name}</p>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

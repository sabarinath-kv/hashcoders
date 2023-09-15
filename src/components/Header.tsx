import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-md-center pb-3 mb-5 border-bottom">
      <h1 className="h4">
        <Link
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span>HashCoders</span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;

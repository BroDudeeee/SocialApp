import Link from "next/link";

const Header = ({ children }) => {
  return (
    <div>
      <nav className="bg-white p-5 shadow-md z-50 sticky top-0">
        <Link href="/">Instagram</Link>
      </nav>
      {children}
    </div>
  );
};

export default Header;

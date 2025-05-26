import Logo from "./Logo";
import Search from "./Search";

function Navbar() {
  return (
    <nav>
      <div className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4  ">
        <Logo />
        <Search />
        <div className=" flex">
          <h1>Darkmode</h1>
          <h1>Profile</h1>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

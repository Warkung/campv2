import { Button } from "../ui/button";
import { Darkmode } from "./Darkmode";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";
import Search from "./Search";

function Navbar() {
  return (
    <nav>
      <div className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4  ">
        <Logo />
        <Search />
        <div className=" flex gap-4">
          <Darkmode />
          <ProfileMenu />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

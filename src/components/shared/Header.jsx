import DropDown from "../ui/DropDown";
import { Input } from "../ui/input";

const Header = () => {
  return (
    <div className="flex items-center justify-between mt-10 py-6 md:px-16">
      <div>
        <p className="hidden md:block">Welcome Rimon,</p>
      </div>
      <div className="flex gap-5">
        <div>
          <Input placeholder="search" className="border-emerald-500" />
        </div>
        <div>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;

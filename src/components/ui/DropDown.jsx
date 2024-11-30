import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { logOut } from "@/features/auth/authSlice";
import { toast } from "react-toastify";
const DropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToLogOut = (e) => {
    e.preventDefault();

    // Dispatch the logout action
    dispatch(logOut());

    // Show a success message
    toast.success("Successfully logged out!");

    // Navigate to login or home page
    navigate("/login");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Rimon Mridha</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account Info</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div onClick={handleToLogOut}>Log out</div>
          <DropdownMenuShortcut></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;

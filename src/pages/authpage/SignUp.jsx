import { useRegisterMutation } from "@/app/api/apiSlice";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [register, { isLoading }] = useRegisterMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    try {
      const response = await register(formData).unwrap();
      if (response.success) {
        toast.success("Registration successful!");
        navigate("/login"); 
      }
    } catch (err) {
      
      if (err?.data?.errors) {
        Object.values(err.data.errors).forEach((error) => {
          toast.error(error); 
        });
      } else {
       
        toast.error(
          err?.data?.message || "Registration failed. Please try again."
        );
      }
    }
  };

  const renderButtonContent = () => {
    if (isLoading) return "Registering...";
    return "Register";
  };

  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[510px] w-full rounded-full bg-green-700 opacity-40 blur-[100px]"></div>
      </div>
      <Navbar />
      <div className="max-w-7xl mx-auto flex px-5 py-10 mt-12 z-[50] justify-center">
        <Card className="w-full max-w-md shadow-md ">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold">
              Register
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div className="space-y-1">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  className="border-green-500"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="space-y-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  className="border-green-500"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  className="border-green-500"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-1 relative">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border-green-500"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 text-white hover:bg-[#4DBE18]"
              >
                {renderButtonContent()}
              </Button>

             
            </form>
          </CardContent>

          {/* Social Authentication */}
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-gray-600">Or continue with</div>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                className="flex items-center justify-center p-2 rounded-full border border-[#4DBE18] hover:bg-gray-100"
              >
                <AiOutlineGoogle size={24} className="text-[#4DBE18]" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center p-2 rounded-full border border-[#4DBE18] hover:bg-gray-100"
              >
                <AiOutlineGithub size={24} className="text-[#4DBE18]" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center p-2 rounded-full border border-[#4DBE18] hover:bg-gray-100"
              >
                <FaFacebook size={24} className="text-[#4DBE18]" />
              </button>
            </div>
          </CardFooter>

          {/* Already have an account? */}
          <CardFooter className="justify-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#4DBE18] hover:underline">
                Sign In
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;

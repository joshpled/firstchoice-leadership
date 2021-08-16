import { ClientHome, Home, Login, Signup, UpdateProfile, ForgotPassword, Professional, Personal, Contact, About, NotFound } from "pages";
var routes = [
  {
    path: "/",
    name: "Home",
    auth: false,
    component: Home,
  },
  {
    path: "/professional",
    name: "Professional",
    auth: false,
    component: Professional,
  },
  {
    path: "/personal",
    name: "Personal",
    auth: false,
    component: Personal,
  },
  {
    path: "/contact",
    name: "Contact",
    auth: false,
    component: Contact,
  },
  {
    path: "/about",
    name: "About",
    auth: false,
    component: About,
  },
  {
    path: "/client-home",
    name: "Client Home",
    auth: true,
    component: ClientHome,
  },
  {
    path: "/login",
    name: "Login",
    auth: false,
    component: Login,
  },
  {
    path: "/signup",
    name: "Sign Up",
    auth: false,
    component: Signup,
  },
  {
    path: "/update-profile",
    name: "Update Profile",
    auth: true,
    component: UpdateProfile,
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    auth: false,
    component: ForgotPassword,
  },
  {
    path: "*",
    auth: false,
    component: NotFound,
  },
];

export default routes;

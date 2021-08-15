import { ClientHome, Home, Login, Signup, UpdateProfile, ForgotPassword, Professional, Personal, Contact, About, NotFound } from "pages";
var routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/professional",
    name: "Professional",
    component: Professional,
  },
  {
    path: "/personal",
    name: "Personal",
    component: Personal,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/client-home",
    name: "Client Home",
    component: ClientHome,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: Signup,
  },
  {
    path: "/update-profile",
    name: "Update Profile",
    component: UpdateProfile,
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    component: ForgotPassword,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;

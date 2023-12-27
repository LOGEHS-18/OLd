import React from 'react';
import { Routes,Route} from "react-router-dom";
import Dashboard1 from './COMPONENTS/dashboard/Dashboard';
import SignUp from './COMPONENTS/Components/Signup';
import SignInSide from './COMPONENTS/Components/SignIn';
import AdminLogin from './COMPONENTS/Components/AdminLogin';
import Blog from './blog/Blog';
function App() {
  return (
      <Routes>
        <Route path="/" element={<SignInSide/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Admin" element={<AdminLogin/>} />
        <Route path="/AdminDashBoard" element={<Dashboard1/>} />
        <Route path="/Home" element={<Blog/>} />
      </Routes>
  );
}
export default App;

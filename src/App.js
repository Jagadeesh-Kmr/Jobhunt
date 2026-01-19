// import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {
  return (
   <>
   <Login />
   </>
  );
};

export default App;


// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Default Route */}
//         <Route path="/" element={<Navigate to="/login" />} />

//         {/* Auth Routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Route */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* Fallback Route */}
//         <Route path="*" element={<h1>Page Not Found</h1>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

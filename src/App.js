// import {Routes, Route, BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <div className="bg-blue-100 text-center p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to JobHunt</h1>
    </div>
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

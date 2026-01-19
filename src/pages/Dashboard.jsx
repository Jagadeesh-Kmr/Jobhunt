import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-700">
            Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-slate-700">
            Welcome to the Job Listing Portal dashboard.
          </p>
          <p className="text-slate-500 mt-2">
            From here, you can manage your profile and applications.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;

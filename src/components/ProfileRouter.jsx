import JobSeekerProfile from "../pages/JobSeekerProfile";
import EmployerProfile from "../pages/EmployerProfile";

function ProfileRouter() {
  // TEMP: role will come from backend later
  // Expected values: "job_seeker" | "employer"
  const role = localStorage.getItem("role");

  if (role === "employer") {
    return <EmployerProfile />;
  }

  // Default: Job Seeker
  return <JobSeekerProfile />;
}

export default ProfileRouter;

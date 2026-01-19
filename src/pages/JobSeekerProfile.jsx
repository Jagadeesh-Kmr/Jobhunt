import { useState } from "react";

function JobSeekerProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
  });

  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleResumeChange(e) {
    setResume(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // TEMP: Backend integration will be added later
    console.log("Profile Data:", formData);
    console.log("Resume:", resume);

    setMessage("Profile saved successfully");
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow p-8">

        {/* HEADER */}
        <h2 className="text-2xl font-bold text-indigo-700 mb-2">
          Job Seeker Profile
        </h2>
        <p className="text-slate-500 mb-6">
          Update your personal details and upload resume
        </p>

        {message && (
          <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* FULL NAME */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* SKILLS */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Skills
            </label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB"
              rows="3"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* RESUME UPLOAD */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Upload Resume
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
              className="w-full border p-2 rounded-lg"
            />
            {resume && (
              <p className="text-sm text-slate-600 mt-1">
                Selected file: {resume.name}
              </p>
            )}
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Save Profile
          </button>

        </form>
      </div>
    </div>
  );
}

export default JobSeekerProfile;

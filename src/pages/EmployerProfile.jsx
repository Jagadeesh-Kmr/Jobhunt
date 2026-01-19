import { useState } from "react";

function EmployerProfile() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyWebsite: "",
    companyDescription: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // TEMP: Backend integration will be added later
    console.log("Employer Profile Data:", formData);

    setMessage("Company profile saved successfully");
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow p-8">

        {/* HEADER */}
        <h2 className="text-2xl font-bold text-indigo-700 mb-2">
          Employer Profile
        </h2>
        <p className="text-slate-500 mb-6">
          Update your company details and contact information
        </p>

        {message && (
          <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* COMPANY NAME */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* COMPANY EMAIL */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Company Email
            </label>
            <input
              type="email"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              placeholder="company@example.com"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* COMPANY PHONE */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              name="companyPhone"
              value={formData.companyPhone}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* COMPANY WEBSITE */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Company Website
            </label>
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              placeholder="https://company.com"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* COMPANY DESCRIPTION */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Company Description
            </label>
            <textarea
              name="companyDescription"
              value={formData.companyDescription}
              onChange={handleChange}
              placeholder="Describe your company"
              rows="4"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            />
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

export default EmployerProfile;

import { useState } from "react";
import { supabase } from "../lib/SupabaseClient";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    vision: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const { error } = await supabase.from("message").insert([
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        vision_description: formData.vision,
      },
    ]);

    setLoading(false);

    if (error) {
      setStatus("error");
      console.error("Insert error:", error.message);
    } else {
      setStatus("success");
      setFormData({ name: "", email: "", company: "", vision: "" });
    }
  };

  return (
    <div className="h-fit flex items-center justify-center sm:pl-4">
      <div className="bg-linear-65 from-[#2E3051] to-[#222447] p-8 shadow-xl w-full rounded-[24px] border border-[#38394C]">
        <h2 className="text-white text-2xl font-bold mb-6">Start Your Transformation</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-[16px] bg-[#323455] border border-[#474966] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-[16px] bg-[#323455] border border-[#474966] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 rounded-[16px] bg-[#323455] border border-[#474966] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="vision"
              placeholder="Describe your vision..."
              value={formData.vision}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-[16px] bg-[#323455] border border-[#474966] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 rounded-[16px] text-white font-semibold
              bg-gradient-to-tl from-[#1991EB] to-[#8764FF]
              hover:from-purple-700 hover:to-blue-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              transition duration-200 ease-in-out"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-400 text-sm mt-3">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm mt-3">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;

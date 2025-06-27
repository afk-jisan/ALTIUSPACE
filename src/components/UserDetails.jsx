import { useState, useEffect } from "react";
import { supabase } from "../lib/SupabaseClient";

const UserDetails = ({ meetingType, dateTime, setStep }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    preference: "google",
    topic: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setUser(data.session?.user);
    };
    getSession();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const convertTo24Hour = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(form);
    try {
      const requestBody = {
        date: dateTime.date,
        time: convertTo24Hour(dateTime.time),
        topic: meetingType,
        attendeesEmails: [
          form.email,
          "bgjisan007@gmail.com",
          "bgjisan@gmail.com",
        ],
      };

      // console.log("Sending request to Edge Function:", requestBody);

      const res = await fetch(
        "https://fsaopihpfsogsedzkenr.supabase.co/functions/v1/create-meeting",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );

      const { meetLink } = await res.json();

      await supabase.from("meetings").insert({
        meeting_type: meetingType,
        date: dateTime.date,
        time: dateTime.time,
        email: form.email,
        name: `${form.firstName} ${form.lastName}`,
        phone: form.phone,
        company: form.company,
        preference: form.preference,
        topic: form.topic,
        meet_link: meetLink,
      });
      
      setSuccess(true);
      setStep(4);
      
    } catch (err) {
      console.error("Error scheduling meeting:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gradient-to-r from-[#292A4C] to-[#212346] cursor-pointer border border-[#3D3E55] drop-shadow-[0px_8px_32px_rgba(31,38,135,0.37)] rounded-[24px] p-10"
    >
      <h2 className="text-2xl font-semibold">Your Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <label
            htmlFor="firstName"
            className="block mb-1 text-sm text-[#999999]"
          >
            First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={handleChange}
            className="input w-full bg-white/5 border border-white/10 backdrop-blur-[20px] py-3 px-3 rounded-[12px]"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block mb-1 text-sm text-[#999999]"
          >
            Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            placeholder="Enter your last name"
            value={form.lastName}
            onChange={handleChange}
            className="input w-full bg-white/5 border border-white/10 backdrop-blur-[20px] py-3 px-3 rounded-[12px]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm text-[#999999]">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="input w-full bg-white/5 border border-white/10 backdrop-blur-[20px] py-3 px-3 rounded-[12px]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 text-sm text-[#999999]">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            required
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
            className="input w-full bg-white/5 border border-white/10 backdrop-blur-[20px] py-3 px-3 rounded-[12px]"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="company"
            className="block mb-1 text-sm text-[#999999]"
          >
            Company *
          </label>
          <input
            id="company"
            name="company"
            required
            placeholder="Enter your company name"
            value={form.company}
            onChange={handleChange}
            className="input w-full bg-white/5 border border-white/10 backdrop-blur-[20px] py-3 px-3 rounded-[12px]"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 text-sm text-[#999999]">
          Meeting Preference
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setForm({ ...form, preference: "google" })}
            className={`w-1/2 text-left px-4 py-6 rounded-[12px] border backdrop-blur-[20px] ${
              form.preference === "google"
                ? "bg-[rgba(135,100,255,0.2)] border-2 border-[#8764FF]"
                : "bg-white/5 border-white/10"
            }`}
          >
            Google Meet
          </button>
          <button
            type="button"
            onClick={() => setForm({ ...form, preference: "phone" })}
            className={`w-1/2 text-left px-4 py-3 rounded-[12px] border backdrop-blur-[20px] ${
              form.preference === "phone"
                ? "bg-[rgba(135,100,255,0.2)] border-2 border-[#8764FF]"
                : "bg-white/5 border-white/10"
            }`}
          >
            Phone Call{" "}
            <span className="text-sm text-[#999999]">(WhatsApp)</span>
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="block mb-1 text-sm text-[#999999]">
          What would you like to discuss? *
        </label>
        <textarea
          id="topic"
          name="topic"
          rows="4"
          required
          placeholder="Tell us about your SaaS, current challenges and what you hope to achieve…."
          value={form.topic}
          onChange={handleChange}
          className="input w-full bg-white/5 border border-white/10 backdrop-blur-[20px] py-3 px-3 rounded-[12px]"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-tl from-[#1991EB] to-[#8764FF] shadow-inner py-4 rounded-xl text-[18px] font-semibold text-white disabled:opacity-50"
      >
        {loading ? "Scheduling..." : "Schedule Meeting"}
      </button>
    </form>
  );
};

export default UserDetails;

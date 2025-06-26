const Form = () => {
  return (
    <div className="h-fit flex items-center justify-center p-4">
      <div className="bg-linear-65 from-[#2E3051] to-[#222447] p-8 shadow-xl w-full rounded-[24px] border border-[#38394C]">
        <h2 className="text-white text-2xl font-bold mb-6">
          Start Your Transformation
        </h2>

        <form>
          <div className="mb-4">
            <label htmlFor="your-name" className="sr-only">
              Your Name
            </label>
            <input
              type="text"
              id="your-name"
              placeholder="Your Name"
              className="w-full p-3 rounded-[16px] bg-[#323455] border border-[#474966] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email-address" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email-address"
              placeholder="Email Address"
              className="w-full p-3 rounded-[16px] bg-[#323455] border border-[#474966] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="sr-only">
              Company
            </label>
            <input
              type="text"
              id="company"
              placeholder="Company"
              className="w-full p-3 rounded-[16px] bg-[#323455] border border-[#474966] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="vision-description" className="sr-only">
              Describe your vision...
            </label>
            <textarea
              id="vision-description"
              placeholder="Describe your vision..."
              rows="5"
              className="w-full p-3 rounded-[16px] bg-[#323455] border border-[#474966] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition duration-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-[16px] text-white font-semibold
                       bg-gradient-to-tl from-[#1991EB] to-[#8764FF]
                       hover:from-purple-700 hover:to-blue-700
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                       transition duration-200 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

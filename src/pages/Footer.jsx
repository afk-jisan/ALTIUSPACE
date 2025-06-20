export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="bg-[rgba(26,26,26,1)] py-15 text-center">
        
      <div className="container mx-auto px-4 ">
        {/* Company Name */}
        <h3 className="text-[24px] font-bold mb-2 bg-gradient-to-r from-[#9F83FF] to-[#47A7EF] bg-clip-text text-transparent">
          ALTIUSPACE
        </h3>

        {/* Slogan/Tagline */}
        <p className="text-[#BDC1C6] text-[16px] mb-4">
          Crafting Success for Visionary SaaS Founders
        </p>

        {/* Copyright Notice */}
        <p className="text-[#9AA0A6] text-[14px]">
          &copy; {currentYear} ALTIUSPACE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

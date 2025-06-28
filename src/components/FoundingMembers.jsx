import MemberCard from "./MemberCard";
import { members } from "../data/FoundingMembers";
const FoundingMembers = () => {
  return (
    <section className="mb-30 min-h-fit bg-[#EBE9E9]">
      <div className="bg-[rgba(26,26,26,1)] rounded-t-[30px] sm:rounded-t-[73px]">
        <div className="custom:max-w-[1200px] mx-auto  ">
          <h2 className="text-center text-3xl pt-25 md:text-5xl font-bold font-jost opacity-[.76] mb-20 uppercase bg-gradient-to-r from-[#997CFF] to-[#CCFAFF] bg-clip-text text-transparent">
            Meet the Founding Members
          </h2>
          <div className="flex   flex-wrap flex-row gap-y-20 gap-x-20 lg:gap-x-60 justify-center items-center">
            {members.map((member, idx) => (
              <MemberCard key={idx} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingMembers;

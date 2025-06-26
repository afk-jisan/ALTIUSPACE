const MemberCard = ({ name, title, image, top, right, mt, linkedin }) => {
  return (
    <div className="p-1 rounded-2xl overflow-hidden">
      <div className="relative w-[293px] h-[384px] ">
        {/* Top-right Arrow */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute"
          style={{ top, right }}
        >
          <img
            src="./arrowDiagonal.svg"
            alt="LinkedIn"
            className="border-2 cursor-pointer rounded-full"
          />
        </a>

        {/* Member Image */}
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover rounded-2xl mt-${mt}`}
        />
      </div>

      {/* Member Info */}
      <div className="text-center mt-3">
        <p className="font-[400] font-pattaya text-white text-[21px]">{name}</p>
        <p className="text-[14px] text-white">{title}</p>
      </div>
    </div>
  );
};

export default MemberCard;

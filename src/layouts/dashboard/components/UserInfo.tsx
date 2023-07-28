import Typography from "@/common/Typography";

const UserInfo = () => {
  return (
    <div className="mb-4 w-full flex border-t border-contact-shades-gray-1 pt-6 gap-2.5 h-[62px] cursor-pointer items-center sm:pt-0 sm:border-none sm:w-auto sm:min-w-[130px] md:justify-end lg:gap-2.5 lg:border-t lg:h-[62px] lg:p-6 lg:pb-0 lg:w-full lg:border-contact-shades-gray-1 lg:justify-start">
      <div className="w-8 h-8 rounded-full border flex justify-center items-center relative">
        <img
          src="/defaultImage.png"
          alt="Profile of User"
          className="w-8 h-8 object-cover rounded-full"
        />
        <span className="absolute w-2 h-2 right-0 bottom-0 bg-[#12B76A] rounded-full border border-contact-shades-white"></span>
      </div>
      <div className="flex flex-col justify-center items-start">
        <Typography
          as="strong"
          className="sm font-bold text-contact-shades-gray-4 capitalize whitespace-nowrap"
        >
          Promise Udo
        </Typography>
        <Typography
          as="span"
          className="font-normal text-contact-shades-gray-3 capitalize"
        >
          Admin
        </Typography>
      </div>
    </div>
  );
};

export default UserInfo;

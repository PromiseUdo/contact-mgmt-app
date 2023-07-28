import iconComponents from "@/assets/iconComponents";

const Notifications = () => {
  return (
    <li className="lg:self-center justify-self-center flex flex-col list-none">
      <div className="flex gap-3 items-center py-2 -mt-[7px]">
        <div className="relative w-8 h-8" role="button">
          <iconComponents.dashboard.NotificationIcon className="w-6 h-6 absolute top-[7px]" />
          <span className="absolute -top-0 left-[11px] border border-contact-shades-white bg-contact-red-500 align-middle text-contact-shades-white rounded-full font-medium text-[12px] w-5 h-5 p-1 flex justify-center items-center">
            4
          </span>
        </div>
      </div>
    </li>
  );
};

export default Notifications;

import Typography from "../Typography";
import iconComponents from "@/assets/iconComponents";
type IModalHeader = {
  onClose: () => void;
  title?: React.ReactNode;
  subText?: React.ReactNode;
};

const ModalHeader = (props: IModalHeader) => {
  const { onClose, title, subText } = props;
  return (
    <header className="flex flex-col justify-start items-start w-full">
      <div className="w-full flex justify-between items-center">
        <Typography as="h4" className="font-semibold text-contact-shades-black">
          {title}
        </Typography>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-sm hover:bg-[#f7f7f7] active:bg-[#f7f7f7] w-[28px] h-[28px] sm:w-[37px] sm:h-[37px]"
          >
            <iconComponents.dashboard.CancelIcon
              width={24}
              height={24}
              stroke="var(--shades-black)"
            />
          </button>
        )}
      </div>
      {subText && (
        <Typography
          as="p"
          className="text-contact-shades-gray-2.5 sm font-normal pr-8"
        >
          {subText}
        </Typography>
      )}
    </header>
  );
};
export default ModalHeader;

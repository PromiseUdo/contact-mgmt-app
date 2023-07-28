import useMediaQuery from "@/hooks/useMediaQuery";
import { AllHTMLAttributes, ForwardedRef, forwardRef } from "react";
import Backdrop from "./Backdrop";
import { clamp } from "@/helpers";
import useGetCssValue from "@/hooks/useGetCssValue";
import { useState, useEffect } from "react";
interface IModal extends AllHTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  className?: string;
  open: boolean;
  variant?: "xl" | "lg" | "sm" | "md";
  children: React.ReactNode;
  reEvaluate?: boolean;
}

function NewModal(
  {
    onClose,
    open,
    className,
    variant = "sm",
    children,
    style,
    reEvaluate = false,

    ...rest
  }: IModal,
  forwardedRef: ForwardedRef<HTMLDivElement>
) {
  const [rand, setRand] = useState("");
  useEffect(() => {
    if (!reEvaluate) return;
    if (!open) return;
    const timer = setInterval(() => {
      setRand(Math.random().toString(16).substring(3, 14));
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [reEvaluate, open]);
  const sizesMap = {
    sm: {
      sm: 343,
      md: 463,
      lg: 463,
    },
    md: {
      sm: 343,
      md: 660,
      lg: 648,
    },
    lg: {
      sm: 443,
      md: 770,
      lg: 824,
    },
    xl: {
      sm: 443,
      md: 824,
      lg: 1184,
    },
  };
  const [dialogRef, dialogHeight] = useGetCssValue(
    "height",
    "535px",
    rand || open
  );

  const bodyHeight = window.innerHeight + "px";
  const bodyWidth = window.innerWidth + "px";
  const isMobile = useMediaQuery("(max-width:640px)");
  const isTablet = useMediaQuery("(max-width:768px)");
  const isLaptop = useMediaQuery("(max-width:780px)");

  const defaultModalWidth =
    sizesMap[variant][isMobile ? "sm" : isTablet ? "md" : "lg"];
  const defaultModalWidthClass = `${"w-[" + defaultModalWidth + "px]"}`;
  return open ? (
    <Backdrop open={open} onClose={onClose}>
      <div
        role="dialog"
        onClick={(e) => e.stopPropagation()}
        style={{
          opacity: open ? "1" : "0",
          transform: open ? "scale(1,1)" : "scale(0,0)",
          transitionTimingFunction: "ease-in-out",
          maxWidth: `calc(100vw - ${
            (isMobile ? 16 : isTablet ? 32 : 100) * 2
          }px)`,
          maxHeight: `calc(100vh - ${(isMobile || isLaptop ? 30 : 36) * 2}px)`,
          left: `${clamp(
            parseInt(bodyWidth) / 2 -
              sizesMap[variant][isMobile ? "sm" : isTablet ? "md" : "lg"] / 2,
            isMobile ? 16 : isTablet ? 32 : 100,
            parseInt(bodyWidth) / 2
          )}px`,
          width: defaultModalWidth,
          top: `${clamp(
            parseInt(bodyHeight) / 2 - parseInt(dialogHeight) / 2,
            isMobile || isLaptop ? 30 : 36,
            parseInt(bodyHeight) / 2 - (isMobile || isLaptop ? 30 : 36)
          )}px`,
          ...(style ? style : {}),
        }}
        {...rest}
        className={`bg-contact-shades-white scrollbar scrollbar-w-1 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-contact-dark-teal-80 scrollbar-track-gray-100 ${defaultModalWidthClass} fixed rounded-lg overflow-auto shadow-md duration-300 flex flex-col gap-6 justify-start items-start ${
          className ? className : ""
        } `}
      >
        {children}
      </div>
    </Backdrop>
  ) : (
    <></>
  );
}

const Modal = forwardRef<HTMLDivElement, IModal>((props, ref) =>
  NewModal(props, ref)
);

export default Modal;

import Typography from "@/common/Typography";
import { useNavigate } from "react-router";
import iconComponents from "@/assets/iconComponents";
import Button from "@/common/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    window.location.reload();
  };
  return (
    <div className="w-full h-[100vh]  px-8 flex flex-col xl:flex-row gap-16 items-center justify-center ">
      <div className="w-full flex flex-col md:items-center">
        <div className="flex flex-col gap-4">
          <div className="flex">
            <img src="/notfound.gif" alt="page not found illustration" />
          </div>
        </div>
        <Typography className=" text-contact-gray-400 text-xs">
          <a target="_blank" href="https://storyset.com/web">
            Web illustrations by Storyset
          </a>
        </Typography>
      </div>
      <div className="w-full flex flex-col md:items-center  gap-8">
        <div className=" md:w-[424px] flex flex-col gap-4">
          <Typography className="text-[#535C5F] text-[14px] md:text-[18px] xl:text-[28px] font-light">
            Don’t worry - this is not a dead end, just the content you’re
            looking for doesn’t exist. Either it was removed, or you mistyped
            the link.{" "}
          </Typography>
        </div>
        <div className="w-full  md:w-[424px] flex flex-col md:flex-row gap-4">
          <Button
            variant="cancel"
            className="!uppercase w-full  h-[48px]  md:w-[203px] bg-[#F7F7F7] text-point-primary-text whitespace-nowrap"
            label="Go Back"
            onClick={() => navigate(-1)}
          />
          <Button
            className="!uppercase w-full  h-[48px]  md:w-[203px] whitespace-nowrap"
            label="Go To Homepage"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

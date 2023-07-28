import StatusState from "@/common/StatusState";
import Modal from "@/common/modal/Modal";
import ModalHeader from "@/common/modal/ModalHeader";
import { FC } from "react";

type IOpenModal = {
  open: boolean;
  onClose: () => void;
  data?: any;
};

const ContactDetail = (props: IOpenModal) => {
  const { open, onClose, data } = props;
  return (
    <Modal
      open={open}
      onClose={onClose}
      variant="sm"
      className="!top-[25%] p-4 md:p-6"
    >
      <ModalHeader title="Contact Detail" onClose={onClose} />
      <main className="w-full">
        <dl className="w-full flex flex-col gap-3.5">
          <DataDisplay title="First Name" value={data?.first_name} />
          <DataDisplay title="Last Name" value={data?.last_name} />
          <DataDisplay
            title="Status"
            value={
              <StatusState status={data?.active ? "active" : "inactive"} />
            }
          />
        </dl>
      </main>
    </Modal>
  );
};

type DisplayProps = {
  title: React.ReactNode;
  value: React.ReactNode;
};

const DataDisplay: FC<DisplayProps> = (props) => {
  const { title, value } = props;
  return (
    <div>
      <dt className="font-normal text-contact-shades-gray-2.5 sm md:md capitalize">
        {title}
      </dt>
      <dd className="flex justify-center items-center text-contact-shades-black md md:lg font-normal">
        {value}
      </dd>
    </div>
  );
};

export default ContactDetail;

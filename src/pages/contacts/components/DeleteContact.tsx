import { useDispatch } from "react-redux";
import { IValues } from "./CreateOrUpdateContact";
import { deleteContact } from "@/store/reducers/contactReducer";
import Modal from "@/common/modal/Modal";
import ModalHeader from "@/common/modal/ModalHeader";
import Typography from "@/common/Typography";
import Button from "@/common/Button";
import { toast } from "react-toastify";

type IDelete = {
  open: boolean;
  onClose: () => void;
  data?: IValues;
};

const DeleteContact = (props: IDelete) => {
  const { open, onClose, data } = props;
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteContact(data?.id!));
    toast.success("Contact deleted successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
    onClose();
  };

  return (
    <Modal
      variant="md"
      open={open}
      onClose={onClose}
      className="!top-[25%] p-4 md:p-6"
    >
      <ModalHeader onClose={onClose} title="Delete Contact" />
      <Typography as="p" className="font-normal text-contact-shades-black lg">
        Are you sure you want to delete this contact? This action cannot be
        undone
      </Typography>
      <div className="w-full flex flex-col sm:flex-row  items-center sm:items-start justify-between md:justify-start gap-2 mt-6">
        <Button
          label="Yes, Delete"
          onClick={deleteHandler}
          className="!bg-contact-red-500 min-w-[152px] flex-1 md:flex-none !uppercase"
        />
        <Button
          label="No, Cancel"
          onClick={onClose}
          variant="cancel"
          className="min-w-[152px] flex-1 md:flex-none !uppercase"
        />
      </div>
    </Modal>
  );
};

export default DeleteContact;

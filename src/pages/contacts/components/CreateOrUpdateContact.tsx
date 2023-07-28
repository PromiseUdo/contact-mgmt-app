import Button from "@/common/Button";
import FormGroup from "@/common/input/FormGroup";
import InputWithAdornment from "@/common/input/InputWithAdornment";
import RadioButton from "@/common/input/RadioButton";
import { FormikHelpers, useFormik } from "formik";
import { useDispatch } from "react-redux/es/exports";
import { addContact, updateContact } from "@/store/reducers/contactReducer";
import iconComponents from "@/assets/iconComponents";
import { useState, useMemo } from "react";
import Modal from "@/common/modal/Modal";
import ModalHeader from "@/common/modal/ModalHeader";
import { toast } from "react-toastify";
import createContactSchema from "./createcontact.validator";
type ICreateContact = {
  open: boolean;
  onClose: () => void;
  data?: IValues;
};

export type IValues = {
  id: number;
  first_name: string;
  last_name: string;
  active: boolean;
};

const CreateOrUpdateContact = (props: ICreateContact) => {
  const { open, data, onClose } = props;
  const initialState: IValues = useMemo(() => getInitialData(data), [data]);

  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = (
    values: IValues,
    { setSubmitting, resetForm, setValues }: FormikHelpers<IValues>
  ) => {
    if (data) {
      console.log(values);
      const updatedContact = {
        ...values,
        firstName: values.first_name.trim(),
        lastName: values.last_name.trim(),
        active: active,
      };
      dispatch(updateContact(updatedContact));
      toast.success("Contact updated successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      const newContact = {
        id: Date.now(),
        first_name: values.first_name.trim(),
        last_name: values.last_name.trim(),
        active: active,
      };
      dispatch(addContact(newContact));
      toast.success("Contact added successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    resetForm();
    setValues(initialState);
    props.onClose();
  };

  const {
    errors,
    values,
    isValid,
    handleSubmit,
    handleChange,
    touched,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues: initialState,
    enableReinitialize: true,
    validationSchema: createContactSchema,
    onSubmit: submitHandler,
  });

  return (
    <Modal
      open={open}
      onClose={onClose}
      variant="sm"
      className="w-full flex flex-col gap-2 p-6"
    >
      <ModalHeader
        onClose={onClose}
        title={data ? "Update Contact" : "Create New Contact"}
        subText={
          data ? "Edit contact details" : "Fill the form to add a new contact"
        }
      />

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 grid-rows-8 gap-y-4"
      >
        <FormGroup
          required
          label="First Name"
          id="first_name"
          className="col-span-1"
        >
          <InputWithAdornment
            placeholder="First Name"
            name="first_name"
            value={values?.first_name}
            onChange={handleChange}
            error={
              (errors.first_name as string) &&
              (touched.first_name as unknown as string)
            }
            onBlur={handleBlur}
          />
        </FormGroup>
        <FormGroup
          required
          label="Last Name"
          id="last_name"
          className="col-span-1"
        >
          <InputWithAdornment
            placeholder="Last Name"
            name="last_name"
            value={values?.last_name}
            onChange={handleChange}
            error={
              (errors.last_name as string) &&
              (touched.last_name as unknown as string)
            }
            onBlur={handleBlur}
          />
        </FormGroup>
        <FormGroup label="Active" id="active" className="col-span-1">
          <>
            <RadioButton
              name="active"
              label="No"
              id="no"
              checked={!active}
              onChange={() => setActive(false)}
              checkComponent={<iconComponents.dashboard.RadioCheckedBoxIcon />}
              uncheckedComponent={
                <iconComponents.dashboard.RadioUnCheckedBoxIcon />
              }
            />
            <RadioButton
              name="active"
              label="Yes"
              id="yes"
              checked={active}
              onChange={() => setActive(true)}
              checkComponent={<iconComponents.dashboard.RadioCheckedBoxIcon />}
              uncheckedComponent={
                <iconComponents.dashboard.RadioUnCheckedBoxIcon />
              }
            />
          </>
        </FormGroup>
        <div className="col-span-1 row-span-1 flex justify-start gap-2 my-4">
          <Button
            disabled={!isValid || isSubmitting}
            loading={isSubmitting}
            type="submit"
            className="sm:w-[191px] px-6"
            style={{ height: "48px" }}
            label={!data ? "Create" : "Update"}
          />
          <Button
            type="reset"
            onClick={props.onClose}
            className="sm:w-[191px] px-6"
            style={{ height: "48px", background: "#F7F7F7", color: "#181818" }}
            label={"Cancel"}
          />
        </div>
      </form>
    </Modal>
  );
};

const getInitialData = (data?: IValues): IValues => {
  if (!data) {
    return {
      id: 0,
      first_name: "",
      last_name: "",
      active: false,
    };
  } else {
    return {
      ...data,
    };
  }
};

export default CreateOrUpdateContact;

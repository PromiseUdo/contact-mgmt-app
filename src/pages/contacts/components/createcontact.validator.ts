import { object, string } from "yup";

const createContactSchema = object().shape({
  first_name: string().typeError("Must be a string").required(),
  last_name: string().typeError("Must be a string").required(),
});
export default createContactSchema;

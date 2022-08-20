import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const basicSchema = yup.object().shape({
  name: yup.string().required("Enter your name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Enter your email"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Enter your phone"),
  startDate: yup.date().required("Enter your Start Date"),
  endDate: yup
    .date()
    .required("Enter your End Date")
    .when(
      "startDate",
      (startDate, schema) =>
        startDate &&
        schema.min(startDate, "End date must be greater than the start date")
    ),
});

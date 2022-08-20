import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SendIcon from "@mui/icons-material/Send";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { basicSchema } from "../schemas/validateForm";
import { RentalModal } from "./RentalModal";

export const RentalForm = () => {
  const { t } = useTranslation("global");
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [rental, setRental] = useState([]);

  const toggleModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  const onSubmit = async (values) => {
    setRental(values);
    setIsVisibleModal(true);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      startDate: dayjs(),
      endDate: dayjs(),
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          label={t(`Form.Enter your name`) + " *"}
          margin="dense"
          variant="filled"
          fullWidth
          value={values.name}
          onChange={handleChange}
          id="name"
          type="text"
          onBlur={handleBlur}
          error={Boolean(errors.name && touched.name)}
          helperText={errors.name && touched.name && t(`Form.Enter your name`)}
        />

        <TextField
          label={t(`Form.Enter your email`) + " *"}
          margin="dense"
          variant="filled"
          fullWidth
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          onBlur={handleBlur}
          error={Boolean(errors.email && touched.email)}
          helperText={
            errors.email && touched.email && t(`Form.Enter your email`)
          }
        />

        <TextField
          label={t(`Form.Enter your phone`) + " *"}
          margin="dense"
          variant="filled"
          fullWidth
          value={values.phone}
          onChange={handleChange}
          id="phone"
          type="number"
          onBlur={handleBlur}
          error={Boolean(errors.phone && touched.phone)}
          helperText={
            errors.phone &&
            touched.phone &&
            (errors.phone === "Enter your phone"
              ? t(`Form.Enter your phone`)
              : t(`Form.Phone number is not valid`))
          }
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={t(`Form.Enter your Start Date`) + " *"}
            value={values.startDate}
            id="startDate"
            onBlur={handleBlur}
            mask="__/__/____"
            inputFormat="DD/MM/YYYY"
            minDate={dayjs()}
            onChange={(value) => setFieldValue("startDate", value, true)}
            inputProps={{ readOnly: true }}
            renderInput={(params) => (
              <TextField
                {...params}
                margin="dense"
                variant="filled"
                fullWidth
                error={Boolean(touched.startDate && errors.startDate)}
                helperText={
                  errors.startDate &&
                  touched.startDate &&
                  t(`Form.Enter your Start Date`)
                }
              />
            )}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={t(`Form.Enter your End Date`) + " *"}
            value={values.endDate}
            id="endDate"
            onBlur={handleBlur}
            mask="__/__/____"
            inputFormat="DD/MM/YYYY"
            minDate={dayjs()}
            onChange={(value) => setFieldValue("endDate", value, true)}
            inputProps={{ readOnly: true }}
            renderInput={(params) => (
              <TextField
                {...params}
                margin="dense"
                variant="filled"
                fullWidth
                error={Boolean(touched.endDate && errors.endDate)}
                helperText={
                  errors.endDate &&
                  touched.endDate &&
                  (errors.endDate === "Enter your End Date"
                    ? t(`Form.Enter your End Date`)
                    : t(`Form.End date must be greater than the start date`))
                }
              />
            )}
          />
        </LocalizationProvider>

        <Box py={2}>
          {isSubmitting ? (
            <LoadingButton
              loading
              loadingIndicator={t(`Button.Loading`)}
              variant="contained"
              size="medium"
            />
          ) : (
            <Button
              color="primary"
              variant="contained"
              disableElevation
              type="submit"
              size="medium"
              endIcon={<SendIcon />}
            >
              {t(`Button.Send request`)}
            </Button>
          )}
        </Box>
      </form>

      {isVisibleModal && (
        <RentalModal
          {...{
            isVisibleModal,
            toggleModal,
            rental,
          }}
        />
      )}
    </>
  );
};

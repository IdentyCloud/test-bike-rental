import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const RentalModal = ({ isVisibleModal, toggleModal, rental }) => {
  const navigate = useNavigate();

  const { t } = useTranslation("global");
  const { bike } = useSelector((state) => state.bikes);

  const [visibleModalConfirm, setVisibleModalConfirm] = useState(false);

  let dayRental = 0;
  let priceFinal = 0;

  switch (bike.category) {
    case 2:
      dayRental = rental.endDate.diff(rental.startDate, "days") - 2;
      dayRental > 0 ? (dayRental = dayRental) : (dayRental = 1);
      priceFinal = rental.startDate?.$D >= 15 ? dayRental * 12 : dayRental * 10;
      break;
    case 3:
      dayRental = rental.endDate.diff(rental.startDate, "days") - 4;
      dayRental > 0 ? (dayRental = dayRental) : (dayRental = 1);
      priceFinal = rental.startDate?.$D >= 15 ? dayRental * 12 : dayRental * 10;
      break;
    default:
      dayRental = rental.endDate.diff(rental.startDate, "days");
      dayRental > 0 ? (dayRental = dayRental) : (dayRental = 1);
      priceFinal = rental.startDate?.$D >= 15 ? dayRental * 12 : dayRental * 10;
      break;
  }

  const confirmRental = () => {
    localStorage.setItem(
      "rental",
      JSON.stringify({ ...rental, price: priceFinal })
    );
    setVisibleModalConfirm(true);
  };

  const closeModalSuccess = () => {
    navigate("/");
  };

  return (
    <>
      {visibleModalConfirm ? (
        <Dialog
          open={visibleModalConfirm}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>
            <DoneAllIcon sx={{ color: "green" }} />{" "}
            {t("Rental.ModalTitleConfirm")}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {t("Rental.ModalDescriptionConfirm")}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModalSuccess}>{t(`Button.Close`)}</Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog
          open={isVisibleModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{t(`Rental.ModalTitle`)}?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {t(`Rental.ModalDescription`)} {priceFinal} USD
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleModal}>{t(`Button.Close`)}</Button>
            <Button onClick={confirmRental} autoFocus>
              {t(`Button.Confirm`)}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

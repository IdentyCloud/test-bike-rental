import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export const TranslationButton = () => {
  const { i18n } = useTranslation("global");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Button
        color="inherit"
        variant="outlined"
        onClick={() => changeLanguage("en")}
        sx={{ mx: 1 }}
      >
        EN
      </Button>
      <Button
        color="inherit"
        variant="outlined"
        onClick={() => changeLanguage("es")}
        sx={{ mx: 1 }}
      >
        ES
      </Button>
    </>
  );
};

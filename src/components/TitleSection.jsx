import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const TitleSection = ({ text }) => {
  const { t } = useTranslation("global");
  return (
    <>
      <Typography
        m={2}
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          borderLeft: "5px solid #ccc",
          paddingLeft: "1rem",
          textTransform: "capitalize",
        }}
      >
        {t(`${text}`)}
      </Typography>
    </>
  );
};

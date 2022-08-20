import { Typography, Box } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useTranslation } from "react-i18next";

export const NotFound = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5rem",
        }}
      >
        <ErrorOutlineOutlinedIcon sx={{ color: "red", fontSize: "5rem" }} />
        <Typography
          m={2}
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            textAlign: "center",
            textTransform: "capitalize",
            mx: "2rem",
          }}
        >
          {t("NotFound.Title")}
        </Typography>
      </Box>
    </>
  );
};

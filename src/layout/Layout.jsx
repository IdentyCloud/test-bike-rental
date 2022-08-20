import { Typography, AppBar, Toolbar, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TranslationButton } from "../components/TranslationButton";

export function Layout() {
  const { t } = useTranslation("global");

  return (
    <>
      <Box sx={{ flexGrow: 1, py: 2 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              m={2}
              gutterBottom
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, textTransform: "capitalize" }}
            >
              <Link to={"/"}>{t("Layout.Title")}</Link>
            </Typography>

            <TranslationButton />
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
  Typography,
  CardMedia,
  CardContent,
  Card,
  CardActionArea,
} from "@mui/material";

export const Cards = ({ baseTranslation, image, name, url, size }) => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  return (
    <>
      <Card>
        <CardActionArea onClick={() => navigate(`/${url}`)}>
          <CardMedia
            component="img"
            height={size}
            image={image}
            alt={t(`${baseTranslation}.${name}`)}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ textTransform: "capitalize" }}
            >
              {t(`${baseTranslation}.${name}`)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Spinner } from "./Spinner";

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

  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return (
    <>
      <Card>
        <CardActionArea onClick={() => navigate(`/${url}`)}>
          <CardMedia
            component="img"
            height={size}
            image={image}
            alt={t(`${baseTranslation}.${name}`)}
            className={`smooth-image image-${loaded ? "visible" : "hidden"}`}
            onLoad={onLoad}
            ref={ref}
          />
          {!loaded && <Spinner />}
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

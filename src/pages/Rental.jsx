import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

import { TitleSection } from "../components/TitleSection";
import { Spinner } from "../components/Spinner";
import { Cards } from "../components/Cards";
import { RentalForm } from "../components/RentalForm";
import { getBike } from "../store/slices/bikes";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "left",
  height: "100%",
  boxShadow: "none",
}));

export const Rental = () => {
  const navigate = useNavigate();
  
  const { isLoading, bike } = useSelector((state) => state.bikes);
  const { categories } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  let { bikeId } = useParams();

  useEffect(() => {
    dispatch(getBike(bikeId));
    categories.length === 0 && navigate("/");
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <TitleSection text="Rental.Title" />
              <Cards
                baseTranslation="Bikes"
                image={bike.image}
                name={bike.name}
                url={`rental/${bike.id}`}
                size="350"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Item>
                <TitleSection text="Form.Title" />
                <RentalForm />
              </Item>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

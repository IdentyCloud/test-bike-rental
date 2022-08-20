import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Box } from "@mui/material";
import { TitleSection } from "../components/TitleSection";
import { Spinner } from "../components/Spinner";
import { Cards } from "../components/Cards";
import { getBikesByCategory } from "../store/slices/bikes";

export const Bike = () => {
  const navigate = useNavigate();
  
  const { isLoading, bikes } = useSelector((state) => state.bikes);
  const { categories } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  let { categoryId } = useParams();

  useEffect(() => {
    dispatch(getBikesByCategory(categoryId));
    categories.length === 0 && navigate("/");
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <TitleSection text="Bikes.Title" />
        {isLoading ? (
          <Spinner />
        ) : (
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            {bikes.map((bike) => (
              <Grid item xs={12} sm={12} md={4} key={bike.id}>
                <Cards
                  baseTranslation="Bikes"
                  image={bike.image}
                  name={bike.name}
                  url={`rental/${bike.id}`}
                  size="250"
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

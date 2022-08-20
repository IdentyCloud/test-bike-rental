import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Box } from "@mui/material";
import { TitleSection } from "../components/TitleSection";
import { Spinner } from "../components/Spinner";
import { Cards } from "../components/Cards";
import { getCategories } from "../store/slices/categories";

export const Categories = () => {
  const { isLoading, categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <TitleSection text="Categories.Title" />
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid container spacing={2} sx={{ textAlign: "center" }}>
          {categories.map((category) => (
            <Grid item xs={12} sm={12} md={4} key={category.id}>
              <Cards
                baseTranslation="Categories"
                image={category.image}
                name={category.name}
                url={category.id}
                size="250"
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

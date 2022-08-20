import { Box, CircularProgress } from "@mui/material";

export const Spinner = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "2rem",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
};

import { Typography } from "@mui/material";

export default function MuiTypography() {
  console.log("hi");
  return (
    <div>
      <Typography variant="h1"> h1 </Typography>
      <Typography variant="h2"> h2 </Typography>
      <Typography variant="h3"> h3 </Typography>
      <Typography variant="h4"> h4 </Typography>
      <Typography variant="h5"> h5 </Typography>
      <Typography variant="h6"> h6 </Typography>

      <Typography variant="subtitle1"> sub title 1 </Typography>
      <Typography variant="subtitle2"> sub title 2 </Typography>

      <Typography variant="body1"> lorem ipsum </Typography>
      <Typography variant="body2"> lorem ipsum2 </Typography>
    </div>
  );
}

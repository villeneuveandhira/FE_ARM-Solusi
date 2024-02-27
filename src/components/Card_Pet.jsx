import { useTheme, Card, CardContent, CardMedia, Stack, Typography, Hidden } from "@mui/material";

const Card_Pet = (props) => {
  const theme = useTheme();
  const palette = theme.palette;

  const { pic, title, gene, age, price } = props;

  return (
    <Card sx={{ minWidth: "170px", maxWidth: "280px"}}>
      <CardMedia
        image={pic}
        sx={{
          display: "block",
          borderRadius: "10px",
          margin: "10px",
          objectFit: "cover",
          height: "260px",
          '@media (max-width: 600px)': {
            height: "170px",
          }
        }}
      />
      <CardContent>
        <Stack width={"100%"}>
          <Typography sx={{
            color: palette.neutral.main,
            fontWeight: "700",
          }}>
            {title}
          </Typography>
          <Stack direction={{lg:"row", xs:"column"}} alignItems={{lg:"center"}} gap={{lg:"6px"}}>
            <Stack direction={"row"} gap={"6px"}>
              <Typography sx={{
                color: palette.neutral.n60,
                fontSize: "12px",
              }}>
                Gene:
              </Typography>
              <Typography sx={{
                color: palette.neutral.n60,
                fontWeight: "700",
                fontSize: "12px",
              }}>
                {gene}
              </Typography>
            </Stack>
            <Hidden smDown>
              <Typography>•</Typography>
            </Hidden>
            <Stack direction={"row"} gap={"6px"}>
              <Typography sx={{
                color: palette.neutral.n60,
                fontSize: "12px",
              }}>
                Age:
              </Typography>
              <Typography sx={{
                color: palette.neutral.n60,
                fontWeight: "700",
                fontSize: "12px",
              }}>
                {age}
              </Typography>
            </Stack>
          </Stack>
          <Typography sx={{
            color: palette.neutral.main,
            fontWeight: "700",
            fontSize: "14px",
          }}>
            {price}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Card_Pet;

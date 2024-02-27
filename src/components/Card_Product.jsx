import { useTheme, Card, CardContent, CardMedia, Stack, Typography, Hidden } from "@mui/material";

import gift from "../assets/gift.png"

const Card_Product = (props) => {
    const theme = useTheme();
    const palette = theme.palette;

    const { pic, title, product, size, price, offer } = props;

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
        <CardContent width={"100%"}>
            <Stack gap={"10px"}>
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
                                Product:
                            </Typography>
                            <Typography sx={{
                                color: palette.neutral.n60,
                                fontWeight: "700",
                                fontSize: "12px",
                            }}>
                                {product}
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
                            Size:
                        </Typography>
                        <Typography sx={{
                            color: palette.neutral.n60,
                            fontWeight: "700",
                            fontSize: "12px",
                        }}>
                            {size}
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
                <Stack direction={"row"} sx={{
                    backgroundColor:"#FCEED5",
                    borderRadius: "8px",
                    alignItems:"center",
                    gap:"10px",
                    padding:"6px 10px 4px 10px",
                    width: "auto",
                }}>
                    <img src={gift} alt="gift" style={{height:"20px"}}/>
                    <Typography>•</Typography>
                    <Typography sx={{
                        fontWeight:"700",
                        fontSize: "14px",
                    }}>{offer}</Typography>
                </Stack>
            </Stack>
      </CardContent>
    </Card>
  );
};

export default Card_Product;

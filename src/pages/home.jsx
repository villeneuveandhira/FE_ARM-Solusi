/* import(s) */
import { useState } from "react";
import { Container, Grid, Hidden, Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import hero from "../assets/hero-section.png";
import vector from "../assets/Vector.png";
import arrow from "../assets/Vector-arrow.png";
import pet from "../assets/pet.png"
import pet2 from "../assets/pet2.png"
import pet3 from "../assets/pet3.png"
import pet4 from "../assets/pet4.png"
import product from "../assets/product.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"

import Navbar from "../components/Navbar.jsx";
import Btn from "../components/Button.jsx";
import Card_Pet from "../components/Card_Pet.jsx";
import Card_Product from "../components/Card_Product.jsx";
import Footer from "../components/Footer.jsx";

import banner from "../assets/Banner.png"
import banner2 from "../assets/Banner2.png"
const home = () => {
  const theme = useTheme();
  const palette = theme.palette;

  const Homepage = styled('div')({
    backgroundColor: "#FFF",
    overflow: "hidden",
    width: "100%",
    height: "auto",
  })
  
  const HeroSection = styled('div')({
    backgroundColor: palette.secondary.main,
    padding: "100px 5% 0 5%",
    height: "auto",
  })

  const NewSection = styled('div')({
    padding: "2% 5% 2% 5%",
    height: "auto",
  })

  const FooterSection = styled('div')({
    backgroundColor: palette.secondary.main,
    borderRadius: "40px 40px 0px 0px",
    padding: "2% 5% 2% 5%",
    height: "auto",
  })

  const [dataPet, setDataPet] = useState([
    {
      pic: pet,
      title: "MO231 - Pomeranian White",
      gene: "Male",
      age: "02 months",
      price: "6.900.000 VND"
    },
    {
      pic: pet2,
      title: "MO502 - Poodle Tiny Yellow",
      gene: "Female",
      age: "02 months",
      price: "3.900.000 VND"
    },
    {
      pic: pet3,
      title: "MO102 - Poodle Tiny Sepia",
      gene: "Male",
      age: "02 months",
      price: "4.000.000 VND"
    },
    {
      pic: pet4,
      title: "MO512 - Alaskan Malamute Grey",
      gene: "Male",
      age: "02 months",
      price: "8.900.000 VND"
    },
    {
      pic: pet,
      title: "MO231 - Pomeranian White",
      gene: "Male",
      age: "02 months",
      price: "6.900.000 VND"
    },
    {
      pic: pet2,
      title: "MO502 - Poodle Tiny Yellow",
      gene: "Female",
      age: "02 months",
      price: "3.900.000 VND"
    },
    {
      pic: pet3,
      title: "MO102 - Poodle Tiny Sepia",
      gene: "Male",
      age: "02 months",
      price: "4.000.000 VND"
    },
    {
      pic: pet4,
      title: "MO512 - Alaskan Malamute Grey",
      gene: "Male",
      age: "02 months",
      price: "8.900.000 VND"
    },
  ]);

  const [dataProduct, setDataProduct] = useState([
    {
      pic: product,
      title: "Reflex Plus Adult Dog Food Salmon",
      product: "Dog Food",
      size: "385gm",
      price: "140.000 VND",
      offer: "Free Toy & Free Shaker"
    },
    {
      pic: product2,
      title: "Reflex Plus Adult Cat Food Salmon",
      product: " CatFood",
      size: "1.5kg",
      price: "165.000 VND",
      offer: "Free Toy & Free Shaker"
    },{
      pic: product3,
      title: "Cat scratching ball toy kitten sisal rope ball",
      product: "Toy",
      size: "none",
      price: "1.100.000 VND",
      offer: "Free Cat Food"
    },{
      pic: product4,
      title: "Cute Pet Cat Warm Nest",
      product: "Toy",
      size: "none",
      price: "6.900.000 VND",
      offer: "Free Cat Food"
    },
    {
      pic: product,
      title: "Reflex Plus Adult Dog Food Salmon",
      product: "Dog Food",
      size: "385gm",
      price: "140.000 VND",
      offer: "Free Toy & Free Shaker"
    },
    {
      pic: product2,
      title: "Reflex Plus Adult Cat Food Salmon",
      product: " CatFood",
      size: "1.5kg",
      price: "165.000 VND",
      offer: "Free Toy & Free Shaker"
    },{
      pic: product3,
      title: "Cat scratching ball toy kitten sisal rope ball",
      product: "Toy",
      size: "none",
      price: "1.100.000 VND",
      offer: "Free Cat Food"
    },{
      pic: product4,
      title: "Cute Pet Cat Warm Nest",
      product: "Toy",
      size: "none",
      price: "6.900.000 VND",
      offer: "Free Cat Food"
    },
  ]);

  return (
    <>
      <Navbar />
      <Homepage>
        <HeroSection>
          <Container maxWidth="lg">
            <Stack width={"100%"} direction={{lg:"row", xs:"column"}}>
              <Stack width={{lg:"40%", xs:"100%"}} justifyContent={"center"}>
                <Typography sx={{
                  color: palette.primary.main,
                  fontWeight: "800",
                  fontSize: "60px",
                  lineHeight: "68px",
                  width: "100%",
                }}>One more friend</Typography>
                <Typography sx={{
                  color: palette.primary.main,
                  fontWeight: "700",
                  fontSize: "46px",
                  lineHeight: "60px",
                  width: "100%",
                }}>Thousands more fun!</Typography>
                <Typography sx={{
                  color: palette.neutral.n80,
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "24px",
                  padding: "28px 0 28px 0",
                  width: "100%",
                }}>
                  Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                </Typography>
                <Stack width={"100%"} direction={"row"} gap={"20px"}>
                  <Btn bgColor={"transparent"} fontColor={palette.primary.main} borderColor={palette.primary.main}>
                    View Intro
                    <img src={vector} alt="vector" />
                  </Btn>
                  <Btn>Explore Now</Btn>
                </Stack>
              </Stack>
              <Stack width={{lg:"60%", xs:"100%"}} justifyContent={"center"}>
                <img src={hero} alt="hero" style={{objectFit:"cover", maxHeight:"100vh"}}/>
              </Stack>
            </Stack>
          </Container>
        </HeroSection>
        <NewSection>
          <Container maxWidth="lg">
            <Stack>
              <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{marginBottom:"20px"}}>
                <Stack>
                  <Typography>Whats new?</Typography>
                  <Typography sx={{
                    color: palette.primary.main,
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "36px",
                  }}>Take A Look At Some Of Out Pets</Typography>
                </Stack>
                <Btn bgColor={"transparent"} fontColor={palette.primary.main} borderColor={palette.primary.main}>View more
                  <img src={arrow} alt="arrow" />
                </Btn>
              </Stack>
              <Grid container spacing={2} sx={{ padding: "0 5%" }}>
                {dataPet && dataPet.map((item, index) => (
                  <Grid item key={index} xs={6} lg={3} style={{display:"flex", justifyContent:"center", padding:0, margin:"10px 0 10px 0"}}>
                    <Card_Pet
                      pic={item.pic}
                      title={item.title}
                      gene={item.gene}
                      age={item.age}
                      price={item.price}
                    />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Container>
        </NewSection>
        <NewSection>
          <Container maxWidth="lg">
            <img src={banner} alt="banner" />
          </Container>
        </NewSection>
        <NewSection>
          <Container maxWidth="lg">
            <Stack>
              <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{marginBottom:"20px"}}>
                <Stack>
                  <Typography>Hard to choose right products for your pets?</Typography>
                  <Typography sx={{
                    color: palette.primary.main,
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "36px",
                  }}>Our Products</Typography>
                </Stack>
                <Btn bgColor={"transparent"} fontColor={palette.primary.main} borderColor={palette.primary.main}>View more
                  <img src={arrow} alt="arrow" />
                </Btn>
              </Stack>
              <Grid container spacing={2} sx={{ padding: "0 5%" }}>
                {dataProduct && dataProduct.map((item, index) => (
                  <Grid item key={index} xs={6} lg={3} style={{display:"flex", justifyContent:"center", padding:0, margin:"10px 0 10px 0"}}>
                    <Card_Product
                      pic={item.pic}
                      title={item.title}
                      product={item.product}
                      size={item.size}
                      price={item.price}
                      offer={item.offer}
                    />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Container>
        </NewSection>
        <NewSection>
          <Container maxWidth="lg">
            <img src={banner2} alt="banner" />
          </Container>
        </NewSection>
        <FooterSection>
          <Container maxWidth="lg">
            <Footer />
          </Container>
        </FooterSection>
      </Homepage>
    </>
  )
}

export default home
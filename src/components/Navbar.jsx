/* import(s) */
import { AppBar, Button, Container, Toolbar, Typography, Stack, InputBase, Hidden } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import Btn from "./Button";
import logo from "../assets/logo-brand.png";
import frame45 from "../assets/Frame 45.png";
import caret from "../assets/Caret_Down_SM.png";

const Navbar = () => {
    const theme = useTheme();
    const palette = theme.palette;

    const StyledButton = styled(Button)({
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "24px",
    })

    const SearchWrapper = styled("div")({
        backgroundColor: palette.neutral.n00,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "46px",
        padding: "12px 20px 12px 20px",
        gap: "12px",
        width: "50%",
        height: "auto",
        maxHeight: "22px",
    });

    const StyledSearchIcon = styled(SearchIcon)({
        color: palette.neutral.n40,
        width: "20px",
        height: "20px",
    });

    const StyledInput = styled(InputBase)({
        color: palette.neutral.n40,
        textDecoration: "none",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        width: "100%",
    })

    return (
    <>
        <AppBar position="absolute" sx={{backgroundColor:"transparent", boxShadow:"none", paddingLeft:"5%", paddingRight:"5%"}}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{width:"100%", height:"100px", gap:"20px"}}>
                    <Hidden smUp>
                        <img src={logo} alt="logo" style={{width:"115px", height:"40px"}} />
                    </Hidden>
                    <Hidden smDown>
                        <Stack
                            width={"50%"}
                            direction={"row"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            sx={{height:"50%"}}>
                            <Typography >
                                <img src={logo} alt="logo" style={{width:"115px", height:"40px"}} />
                            </Typography>
                            <StyledButton>Home</StyledButton>
                            <StyledButton>Category</StyledButton>
                            <StyledButton>About</StyledButton>
                            <StyledButton>Contact</StyledButton>
                        </Stack>
                        <Stack
                            width={"50%"}
                            direction={"row"}
                            alignItems={"center"}
                            gap={"14px"}
                            sx={{height:"50%"}}>
                            <SearchWrapper>
                                <StyledSearchIcon />
                                <StyledInput placeholder="Search something here!" />
                            </SearchWrapper>
                            <Btn sx={{ width: "100%", whiteSpace: "nowrap" }} bgColor={palette.primary.main}>
                                Join the community
                            </Btn>
                            <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
                                <img src={frame45} alt="frame45" style={{width:"24px", height:"24px"}} />
                                <Typography color={palette.primary.main}>
                                    VND
                                </Typography>
                                <img src={caret} alt="caret" style={{width:"24px", height:"24px"}} />
                            </Stack>
                        </Stack>
                    </Hidden>
                </Toolbar>
            </Container>
        </AppBar>
    </>
  )
}

export default Navbar
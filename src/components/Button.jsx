import React from 'react';
import { Button as MuiButton } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const Button = (props) => {
    const theme = useTheme();
    const palette = theme.palette;
    
    const { children, type="button", onClick, bgColor=palette.primary.main, fontColor=palette.neutral.n00, borderColor="transparent"} = props;

    const styledButton = (bgColor, fontColor, borderColor) => ({
        backgroundColor: bgColor,
        color: fontColor,
        boxShadow: "none",
        border: `1.5px solid ${borderColor}`,
        borderRadius: "57px",
        textTransform: "capitalize",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        padding: "14px 28px 14px 28px",
        gap: "10px",
        height: "44px",
    })

    return (
        <>
            <MuiButton style={styledButton(bgColor, fontColor, borderColor)} onClick={onClick} type={type}>
                {children}
            </MuiButton>
        </>
    )
}

export default Button;
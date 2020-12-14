import React from 'react';
import { ThemeProvider } from "styled-components/native";
import {
    Box, BoxProps,
    Button, ButtonProps,
    Checkbox, CheckboxProps,
    Image, ImageProps,
    InputPrice, InputPriceProps,
    Navbar, Item, NavbarProps, NavbarItemProps,
    RadioButton, RadioButtonProps,
    SearchInput, SearchInputProps,
    StarsRating, StarsRatingProps,
    Switch, SwitchProps,
    H1, H2, H3, H4, H5, H6,
    Header, HeaderProps,
    Text, TextProps,
    TypographyProps,
    theme
} from "sommelier";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box backgroundColor="lightGray">
                <Header size='h1'>COLOR</Header>
            </Box>
        </ThemeProvider>
    );
};
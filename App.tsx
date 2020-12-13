import React from 'react';
import { ThemeProvider } from "styled-components/native";
import {theme, Box} from "sommelier";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box backgroundColor="lightGray">HEE HEE</Box>
        </ThemeProvider>
    );
};
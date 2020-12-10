import React from 'react';
import {Text, View} from 'react-native';
import { ThemeProvider } from "styled-components/native";
import {theme, Box} from "sommelier";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <View>
                <Box>
                    <Text>sommelier is working!</Text>
                </Box>
            </View>
        </ThemeProvider>
    );
};
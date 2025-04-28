'use client'

import StyledComponentsRegistry from "@/app/lib/registry"
import { GlobalStyle } from "."
import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "@/app/styles/theme"


const GlobalStyleWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    )
}

export default GlobalStyleWrapper

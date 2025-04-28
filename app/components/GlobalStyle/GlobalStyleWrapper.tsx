'use client'

import StyledComponentsRegistry from "@/app/lib/registry"
import { GlobalStyle } from "."
import { ReactNode } from "react"


const GlobalStyleWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
        </StyledComponentsRegistry>
    )
}

export default GlobalStyleWrapper

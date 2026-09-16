"use client"

import {ThemeProvider as NextThemeProivder} from 'next-themes'
import{type ComponentProps} from 'react'

export default function ThemeProvider({children, ...props}:ComponentProps<typeof NextThemeProivder>){

    return<NextThemeProivder {...props}>{children}</NextThemeProivder>
}
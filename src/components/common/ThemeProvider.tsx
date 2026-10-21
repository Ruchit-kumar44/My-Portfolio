'use client';

import { type ComponentProps } from 'react';

import { ThemeProvider as NextThemeProivder } from 'next-themes';

export default function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemeProivder>) {
  return <NextThemeProivder {...props}>{children}</NextThemeProivder>;
}

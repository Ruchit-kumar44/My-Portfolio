'use client';

import { useCallback, useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import Moon from '../svgs/Moon';
import Sun from '../svgs/Sun';

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  const toggelTeme = useCallback(() => {
    const isDark = resolvedTheme === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    document.startViewTransition(() => {
      setTheme(nextTheme);
    });
  }, [resolvedTheme, setTheme]);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      data-sound="click"
      onClick={toggelTeme}
      aria-label="Toggle theme"
      className="cursor-pointer p-2 transition-transform active:scale-90"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

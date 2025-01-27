"use client";

import React from "react";

import { ThemeProvider } from "next-themes";

export default function Providers({ Children }) {
  return (
    <div>
      <ThemeProvider defaultTheme="system" attribute="class">
        <div className="">{Children}</div>
      </ThemeProvider>
    </div>
  );
}

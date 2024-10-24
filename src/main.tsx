import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/portfolio";
import { Analytics } from "@vercel/analytics/react";

import "@styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <HomePage />
  </StrictMode>
);

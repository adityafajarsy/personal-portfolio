import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import PreLoader from "./components/PreLoader";
import { LanguageProvider } from "./context/LanguageContext";

import "remixicon/fonts/remixicon.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <PreLoader />
      <App />
    </LanguageProvider>
  </StrictMode>
);

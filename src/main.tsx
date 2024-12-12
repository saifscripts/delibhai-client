import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/auth.context.jsx";
import { GeolocationProvider } from "./contexts/location.context.jsx";
import "./index.css";
import router from "./router.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GeolocationProvider>
          <RouterProvider router={router} />
          <Toaster />
        </GeolocationProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

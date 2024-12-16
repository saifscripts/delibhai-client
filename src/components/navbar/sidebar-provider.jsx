import { createContext, useContext, useState } from "react";

const initialState = {
  isSidebarOpen: false,
  handleSidebarToggle: () => null,
};

export const SidebarContext = createContext(initialState);

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const value = {
    isSidebarOpen,
    handleSidebarToggle,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  if (!SidebarContext) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return useContext(SidebarContext);
};

"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface User {
  userType?: string;
  email?: string;
  password?: string;
  shelterName?: string;
  shelterCity?: string;
  shelterAddress?: string;
  shelterType?: string;
  shelterPhone?: string;
  volunteerName?: string;
  volunteerCity?: string;
  volunteerPhone?: string;
}

interface RegisterContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

export const RegisterProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <RegisterContext.Provider value={{ user, setUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useUserRegister = () => {
  const context = useContext(RegisterContext);
  if (context === undefined) {
    throw new Error("useUserRegister must be used within a RegisterProvider");
  }
  return context;
};

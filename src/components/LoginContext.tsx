"use client";

import { useState, createContext, useContext } from "react";

const ConcertContext = createContext({});
export function ConcertProvider({ children }: { children: React.ReactNode }) {
  const [concertStatus, setConcertStatus] = useState(false);

  return (
    <ConcertContext.Provider value={{ concertStatus, setConcertStatus }}>
      {children}
    </ConcertContext.Provider>
  );
}

export const useConcertContext = () => useContext(ConcertContext);

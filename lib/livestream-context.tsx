"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

interface LivestreamContextType {
  livestreamUrl: string | null;
  setLivestreamUrl: (url: string | null) => void;
  isMinimized: boolean;
  setIsMinimized: (minimized: boolean) => void;
  isClosed: boolean;
  setIsClosed: (closed: boolean) => void;
}

const LivestreamContext = createContext<LivestreamContextType | undefined>(
  undefined
);

export function LivestreamProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [livestreamUrl, setLivestreamUrl] = useState<string | null>(null);
  const [isMinimized, setIsMinimized] = useState(true);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Simulate checking for active livestream
    // In production, this would be an API call to check if there's an active livestream
    const checkLivestream = async () => {
      // Example YouTube livestream URL - replace with your actual livestream
      // https://www.youtube.com/watch?v=MHRRPDOsO38
      const mockLivestreamUrl =
        "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1";
      setLivestreamUrl(mockLivestreamUrl);
    };

    checkLivestream();
  }, []);

  return (
    <LivestreamContext.Provider
      value={{
        livestreamUrl,
        setLivestreamUrl,
        isMinimized,
        setIsMinimized,
        isClosed,
        setIsClosed,
      }}
    >
      {children}
    </LivestreamContext.Provider>
  );
}

export function useLivestream() {
  const context = useContext(LivestreamContext);
  if (context === undefined) {
    throw new Error("useLivestream must be used within a LivestreamProvider");
  }
  return context;
}

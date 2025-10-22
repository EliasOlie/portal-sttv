"use client";

import { X, Maximize2, Minimize2 } from "lucide-react";
import { useLivestream } from "@/lib/livestream-context";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function YouTubeMiniplayer() {
  const { livestreamUrl, isMinimized, setIsMinimized, isClosed, setIsClosed } =
    useLivestream();

  if (!livestreamUrl || isClosed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className={`fixed z-50 bg-slate-900 shadow-2xl border-2 border-primary transition-all duration-300 ${
          isMinimized
            ? "bottom-4 right-4 w-80 h-48"
            : "bottom-4 right-4 w-[90vw] h-[50vh] md:w-[600px] md:h-[400px]"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-primary/30 px-3 py-2 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white text-sm font-semibold">AO VIVO</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-white hover:bg-slate-700"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? (
                <Maximize2 className="h-4 w-4" />
              ) : (
                <Minimize2 className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-white hover:bg-slate-700"
              onClick={() => setIsClosed(true)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="w-full h-full pt-10">
          <iframe
            src={livestreamUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="STTV Livestream"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HomePage from "@/components/home-page"
import Image from "next/image"

export default function Page() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <motion.div
          key="splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="text-center flex flex-col items-center gap-6"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative w-64 h-64 md:w-96 md:h-96"
            >
              <Image src="/sttv-logo.png" alt="STTV Logo" fill className="object-contain" priority unoptimized />
            </motion.div>

            <motion.div
              className="mt-4 h-1 bg-[#D4A017] w-64"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
            <motion.p
              className="mt-4 text-[#5B7FBE] text-lg md:text-xl tracking-wide uppercase font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Portal de Notícias
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <HomePage />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function MegaProject() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="mega-project" className="px-8 py-24 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Flagship Product
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our Mega Project
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-2xl border border-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Mockup */}
            <div className="relative flex items-center justify-center bg-[#f8f9fa] p-8 lg:p-12">
              <div className="relative w-full">
                {/* Browser chrome mockup */}
                <div
                  className="cursor-zoom-in overflow-hidden rounded-xl border border-border bg-white shadow-xl shadow-black/8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/12"
                  onClick={() => setLightboxOpen(true)}
                >
                  {/* Title bar */}
                  <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                      <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                      <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="ml-4 flex-1 rounded-md bg-[#f0f0f0] px-3 py-1 text-center text-xs text-muted">
                      laiyr.ai
                    </div>
                  </div>
                  {/* Content area */}
                  <div className="relative aspect-[2/1] w-full overflow-hidden bg-white">
                    <Image
                      src="/laiyr-mockup.png"
                      alt="Laiyr.ai - Make your Shopify catalog readable by AI"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 text-primary">
                <Sparkles size={18} />
                <span className="text-sm font-medium">laiyr.ai</span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Make Your Shopify Catalog Readable by AI
              </h3>

              <p className="mt-4 text-base leading-relaxed text-muted">
                Laiyr scans and restructures Shopify product data in the
                background so AI systems understand what you sell, without
                changing your listings. A seamless bridge between your e-commerce
                store and the AI-powered future of search and discovery.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <p className="text-sm text-muted">
                    Automatic product data restructuring for AI readability
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <p className="text-sm text-muted">
                    Zero changes to your existing Shopify listings
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <p className="text-sm text-muted">
                    Background processing: set it and forget it
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://laiyr.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                >
                  Visit Laiyr.ai
                  <ExternalLink
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-[2px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8 cursor-zoom-out"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
                <div className="relative aspect-[2/1] w-full">
                  <Image
                    src="/laiyr-mockup.png"
                    alt="Laiyr.ai - Make your Shopify catalog readable by AI"
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

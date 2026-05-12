"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Skeleton component
const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-white/5 rounded-2xl ${className}`} />
);

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading images/content
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "lokasi", "reservasi"];
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    const previousOverflowX = document.body.style.overflowX;
    const previousHtmlOverflowX = document.documentElement.style.overflowX;
    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.overflowX = previousOverflowX;
      document.documentElement.style.overflowX = previousHtmlOverflowX;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const menuBoards = [
    "/assets/menu-board1.png",
    "/assets/menu-board2.png",
    "/assets/menu-board3.png",
    "/assets/menu-board4.png",
  ];

  const selectedBoardNumber = selectedImage ? menuBoards.indexOf(selectedImage) + 1 : null;

  const locations = [
    {
      name: "DIKICHI BANDUNG RIAU",
      hours: "08.00 - 23.00",
      address: "LLRE Martadinata St No.162, Merdeka, Bandung",
      mapLink: "https://www.google.com/maps/search/Dikichi+Bandung+Riau",
    },
    {
      name: "DIKICHI TEGAL",
      hours: "08.00 - 23.00",
      address: "44JJ+3GP, Pekauman, Tegal City",
      mapLink: "https://www.google.com/maps/search/Dikichi+Tegal",
    },
    {
      name: "DIKICHI PURWOKERTO",
      hours: "08.00 - 23.00",
      address: "H7P3+6JW, Arcawinangun, Banyumas",
      mapLink: "https://www.google.com/maps/search/Dikichi+Purwokerto",
    },
    {
      name: "DIKICHI SEMARANG",
      hours: "08.00 - 23.00",
      address: "Jl. Majapahit No.311, Gemah, Kota Semarang",
      mapLink: "https://www.google.com/maps/search/Dikichi+Semarang",
    },
    {
      name: "DIKICHI SURABAYA MAYJEN SUNGKONO",
      hours: "08.00 - 23.00",
      address: "PP65+J8V, Surabaya",
      mapLink: "https://www.google.com/maps/search/Dikichi+Surabaya+Mayjen+Sungkono",
    },
    {
      name: "DIKICHI SURABAYA MERR",
      hours: "24 Jam",
      address: "Jl. Dr. Ir. H. Soekarno No.336, Kedung Baruk, Surabaya",
      mapLink: "https://www.google.com/maps/search/Dikichi+Surabaya+MERR",
    },
    {
      name: "DIKICHI SIDOARJO",
      hours: "24 Jam",
      address: "Jl. Teuku Umar, Mangersari, Sidoarjo",
      mapLink: "https://www.google.com/maps/search/Dikichi+Sidoarjo",
    },
    {
      name: "DIKICHI JEMBER",
      hours: "08.00 - 23.00",
      address: "Jl. Gajah Mada No.235A, Kaliwates Kidul, Jember",
      mapLink: "https://www.google.com/maps/search/Dikichi+Jember",
    },
    {
      name: "DIKICHI BANDUNG",
      hours: "24 Jam",
      address: "Jl. Soekarno-Hatta - Terusan Pasirkoja, Babakan, Bandung",
      mapLink: "https://www.google.com/maps/search/Dikichi+Bandung",
    },
    {
      name: "DIKICHI MOJOKERTO",
      hours: "08.00 - 23.00",
      address: "Jl. Raden Wijaya No.11b, Banjaragung, Mojokerto",
      mapLink: "https://www.google.com/maps/search/Dikichi+Mojokerto",
    },
    {
      name: "DIKICHI TULUNGAGUNG",
      hours: "08.00 - 23.00",
      address: "WWH4+WXG, Jl. I Gusti Ngurah Rai, Bago, Tulungagung",
      mapLink: "https://www.google.com/maps/search/Dikichi+Tulungagung",
    },
    {
      name: "DIKICHI MALANG SOEHAT",
      hours: "24 Jam",
      address: "Jl. Soekarno Hatta No.82C, Mojolangu, Kota Malang",
      mapLink: "https://www.google.com/maps/search/Dikichi+Malang+Soehat",
    },
    {
      name: "DIKICHI MALANG PAHLAWAN TRIP",
      hours: "08.00 - 23.00",
      address: "Jl. Pahlawan Trip, Oro-oro Dowo, Kota Malang",
      mapLink: "https://www.google.com/maps/search/Dikichi+Malang+Pahlawan+Trip",
    },
    {
      name: "DIKICHI MALANG SUPRIADI",
      hours: "08.00 - 23.00",
      address: "Jl. S. Supriyadi No.21, Bandungrejosari, Kota Malang",
      mapLink: "https://www.google.com/maps/search/Dikichi+Malang+Supriadi",
    },
    {
      name: "DIKICHI KEDIRI",
      hours: "08.00 - 23.00",
      address: "Jl. Pemuda, Ngadirejo, Kota Kediri",
      mapLink: "https://www.google.com/maps/search/Dikichi+Kediri",
    },
  ];

  const reservations = [
    { city: "BANDUNG", phone: "08123456789" },
    { city: "TEGAL", phone: "08123456789" },
    { city: "PURWOKERTO", phone: "08123456789" },
    { city: "SEMARANG", phone: "08123456789" },
    { city: "KEDIRI & TULUNGAGUNG", phone: "08123456789" },
    { city: "SURABAYA, MOJOKERTO, & SIDOARJO", phone: "08123456789" },
    { city: "MALANG", phone: "08123456789" },
    { city: "JEMBER", phone: "08123456789" },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div className="backdrop-blur-md border border-white/10 rounded-full pl-4 pr-8 py-3 flex justify-between items-center">
          <div className="relative w-40 h-12">
            <Image
              src="/assets/logo-dikichi.png"
              alt="DIKICHI Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <div className="hidden md:flex items-center p-1 relative">
            {/* Liquid Glass Capsule Highlighter */}
            <div
              className="absolute h-[calc(100%-8px)] rounded-full bg-white/10 border border-white/20 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"
              style={{
                width: (() => {
                  const link = [
                    { id: "home", w: "100px" },
                    { id: "menu", w: "100px" },
                    { id: "lokasi", w: "100px" },
                    { id: "reservasi", w: "130px" },
                  ].find(l => l.id === activeSection);
                  return link ? link.w : "100px";
                })(),
                left: (() => {
                  const link = [
                    { id: "home", left: "4px" },
                    { id: "menu", left: "104px" },
                    { id: "lokasi", left: "204px" },
                    { id: "reservasi", left: "304px" },
                  ].find(l => l.id === activeSection);
                  return link ? link.left : "4px";
                })(),
              }}
            />

            {[
              { id: "home", label: "Home", w: "100px", left: "4px" },
              { id: "menu", label: "Menu", w: "100px", left: "104px" },
              { id: "lokasi", label: "Lokasi", w: "100px", left: "204px" },
              { id: "reservasi", label: "Reservasi", w: "130px", left: "304px" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveSection(link.id);
                  const element = document.getElementById(link.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", `#${link.id}`);
                  }
                }}
                style={{ width: link.w }}
                className={`h-10 flex items-center justify-center text-[10px] tracking-[0.3em] uppercase transition-all duration-500 relative z-10 font-mono ${activeSection === link.id
                    ? "text-secondary font-black"
                    : "text-white/40 hover:text-white/80 font-medium"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <button className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 transition">
            Pesan Sekarang
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 md:pt-36">
        {/* Dynamic Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/background.png"
            alt="Hero Background"
            fill
            className="object-cover scale-110 animate-[zoom-slow_25s_infinite_alternate]"
            priority
          />
          {/* Advanced Gradient Overlay System */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
          {/* Animated Grid Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* Floating Light Elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/40 rounded-full blur-[120px] animate-[float_12s_infinite_ease-in-out]" />

        <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full animate-[slide-in-left_0.8s_ease-out]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-white font-black text-[10px] tracking-[0.2em] uppercase">Fried Chicken No.1 di Indonesia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-black text-white leading-[0.9] tracking-tighter mb-4 animate-[scale-up_1s_ease-out]">
              PASTI <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-pink-300 to-secondary bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
                NIKMAT
              </span>
            </h1>

            {/* Hashtag Cloud */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4 animate-[fade-in-up_1.2s_ease-out]">
              {["#PastiSeru", "#PastiNikmat", "#PastiKebeli"].map((tag, i) => (
                <span key={i} className="text-lg md:text-2xl font-black italic text-white/40 hover:text-secondary transition-colors cursor-default select-none">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm md:text-lg text-white/60 max-w-lg mb-8 leading-relaxed font-medium animate-[fade-in-up_1.4s_ease-out]">
              Rasakan kelezatan ayam goreng dengan bumbu rahasia yang meresap hingga ke tulang. Kualitas bintang lima, harga kaki lima.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center lg:justify-start animate-[fade-in-up_1.6s_ease-out]">
              <button className="group relative px-6 py-3 bg-secondary rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_10px_20px_-5px_rgba(255,124,191,0.4)]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-white font-black text-sm tracking-tight flex items-center gap-2 justify-center">
                  PESAN SEKARANG
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button className="px-6 py-3 bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-[1.5rem] text-white font-black text-sm tracking-tight hover:bg-white/10 transition-all">
                LIHAT PROMO
              </button>
            </div>
          </div>
          {/* Right Visual Element Column (Floating Card) */}
          <div className="hidden lg:col-span-4 lg:flex justify-end animate-[float_6s_infinite_ease-in-out]">
            <div className="relative w-80 h-[500px] bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[4rem] p-8 flex flex-col justify-between shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)]">
              <div className="w-16 h-16 bg-secondary rounded-3xl flex items-center justify-center shadow-lg shadow-secondary/40">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-white font-black text-4xl mb-4 leading-none">HOT &<br />CRISPY</div>
                <div className="text-white/40 font-bold text-sm tracking-widest uppercase mb-6">Signature Recipe</div>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-primary bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">
                      {i}
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-primary bg-secondary flex items-center justify-center text-xs font-bold text-white">
                    +1k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 px-4 md:px-8 bg-primary relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-bold text-xs uppercase tracking-widest">
            Our Signature Boards
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-20 uppercase tracking-tighter">
            MENU <span className="text-secondary">MAKANAN</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="relative h-[400px]">
                  <Skeleton className="h-full w-full" />
                </div>
              ))
              : menuBoards.map((src, index) => (
                <div key={index} className="group relative">
                  {/* Floating Card Container */}
                  <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-6 h-full flex flex-col shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(255,124,191,0.3)] hover:border-secondary/40">

                    {/* Floating Icon Badge */}
                    <div className="absolute -top-6 -right-2 w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/40 z-20 group-hover:scale-110 group-hover:rotate-12 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full rounded-[2rem] overflow-hidden mb-8 border border-white/5 bg-black/20 flex items-center justify-center">
                      <Image
                        src={src}
                        alt={`Menu Board ${index + 1}`}
                        width={400}
                        height={533}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Card Content */}
                    <div className="mt-auto text-left">
                      <div className="text-white font-black text-2xl mb-2 leading-none uppercase italic">
                        BOARD #{index + 1}
                      </div>
                      <div className="text-white/40 font-bold text-[10px] tracking-[0.2em] uppercase mb-6">
                        Chef&apos;s Choice Selection
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Avatar Group Placeholder */}
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white">
                              {i}
                            </div>
                          ))}
                          <div className="w-8 h-8 rounded-full border-2 border-primary bg-secondary flex items-center justify-center text-[10px] font-bold text-white">
                            +1k
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedImage(src)}
                          className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-secondary hover:border-secondary transition-all text-white group/btn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/btn:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-2 sm:px-4 py-2 sm:py-6 bg-primary/90 backdrop-blur-xl overflow-x-hidden animate-[fade-in_0.25s_ease-out]"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full max-w-5xl overflow-hidden rounded-t-[2rem] sm:rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,124,191,0.14),_rgba(86,46,125,0.96)_45%,_rgba(7,7,12,0.98)_100%)] shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.55)] sm:shadow-[0_40px_120px_-25px_rgba(0,0,0,0.85)] animate-[fade-in-up_0.35s_ease-out] max-h-[calc(100dvh-1rem)] sm:max-h-[90vh] overflow-x-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 sm:px-8 py-4 sm:py-5">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-secondary font-bold text-[10px] uppercase tracking-[0.22em]">
                  Premium selection
                </div>
                <p className="mt-3 text-white/50 text-xs uppercase tracking-[0.24em]">
                  {selectedBoardNumber ? `Board #${selectedBoardNumber}` : "Menu board"}
                </p>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="shrink-0 w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-colors backdrop-blur-sm"
                aria-label="Tutup modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              {/* Image Detail Container */}
              <div className="relative min-h-[36vh] sm:min-h-[48vh] lg:min-h-[72vh] bg-black/20 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-secondary/10" />
                <div className="relative h-full w-full p-3 sm:p-6 flex items-center justify-center">
                  <div className="relative h-[32vh] sm:h-[42vh] lg:h-[64vh] w-full">
                    <Image
                      src={selectedImage}
                      alt="Menu Detail"
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.45)]"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Detail Content */}
              <div className="min-w-0 flex flex-col gap-6 px-4 sm:px-8 py-5 sm:py-8 lg:px-10 lg:py-10 overflow-y-auto overflow-x-hidden max-h-[calc(100dvh-10rem)]">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic leading-[0.95] tracking-tight">
                    SIGNATURE <br />
                    <span className="text-secondary">MENU BOARD</span>
                  </h3>
                  <p className="mt-4 text-white/65 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Tampilan dibuat lebih lapang dan nyaman dibaca di layar kecil maupun besar.
                    Klik di luar kartu atau tekan <span className="text-white font-semibold">Esc</span> untuk menutup.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">Tampilan</p>
                    <p className="mt-2 text-sm font-bold text-white">Responsif</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">Mode</p>
                    <p className="mt-2 text-sm font-bold text-white">Bottom sheet di mobile</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-secondary/20 bg-secondary/10 px-4 py-3">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-secondary font-bold">Highlight</p>
                    <p className="mt-1 text-sm text-white/80 leading-relaxed">
                      Layout ini menjaga gambar tetap proporsional dan memberi ruang teks yang cukup tanpa terasa sempit.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/15 px-4 py-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">Detail Menu</p>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      Nikmati kelezatan ayam goreng terbaik dengan resep rahasia yang telah kami jaga kualitasnya.
                      Setiap potongan dimasak dengan tingkat kematangan sempurna untuk kenikmatan maksimal.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="mt-auto w-full px-5 py-3.5 bg-secondary text-white rounded-2xl font-black text-sm uppercase tracking-[0.16em] hover:scale-[1.01] transition-transform shadow-lg shadow-secondary/25"
                >
                  Tutup detail
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Location Section */}
      <section id="lokasi" className="py-32 px-4 md:px-8 bg-primary relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-bold text-xs uppercase tracking-widest">
            Visit Our Branches
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-24 uppercase tracking-tighter">
            LOKASI <span className="text-secondary">DIKICHI</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-8 md:gap-y-16">
            {locations.map((loc, index) => (
              <Link
                key={index}
                href={loc.mapLink}
                target="_blank"
                className="group relative"
              >
                {/* Floating Card Container */}
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 h-full flex flex-col shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(255,124,191,0.3)] hover:border-secondary/40">

                  {/* Floating Icon Badge on the Edge */}
                  <div className="absolute -top-6 -right-2 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/40 z-20 group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>

                  {/* Status Label (Inside) */}
                  <div className="flex justify-start mb-6">
                    <span className={`text-[10px] font-black px-4 py-1.5 rounded-full border tracking-widest uppercase ${loc.hours === '24 Jam' ? 'bg-green-500/20 border-green-500/40 text-green-400' : 'bg-white/5 border-white/10 text-white/50'}`}>
                      {loc.hours}
                    </span>
                  </div>

                  {/* Location Info */}
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight group-hover:text-secondary transition-colors uppercase italic leading-none">
                      {loc.name}
                    </h3>
                    <div className="w-12 h-1 bg-secondary mb-6 rounded-full opacity-30 group-hover:w-20 group-hover:opacity-100 transition-all duration-500" />
                    <p className="text-white/50 text-base leading-relaxed font-medium group-hover:text-white/80 transition-colors">
                      {loc.address}
                    </p>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-[10px] font-black text-white/20 group-hover:text-secondary transition-colors uppercase tracking-[0.2em]">Open in Google Maps</span>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-secondary group-hover:border-secondary transition-all shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservasi" className="py-32 px-4 md:px-8 relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-bold text-xs uppercase tracking-widest">
            Special Events & Bulk Orders
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            PESAN <span className="text-secondary">BANYAK</span> & RESERVASI
          </h2>
          <p className="text-white/50 mb-20 text-lg max-w-2xl mx-auto font-light">
            Kami siap melayani kebutuhan acara spesial dan pesanan besar Anda dengan kualitas rasa nomor satu.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="relative h-[300px]">
                  <Skeleton className="h-full w-full" />
                </div>
              ))
              : reservations.map((res, index) => (
                <div key={index} className="group relative">
                  {/* Floating Card Container */}
                  <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 h-full flex flex-col items-center justify-between shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(255,124,191,0.3)] hover:border-secondary/40">

                    {/* Floating Icon Badge */}
                    <div className="w-16 h-16 bg-secondary/20 border border-secondary/30 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-7 4m4-4H3" />
                      </svg>
                    </div>

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-black text-white leading-tight uppercase italic mb-2 tracking-tight group-hover:text-secondary transition-colors">
                        {res.city}
                      </h3>
                      <div className="text-white/30 font-bold text-[10px] tracking-[0.2em] uppercase">
                        Operational Area
                      </div>
                    </div>

                    <div className="w-full">
                      <button className="w-full py-4 bg-secondary text-white rounded-2xl font-black text-lg tracking-wide hover:scale-105 transition-transform shadow-xl shadow-secondary/20 flex items-center justify-center gap-2">
                        HUBUNGI KAMI
                      </button>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                      <div className="w-12 h-12 border-b-2 border-r-2 border-white rounded-br-2xl" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-white/40">
        <p>© 2026 DIKICHI. All rights reserved.</p>
      </footer>
    </div>
  );
}

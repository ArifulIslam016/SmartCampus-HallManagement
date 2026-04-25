"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── CONFIG ───────────────────────────────────────────────
const IS_LOGGED_IN = false; // Change to true when auth is ready

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Halls", href: "/halls" },
  { label: "Notices", href: "/notices" },
  { label: "Contact", href: "/contact" },
];

const PROFILE_MENU = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "My Profile", href: "/profile" },
  { label: "My Room", href: "/profile/room" },
  { label: "Applications", href: "/profile/applications" },
];

// ─── AVATAR ICON (SVG) ────────────────────────────────────
function AvatarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// ─── CHEVRON ICON ─────────────────────────────────────────
function ChevronIcon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ─── HAMBURGER ICON ───────────────────────────────────────
function HamburgerIcon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-6 h-6"
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </>
      )}
    </svg>
  );
}

// ─── LOGOUT ICON ──────────────────────────────────────────
function LogoutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
      />
    </svg>
  );
}

// ─── MAIN NAVBAR ──────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* ── Top accent bar ── */}
      <div className="w-full h-1 bg-gradient-to-r from-[#006A4E] via-[#F42A41] to-[#006A4E]" />

      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── LOGO + BRAND ── */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-10 h-10 rounded-lg bg-[#006A4E] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 overflow-hidden">
                {/* Replace src with your actual logo path */}
                <span className="text-white font-black text-sm tracking-tight">GAI</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[13px] font-bold text-[#006A4E] tracking-wide uppercase">
                  Smart Campus
                </span>
                <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">
                  Govt. Graphic Arts Institute
                </span>
              </div>
            </Link>

            {/* ── DESKTOP NAV LINKS ── */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-[#006A4E] hover:bg-[#006A4E]/5 transition-all duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#006A4E] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full origin-left" />
                </Link>
              ))}
            </div>

            {/* ── AUTH SECTION ── */}
            <div className="hidden md:flex items-center gap-3">
              {!IS_LOGGED_IN ? (
                /* ── LOGIN BUTTON ── */
                <Link
                  href="/login"
                  className="flex items-center gap-2 px-5 py-2 bg-[#006A4E] text-white text-sm font-semibold rounded-lg hover:bg-[#005a42] active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <AvatarIcon />
                  Login
                </Link>
              ) : (
                /* ── PROFILE DROPDOWN ── */
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setProfileOpen((p) => !p)}
                    className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full border-2 border-[#006A4E]/20 hover:border-[#006A4E]/50 bg-[#006A4E]/5 hover:bg-[#006A4E]/10 transition-all duration-200 group"
                  >
                    {/* Avatar circle */}
                    <div className="w-7 h-7 rounded-full bg-[#006A4E] flex items-center justify-center text-white text-xs font-bold">
                      R
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Rahul</span>
                    <ChevronIcon open={profileOpen} />
                  </button>

                  {/* Dropdown */}
                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in z-50">
                      {/* User info header */}
                      <div className="px-4 py-3 bg-gradient-to-br from-[#006A4E]/8 to-[#006A4E]/3 border-b border-gray-100">
                        <p className="text-sm font-bold text-gray-800">Rahul Islam</p>
                        <p className="text-xs text-gray-500 mt-0.5">rahul@gai.edu.bd</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-[#006A4E]/10 text-[#006A4E] text-[10px] font-semibold rounded-full uppercase tracking-wide">
                          Student
                        </span>
                      </div>

                      {/* Menu items */}
                      <div className="py-1.5">
                        {PROFILE_MENU.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setProfileOpen(false)}
                            className="flex items-center px-4 py-2.5 text-sm text-gray-600 hover:bg-[#006A4E]/5 hover:text-[#006A4E] transition-colors duration-150 font-medium"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>

                      {/* Logout */}
                      <div className="border-t border-gray-100 py-1.5">
                        <button
                          onClick={() => {
                            setProfileOpen(false);
                            // handleLogout()
                          }}
                          className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors duration-150 font-medium"
                        >
                          <LogoutIcon />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ── MOBILE HAMBURGER ── */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <HamburgerIcon open={mobileOpen} />
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 pt-2 border-t border-gray-100 bg-white space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-[#006A4E]/5 hover:text-[#006A4E] transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-gray-100 mt-2">
              {!IS_LOGGED_IN ? (
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#006A4E] text-white text-sm font-semibold rounded-lg hover:bg-[#005a42] transition-colors"
                >
                  <AvatarIcon />
                  Login
                </Link>
              ) : (
                <div className="space-y-1">
                  <div className="px-4 py-3 bg-[#006A4E]/5 rounded-lg">
                    <p className="text-sm font-bold text-gray-800">Rahul Islam</p>
                    <p className="text-xs text-gray-500">rahul@gai.edu.bd</p>
                  </div>
                  {PROFILE_MENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-[#006A4E]/5 hover:text-[#006A4E] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <button className="flex items-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-red-500 rounded-lg hover:bg-red-50 transition-colors">
                    <LogoutIcon />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
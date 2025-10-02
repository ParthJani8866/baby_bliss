"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  HeartIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
  UserCircleIcon,
  ChevronDownIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
  UserGroupIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";

export default function Header() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const toggleMobileSubmenu = (menu) =>
    setOpenMobileSubmenu(openMobileSubmenu === menu ? null : menu);

  // Motherhood months
  const motherhoodMonths = [
    {
      label: "Parenting",
      href: "/motherhood-blogs",
    },
  ]

  // Pregnancy weeks 1–40
  const pregnancyWeeks = [
    {
      label: "Get Pregnant",
      href: "/pregnancy/how-to-get-pregnant-guide",
    },
    {
      label: "Pregnancy Week Wise",
      href: "/pregnancy-week-wise",
    },
    {
      label: "Healthy Pregnancy",
      href: "/pregnancy/healthy-pregnancy",
    },
    {
      label: "Due Date Calculator",
      href: "/pregnancy/pregnancy-due-date-calculator",
    },
    {
      label: "Ovulation Calculator",
      href: "/pregnancy/ovulation-calculator",
    },
    {
      label: "Pregnancy Weight Calculator",
      href: "/pregnancy/pregnancy-weight-gain-calculator",
    }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-32 h-16 relative">
            <Image
              src="/images/logo.jpg"
              alt="Belly Buds Logo"
              fill
              sizes="(max-width: 768px) 200px, (max-width: 1200px) 256px, 320px"
              className="object-contain"
            />
          </div>
        </Link>
        <Head>
          <meta name="p:domain_verify" content="6437eb8cf79f0ac75bc961da816731e7" />
        </Head>
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-1 text-green-900 hover:text-green-700 font-medium"
          >
            <HomeIcon className="w-5 h-5" /> Home
          </Link>

          {/* Motherhood */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-green-900 font-medium hover:text-green-700">
              <UserIcon className="w-5 h-5" /> Motherhood <ChevronDownIcon className="w-4 h-4" />
            </button>
            <div className="absolute left-0 top-full mt-2 w-64 bg-white border rounded shadow-lg max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {motherhoodMonths.map((item, i) => (
                <Link key={i} href={item.href} className="flex items-center px-4 py-2 text-green-900 hover:bg-green-50 rounded-md transition">
                  <ChevronRightIcon className="w-5 h-5 mr-2" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Pregnancy */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-green-900 font-medium hover:text-green-700">
              <HeartIcon className="w-5 h-5" /> Pregnancy <ChevronDownIcon className="w-4 h-4" />
            </button>
            <div className="absolute left-0 top-full mt-2 w-64 bg-white border rounded shadow-lg max-h-96 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {pregnancyWeeks.map((week, i) => (
                <Link
                  key={i}
                  href={week.href}
                  className="flex items-center px-4 py-2 text-green-900 hover:bg-green-50 rounded-md transition"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2" />
                  <span>{week.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blogs"
            className="flex items-center gap-1 text-green-900 hover:text-green-700 font-medium"
          >
            <BookOpenIcon className="w-5 h-5" /> Blogs
          </Link>
          <Link
            href="/baby-names/baby-names-search"
            className="flex items-center gap-1 text-green-900 hover:text-green-700 font-medium"
          >
            <UserGroupIcon className="w-5 h-5" /> Baby names
          </Link>

          <Link
            href="/games/guess-baby-animal"
            className="flex items-center gap-1 text-green-900 hover:text-green-700 font-medium"
          >
            <PuzzlePieceIcon className="w-5 h-5" /> Puzzle Fun
          </Link>

          {/* Login / Logout */}
          {session ? (
            <div className="relative group">
              <button className="flex items-center gap-1 text-green-900 font-medium hover:text-green-700">
                <UserCircleIcon className="w-5 h-5" /> {session.user.name} <ChevronDownIcon className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-40 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-green-900 hover:bg-green-50"
                >
                  <ArrowLeftOnRectangleIcon className="w-5 h-5" /> Logout
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" /> Login with Google
            </button>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-green-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-green-200">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-3 text-green-900 hover:bg-green-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <HomeIcon className="w-5 h-5" /> Home
          </Link>

          <MobileSubmenu
            title="Motherhood"
            icon={<UserIcon className="w-5 h-5" />}
            open={openMobileSubmenu === "motherhood"}
            onToggle={() => toggleMobileSubmenu("motherhood")}
            items={motherhoodMonths}
          />

          <MobileSubmenu
            title="Pregnancy"
            icon={<HeartIcon className="w-5 h-5" />}
            open={openMobileSubmenu === "pregnancy"}
            onToggle={() => toggleMobileSubmenu("pregnancy")}
            items={pregnancyWeeks}
          />

          <Link
            href="/blogs"
            className="flex items-center gap-2 px-4 py-3 text-green-900 hover:bg-green-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <BookOpenIcon className="w-5 h-5" /> Blogs
          </Link>
          <Link
            href="/baby-names/baby-names-search"
            className="flex items-center gap-2 px-4 py-3 text-green-900 hover:bg-green-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <UserGroupIcon className="w-5 h-5" /> Baby names
          </Link>

          <Link
            href="/games/guess-baby-animal"
            className="flex items-center gap-2 px-4 py-3 text-green-900 hover:bg-green-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <PuzzlePieceIcon className="w-5 h-5" /> Puzzle Fun
          </Link>

          {session ? (
            <button
              onClick={() => { signOut(); setMobileMenuOpen(false); }}
              className="flex items-center gap-2 w-full text-left px-4 py-3 text-green-900 hover:bg-green-50"
            >
              <ArrowLeftOnRectangleIcon className="w-5 h-5" /> Logout ({session.user.name})
            </button>
          ) : (
            <button
              onClick={() => { signIn("google"); setMobileMenuOpen(false); }}
              className="flex items-center gap-2 w-full text-left px-4 py-3 text-white bg-green-800 rounded hover:bg-green-700"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" /> Login with Google
            </button>
          )}
        </div>
      )}
    </header>
  );
}

// Mobile submenu component
function MobileSubmenu({ title, icon, items, open, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-3 text-green-900 hover:bg-green-50"
      >
        <div className="flex items-center gap-2">{icon} {title}</div>
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-8">
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="block px-4 py-2 text-green-900 hover:bg-green-50"
              onClick={onToggle} // close submenu on click
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

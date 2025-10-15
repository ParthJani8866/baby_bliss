"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaHeart,
  FaBook,
  FaPuzzlePiece,
  FaUserCircle,
  FaUsers,
  FaSignInAlt,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronRight,
  FaBaby,
  FaCalendarAlt,
  FaCalculator,
  FaChartLine,
  FaChild,
  FaComments,
  FaSearch
} from 'react-icons/fa';

export default function Header() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [showCommunityModal, setShowCommunityModal] = useState(false);
  const toggleMobileSubmenu = (menu) =>
    setOpenMobileSubmenu(openMobileSubmenu === menu ? null : menu);

  // Parenting (Motherhood) Months
  const motherhoodMonths = [
    {
      label: "Parenting Guides",
      href: "/motherhood-blogs",
      icon: <FaUser className="w-4 h-4" />
    },
  ]

  // Pregnancy weeks 1–40
  const pregnancyWeeks = [
    {
      label: "Get Pregnant Guide",
      href: "/pregnancy/how-to-get-pregnant-guide",
      icon: <FaHeart className="w-4 h-4" />
    },
    {
      label: "Pregnancy Week Wise",
      href: "/pregnancy-week-wise",
      icon: <FaCalendarAlt className="w-4 h-4" />
    },
    {
      label: "Healthy Pregnancy",
      href: "/pregnancy/healthy-pregnancy",
      icon: <FaChartLine className="w-4 h-4" />
    },
    {
      label: "Due Date Calculator",
      href: "/pregnancy/pregnancy-due-date-calculator",
      icon: <FaCalculator className="w-4 h-4" />
    },
    {
      label: "Ovulation Calculator",
      href: "/pregnancy/ovulation-calculator",
      icon: <FaCalculator className="w-4 h-4" />
    },
    {
      label: "Pregnancy Weight Calculator",
      href: "/pregnancy/pregnancy-weight-gain-calculator",
      icon: <FaChartLine className="w-4 h-4" />
    },
    {
      label: "Chinese Gender Prediction",
      href: "/pregnancy/chinese-gender-prediction",
      icon: <FaChild className="w-4 h-4" />
    },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-teal-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-40 h-12 relative">
            <Image
              src="/images/logo.jpg"
              alt="Belly Buds Logo"
              fill
              sizes="(max-width: 768px) 160px, (max-width: 1200px) 200px, 240px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-teal-700 hover:text-teal-600 font-semibold transition-colors duration-200 group"
          >
            <FaHome className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
            <span>Home</span>
          </Link>

          {/* Motherhood */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-teal-700 hover:text-teal-600 font-semibold transition-colors duration-200 group">
              <FaUser className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
              <span>Motherhood</span>
              <FaChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-teal-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top">
              {motherhoodMonths.map((item, i) => (
                <Link 
                  key={i} 
                  href={item.href} 
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-all duration-200 group/item"
                >
                  <span className="text-teal-500 mr-3">{item.icon}</span>
                  <span className="flex-1">{item.label}</span>
                  <FaChevronRight className="w-3 h-3 text-gray-400 group-hover/item:text-teal-500" />
                </Link>
              ))}
            </div>
          </div>

          {/* Pregnancy */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-teal-700 hover:text-teal-600 font-semibold transition-colors duration-200 group">
              <FaHeart className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
              <span>Pregnancy</span>
              <FaChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full mt-2 w-72 bg-white border border-teal-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top">
              {pregnancyWeeks.map((week, i) => (
                <Link
                  key={i}
                  href={week.href}
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-all duration-200 group/item"
                >
                  <span className="text-teal-500 mr-3">{week.icon}</span>
                  <span className="flex-1">{week.label}</span>
                  <FaChevronRight className="w-3 h-3 text-gray-400 group-hover/item:text-teal-500" />
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blogs"
            className="flex items-center gap-2 text-teal-700 hover:text-teal-600 font-semibold transition-colors duration-200 group"
          >
            <FaBook className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
            <span>Blogs</span>
          </Link>

          <Link
            href="/baby-names"
            className="flex items-center gap-2 text-teal-700 hover:text-teal-600 font-semibold transition-colors duration-200 group"
          >
            <FaBaby className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
            <span>Baby Names</span>
          </Link>

          <Link 
            href="/communities/my-community-posts" 
            className="flex items-center gap-2 text-teal-700 hover:text-teal-600 font-semibold transition-colors duration-200 group"
          >
            <FaComments className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Communities</span>
          </Link>

          {/* Login / Logout */}
          {session ? (
            <div className="relative group">
              <button className="flex items-center gap-2 text-teal-700 hover:text-teal-600 font-semibold transition-colors duration-200 group">
                <FaUserCircle className="w-6 h-6 group-hover:scale-110 transition-transform" /> 
                <span className="max-w-32 truncate">{session.user.name}</span>
                <FaChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-teal-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-200"
                >
                  <FaSignOutAlt className="w-4 h-4" /> 
                  <span>Logout</span>
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="flex items-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaSignInAlt className="w-5 h-5" />
              <span>SignIn</span>
            </button>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-teal-700 hover:text-teal-600 p-2 rounded-lg transition-colors duration-200"
          >
            {mobileMenuOpen ? (
              <div className="w-6 h-6 relative">
                <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
              </div>
            ) : (
              <div className="w-6 h-6 flex flex-col justify-between">
                <div className="w-6 h-0.5 bg-current rounded"></div>
                <div className="w-6 h-0.5 bg-current rounded"></div>
                <div className="w-6 h-0.5 bg-current rounded"></div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-teal-200 shadow-2xl">
          <div className="max-w-7xl mx-auto py-4">
            <Link
              href="/"
              className="flex items-center gap-3 px-6 py-4 text-teal-700 hover:bg-teal-50 rounded-xl mx-2 transition-all duration-200 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaHome className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Home</span>
            </Link>

            <MobileSubmenu
              title="Motherhood"
              icon={<FaUser className="w-5 h-5" />}
              open={openMobileSubmenu === "motherhood"}
              onToggle={() => toggleMobileSubmenu("motherhood")}
              items={motherhoodMonths}
            />

            <MobileSubmenu
              title="Pregnancy"
              icon={<FaHeart className="w-5 h-5" />}
              open={openMobileSubmenu === "pregnancy"}
              onToggle={() => toggleMobileSubmenu("pregnancy")}
              items={pregnancyWeeks}
            />

            <Link
              href="/blogs"
              className="flex items-center gap-3 px-6 py-4 text-teal-700 hover:bg-teal-50 rounded-xl mx-2 transition-all duration-200 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaBook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Blogs</span>
            </Link>

            <Link
              href="/baby-names"
              className="flex items-center gap-3 px-6 py-4 text-teal-700 hover:bg-teal-50 rounded-xl mx-2 transition-all duration-200 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaBaby className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Baby Names</span>
            </Link>

            <Link
              href="/communities/my-community-posts"
              className="flex items-center gap-3 px-6 py-4 text-teal-700 hover:bg-teal-50 rounded-xl mx-2 transition-all duration-200 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaComments className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Communities</span>
            </Link>

            {session ? (
              <div className="border-t border-teal-100 mt-4 pt-4 mx-4">
                <div className="flex items-center gap-3 px-4 py-3 bg-teal-50 rounded-xl">
                  <FaUserCircle className="w-8 h-8 text-teal-600" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-teal-900 truncate">{session.user.name}</p>
                    <p className="text-sm text-teal-600">Welcome back!</p>
                  </div>
                </div>
                <button
                  onClick={() => { signOut(); setMobileMenuOpen(false); }}
                  className="flex items-center gap-3 w-full text-left px-6 py-4 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 mt-2"
                >
                  <FaSignOutAlt className="w-5 h-5" />
                  <span className="font-semibold">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => { signIn("google"); setMobileMenuOpen(false); }}
                className="flex items-center gap-3 w-full mx-2 mt-4 px-6 py-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                <FaSignInAlt className="w-5 h-5" />
                <span>SignIn</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

// Mobile submenu component
function MobileSubmenu({ title, icon, items, open, onToggle }) {
  return (
    <div className="mx-2 mb-2">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-6 py-4 text-teal-700 hover:bg-teal-50 rounded-xl transition-all duration-200 group"
      >
        <div className="flex items-center gap-3">
          <span className="group-hover:scale-110 transition-transform">{icon}</span>
          <span className="font-semibold">{title}</span>
        </div>
        <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="ml-8 mr-2 bg-teal-50 rounded-xl overflow-hidden">
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-white hover:text-teal-700 transition-all duration-200 group/item border-b border-teal-100 last:border-b-0"
              onClick={onToggle}
            >
              <span className="text-teal-500">{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              <FaChevronRight className="w-3 h-3 text-gray-400 group-hover/item:text-teal-500 transition-colors" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
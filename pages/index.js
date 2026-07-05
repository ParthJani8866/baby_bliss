"use client";

import Head from "next/head";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdBanner from "./components/AdBanner";
import { NextSeo } from "next-seo";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamically load non-critical components
const SocialShare = dynamic(() => import("./components/SocialShare"), {
  loading: () => <div className="h-8"></div>,
  ssr: false
});

// Only import essential icons - remove unused ones
import { 
  FaHeart, 
  FaBaby, 
  FaBook, 
  FaCalculator,
  FaUsers,
  FaBell
} from 'react-icons/fa';

// Dynamically load heavy sections
const PregnancySection = dynamic(() => import('./components/PregnancySection'), {
  loading: () => <PregnancySectionSkeleton />,
  ssr: true
});

const ParentingSection = dynamic(() => import('./components/ParentingSection'), {
  loading: () => <ParentingSectionSkeleton />,
  ssr: true
});

const BabyCareSection = dynamic(() => import('./components/BabyCareSection'), {
  loading: () => <BabyCareSectionSkeleton />,
  ssr: true
});

const CalculatorsSection = dynamic(() => import('./components/CalculatorsSection'), {
  loading: () => <CalculatorsSectionSkeleton />,
  ssr: true
});

// Skeleton components for loading states
function PregnancySectionSkeleton() {
  return (
    <section className="space-y-8">
      <div className="text-center mb-12">
        <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
      </div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 bg-gray-300 animate-pulse"></div>
          <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, j) => (
              <div key={j} className="bg-gray-50 rounded-xl p-6 animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-16"></div>
                    <div className="h-3 bg-gray-300 rounded w-20"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-300 rounded mb-3"></div>
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function ParentingSectionSkeleton() {
  return (
    <section className="space-y-8">
      <div className="text-center mb-12">
        <div className="h-8 bg-gray-200 rounded w-72 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 animate-pulse">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 rounded w-16"></div>
                <div className="h-3 bg-gray-300 rounded w-20"></div>
              </div>
            </div>
            <div className="h-4 bg-gray-300 rounded mb-3"></div>
            <div className="h-3 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6 mb-4"></div>
            <div className="h-3 bg-gray-300 rounded w-20"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BabyCareSectionSkeleton() {
  return (
    <section className="space-y-8">
      <div className="text-center mb-12">
        <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 animate-pulse">
            <div className="w-12 h-12 bg-gray-300 rounded-xl mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-3"></div>
            <div className="h-3 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6 mb-4"></div>
            <div className="h-3 bg-gray-300 rounded w-20"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CalculatorsSectionSkeleton() {
  return (
    <section className="space-y-8">
      <div className="text-center mb-12">
        <div className="h-8 bg-gray-200 rounded w-72 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 animate-pulse">
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="space-y-6">
              <div className="h-6 bg-gray-300 rounded w-48 mb-6"></div>
              <div className="space-y-4">
                {[...Array(2)].map((_, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-gray-300 rounded w-32"></div>
                      <div className="h-3 bg-gray-300 rounded w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-12 bg-gray-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Navigation tabs configuration
const tabs = [
  { id: "pregnancy", label: "Pregnancy Guide", icon: <FaHeart className="w-4 h-4" /> },
  { id: "parenting", label: "Parenting Blogs", icon: <FaBook className="w-4 h-4" /> },
  { id: "babycare", label: "Baby Care", icon: <FaBaby className="w-4 h-4" /> },
  { id: "calculators", label: "Calculators", icon: <FaCalculator className="w-4 h-4" /> }
];

export default function Home() {
  const { data: session, status } = useSession();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("pregnancy");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Optimize session handling
  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      const timer = setTimeout(() => {
        setLoading(false);
        setIsInitialLoad(false);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setShowLoginModal(false);
      setIsInitialLoad(false);
    }
  }, [session, status]);

  const handleGoogleLogin = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/", redirect: true });
  };

  // Memoize tab change handler
  const handleTabChange = useMemo(() => 
    (tabId) => {
      setActiveTab(tabId);
      // Track tab changes for analytics
      if (typeof window !== 'undefined' && (window).gtag) {
        (window).gtag('event', 'tab_click', {
          'tab_name': tabId
        });
      }
    },
    []
  );

  // Render loading state
  if (isInitialLoad) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9 space-y-12">
              <PregnancySectionSkeleton />
            </div>
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-32 mx-auto mb-4"></div>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-6 text-white animate-pulse">
                <div className="h-6 bg-teal-500 rounded w-40 mb-4"></div>
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="h-4 bg-teal-500 rounded w-24"></div>
                      <div className="h-4 bg-teal-500 rounded w-16"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head>
        <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Belly Buds",
              "url": "https://baby-toys.shop/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://baby-toys.shop/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Belly Buds",
              "url": "https://baby-toys.shop/",
              "logo": "https://baby-toys.shop/images/logo.png",
              "sameAs": [
                "https://www.facebook.com/share/16N9YzqWcc/",
                "https://www.instagram.com/baby_toys.cycles/",
                "https://pin.it/4T9lYMXPH"
              ]
            })
          }}
        />
      </Head>
      
      <NextSeo
        title="Belly Buds | Motherhood, Parenting & Pregnancy Blogs"
        description="Belly Buds parenting blogs, pregnancy week-wise guides, and parenting tips. Learn from experts and real experiences to make your parenting journey smoother."
        canonical="https://baby-toys.shop/"
      />

      <Header />

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium text-sm transition-all duration-300 whitespace-nowrap border-b-2 ${
                  activeTab === tab.id
                    ? "border-teal-500 text-teal-600 bg-teal-50"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-9 space-y-12">
            {/* Dynamically load sections based on active tab */}
            {activeTab === "pregnancy" && <PregnancySection />}
            {activeTab === "parenting" && <ParentingSection />}
            {activeTab === "babycare" && <BabyCareSection />}
            {activeTab === "calculators" && <CalculatorsSection />}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-24">
              <h3 className="text-center text-gray-500 uppercase font-bold text-sm mb-4 flex items-center justify-center gap-2">
                <FaBell className="w-4 h-4" />
                ADVERTISEMENT
              </h3>
              <AdBanner />
              <AdBanner />
              <AdBanner />
            </div>
            
            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FaUsers className="w-5 h-5" />
                Community Stats
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Active Parents</span>
                  <span className="font-bold">10,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Expert Articles</span>
                  <span className="font-bold">200+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Success Stories</span>
                  <span className="font-bold">5,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Popup modal for Google login */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Our Community</h2>
            <p className="text-gray-600 mb-6">Access personalized content and connect with other parents</p>
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
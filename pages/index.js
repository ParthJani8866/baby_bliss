"use client";

import Head from "next/head";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdBanner from "./components/AdBanner";
import { NextSeo } from "next-seo";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import SocialShare from "./components/SocialShare";

// Import icons
import { 
  FaHeart, 
  FaCalendarAlt, 
  FaBaby, 
  FaBook, 
  FaCalculator,
  FaUsers,
  FaFileAlt,
  FaStar,
  FaShieldAlt,
  FaClock,
  FaBell,
  FaRocket,
  FaSeedling,
  FaHome,
  FaStethoscope,
  FaUserFriends,
  FaChartLine,
  FaRegClock,
  FaRegCalendarCheck,
  FaLeaf
} from 'react-icons/fa';

export default function Home() {
  const { data: session, status } = useSession();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("pregnancy");

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      setLoading(true);
    } else {
      setShowLoginModal(false);
    }
  }, [session, status]);

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/", redirect: true });
  };

  const pregnancyPosts = [
    {
      trimester: "First Trimester (Weeks 1–12)",
      blogs: [
        { week: 1, title: "Pregnancy Week 1 — Preparing Your Body for Conception", slug: "pregnancy-week-1", description: "Understanding your menstrual cycle, improving fertility, and setting a healthy foundation for pregnancy." },
        { week: 2, title: "Pregnancy Week 2 — Ovulation & Conception Possibilities", slug: "pregnancy-week-2", description: "Ovulation occurs, increasing the chance of fertilization; prepare your body and mind." },
        { week: 3, title: "Pregnancy Week 3 — Fertilization & Early Cell Division", slug: "pregnancy-week-3", description: "The sperm meets the egg, forming a zygote; early cellular development begins." },
        { week: 4, title: "Pregnancy Week 4 — Implantation & First Signs of Pregnancy", slug: "pregnancy-week-4", description: "The embryo implants in the uterus; pregnancy tests may start showing positive results." },
        { week: 5, title: "Pregnancy Week 5 — Baby's Heartbeat Begins & Hormonal Changes", slug: "pregnancy-week-5", description: "Baby's heart starts to beat; mom experiences early pregnancy symptoms such as fatigue and nausea." },
        { week: 6, title: "Pregnancy Week 6 — Early Development & Symptoms Peak", slug: "pregnancy-week-6", description: "Rapid embryonic development occurs; nausea, breast tenderness, and mood swings may intensify." },
        { week: 7, title: "Pregnancy Week 7 — Facial Features & Brain Formation", slug: "pregnancy-week-7", description: "Baby's face starts forming, neural tube development progresses; mom may experience heightened emotions." },
        { week: 8, title: "Pregnancy Week 8 — Baby's Fingers, Toes & First Heartbeat", slug: "pregnancy-week-8", description: "Limbs are more defined, organs developing; mom may feel more noticeable morning sickness." },
        { week: 9, title: "Pregnancy Week 9 — Tiny Movements & Internal Development", slug: "pregnancy-week-9", description: "Baby starts tiny movements inside the womb; vital organs continue forming." },
        { week: 10, title: "Pregnancy Week 10 — Fetus Stage Begins", slug: "pregnancy-week-10", description: "The embryo officially becomes a fetus; growth continues rapidly." },
        { week: 11, title: "Pregnancy Week 11 — Developing Movements & Reflexes", slug: "pregnancy-week-11", description: "Baby begins stretching, reflexes form; mom may notice relief from some early symptoms." },
        { week: 12, title: "Pregnancy Week 12 — Welcome to the Second Trimester", slug: "pregnancy-week-12", description: "Critical development is complete; risk of miscarriage decreases and energy may return to mom." }
      ]
    },
    {
      trimester: "Second Trimester (Weeks 13–27)",
      blogs: [
        { week: 13, title: "Pregnancy Week 13 — Energy Returns & Morning Sickness Eases", slug: "pregnancy-week-13", description: "Mom may feel more energetic; baby grows rapidly and facial features become distinct." },
        { week: 14, title: "Pregnancy Week 14 — Baby's Movements May Be Felt Soon", slug: "pregnancy-week-14", description: "Quickening may begin; baby continues forming essential organs and bones." },
        { week: 15, title: "Pregnancy Week 15 — Baby Hears Sounds & Responds", slug: "pregnancy-week-15", description: "Auditory senses develop; mom may start to feel subtle movements." },
        { week: 16, title: "Pregnancy Week 16 — Quickening: Feeling Baby's First Kicks", slug: "pregnancy-week-16", description: "Baby's movements become noticeable; mom's belly begins to round out." },
        { week: 17, title: "Pregnancy Week 17 — Stronger Bones & Skeleton Hardens", slug: "pregnancy-week-17", description: "Baby's skeletal system strengthens; mom may experience backaches or growing belly discomfort." },
        { week: 18, title: "Pregnancy Week 18 — Anatomy Scan & Baby's Growth Check", slug: "pregnancy-week-18", description: "Detailed ultrasound reveals baby's growth, position, and gender (if opted)." },
        { week: 19, title: "Pregnancy Week 19 — Developing Senses & Skin Formation", slug: "pregnancy-week-19", description: "Baby develops taste buds, skin becomes less transparent; mom may notice more distinct movements." },
        { week: 20, title: "Pregnancy Week 20 — Halfway Mark & Gender Reveal", slug: "pregnancy-week-20", description: "Midway through pregnancy; many parents schedule anomaly scans." },
        { week: 21, title: "Pregnancy Week 21 — Baby Responds to External Sounds", slug: "pregnancy-week-21", description: "Mom may feel baby moving more actively in response to sounds or touch." },
        { week: 22, title: "Pregnancy Week 22 — Baby's Rapid Growth Continues", slug: "pregnancy-week-22", description: "Facial features more defined; mom may notice increased appetite or fatigue." },
        { week: 23, title: "Pregnancy Week 23 — Baby's Lungs Developing", slug: "pregnancy-week-23", description: "Lungs continue maturing; baby movements more coordinated." },
        { week: 24, title: "Pregnancy Week 24 — Viability Milestone", slug: "pregnancy-week-24", description: "If born prematurely, baby has a chance of survival with medical care." },
        { week: 25, title: "Pregnancy Week 25 — Strong Kicks & More Movements", slug: "pregnancy-week-25", description: "Baby is more active; mom may feel rolling movements." },
        { week: 26, title: "Pregnancy Week 26 — Baby Opens Eyes & Responds", slug: "pregnancy-week-26", description: "Eye development progresses; mom may notice rhythmic movement patterns." },
        { week: 27, title: "Pregnancy Week 27 — Preparing for Third Trimester", slug: "pregnancy-week-27", description: "Baby continues rapid growth; mom may experience back discomfort and heartburn." }
      ]
    },
    {
      trimester: "Third Trimester (Weeks 28–40)",
      blogs: [
        { week: 28, title: "Pregnancy Week 28 — Final Stretch Begins", slug: "pregnancy-week-28", description: "Entering the third trimester; mom may feel fatigue and more frequent baby movements." },
        { week: 29, title: "Pregnancy Week 29 — Stronger Kicks & More Growth", slug: "pregnancy-week-29", description: "Baby becomes more powerful in movements; mom may experience shortness of breath." },
        { week: 30, title: "Pregnancy Week 30 — Rapid Brain Development", slug: "pregnancy-week-30", description: "Baby's brain grows quickly; mom may notice Braxton Hicks contractions." },
        { week: 31, title: "Pregnancy Week 31 — Practice Breathing & Muscle Tone", slug: "pregnancy-week-31", description: "Baby practices breathing and stretches; mom may experience pelvic pressure." },
        { week: 32, title: "Pregnancy Week 32 — Gaining Fat & Energy Storage", slug: "pregnancy-week-32", description: "Baby stores fat for temperature regulation after birth." },
        { week: 33, title: "Pregnancy Week 33 — Getting Ready for Birth", slug: "pregnancy-week-33", description: "Baby positions head-down; mom may notice more discomfort." },
        { week: 34, title: "Pregnancy Week 34 — Nervous System Matures", slug: "pregnancy-week-34", description: "Baby's nervous system is nearly complete; mom may experience fatigue and swelling." },
        { week: 35, title: "Pregnancy Week 35 — Almost Full-Term", slug: "pregnancy-week-35", description: "Baby organs nearly fully developed; mom prepares mentally for labor." },
        { week: 36, title: "Pregnancy Week 36 — Full-Term Approaches", slug: "pregnancy-week-36", description: "Baby drops lower into pelvis; mom may feel stronger pelvic pressure." },
        { week: 37, title: "Pregnancy Week 37 — Early Full-Term", slug: "pregnancy-week-37", description: "Labor could start any time; baby continues to gain weight and practice movements." },
        { week: 38, title: "Pregnancy Week 38 — Final Preparations for Birth", slug: "pregnancy-week-38", description: "Baby's lungs are ready; mom may experience more frequent contractions." },
        { week: 39, title: "Pregnancy Week 39 — Baby is Ready for Birth", slug: "pregnancy-week-39", description: "Your due date is close; baby is positioned for birth." },
        { week: 40, title: "Pregnancy Week 40 — Full-Term & Labor Readiness", slug: "pregnancy-week-40", description: "The baby is fully developed; labor can start at any time." }
      ]
    }
  ];

  // Motherhood blogs
  const motherhoodPosts = [
    { month: 1, title: "Month 1 — Surviving the First 30 Days", slug: "Motherhood-month-1", description: "Practical tips, feeding schedules, growth milestones, real mom stories, and checklists for the first month of parenting." },
    { month: 2, title: "Month 2 — Smiles & Early Connections", slug: "Motherhood-month-2", description: "Month 2 focuses on first smiles, bonding, and early growth milestones." },
    { month: 3, title: "Month 3 — Social Smiles & Tummy Time", slug: "Motherhood-month-3", description: "Month 3 emphasizes social interaction, improved motor skills, and strengthening neck muscles." },
    { month: 4, title: "Month 4 — Strengthening Muscles & Interaction", slug: "Motherhood-month-4", description: "Focus on rolling, better head control, and early communication cues." },
    { month: 5, title: "Month 5 — Rolling, Sitting & Exploring", slug: "Motherhood-month-5", description: "Babies start exploring more, rolling independently, and sitting with support." },
    { month: 6, title: "Month 6 — First Solids & Responsive Play", slug: "Motherhood-month-6", description: "Introduction of solids, improved grasping, and interactive play." },
    { month: 7, title: "Month 7 — Sitting Confidently & Babbling", slug: "Motherhood-month-7", description: "Babies sit steadily, babble more, and respond socially." },
    { month: 8, title: "Month 8 — Crawling, Grasping & Social Play", slug: "Motherhood-month-8", description: "Crawling begins, fine motor skills improve, and social interactions deepen." },
    { month: 9, title: "Month 9 — Standing, Stronger Communication & Play", slug: "Motherhood-month-9", description: "Babies pull to stand, understand more words, and enjoy active play." },
    { month: 10, title: "Month 10 — First Words, Peek-a-Boo & Mobility", slug: "Motherhood-month-10", description: "Early words emerge, mobility increases, and interactive games like peek-a-boo are fun." },
    { month: 11, title: "Month 11 — Early Walking & Playful Independence", slug: "Motherhood-month-11", description: "Babies take first steps, show independence, and explore surroundings safely." },
    { month: 12, title: "Month 12 — First Birthday, Walking & Talking", slug: "Motherhood-month-12", description: "Celebrate the first birthday; walking and talking skills develop rapidly." }
  ];

  // Parenting & baby care blogs
  const blogPosts = [
    { title: "Newborn Baby Clothes: What You Need to Know in 2025", slug: "newborn-baby-clothes", description: "Complete guide to newborn baby clothes, essentials, safety tips, brands, and care instructions." },
    { title: "10 Best Baby Diapers: Absorbency, Comfort & Eco-friendly Picks", slug: "best-baby-diapers", description: "Explore the top diapers for babies, including eco-friendly and comfortable options." },
    { title: "Breastfeeding vs Formula: Pros & Cons Every Parent Should Consider", slug: "breastfeeding-vs-formula", description: "Learn about breastfeeding and formula feeding, and decide what's best for your baby." },
    { title: "5 Ways to Calm a Crying Baby: Tested and Soothing Remedies", slug: "calm-crying-baby", description: "Effective tips to calm your baby when crying, backed by expert advice." },
    { title: "How to Make Your Home Baby-Safe: A Complete Baby-Proofing Guide", slug: "baby-proofing-guide", description: "Step-by-step guide to make your home safe for newborns and toddlers." },
    { title: "10 Best Lullabies to Help Your Baby Sleep Peacefully", slug: "best-baby-lullabies", description: "Discover soothing lullabies that help your baby sleep better at night." },
    { title: "5 Milestones to Expect in Your Baby's First Year", slug: "baby-first-year-milestones", description: "Track your baby's development with these important first-year milestones." },
    { title: "How to Swaddle Your Baby: Step-by-Step Techniques for Comfort", slug: "how-to-swaddle", description: "Learn proper swaddling techniques to keep your baby comfortable and secure." },
    { title: "What to Expect the First 24 Hours After Giving Birth", slug: "first-24-hours-after-birth", description: "Guide for new parents on what happens in the first 24 hours after birth." },
    { title: "Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance", slug: "self-care-for-moms", description: "Important self-care tips for stay-at-home moms to maintain health and balance." },
    { title: "Baby Diapers: Absorbency, Comfort, Disposable Bags & Diaper Liners", slug: "disposable-bags-and-diaper-liners", description: "Guide on disposable diaper bags and liners for a cleaner, easier diaper-changing routine." },
    { title: "Top 10 Must-Have Baby Gear Essentials for New Parents", slug: "baby-gear-essentials", description: "Bringing a newborn home can be overwhelming, but having the right gear can make a huge difference." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head>
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

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <FaStar className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Trusted by 10,000+ Parents</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Your Journey Through
            <span className="block text-teal-200 mt-2">Motherhood</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Expert-guided pregnancy week-by-week, parenting tips, and supportive community for every step of your journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/communities/my-community-posts"
              className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <FaRocket className="w-5 h-5" />
              Start Your Journey
            </Link>
            <SocialShare 
              imageUrl=""
              title="Welcome to Belly Buds - Your Parenting Companion"
              className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-6 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/30"
            />
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
              { id: "pregnancy", label: "Pregnancy Guide", icon: <FaHeart className="w-4 h-4" /> },
              { id: "parenting", label: "Parenting Blogs", icon: <FaBook className="w-4 h-4" /> },
              { id: "babycare", label: "Baby Care", icon: <FaBaby className="w-4 h-4" /> },
              { id: "calculators", label: "Calculators", icon: <FaCalculator className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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
            {/* Pregnancy Guide */}
            {activeTab === "pregnancy" && (
              <section id="pregnancy-guide" className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                    <FaCalendarAlt className="w-6 h-6 text-teal-600" />
                    Pregnancy Week-by-Week Guide
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Follow your baby{"'"}s development and learn what to expect each week of your pregnancy journey
                  </p>
                </div>

                {pregnancyPosts.map((trimester, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className={`p-6 ${index === 0 ? 'bg-teal-600' : index === 1 ? 'bg-blue-600' : 'bg-indigo-600'} text-white`}>
                      <h3 className="text-xl font-bold flex items-center gap-3">
                        <FaSeedling className="w-5 h-5" />
                        {trimester.trimester}
                      </h3>
                    </div>
                    <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {trimester.blogs.map((post) => (
                        <div key={post.slug} className="group bg-gray-50 hover:bg-white rounded-xl p-6 transition-all duration-300 border border-gray-200 hover:border-teal-200 hover:shadow-lg">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {post.week}
                            </div>
                            <div>
                              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Week</span>
                              <div className="text-sm font-semibold text-gray-900">Development</div>
                            </div>
                          </div>
                          <h4 className="font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                            <Link href={`/pregnancy-week-wise/${post.slug}`} className="hover:no-underline">
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
                          <Link 
                            href={`/pregnancy-week-wise/${post.slug}`} 
                            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors group/link"
                          >
                            Read Guide
                            <FaLeaf className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            )}

            {/* Parenting Blogs */}
            {activeTab === "parenting" && (
              <section className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                    <FaUserFriends className="w-6 h-6 text-blue-600" />
                    Parenting Journey: Month by Month
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Navigate your baby{"'"}s first year with confidence using our month-by-month parenting guides
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {motherhoodPosts.map((post) => (
                    <div key={post.slug} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-200 p-6 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold">
                          {post.month}
                        </div>
                        <div>
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Month</span>
                          <div className="text-sm font-semibold text-gray-900">Milestones</div>
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        <Link href={`/motherhood-blogs/${post.slug}`} className="hover:no-underline">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
                      <Link 
                        href={`/motherhood-blogs/${post.slug}`} 
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group/link"
                      >
                        Explore Month {post.month}
                        <FaLeaf className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Baby Care */}
            {activeTab === "babycare" && (
              <section className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                    <FaShieldAlt className="w-6 h-6 text-emerald-600" />
                    Essential Baby Care Guides
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Expert advice on everything from feeding and sleeping to safety and development
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {blogPosts.map((post, index) => (
                    <div key={post.slug} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-emerald-200 p-6 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center text-white mb-4">
                        <FaStethoscope className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        <Link href={`/blogs/${post.slug}`} className="hover:no-underline">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
                      <Link 
                        href={`/blogs/${post.slug}`} 
                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors group/link"
                      >
                        Read Guide
                        <FaLeaf className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Calculators */}
            {activeTab === "calculators" && (
              <section className="space-y-8">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                    <FaCalculator className="w-6 h-6 text-orange-600" />
                    Pregnancy Calculators & Tools
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Essential tools to help you track and plan your pregnancy journey
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Due Date Calculator</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <FaRegCalendarCheck className="w-4 h-4 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">LMP-based Calculation</h4>
                            <p className="text-gray-600 text-sm">Pregnancy is calculated from the first day of your last menstrual period</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <FaChartLine className="w-4 h-4 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Ultrasound Accuracy</h4>
                            <p className="text-gray-600 text-sm">Early scans provide precise gestational age measurements</p>
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        href="/pregnancy/pregnancy-due-date-calculator"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full justify-center"
                      >
                        <FaCalculator className="w-4 h-4" />
                        Calculate Your Due Date
                      </Link>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Ovulation Calculator</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <FaRegClock className="w-4 h-4 text-pink-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Cycle Tracking</h4>
                            <p className="text-gray-600 text-sm">Track your menstrual cycle to identify fertile windows</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <FaHeart className="w-4 h-4 text-pink-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">Fertility Insights</h4>
                            <p className="text-gray-600 text-sm">Understand your natural fertility patterns</p>
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        href="/pregnancy/ovulation-calculator"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full justify-center"
                      >
                        <FaCalculator className="w-4 h-4" />
                        Calculate Ovulation
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 top-24">
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
              <FaHome className="w-8 h-8 text-white" />
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
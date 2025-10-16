"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function PregnancyWeekWise() {
  const [activeTrimester, setActiveTrimester] = useState("First Trimester (Weeks 1–12)");
  const [activeWeek, setActiveWeek] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pregnancyPosts = [
    {
      trimester: "First Trimester (Weeks 1–12)",
      shortName: "First Trimester",
      description: "The first trimester is all about early development. Baby forms basic structures and mom experiences early pregnancy symptoms.",
      image: "/images/trimester-1.jpg",
      keyFeatures: ["Early Development", "Symptom Management", "Critical Formation"],
      color: "from-blue-500 to-purple-500",
      blogs: [
        { week: 1, title: "Pregnancy Week 1 — Preparing Your Body for Conception", slug: "pregnancy-week-1", description: "Understanding your menstrual cycle, improving fertility, and setting a healthy foundation for pregnancy.", keyPoints: ["Fertility awareness", "Pre-conception health", "Cycle tracking"] },
        { week: 2, title: "Pregnancy Week 2 — Ovulation & Conception Possibilities", slug: "pregnancy-week-2", description: "Ovulation occurs, increasing the chance of fertilization; prepare your body and mind.", keyPoints: ["Ovulation timing", "Fertilization process", "Early preparation"] },
        { week: 3, title: "Pregnancy Week 3 — Fertilization & Early Cell Division", slug: "pregnancy-week-3", description: "The sperm meets the egg, forming a zygote; early cellular development begins.", keyPoints: ["Zygote formation", "Cell division", "Early development"] },
        { week: 4, title: "Pregnancy Week 4 — Implantation & First Signs of Pregnancy", slug: "pregnancy-week-4", description: "The embryo implants in the uterus; pregnancy tests may start showing positive results.", keyPoints: ["Implantation", "Early symptoms", "Pregnancy testing"] },
        { week: 5, title: "Pregnancy Week 5 — Baby's Heartbeat Begins & Hormonal Changes", slug: "pregnancy-week-5", description: "Baby's heart starts to beat; mom experiences early pregnancy symptoms such as fatigue and nausea.", keyPoints: ["Heartbeat begins", "Hormonal changes", "Early symptoms"] },
        { week: 6, title: "Pregnancy Week 6 — Early Development & Symptoms Peak", slug: "pregnancy-week-6", description: "Rapid embryonic development occurs; nausea, breast tenderness, and mood swings may intensify.", keyPoints: ["Rapid development", "Symptom management", "Embryonic growth"] },
        { week: 7, title: "Pregnancy Week 7 — Facial Features & Brain Formation", slug: "pregnancy-week-7", description: "Baby's face starts forming, neural tube development progresses; mom may experience heightened emotions.", keyPoints: ["Facial development", "Brain formation", "Emotional changes"] },
        { week: 8, title: "Pregnancy Week 8 — Baby's Fingers, Toes & First Heartbeat", slug: "pregnancy-week-8", description: "Limbs are more defined, organs developing; mom may feel more noticeable morning sickness.", keyPoints: ["Limb development", "Organ formation", "Morning sickness"] },
        { week: 9, title: "Pregnancy Week 9 — Tiny Movements & Internal Development", slug: "pregnancy-week-9", description: "Baby starts tiny movements inside the womb; vital organs continue forming.", keyPoints: ["Early movements", "Organ development", "Internal growth"] },
        { week: 10, title: "Pregnancy Week 10 — Fetus Stage Begins", slug: "pregnancy-week-10", description: "The embryo officially becomes a fetus; growth continues rapidly.", keyPoints: ["Fetus stage", "Rapid growth", "Development milestone"] },
        { week: 11, title: "Pregnancy Week 11 — Developing Movements & Reflexes", slug: "pregnancy-week-11", description: "Baby begins stretching, reflexes form; mom may notice relief from some early symptoms.", keyPoints: ["Reflex development", "Movement patterns", "Symptom relief"] },
        { week: 12, title: "Pregnancy Week 12 — Welcome to the Second Trimester", slug: "pregnancy-week-12", description: "Critical development is complete; risk of miscarriage decreases and energy may return to mom.", keyPoints: ["Trimester transition", "Risk reduction", "Energy return"] }
      ]
    },
    {
      trimester: "Second Trimester (Weeks 13–27)",
      shortName: "Second Trimester",
      description: "The second trimester is the 'golden period' where morning sickness fades and the baby grows rapidly. Mom starts feeling baby movements.",
      image: "/images/trimester-2.jpg",
      keyFeatures: ["Rapid Growth", "Movement Sensation", "Golden Period"],
      color: "from-green-500 to-teal-500",
      blogs: [
        { week: 13, title: "Pregnancy Week 13 — Energy Returns & Morning Sickness Eases", slug: "pregnancy-week-13", description: "Mom may feel more energetic; baby grows rapidly and facial features become distinct.", keyPoints: ["Energy boost", "Symptom relief", "Facial development"] },
        { week: 14, title: "Pregnancy Week 14 — Baby's Movements May Be Felt Soon", slug: "pregnancy-week-14", description: "Quickening may begin; baby continues forming essential organs and bones.", keyPoints: ["Movement anticipation", "Organ development", "Bone formation"] },
        { week: 15, title: "Pregnancy Week 15 — Baby Hears Sounds & Responds", slug: "pregnancy-week-15", description: "Auditory senses develop; mom may start to feel subtle movements.", keyPoints: ["Hearing development", "Sound response", "Subtle movements"] },
        { week: 16, title: "Pregnancy Week 16 — Quickening: Feeling Baby's First Kicks", slug: "pregnancy-week-16", description: "Baby's movements become noticeable; mom's belly begins to round out.", keyPoints: ["First kicks", "Belly growth", "Movement sensation"] },
        { week: 17, title: "Pregnancy Week 17 — Stronger Bones & Skeleton Hardens", slug: "pregnancy-week-17", description: "Baby's skeletal system strengthens; mom may experience backaches or growing belly discomfort.", keyPoints: ["Bone development", "Skeleton hardening", "Physical changes"] },
        { week: 18, title: "Pregnancy Week 18 — Anatomy Scan & Baby's Growth Check", slug: "pregnancy-week-18", description: "Detailed ultrasound reveals baby's growth, position, and gender (if opted).", keyPoints: ["Anatomy scan", "Growth monitoring", "Gender reveal"] },
        { week: 19, title: "Pregnancy Week 19 — Developing Senses & Skin Formation", slug: "pregnancy-week-19", description: "Baby develops taste buds, skin becomes less transparent; mom may notice more distinct movements.", keyPoints: ["Sensory development", "Skin formation", "Movement clarity"] },
        { week: 20, title: "Pregnancy Week 20 — Halfway Mark & Gender Reveal", slug: "pregnancy-week-20", description: "Midway through pregnancy; many parents schedule anomaly scans.", keyPoints: ["Halfway milestone", "Gender confirmation", "Anomaly scan"] },
        { week: 21, title: "Pregnancy Week 21 — Baby Responds to External Sounds", slug: "pregnancy-week-21", description: "Mom may feel baby moving more actively in response to sounds or touch.", keyPoints: ["Sound response", "Active movement", "External stimulation"] },
        { week: 22, title: "Pregnancy Week 22 — Baby's Rapid Growth Continues", slug: "pregnancy-week-22", description: "Facial features more defined; mom may notice increased appetite or fatigue.", keyPoints: ["Facial definition", "Growth spurt", "Appetite changes"] },
        { week: 23, title: "Pregnancy Week 23 — Baby's Lungs Developing", slug: "pregnancy-week-23", description: "Lungs continue maturing; baby movements more coordinated.", keyPoints: ["Lung development", "Coordinated movement", "Respiratory growth"] },
        { week: 24, title: "Pregnancy Week 24 — Viability Milestone", slug: "pregnancy-week-24", description: "If born prematurely, baby has a chance of survival with medical care.", keyPoints: ["Viability milestone", "Premature survival", "Medical care"] },
        { week: 25, title: "Pregnancy Week 25 — Strong Kicks & More Movements", slug: "pregnancy-week-25", description: "Baby is more active; mom may feel rolling movements.", keyPoints: ["Strong movements", "Increased activity", "Rolling sensations"] },
        { week: 26, title: "Pregnancy Week 26 — Baby Opens Eyes & Responds", slug: "pregnancy-week-26", description: "Eye development progresses; mom may notice rhythmic movement patterns.", keyPoints: ["Eye development", "Light response", "Movement patterns"] },
        { week: 27, title: "Pregnancy Week 27 — Preparing for Third Trimester", slug: "pregnancy-week-27", description: "Baby continues rapid growth; mom may experience back discomfort and heartburn.", keyPoints: ["Growth continuation", "Third trimester prep", "Physical discomfort"] }
      ]
    },
    {
      trimester: "Third Trimester (Weeks 28–40)",
      shortName: "Third Trimester",
      description: "The third trimester is the final stretch. Baby grows fully and mom prepares for labor.",
      image: "/images/trimester-3.jpg",
      keyFeatures: ["Final Preparation", "Labor Readiness", "Rapid Growth"],
      color: "from-orange-500 to-red-500",
      blogs: [
        { week: 28, title: "Pregnancy Week 28 — Final Stretch Begins", slug: "pregnancy-week-28", description: "Entering the third trimester; mom may feel fatigue and more frequent baby movements.", keyPoints: ["Third trimester start", "Increased fatigue", "Frequent movements"] },
        { week: 29, title: "Pregnancy Week 29 — Stronger Kicks & More Growth", slug: "pregnancy-week-29", description: "Baby becomes more powerful in movements; mom may experience shortness of breath.", keyPoints: ["Stronger movements", "Growth continuation", "Breathing changes"] },
        { week: 30, title: "Pregnancy Week 30 — Rapid Brain Development", slug: "pregnancy-week-30", description: "Baby's brain grows quickly; mom may notice Braxton Hicks contractions.", keyPoints: ["Brain development", "Braxton Hicks", "Cognitive growth"] },
        { week: 31, title: "Pregnancy Week 31 — Practice Breathing & Muscle Tone", slug: "pregnancy-week-31", description: "Baby practices breathing and stretches; mom may experience pelvic pressure.", keyPoints: ["Breathing practice", "Muscle development", "Pelvic pressure"] },
        { week: 32, title: "Pregnancy Week 32 — Gaining Fat & Energy Storage", slug: "pregnancy-week-32", description: "Baby stores fat for temperature regulation after birth.", keyPoints: ["Fat storage", "Energy reserve", "Temperature regulation"] },
        { week: 33, title: "Pregnancy Week 33 — Getting Ready for Birth", slug: "pregnancy-week-33", description: "Baby positions head-down; mom may notice more discomfort.", keyPoints: ["Birth positioning", "Increased discomfort", "Labor preparation"] },
        { week: 34, title: "Pregnancy Week 34 — Nervous System Matures", slug: "pregnancy-week-34", description: "Baby's nervous system is nearly complete; mom may experience fatigue and swelling.", keyPoints: ["Nervous system", "Fatigue management", "Swelling"] },
        { week: 35, title: "Pregnancy Week 35 — Almost Full-Term", slug: "pregnancy-week-35", description: "Baby organs nearly fully developed; mom prepares mentally for labor.", keyPoints: ["Organ completion", "Mental preparation", "Near full-term"] },
        { week: 36, title: "Pregnancy Week 36 — Full-Term Approaches", slug: "pregnancy-week-36", description: "Baby drops lower into pelvis; mom may feel stronger pelvic pressure.", keyPoints: ["Pelvic engagement", "Increased pressure", "Full-term approach"] },
        { week: 37, title: "Pregnancy Week 37 — Early Full-Term", slug: "pregnancy-week-37", description: "Labor could start any time; baby continues to gain weight and practice movements.", keyPoints: ["Early full-term", "Labor readiness", "Weight gain"] },
        { week: 38, title: "Pregnancy Week 38 — Final Preparations for Birth", slug: "pregnancy-week-38", description: "Baby's lungs are ready; mom may experience more frequent contractions.", keyPoints: ["Lung readiness", "Contraction frequency", "Final prep"] },
        { week: 39, title: "Pregnancy Week 39 — Baby is Ready for Birth", slug: "pregnancy-week-39", description: "Your due date is close; baby is positioned for birth.", keyPoints: ["Birth readiness", "Due date proximity", "Final positioning"] },
        { week: 40, title: "Pregnancy Week 40 — Full-Term & Labor Readiness", slug: "pregnancy-week-40", description: "The baby is fully developed; labor can start at any time.", keyPoints: ["Full development", "Labor initiation", "Birth anticipation"] }
      ]
    }
  ];

  const faqs = [
    {
      question: "What are the most important weeks during pregnancy?",
      answer: "Weeks 4-12 are crucial for organ formation, weeks 18-22 for anatomy scans, and weeks 28-40 for final development and labor preparation."
    },
    {
      question: "When will I start feeling my baby move?",
      answer: "Most women feel first movements (quickening) between weeks 16-25, with earlier sensations for second-time mothers."
    },
    {
      question: "What should I do if I'm experiencing severe symptoms?",
      answer: "Contact your healthcare provider immediately for severe pain, bleeding, decreased fetal movement, or any concerning symptoms."
    },
    {
      question: "How often should I have prenatal checkups?",
      answer: "Typically monthly until 28 weeks, every 2 weeks until 36 weeks, then weekly until delivery. Your provider will customize based on your needs."
    },
    {
      question: "What's the best way to track my pregnancy progress?",
      answer: "Use pregnancy apps, maintain a journal, attend all prenatal appointments, and follow our week-by-week guide for comprehensive tracking."
    }
  ];

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Pregnancy", href: "/pregnancy" },
    { name: "Week-by-Week Guide", href: "/pregnancy-week-wise" }
  ];

  const currentTrimester = pregnancyPosts.find(t => t.trimester === activeTrimester);
  const currentWeek = currentTrimester?.blogs.find(w => w.week === activeWeek);

  return (
    <>
      <Head>
        <title>Pregnancy Week-by-Week Guide | Baby Development & Tips | Belly Buds</title>
        <meta 
          name="description" 
          content="Complete pregnancy week-by-week guide with baby development milestones, mother's symptoms, and expert tips for all three trimesters. Your comprehensive pregnancy journey companion." 
        />
        <meta name="keywords" content="pregnancy week by week, baby development, pregnancy symptoms, trimester guide, fetal development, pregnancy tips" />
        <meta property="og:title" content="Pregnancy Week-by-Week Guide | Baby Development & Tips | Belly Buds" />
        <meta property="og:description" content="Complete pregnancy guide with weekly baby development milestones, mother's symptoms, and expert tips for all trimesters." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://bellybuds.com/pregnancy-week-wise" />
        <meta property="og:image" content="/images/pregnancy-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pregnancy Week-by-Week Guide | Belly Buds" />
        <meta name="twitter:description" content="Complete pregnancy guide with weekly development milestones and expert tips." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Pregnancy Week-by-Week Guide - Complete Pregnancy Journey",
            "description": "Comprehensive week-by-week pregnancy guide covering baby development, mother's changes, and expert tips for all three trimesters.",
            "author": {
              "@type": "Organization",
              "name": "Belly Buds"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Belly Buds",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bellybuds.com/logo.png"
              }
            },
            "datePublished": "2024-01-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bellybuds.com/pregnancy-week-wise"
            }
          })}
        </script>
      </Head>

      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 py-4 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.name} className="flex items-center space-x-2">
                  <Link 
                    href={crumb.href}
                    className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
                  >
                    {crumb.name}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-gray-300">/</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pregnancy Week-by-Week Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Track Your Babys Development Every Step of the Way
            </p>
            <p className="text-lg max-w-3xl mx-auto opacity-80">
              From conception to delivery - expert guidance, developmental milestones, 
              and mothers wellness tips for all 40 weeks of pregnancy.
            </p>
          </div>
        </section>

        {/* Sticky Navigation Bar - FIXED POSITION */}
        <div className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto py-4 space-x-4 hide-scrollbar">
              {/* Trimester Quick Navigation */}
              {pregnancyPosts.map((trimester) => (
                <button
                  key={trimester.trimester}
                  onClick={() => {
                    setActiveTrimester(trimester.trimester);
                    setActiveWeek(trimester.blogs[0].week);
                    // Scroll to top when changing trimester
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeTrimester === trimester.trimester
                      ? `bg-gradient-to-r ${trimester.color} text-white shadow-md`
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {trimester.shortName}
                </button>
              ))}
            </div>

            {/* Week Quick Navigation */}
            {currentTrimester && (
              <div className="flex overflow-x-auto py-2 space-x-2 hide-scrollbar">
                {currentTrimester.blogs.map((blog) => (
                  <button
                    key={blog.week}
                    onClick={() => {
                      setActiveWeek(blog.week);
                      // Scroll to top when changing week
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      activeWeek === blog.week
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Week {blog.week}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Additional Navigation (Hidden on mobile) */}
            <div className="lg:col-span-1 space-y-6 hidden lg:block">
              {/* Trimester Navigation */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Trimesters</h2>
                <div className="space-y-3">
                  {pregnancyPosts.map((trimester) => (
                    <button
                      key={trimester.trimester}
                      onClick={() => {
                        setActiveTrimester(trimester.trimester);
                        setActiveWeek(trimester.blogs[0].week);
                      }}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                        activeTrimester === trimester.trimester
                          ? `bg-gradient-to-r ${trimester.color} text-white shadow-md transform scale-105`
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">{trimester.trimester.split(' (')[0]}</span>
                        {activeTrimester === trimester.trimester && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <p className="text-xs mt-1 opacity-90">
                        {trimester.trimester.match(/\((.*?)\)/)[1]}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pregnancy Progress */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Pregnancy Timeline</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-600 font-semibold">First Trimester</span>
                    <span className="text-gray-600">Weeks 1-12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600 font-semibold">Second Trimester</span>
                    <span className="text-gray-600">Weeks 13-27</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-600 font-semibold">Third Trimester</span>
                    <span className="text-gray-600">Weeks 28-40</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {currentWeek && (
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Week Header */}
                  <div className={`bg-gradient-to-r ${currentTrimester.color} text-white p-6 md:p-8`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                          Week {currentWeek.week}
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{currentWeek.title}</h1>
                        <p className="text-lg opacity-90">{currentWeek.description}</p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <div className="text-4xl font-bold opacity-20">#{currentWeek.week}</div>
                        <div className="text-sm opacity-80">Week of Pregnancy</div>
                      </div>
                    </div>
                  </div>

                  {/* Week Content */}
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h3 className="font-semibold text-gray-800 mb-3">This Weeks Highlights</h3>
                        <div className="space-y-2">
                          {currentWeek.keyPoints.map((point, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4">
                        <h3 className="font-semibold text-orange-800 mb-3">Quick Tips</h3>
                        <ul className="text-orange-700 text-sm space-y-2">
                          <li>• Stay hydrated and eat small, frequent meals</li>
                          <li>• Get plenty of rest and listen to your body</li>
                          <li>• Attend scheduled prenatal appointments</li>
                          <li>• Practice gentle exercise if approved by doctor</li>
                        </ul>
                      </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
                        <p className="text-blue-800 font-medium">
                          💡 <strong>Expert Insight:</strong> Every pregnancy is unique. 
                          Use this guide as a reference and always consult your healthcare provider for personalized advice.
                        </p>
                      </div>

                      <div className="text-gray-700 leading-relaxed space-y-4">
                        <p>
                          During week {currentWeek.week}, {currentWeek.description.toLowerCase()}
                        </p>
                        <p>
                          This is an important stage in your pregnancy journey where both you and your baby 
                          are experiencing significant changes and growth.
                        </p>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <Link 
                          href={`/pregnancy-week-wise/${currentWeek.slug}`}
                          className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                          Read Detailed Guide for Week {currentWeek.week}
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* FAQ Section */}
              <section className="mt-12 bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Pregnancy FAQs
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-start">
                        <span className="text-orange-500 mr-3">Q:</span>
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed flex items-start">
                        <span className="text-blue-500 mr-3 font-semibold">A:</span>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Call to Action */}
              <section className="mt-12 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Track Your Entire Pregnancy Journey
                  </h2>
                  <p className="text-lg mb-6 opacity-90">
                    Join thousands of expecting parents who trust our week-by-week guides
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/communities"
                      className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                    >
                      Join Pregnancy Community
                    </Link>
                    <Link 
                      href="/resources"
                      className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
                    >
                      Explore Pregnancy Resources
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
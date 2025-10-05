"use client";

import Head from "next/head";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdBanner from "./components/AdBanner";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import SocialShare from "./components/SocialShare";

export default function Home() {
  const { data: session, status } = useSession();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loading, setLoading] = useState(false);

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

  // Pregnancy blogs
  const pregnancyPosts = [
    {
      trimester: "First Trimester (Weeks 1–12)",
      blogs: [
        { week: 1, title: "Pregnancy Week 1 — Preparing Your Body for Conception", slug: "pregnancy-week-1", description: "Understanding your menstrual cycle, improving fertility, and setting a healthy foundation for pregnancy." },
        { week: 2, title: "Pregnancy Week 2 — Ovulation & Conception Possibilities", slug: "pregnancy-week-2", description: "Ovulation occurs, increasing the chance of fertilization; prepare your body and mind." },
        { week: 3, title: "Pregnancy Week 3 — Fertilization & Early Cell Division", slug: "pregnancy-week-3", description: "The sperm meets the egg, forming a zygote; early cellular development begins." },
        { week: 4, title: "Pregnancy Week 4 — Implantation & First Signs of Pregnancy", slug: "pregnancy-week-4", description: "The embryo implants in the uterus; pregnancy tests may start showing positive results." },
        { week: 5, title: "Pregnancy Week 5 — Baby’s Heartbeat Begins & Hormonal Changes", slug: "pregnancy-week-5", description: "Baby’s heart starts to beat; mom experiences early pregnancy symptoms such as fatigue and nausea." },
        { week: 6, title: "Pregnancy Week 6 — Early Development & Symptoms Peak", slug: "pregnancy-week-6", description: "Rapid embryonic development occurs; nausea, breast tenderness, and mood swings may intensify." },
        { week: 7, title: "Pregnancy Week 7 — Facial Features & Brain Formation", slug: "pregnancy-week-7", description: "Baby’s face starts forming, neural tube development progresses; mom may experience heightened emotions." },
        { week: 8, title: "Pregnancy Week 8 — Baby’s Fingers, Toes & First Heartbeat", slug: "pregnancy-week-8", description: "Limbs are more defined, organs developing; mom may feel more noticeable morning sickness." },
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
        { week: 14, title: "Pregnancy Week 14 — Baby’s Movements May Be Felt Soon", slug: "pregnancy-week-14", description: "Quickening may begin; baby continues forming essential organs and bones." },
        { week: 15, title: "Pregnancy Week 15 — Baby Hears Sounds & Responds", slug: "pregnancy-week-15", description: "Auditory senses develop; mom may start to feel subtle movements." },
        { week: 16, title: "Pregnancy Week 16 — Quickening: Feeling Baby’s First Kicks", slug: "pregnancy-week-16", description: "Baby’s movements become noticeable; mom’s belly begins to round out." },
        { week: 17, title: "Pregnancy Week 17 — Stronger Bones & Skeleton Hardens", slug: "pregnancy-week-17", description: "Baby’s skeletal system strengthens; mom may experience backaches or growing belly discomfort." },
        { week: 18, title: "Pregnancy Week 18 — Anatomy Scan & Baby’s Growth Check", slug: "pregnancy-week-18", description: "Detailed ultrasound reveals baby’s growth, position, and gender (if opted)." },
        { week: 19, title: "Pregnancy Week 19 — Developing Senses & Skin Formation", slug: "pregnancy-week-19", description: "Baby develops taste buds, skin becomes less transparent; mom may notice more distinct movements." },
        { week: 20, title: "Pregnancy Week 20 — Halfway Mark & Gender Reveal", slug: "pregnancy-week-20", description: "Midway through pregnancy; many parents schedule anomaly scans." },
        { week: 21, title: "Pregnancy Week 21 — Baby Responds to External Sounds", slug: "pregnancy-week-21", description: "Mom may feel baby moving more actively in response to sounds or touch." },
        { week: 22, title: "Pregnancy Week 22 — Baby’s Rapid Growth Continues", slug: "pregnancy-week-22", description: "Facial features more defined; mom may notice increased appetite or fatigue." },
        { week: 23, title: "Pregnancy Week 23 — Baby’s Lungs Developing", slug: "pregnancy-week-23", description: "Lungs continue maturing; baby movements more coordinated." },
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
        { week: 30, title: "Pregnancy Week 30 — Rapid Brain Development", slug: "pregnancy-week-30", description: "Baby’s brain grows quickly; mom may notice Braxton Hicks contractions." },
        { week: 31, title: "Pregnancy Week 31 — Practice Breathing & Muscle Tone", slug: "pregnancy-week-31", description: "Baby practices breathing and stretches; mom may experience pelvic pressure." },
        { week: 32, title: "Pregnancy Week 32 — Gaining Fat & Energy Storage", slug: "pregnancy-week-32", description: "Baby stores fat for temperature regulation after birth." },
        { week: 33, title: "Pregnancy Week 33 — Getting Ready for Birth", slug: "pregnancy-week-33", description: "Baby positions head-down; mom may notice more discomfort." },
        { week: 34, title: "Pregnancy Week 34 — Nervous System Matures", slug: "pregnancy-week-34", description: "Baby’s nervous system is nearly complete; mom may experience fatigue and swelling." },
        { week: 35, title: "Pregnancy Week 35 — Almost Full-Term", slug: "pregnancy-week-35", description: "Baby organs nearly fully developed; mom prepares mentally for labor." },
        { week: 36, title: "Pregnancy Week 36 — Full-Term Approaches", slug: "pregnancy-week-36", description: "Baby drops lower into pelvis; mom may feel stronger pelvic pressure." },
        { week: 37, title: "Pregnancy Week 37 — Early Full-Term", slug: "pregnancy-week-37", description: "Labor could start any time; baby continues to gain weight and practice movements." },
        { week: 38, title: "Pregnancy Week 38 — Final Preparations for Birth", slug: "pregnancy-week-38", description: "Baby’s lungs are ready; mom may experience more frequent contractions." },
        { week: 39, title: "Pregnancy Week 39 — Baby is Ready for Birth", slug: "pregnancy-week-39", description: "Your due date is close; baby is positioned for birth." },
        { week: 40, title: "Pregnancy Week 40 — Full-Term & Labor Readiness", slug: "pregnancy-week-40", description: "The baby is fully developed; labor can start at any time." }
      ]
    }
  ];

  // Motherhood blogs
  const motherhoodPosts = [
    { month: 1, title: "Month 1 — Surviving the First 30 Days", slug: "Motherhood-month-1", description: "Practical tips, feeding schedules, growth milestones, real mom stories, and checklists for the first month of motherhood." },
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
    { title: "Breastfeeding vs Formula: Pros & Cons Every Parent Should Consider", slug: "breastfeeding-vs-formula", description: "Learn about breastfeeding and formula feeding, and decide what’s best for your baby." },
    { title: "5 Ways to Calm a Crying Baby: Tested and Soothing Remedies", slug: "calm-crying-baby", description: "Effective tips to calm your baby when crying, backed by expert advice." },
    { title: "How to Make Your Home Baby-Safe: A Complete Baby-Proofing Guide", slug: "baby-proofing-guide", description: "Step-by-step guide to make your home safe for newborns and toddlers." },
    { title: "10 Best Lullabies to Help Your Baby Sleep Peacefully", slug: "best-baby-lullabies", description: "Discover soothing lullabies that help your baby sleep better at night." },
    { title: "5 Milestones to Expect in Your Baby’s First Year", slug: "baby-first-year-milestones", description: "Track your baby’s development with these important first-year milestones." },
    { title: "How to Swaddle Your Baby: Step-by-Step Techniques for Comfort", slug: "how-to-swaddle", description: "Learn proper swaddling techniques to keep your baby comfortable and secure." },
    { title: "What to Expect the First 24 Hours After Giving Birth", slug: "first-24-hours-after-birth", description: "Guide for new parents on what happens in the first 24 hours after birth." },
    { title: "Self-Care for Stay-At-Home Moms: Tips for Wellbeing and Balance", slug: "self-care-for-moms", description: "Important self-care tips for stay-at-home moms to maintain health and balance." },
    { title: "Baby Diapers: Absorbency, Comfort, Disposable Bags & Diaper Liners", slug: "disposable-bags-and-diaper-liners", description: "Guide on disposable diaper bags and liners for a cleaner, easier diaper-changing routine." },
    { title: "Top 10 Must-Have Baby Gear Essentials for New Parents", slug: "baby-gear-essentials", description: "Bringing a newborn home can be overwhelming, but having the right gear can make a huge difference." }
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      <NextSeo
        title="Belly Buds | Motherhood, Parenting & Pregnancy Blogs"
        description="Explore Belly Buds motherhood (Parenting) blogs, pregnancy week-wise guides, and parenting tips. Learn from experts and real experiences to make your motherhood (Parenting) journey smoother."
        canonical="https://baby-toys.shop/"
      />

      <Header />

      <section
        className="hero relative p-8 md:p-16 bg-orange-50 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/main page background.jpg')" }}
      >
        <div className="container mx-auto text-center max-w-3xl bg-white/70 rounded-xl p-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-orange-600">
            Welcome to Belly Buds
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            A trusted space for mothers and families. Discover expert tips,
            week-by-week pregnancy guidance, and real motherhood (Parenting)
            experiences. Because raising a child should be a joyful journey, not a
            stressful one.
          </p>
          <div className="flex justify-center items-center">
            <SocialShare imageUrl="/images/main page background.jpg" title="Welcome to Belly Buds" />
          </div>
        </div>
      </section>


      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 md:px-8 my-12">
        <div className="lg:col-span-9 space-y-12">
          {/* Motherhood Blogs */}
          <section className="my-12 px-4 md:px-8">
            <h1 className="text-2xl font-semibold mb-6 text-center text-orange-600">Motherhood (Parenting) Blogs</h1>
            <div className="grid gap-6 md:grid-cols-3">
              {motherhoodPosts.map((post) => (
                <div key={post.slug} className="border rounded-lg shadow hover:shadow-lg p-6">
                  <div className="relative w-full h-40 md:h-56 rounded overflow-hidden">
                    <Image
                      src={`/images/motherhood-${post.month}.jpg`}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    <Link href={`/motherhood-blogs/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                  <Link href={`/motherhood-blogs/${post.slug}`} className="text-orange-500 font-medium mt-3 inline-block">Read More →</Link>
                </div>
              ))}
            </div>
          </section>

          {/* Parenting Blogs */}
          <section className="my-12 px-4 md:px-8">
            <h1 className="text-2xl font-semibold mb-6 text-center text-orange-600">Parenting & Baby Care</h1>
            <div className="grid gap-6 md:grid-cols-3">
              {blogPosts.map((post) => (
                <div key={post.slug} className="border rounded-lg shadow hover:shadow-lg p-6">
                  <div className="relative w-full h-40 md:h-56 rounded overflow-hidden">
                    <Image
                      src={`/images/blog-${post.slug}.jpg`}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                  <Link href={`/blogs/${post.slug}`} className="text-orange-500 font-medium mt-3 inline-block">Read More →</Link>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-12">
            <h1 className="text-2xl font-semibold mb-4 text-center text-orange-600">Pregnancy due date calculator</h1>
            <div className="mt-10 bg-gray-50 p-6 rounded-xl shadow-md space-y-4">
              <h1 className="text-2xl font-semibold text-orange-600 mb-4">Understanding Due Date Calculations</h1>

              <p className="text-gray-700">
                <strong>LMP-based:</strong> Pregnancy is calculated from the first day of your last menstrual period, assuming a standard 28-day cycle.
              </p>
              <p className="text-gray-700">
                <strong>Conception date:</strong> Counting 38 weeks from the day of fertilization gives an estimated due date, though conception may not occur exactly on the day of intercourse.
              </p>
              <p className="text-gray-700">
                <strong>Ultrasound:</strong> An early scan can measure your baby and give an accurate gestational age, particularly useful for irregular cycles.
              </p>
              <p className="text-gray-700">
                <strong>IVF:</strong> Exact fertilization or embryo transfer dates allow a very precise due date calculation.
              </p>
              <p className="text-gray-700">
                <strong>Twins/Multiples:</strong> Often delivered earlier than singletons; doctors may adjust the due date accordingly.
              </p>
            </div>
            <div className="text-center mt-4">
              <Link
                href="/pregnancy/pregnancy-due-date-calculator"
                className="mr-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Calculate Your Pregnancy Due Date
              </Link>
              <Link
                href="/pregnancy/ovulation-calculator"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Calculate Your Ovulation
              </Link>
            </div>
          </section>
          {/* Baby Names Section */}
          <section className="my-12 px-4 md:px-8">
            <h1 className="text-2xl font-semibold mb-6 text-center text-orange-600">Baby Names</h1>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { name: "Oliver", gender: "Boy", slug: "oliver" },
                { name: "Emma", gender: "Girl", slug: "emma" },
                { name: "Liam", gender: "Boy", slug: "liam" },
                { name: "Ava", gender: "Girl", slug: "ava" },
                { name: "Noah", gender: "Boy", slug: "noah" },
                { name: "Sophia", gender: "Girl", slug: "sophia" },
                { name: "Ethan", gender: "Boy", slug: "ethan" },
                { name: "Isabella", gender: "Girl", slug: "isabella" }
              ].map((baby, index) => (
                <Link
                  key={index}
                  href={`/baby-names/baby-names-search`}
                  className="border rounded-lg shadow hover:shadow-lg p-4 text-center block"
                >
                  <h3 className="text-lg font-bold text-gray-800">{baby.name}</h3>
                  <p className="text-gray-600">{baby.gender}</p>
                </Link>
              ))}

            </div>
            <div className="flex justify-center">
              <Link
                href={`/baby-names/baby-names-search`}
                className="border rounded-lg shadow hover:shadow-lg p-6 text-center text-lg font-bold text-gray-800 bg-white hover:bg-orange-50 transition"
              >
                Search Baby Names
              </Link>
            </div>
          </section>

          {/* Single Gaby Game Section */}
          <section className="my-12 px-4 md:px-8">
            <h1 className="text-2xl font-semibold mb-6 text-center text-orange-600">Baby Game</h1>
            <div className="flex justify-center">
              <Link
                href="/games/guess-baby-animal"
                className="border rounded-lg shadow hover:shadow-lg overflow-hidden w-full max-w-sm"
              >
                <div className="relative w-full h-56">
                  <Image
                    src="/images/baby game image1.jpg"
                    alt="Puzzle Fun"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold p-4 text-center text-gray-800">Puzzle Fun</h3>
              </Link>
            </div>
          </section>
          {/* Pregnancy Blogs */}
          <section className="my-12 px-4 md:px-8">
            <h1 className="text-2xl font-semibold mb-6 text-center text-orange-600">
              Pregnancy Week-by-Week
            </h1>

            {pregnancyPosts.map((trimester, index) => (
              <div key={trimester.trimester} className="mb-8">
                <div className="relative w-full h-40 md:h-56 rounded overflow-hidden">
                  <Image
                    src={`/images/trimester-${index + 1}.jpg`}
                    alt={`trimester-${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{trimester.trimester}</h3>
                <div className="grid gap-4 md:grid-cols-4">
                  {trimester.blogs.map((weekBlog) => (
                    <Link
                      key={weekBlog.slug}
                      href={`/pregnancy-week-wise/${weekBlog.slug}`}
                      className="border rounded-lg shadow hover:shadow-lg p-2 text-center text-sm md:text-base text-gray-800"
                    >
                      Pregnancy Week {weekBlog.week}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="lg:col-span-3 space-y-12">
          <aside className="hidden lg:block lg:col-span-3 self-start sticky top-24 space-y-6">
            <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-6">
              <h3 className="text-center text-gray-500 uppercase font-bold text-sm mb-4">ADVERTISEMENT</h3>
              <AdBanner />
            </div>
          </aside>
        </div>
      </div>
      <Footer />

      {/* Popup modal for Google login */}
      {showLoginModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "10px",
              textAlign: "center",
              minWidth: "300px",
            }}
          >
            <h1>Login with Google</h1>
            <button
              onClick={handleGoogleLogin}
              style={{
                padding: "10px 20px",
                marginTop: "20px",
                cursor: "pointer",
                backgroundColor: "#4285F4",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              disabled={loading}
            >
              {loading ? (
                <div className="loader" style={{
                  border: "3px solid #f3f3f3",
                  borderTop: "3px solid #fff",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                  animation: "spin 1s linear infinite",
                }} />
              ) : (
                "Sign in with Google"
              )}
              <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

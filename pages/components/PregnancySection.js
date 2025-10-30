import Link from 'next/link';
import { FaSeedling, FaLeaf, FaCalendarAlt } from 'react-icons/fa';

// Move heavy data to separate file or API
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

export default function PregnancySection() {
  return (
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
  );
}
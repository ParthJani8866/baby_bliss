// pages/astrology/horoscope/today/[date].js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function DailyHoroscopePage({
  horoscopeData,
  formattedDate,
  zodiacSigns,
  upcomingDates,
  currentDate,
  error
}) {
  const router = useRouter();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Horoscope Not Found</h1>
          <p className="text-gray-600 mb-6">The horoscope for this date is not available.</p>
          <Link href="/astrology/horoscope" className="bg-purple-600 text-white px-6 py-3 rounded-lg">
            View Today Horoscope
          </Link>
        </div>
      </div>
    );
  }

  if (router.isFallback) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your daily horoscope...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{horoscopeData.metaTitle}</title>
        <meta name="description" content={horoscopeData.metaDescription} />
        <meta name="keywords" content={horoscopeData.metaKeywords} />
        <link rel="canonical" href={`https://yoursite.com/astrology/horoscope/today/${currentDate}`} />

        {/* Open Graph */}
        <meta property="og:title" content={horoscopeData.metaTitle} />
        <meta property="og:description" content={horoscopeData.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yoursite.com/astrology/horoscope/today/${currentDate}`} />
        <meta property="article:published_time" content={currentDate} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={horoscopeData.metaTitle} />
        <meta name="twitter:description" content={horoscopeData.metaDescription} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": horoscopeData.metaTitle,
              "description": horoscopeData.metaDescription,
              "datePublished": currentDate,
              "dateModified": new Date().toISOString(),
              "author": {
                "@type": "Organization",
                "name": "YourSiteName Astrology"
              },
              "publisher": {
                "@type": "Organization",
                "name": "YourSiteName",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yoursite.com/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://yoursite.com/astrology/horoscope/today/${currentDate}`
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <header className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Daily Horoscope
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Daily Horoscope - {formattedDate.month} {formattedDate.day}, {formattedDate.year}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {formattedDate.weekday}
            </p>
            {horoscopeData.specialEvent && (
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg p-6 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-2">✨ {horoscopeData.specialEvent.name}</h2>
                <p className="text-lg">{horoscopeData.specialEvent.description}</p>
              </div>
            )}
          </header>

          {/* Quick Zodiac Navigation */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Quick Jump to Your Sign</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {zodiacSigns.map((sign) => (
                  <a
                    key={sign.name}
                    href={`#${sign.name.toLowerCase()}`}
                    className="text-center p-3 rounded-lg hover:bg-purple-50 transition-colors border border-gray-200"
                  >
                    <div className="text-2xl mb-1">{sign.symbol}</div>
                    <span className="text-sm font-medium text-gray-700">{sign.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Horoscope Readings */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {horoscopeData.signs.map((sign) => (
                <div
                  key={sign.name}
                  id={sign.name.toLowerCase()}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{sign.symbol}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{sign.name}</h2>
                        <p className="text-sm text-gray-500">{sign.dates}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${sign.element === 'Fire' ? 'bg-red-100 text-red-800' :
                      sign.element === 'Earth' ? 'bg-green-100 text-green-800' :
                        sign.element === 'Air' ? 'bg-blue-100 text-blue-800' :
                          'bg-purple-100 text-purple-800'
                      }`}>
                      {sign.element}
                    </span>
                  </div>

                  {/* Overall Prediction */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Today Overview</h3>
                    <p className="text-gray-700">{sign.overview}</p>
                  </div>

                  {/* Category Predictions */}
                  <div className="space-y-4">
                    <div className="border-l-4 border-pink-500 pl-4">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        💖 Love & Relationships
                      </h3>
                      <p className="text-gray-700">{sign.love}</p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        💼 Career & Finance
                      </h3>
                      <p className="text-gray-700">{sign.career}</p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        🌿 Health & Wellness
                      </h3>
                      <p className="text-gray-700">{sign.health}</p>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        ✨ Luck & Opportunities
                      </h3>
                      <p className="text-gray-700">{sign.luck}</p>
                    </div>
                  </div>

                  {/* Lucky Numbers & Elements */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="font-semibold">Lucky Numbers:</span>
                        <span className="ml-2 text-gray-600">{sign.luckyNumbers.join(', ')}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Color:</span>
                        <span className="ml-2 text-gray-600">{sign.luckyColor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Days Navigation */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Daily Horoscopes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {upcomingDates.map((upcomingDate) => (
                  <Link
                    key={upcomingDate.slug}
                    href={`/astrology/horoscope/today/${upcomingDate.slug}`}
                    className="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-lg mb-2">{upcomingDate.formatted}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {upcomingDate.event ? `Special: ${upcomingDate.event}` : 'Daily horoscope predictions'}
                    </p>
                    <span className="text-purple-600 text-sm font-semibold">
                      Read Preview →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-purple-600">How accurate are daily horoscopes?</h3>
                    <p className="text-gray-700">
                      Daily horoscopes provide general guidance based on planetary transits affecting each zodiac sign.
                      While they offer valuable insights, remember they are general predictions. For personalized accuracy,
                      consider your complete birth chart.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-purple-600">What time are horoscopes updated?</h3>
                    <p className="text-gray-700">
                      Our daily horoscopes are updated at 6:00 AM EST every morning. This ensures you have fresh astrological
                      guidance to start your day with cosmic insights and planetary awareness.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-purple-600">Can I read yesterday horoscope?</h3>
                    <p className="text-gray-700">
                      Yes! You can access past horoscopes by changing the date in the URL. Simply replace the date in the URL
                      with your desired date in YYYY-MM-DD format.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-purple-600">Why do horoscopes sometimes not resonate?</h3>
                    <p className="text-gray-700">
                      If your sun sign horoscope does not resonate, try reading for your rising sign (ascendant).
                      Also, remember horoscopes are general guidance - apply what feels right for your specific situation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-purple-600">What is the best time to read my horoscope?</h3>
                    <p className="text-gray-700">
                      Many people find reading their horoscope in the morning helps set intentions for the day.
                      However, you can read it anytime that fits your schedule and helps you reflect on the day energy.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-purple-600">How are horoscope predictions made?</h3>
                    <p className="text-gray-700">
                      Our astrologers analyze current planetary positions, moon phases, aspects between planets,
                      and their relationships to each zodiac sign. This creates personalized guidance for each sign energy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Content Section */}
          <section className="prose prose-lg max-w-none bg-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Daily Horoscope for {formattedDate.month} {formattedDate.day}, {formattedDate.year}</h2>

            <p>
              Welcome to your comprehensive <strong>daily horoscope reading for {formattedDate.month} {formattedDate.day}, {formattedDate.year}</strong>.
              Our astrological predictions are carefully crafted to provide guidance and insights for all twelve zodiac signs,
              helping you navigate the day cosmic energies in <strong>love, career, health, and personal growth</strong>.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Understanding Today Planetary Influences</h3>
            <p>
              {horoscopeData.planetaryOverview || `The celestial configuration today creates unique opportunities for each zodiac sign. 
              Planetary alignments influence different aspects of our lives, from relationships and career to health and spiritual growth.`}
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">How to Make the Most of Your Daily Horoscope</h3>
            <p>
              Reading your horoscope daily can be a powerful tool for self-awareness and personal development. Here is how to get the most value:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Read in the morning</strong> - Set your intentions for the day based on cosmic guidance</li>
              <li><strong>Focus on relevant areas</strong> - Pay special attention to sections that address your current concerns</li>
              <li><strong>Keep a journal</strong> - Track how horoscope insights manifest in your daily experiences</li>
              <li><strong>Combine with intuition</strong> - Use the guidance as a tool, not absolute prediction</li>
            </ul>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold mb-3">💫 Astrological Insight for {formattedDate.month} {formattedDate.day}</h3>
              <p className="mb-0">
                Today planetary aspects favor introspection and planning. Consider how you can align your actions with
                the cosmic currents to maximize opportunities and minimize challenges throughout your day.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        
        <Footer />
      </div>
    </>
  );
}

// SSR - This runs on every request
export async function getServerSideProps(context) {
  try {
    const { date } = context.params;

    // Parse the date from URL parameter (YYYY-MM-DD format)
    const [year, month, day] = date.split('-').map(Number);
    const horoscopeDate = new Date(year, month - 1, day);

    // Validate date
    if (isNaN(horoscopeDate.getTime())) {
      return {
        notFound: true,
      };
    }

    // Validate date range (optional - you can adjust as needed)
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 365);

    if (horoscopeDate < new Date('2020-01-01') || horoscopeDate > maxDate) {
      return {
        notFound: true,
      };
    }

    // Generate horoscope data for this specific date
    const horoscopeData = await getDailyHoroscope(horoscopeDate);

    const formattedDate = {
      weekday: horoscopeDate.toLocaleDateString('en-US', { weekday: 'long' }),
      month: horoscopeDate.toLocaleDateString('en-US', { month: 'long' }),
      day: horoscopeDate.getDate(),
      year: horoscopeDate.getFullYear(),
    };

    const zodiacSigns = [
      { name: 'Aries', dates: 'Mar 21 - Apr 19', symbol: '♈', element: 'Fire' },
      { name: 'Taurus', dates: 'Apr 20 - May 20', symbol: '♉', element: 'Earth' },
      { name: 'Gemini', dates: 'May 21 - Jun 20', symbol: '♊', element: 'Air' },
      { name: 'Cancer', dates: 'Jun 21 - Jul 22', symbol: '♋', element: 'Water' },
      { name: 'Leo', dates: 'Jul 23 - Aug 22', symbol: '♌', element: 'Fire' },
      { name: 'Virgo', dates: 'Aug 23 - Sep 22', symbol: '♍', element: 'Earth' },
      { name: 'Libra', dates: 'Sep 23 - Oct 22', symbol: '♎', element: 'Air' },
      { name: 'Scorpio', dates: 'Oct 23 - Nov 21', symbol: '♏', element: 'Water' },
      { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', symbol: '♐', element: 'Fire' },
      { name: 'Capricorn', dates: 'Dec 22 - Jan 19', symbol: '♑', element: 'Earth' },
      { name: 'Aquarius', dates: 'Jan 20 - Feb 18', symbol: '♒', element: 'Air' },
      { name: 'Pisces', dates: 'Feb 19 - Mar 20', symbol: '♓', element: 'Water' },
    ];

    const upcomingDates = getUpcomingDates(3, horoscopeDate);

    return {
      props: {
        horoscopeData,
        formattedDate,
        zodiacSigns,
        upcomingDates,
        currentDate: date,
      },
    };
  } catch (error) {
    console.error('Error generating horoscope page:', error);

    return {
      props: {
        error: true
      },
    };
  }
}

// Helper functions
async function getDailyHoroscope(date) {
  const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

  const event = getAstrologyEvent(date);

  // Generate realistic horoscope content with human-written predictions
  const signsData = signs.map((sign) => {
    const prediction = getSignSpecificPrediction(sign, date);
    return {
      name: sign,
      symbol: getZodiacSymbol(sign),
      element: prediction.element,
      dates: getZodiacDates(sign),
      overview: prediction.overview,
      love: prediction.love,
      career: prediction.career,
      health: prediction.health,
      luck: prediction.luck,
      luckyNumbers: prediction.luckyNumbers,
      luckyColor: getLuckyColor(sign)
    };
  });

  const specialEvent = event ? {
    name: event.name,
    description: event.description
  } : null;

  return {
    signs: signsData,
    specialEvent,
    metaTitle: `Daily Horoscope ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} | Accurate Zodiac Predictions for Love, Career & More`,
    metaDescription: `Free daily horoscope readings for all 12 zodiac signs on ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. Get personalized astrology predictions for Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. Discover what the stars say about your love life, career opportunities, health tips, and lucky moments today.`,
    metaKeywords: `daily horoscope, horoscope today, ${date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}, zodiac predictions, free astrology, love horoscope, career horoscope, health astrology, ${signs.join(', ').toLowerCase()}, what does my horoscope say today, daily zodiac guidance`,
    planetaryOverview: `The current planetary alignment for ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} features favorable aspects between Jupiter and Venus, creating harmonious energy for all zodiac signs. Moon in ${getMoonSign(date)} enhances emotional awareness and intuition, making this an excellent day for relationship building and financial planning.`
  };
}

// Realistic human-written predictions for each zodiac sign
function getSignSpecificPrediction(sign, date) {
  const predictions = {
    Aries: {
      element: 'Fire',
      overview: `Today brings dynamic energy for Aries, perfect for initiating new projects and taking bold actions. The Mars influence empowers your natural leadership qualities, making this an excellent day for career advancements and personal breakthroughs. You'll feel particularly motivated to tackle challenges head-on.`,
      love: `Your passionate nature shines in relationships today. Single Aries might encounter someone intriguing during afternoon activities. For committed relationships, plan an adventurous date night to rekindle the spark. Communication flows easily, so express your feelings openly.`,
      career: `Professional opportunities emerge through networking events or unexpected meetings. Your innovative ideas get noticed by superiors - don't hesitate to speak up in meetings. Financial gains possible through side projects or investments made earlier.`,
      health: `High energy levels today, but be mindful of stress-related tension. Incorporate cardio exercises to channel your fiery energy positively. Pay attention to headaches - take breaks and stay hydrated throughout your busy schedule.`,
      luck: `Lucky moments occur between 2-4 PM. Trust your instincts when making quick decisions. Unexpected financial opportunities may come through social connections. Your bold approach to challenges brings fortunate outcomes.`,
      luckyNumbers: [7, 15, 23, 31]
    },
    Taurus: {
      element: 'Earth',
      overview: `A grounded and practical day awaits Taurus, with Venus blessing your endeavors. Focus on financial planning and relationship building. Your steady approach helps you make significant progress on long-term goals while enjoying life's simple pleasures.`,
      love: `Romantic energies are strong today. Existing relationships deepen through meaningful conversations and shared values. Single Taurus might connect with someone through mutual friends or work environments. Express appreciation for loved ones.`,
      career: `Stable financial growth continues, with opportunities for increasing income through diligent work. Your practical solutions to workplace challenges impress colleagues. Consider long-term investments that align with your security needs.`,
      health: `Focus on digestive health and maintaining routine. Comfort foods are appealing but balance with nutritious options. Gentle exercises like yoga or walking in nature help maintain your earthy equilibrium and reduce stress.`,
      luck: `Financial luck appears through unexpected sources. Check old emails for overlooked opportunities. Your patience pays off in negotiations. Lucky encounters happen in stable, comfortable environments rather than chaotic settings.`,
      luckyNumbers: [4, 12, 20, 28]
    },
    Gemini: {
      element: 'Air',
      overview: `Your communication skills are highlighted today, Gemini. Mercury's influence makes this perfect for networking, learning, and expressing ideas. You'll find multiple opportunities to connect with interesting people and gather valuable information for future projects.`,
      love: `Intellectual connections lead to romantic possibilities today. Meaningful conversations create bonds stronger than physical attraction. For existing relationships, plan an activity that stimulates both your minds and creates shared learning experiences.`,
      career: `Multiple projects demand your attention simultaneously. Your adaptability becomes your greatest asset. Networking events or casual conversations could lead to significant career opportunities. Document creative ideas that emerge throughout the day.`,
      health: `Mental stimulation is high, but watch for nervous energy. Practice deep breathing when feeling overwhelmed. Variety in your exercise routine keeps you engaged. Pay attention to respiratory health and avoid stressful situations.`,
      luck: `Lucky breaks come through communication - emails, messages, or chance conversations. Your curiosity leads you to beneficial information. Social media interactions might reveal unexpected opportunities. Stay open to last-minute invitations.`,
      luckyNumbers: [5, 14, 23, 32]
    },
    Cancer: {
      element: 'Water',
      overview: `Emotional depth and intuition guide your day, Cancer. The Moon's influence enhances your natural sensitivity, making this perfect for nurturing relationships and creating comfortable environments. Trust your gut feelings when making important decisions.`,
      love: `Deep emotional connections flourish today. Express your feelings openly with partners - vulnerability strengthens bonds. Single Cancer might attract someone through shared emotional understanding. Home-based dates create the perfect romantic atmosphere.`,
      career: `Your empathetic approach helps resolve workplace conflicts. Creative projects benefit from your intuitive insights. Financial decisions should be made after consulting trusted advisors. Team collaborations bring unexpected success.`,
      health: `Emotional wellness directly impacts physical health today. Create a peaceful home environment for relaxation. Water-based activities like swimming or long baths help balance your emotional energy. Pay attention to stomach-related issues.`,
      luck: `Lucky moments occur in familiar, comfortable settings. Family connections might bring unexpected benefits. Your intuition guides you to hidden opportunities. Evening hours are particularly fortunate for personal matters.`,
      luckyNumbers: [2, 11, 20, 29]
    },
    Leo: {
      element: 'Fire',
      overview: `Your charismatic energy shines brightly today, Leo. The Sun's position enhances your natural leadership qualities and creative expression. This is an excellent day for taking center stage, pursuing artistic endeavors, and inspiring others with your vision.`,
      love: `Romantic opportunities arise in social settings where you can showcase your personality. Existing relationships benefit from grand gestures and heartfelt compliments. Your warmth and generosity attract admiration and deeper connections.`,
      career: `Creative projects receive recognition and support. Leadership roles come naturally - don't shy away from taking charge. Financial gains possible through artistic talents or entertainment industry connections. Your confidence impresses decision-makers.`,
      health: `High energy levels support ambitious activities, but watch for heart-related stress. Balance social engagements with quiet recovery time. Dramatic physical activities or dance satisfy your need for expressive movement.`,
      luck: `Luck finds you when you're in the spotlight. Performance opportunities lead to bigger breaks. Your generous acts return multiplied benefits. Important connections happen at social events or through creative collaborations.`,
      luckyNumbers: [1, 10, 19, 28]
    },
    Virgo: {
      element: 'Earth',
      overview: `Analytical skills and attention to detail serve you well today, Virgo. Mercury's practical influence helps you organize complex projects and improve systems. Your methodical approach leads to tangible results and recognition for your diligent work.`,
      love: `Practical expressions of love resonate more than grand gestures today. Helping partners with tasks or offering thoughtful advice strengthens bonds. Single Virgo might connect with someone through work or health-focused activities.`,
      career: `Your organizational skills solve persistent workplace problems. Detailed work gets noticed and appreciated. Financial planning efforts pay off - review budgets and investment strategies. Efficiency improvements lead to time and resource savings.`,
      health: `Focus on preventive care and routine health maintenance. Your analytical mind helps identify needed lifestyle adjustments. Pay attention to digestive health and incorporate more fiber. Structured exercise routines work best for you.`,
      luck: `Lucky discoveries happen through careful research and attention to detail. Overlooked opportunities resurface when you review old projects. Your practical solutions to problems bring unexpected rewards and recognition.`,
      luckyNumbers: [6, 15, 24, 33]
    },
    Libra: {
      element: 'Air',
      overview: `Harmony and balance define your day, Libra. Venus blesses your relationships and aesthetic pursuits. Focus on creating beauty in your environment and resolving conflicts through diplomacy. Your natural charm helps navigate social situations gracefully.`,
      love: `Romantic energies are particularly strong today. Existing relationships reach new levels of harmony and understanding. Single Libra attracts admirers through social grace and artistic sensibilities. Partnership decisions made today have long-term positive effects.`,
      career: `Collaborative projects succeed through your diplomatic approach. Creative fields and design work receive favorable attention. Financial opportunities come through partnerships or joint ventures. Your ability to see multiple perspectives becomes valuable.`,
      health: `Balance is key - alternate between social activities and quiet reflection. Beauty treatments or spa visits enhance wellbeing. Pay attention to kidney health and maintain fluid balance. Gentle exercises like tai chi support your need for harmony.`,
      luck: `Lucky encounters happen in beautiful environments or cultural settings. Your sense of timing helps you seize perfect opportunities. Partnership-based ventures bring unexpected benefits. Social connections lead to fortunate developments.`,
      luckyNumbers: [7, 16, 25, 34]
    },
    Scorpio: {
      element: 'Water',
      overview: `Intense transformations and deep insights characterize your day, Scorpio. Pluto's influence brings powerful revelations and opportunities for personal growth. Your magnetic presence attracts important connections and reveals hidden truths.`,
      love: `Passionate encounters and deep emotional connections possible today. Existing relationships undergo positive transformations through honest communication. Single Scorpio might attract intense, meaningful connections that feel destined.`,
      career: `Research and investigation yield valuable insights. Your ability to uncover hidden information serves you well. Financial transformations possible through inheritance, investments, or partnership arrangements. Power dynamics at work shift in your favor.`,
      health: `Emotional intensity needs constructive outlets. Transformative practices like meditation or therapy bring breakthroughs. Pay attention to reproductive health and stress management. Intense physical activities help release pent-up energy.`,
      luck: `Lucky breaks come through uncovering hidden information or solving mysteries. Your intuition guides you to overlooked opportunities. Evening hours bring fortunate developments in personal transformations.`,
      luckyNumbers: [8, 17, 26, 35]
    },
    Sagittarius: {
      element: 'Fire',
      overview: `Adventure and expansion call today, Sagittarius. Jupiter's influence brings opportunities for learning, travel, and philosophical growth. Your optimistic outlook attracts positive experiences and helps you see the bigger picture in challenging situations.`,
      love: `Romantic possibilities emerge through educational settings, travel, or cultural events. Existing relationships benefit from shared adventures and learning experiences. Your enthusiasm and honesty create genuine connections with like-minded people.`,
      career: `International connections or long-distance opportunities arise. Your big-picture thinking impresses superiors. Financial gains possible through publishing, teaching, or legal matters. Philosophical approaches to business problems yield innovative solutions.`,
      health: `Optimism supports overall wellbeing, but watch for overextension. Outdoor activities and sports satisfy your need for adventure. Pay attention to hip and liver health. Learning new health practices keeps you engaged and motivated.`,
      luck: `Lucky breaks occur when you follow your wanderlust. Spontaneous decisions lead to fortunate encounters. Educational pursuits open doors to unexpected opportunities. Your faith in the universe rewards you with synchronicities.`,
      luckyNumbers: [3, 12, 21, 30]
    },
    Capricorn: {
      element: 'Earth',
      overview: `Ambitious energy drives your success today, Capricorn. Saturn's discipline helps you make significant progress toward long-term goals. Your practical wisdom and responsible approach earn respect and open doors to authority positions.`,
      love: `Serious connections and committed relationships flourish today. Single Capricorn might attract someone through professional settings or shared ambitions. Your reliability and integrity create strong foundations for lasting partnerships.`,
      career: `Career advancements and recognition for your hard work likely today. Leadership roles come naturally as others trust your judgment. Financial planning and long-term investments show promising returns. Your structured approach solves complex problems.`,
      health: `Focus on bone and joint health through weight-bearing exercises. Your disciplined approach serves your wellness goals well. Balance work demands with adequate rest - your ambitious nature might push you too hard. Skin health benefits from consistent care.`,
      luck: `Luck comes through disciplined efforts and long-term planning. Opportunities you've worked toward finally materialize. Your reputation for reliability attracts beneficial connections. Evening hours bring fortunate career developments.`,
      luckyNumbers: [10, 19, 28, 37]
    },
    Aquarius: {
      element: 'Air',
      overview: `Innovative ideas and social connections highlight your day, Aquarius. Uranus brings unexpected insights and revolutionary approaches to old problems. Your unique perspective helps you see opportunities others miss and connect with forward-thinking individuals.`,
      love: `Unconventional relationships and intellectual connections appeal today. Existing partnerships benefit from trying new activities together. Single Aquarius might connect with someone through technology, social causes, or group activities.`,
      career: `Technological innovations and group projects succeed through your visionary input. Your humanitarian approach to business impresses influential people. Financial opportunities emerge through networking and social media connections.`,
      health: `Mental stimulation is crucial, but balance with physical activity. Unusual exercise routines or group fitness classes keep you engaged. Pay attention to circulatory health and maintain social connections for emotional wellbeing.`,
      luck: `Lucky breaks come through unexpected channels and technological means. Your willingness to try new approaches reveals hidden opportunities. Group activities and social causes lead to fortunate connections and developments.`,
      luckyNumbers: [11, 20, 29, 38]
    },
    Pisces: {
      element: 'Water',
      overview: `Intuitive insights and creative inspiration flow today, Pisces. Neptune enhances your spiritual connection and artistic sensitivities. This is a perfect day for creative projects, meditation, and helping others through your compassionate nature.`,
      love: `Deep spiritual connections and romantic idealism characterize your relationships today. Existing partnerships reach new levels of emotional intimacy. Single Pisces might attract someone through artistic or spiritual activities. Dreams may reveal important insights.`,
      career: `Creative projects and helping professions receive divine inspiration. Your intuitive approach to business decisions yields surprising success. Financial opportunities emerge through artistic talents or spiritual services. Team collaborations benefit from your empathy.`,
      health: `Focus on spiritual and emotional wellness through meditation, prayer, or time in nature. Water-based therapies and gentle exercises support your sensitive nature. Pay attention to foot health and avoid substance overindulgence.`,
      luck: `Lucky moments occur through intuitive guidance and synchronicities. Your dreams may contain important messages. Helping others brings unexpected rewards. Creative expressions open doors to fortunate opportunities.`,
      luckyNumbers: [12, 21, 30, 39]
    }
  };

  return predictions[sign] || getDefaultPrediction(sign);
}

function getDefaultPrediction(sign) {
  return {
    element: 'Fire',
    overview: `Today brings balanced energy for ${sign}, with opportunities for growth in multiple areas of life. The planetary alignment supports your natural strengths while encouraging development in challenging areas.`,
    love: `Relationship energies are harmonious today. Open communication and mutual understanding strengthen existing bonds, while new connections form through shared interests and values.`,
    career: `Professional progress continues steadily. Your consistent efforts get noticed, and collaborative projects bring satisfying results. Financial planning yields positive long-term benefits.`,
    health: `Overall wellness is supported by balanced routines. Moderate exercise, nutritious eating, and adequate rest maintain your energy levels throughout the day's activities.`,
    luck: `Fortunate opportunities appear through normal daily activities. Your positive attitude attracts beneficial circumstances, and small actions lead to significant rewards.`,
    luckyNumbers: [7, 14, 21, 28]
  };
}

function getAstrologyEvent(date) {
  const events = [
    {
      slug: 'new-moon',
      blessing: 'new-beginnings',
      name: 'New Moon',
      date: '11-15',
      description: 'A powerful time for setting intentions and starting new projects across all zodiac signs'
    },
    {
      slug: 'full-moon',
      blessing: 'completion-manifestation',
      name: 'Full Moon',
      date: '11-30',
      description: 'Harvest the results of your efforts and release what no longer serves your highest good'
    },
    {
      slug: 'mercury-retrograde',
      blessing: 'review-reflection',
      name: 'Mercury Retrograde',
      date: '12-01',
      description: 'A period for reviewing, reflecting, and revisiting important decisions and communications'
    }
  ];

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateString = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  return events.find(event => event.date === dateString) || null;
}

function getUpcomingDates(count, startDate) {
  const dates = [];

  for (let i = 1; i <= count; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    const event = getAstrologyEvent(date);

    dates.push({
      slug: date.toISOString().split('T')[0],
      formatted: date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      }),
      event: event ? event.name : null
    });
  }

  return dates;
}

function getZodiacSymbol(sign) {
  const symbols = {
    Aries: '♈', Taurus: '♉', Gemini: '♊', Cancer: '♋',
    Leo: '♌', Virgo: '♍', Libra: '♎', Scorpio: '♏',
    Sagittarius: '♐', Capricorn: '♑', Aquarius: '♒', Pisces: '♓'
  };
  return symbols[sign];
}

function getZodiacDates(sign) {
  const dates = {
    Aries: 'Mar 21 - Apr 19',
    Taurus: 'Apr 20 - May 20',
    Gemini: 'May 21 - Jun 20',
    Cancer: 'Jun 21 - Jul 22',
    Leo: 'Jul 23 - Aug 22',
    Virgo: 'Aug 23 - Sep 22',
    Libra: 'Sep 23 - Oct 22',
    Scorpio: 'Oct 23 - Nov 21',
    Sagittarius: 'Nov 22 - Dec 21',
    Capricorn: 'Dec 22 - Jan 19',
    Aquarius: 'Jan 20 - Feb 18',
    Pisces: 'Feb 19 - Mar 20'
  };
  return dates[sign];
}

function getLuckyColor(sign) {
  const colors = {
    Aries: 'Red', Taurus: 'Green', Gemini: 'Yellow', Cancer: 'Silver',
    Leo: 'Gold', Virgo: 'Navy', Libra: 'Pink', Scorpio: 'Black',
    Sagittarius: 'Purple', Capricorn: 'Brown', Aquarius: 'Blue', Pisces: 'Sea Green'
  };
  return colors[sign];
}

function getMoonSign(date) {
  const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  return signs[date.getDate() % 12];
}
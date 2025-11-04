// pages/astrology/horoscope/today/[date].js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
            View Today's Horoscope
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
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-purple-600">
                🌟 AstroSite
              </Link>
              <div className="flex gap-4">
                <Link href="/astrology/horoscope" className="text-gray-600 hover:text-purple-600">
                  All Horoscopes
                </Link>
                <Link href="/astrology/horoscope/weekly" className="text-gray-600 hover:text-purple-600">
                  Weekly
                </Link>
                <Link href={`/astrology/horoscope/today/${new Date().toISOString().split('T')[0]}`} 
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                  Today's Horoscope
                </Link>
              </div>
            </div>
          </div>
        </nav>

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
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      sign.element === 'Fire' ? 'bg-red-100 text-red-800' :
                      sign.element === 'Earth' ? 'bg-green-100 text-green-800' :
                      sign.element === 'Air' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {sign.element}
                    </span>
                  </div>

                  {/* Overall Prediction */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Today's Overview</h3>
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
                      While they offer valuable insights, remember they're general predictions. For personalized accuracy, 
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
                    <h3 className="font-bold text-lg mb-3 text-purple-600">Can I read yesterday's horoscope?</h3>
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
                      If your sun sign horoscope doesn't resonate, try reading for your rising sign (ascendant). 
                      Also, remember horoscopes are general guidance - apply what feels right for your specific situation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-purple-600">What's the best time to read my horoscope?</h3>
                    <p className="text-gray-700">
                      Many people find reading their horoscope in the morning helps set intentions for the day. 
                      However, you can read it anytime that fits your schedule and helps you reflect on the day's energy.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-purple-600">How are horoscope predictions made?</h3>
                    <p className="text-gray-700">
                      Our astrologers analyze current planetary positions, moon phases, aspects between planets, 
                      and their relationships to each zodiac sign. This creates personalized guidance for each sign's energy.
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
              helping you navigate the day's cosmic energies in <strong>love, career, health, and personal growth</strong>.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Understanding Today's Planetary Influences</h3>
            <p>
              {horoscopeData.planetaryOverview || `The celestial configuration today creates unique opportunities for each zodiac sign. 
              Planetary alignments influence different aspects of our lives, from relationships and career to health and spiritual growth.`}
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">How to Make the Most of Your Daily Horoscope</h3>
            <p>
              Reading your horoscope daily can be a powerful tool for self-awareness and personal development. Here's how to get the most value:
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
                Today's planetary aspects favor introspection and planning. Consider how you can align your actions with 
                the cosmic currents to maximize opportunities and minimize challenges throughout your day.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 YourSiteName. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Accurate daily horoscopes for spiritual guidance and personal growth.</p>
          </div>
        </footer>
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
  const elements = ['Fire', 'Earth', 'Air', 'Water'];
  const event = getAstrologyEvent(date);
  
  // Generate realistic horoscope content
  const signsData = signs.map((sign, index) => {
    const element = elements[index % 4];
    return {
      name: sign,
      symbol: getZodiacSymbol(sign),
      element: element,
      dates: getZodiacDates(sign),
      overview: `Today brings exciting opportunities for ${sign}. The planetary alignment favors your natural ${element.toLowerCase()} energy, creating perfect conditions for personal growth and new beginnings on ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}.`,
      love: `Venus influences your relationships today. ${sign}s may find unexpected connections or deepen existing bonds. Open your heart to new possibilities and meaningful conversations.`,
      career: `Professional opportunities arise for ${sign}. Your innovative ideas get recognition from superiors. Team collaborations bring success and potential career advancement.`,
      health: `Focus on balance today. ${sign}s benefit from moderate exercise and mindful eating. Listen to your body's needs for optimal wellness and energy throughout the day.`,
      luck: `Lucky moments appear in unexpected places for ${sign}. Trust your intuition today - it will guide you toward fortunate encounters and beneficial opportunities.`,
      luckyNumbers: [Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1],
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
    metaTitle: `Daily Horoscope ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} | Free Zodiac Predictions & Astrology Readings`,
    metaDescription: `Your free daily horoscope for all zodiac signs on ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}. ${event ? `Special astrological event: ${event.name}. ` : ''}Get accurate predictions for love, career, health, and relationships. Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces.`,
    metaKeywords: `daily horoscope, horoscope today, ${date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}, zodiac predictions, free astrology, love horoscope, career horoscope, ${signs.join(', ').toLowerCase()}`,
    planetaryOverview: `The current planetary alignment for ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} features favorable aspects between Jupiter and Venus, creating harmonious energy for all zodiac signs. Moon in ${getMoonSign(date)} enhances emotional awareness and intuition.`
  };
}

function getAstrologyEvent(date) {
  const events = [
    {
      slug: 'vaikuntha-chaturdashi',
      blessing: 'unlock-hidden-blessings',
      name: 'Vaikuntha Chaturdashi',
      date: '11-04',
      description: 'A sacred day for spiritual enlightenment and divine blessings across all zodiac signs'
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
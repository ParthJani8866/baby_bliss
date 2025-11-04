// pages/astrology/horoscope/index.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function HoroscopeHub() {
    const today = new Date().toISOString().split("T")[0];
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

    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <>
            <Head>
                <title>Daily and Weekly Horoscopes 2025 | Free Accurate Zodiac Predictions</title>
                <meta
                    name="description"
                    content="Free daily and weekly horoscopes for all 12 zodiac signs. Get accurate astrology predictions for love, career, health, and relationships. Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces."
                />
                <meta
                    name="keywords"
                    content="daily horoscope, weekly horoscope, free horoscope, zodiac signs, astrology predictions, today horoscope, horoscope reading, love horoscope, career horoscope, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces"
                />
                <link rel="canonical" href="https://yoursite.com/astrology/horoscope" />

                {/* Open Graph */}
                <meta property="og:title" content="Daily & Weekly Horoscopes 2024 - Free Zodiac Predictions" />
                <meta property="og:description" content="Get accurate daily and weekly horoscope readings for all 12 zodiac signs. Love, career, and relationship predictions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yoursite.com/astrology/horoscope" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "Daily and Weekly Horoscopes",
                            "description": "Comprehensive daily and weekly horoscope readings for all zodiac signs",
                            "url": "https://yoursite.com/astrology/horoscope",
                            "mainEntity": {
                                "@type": "ItemList",
                                "numberOfItems": 12,
                                "itemListElement": zodiacSigns.map((sign, index) => ({
                                    "@type": "ListItem",
                                    "position": index + 1,
                                    "item": {
                                        "@type": "Astrology",
                                        "name": `${sign.name} Horoscope`,
                                        "description": `Daily and weekly horoscope for ${sign.name}`,
                                        "url": `https://yoursite.com/astrology/zodiac-signs/${sign.name.toLowerCase()}`
                                    }
                                }))
                            }
                        })
                    }}
                />
            </Head>

            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
                <Header />
                 <nav className="bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4">
                                <Link href="/astrology/horoscope" className="text-gray-600 hover:text-purple-600">
                                    All Horoscopes
                                </Link>
                                <Link href="/astrology/horoscope/today" className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                                    Daily
                                </Link>
                                <Link href="/astrology/horoscope/weekly"
                                    className="text-gray-600 hover:text-purple-600">
                                    Weekly Horoscope
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Header Section */}
                <header className="text-center mb-12 mt-12">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900">Daily & Weekly Horoscopes</h1>
                    <p className="text-xl text-gray-600 mb-2">Today is {currentDate}</p>
                    <p className="text-lg text-gray-600">
                        Get accurate free horoscope readings for all 12 zodiac signs. Updated daily and weekly.
                    </p>
                </header>

                {/* Quick Access Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-4">📅 Daily Horoscopes</h2>
                        <p className="mb-6">Get your personalized daily horoscope reading for today. Discover what the stars have in store for your love life, career, and personal growth.</p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href={`/astrology/horoscope/today/${today}`}
                                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Today's Horoscope
                            </Link>
                            <Link
                                href={`/astrology/horoscope/today/${today}`}
                                className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
                            >
                                Tomorrow's Preview
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-4">📆 Weekly Horoscopes</h2>
                        <p className="mb-6">Plan your week ahead with comprehensive weekly horoscope predictions. Get insights into upcoming opportunities and challenges.</p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/astrology/horoscope/weekly"
                                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                This Week's Horoscope
                            </Link>
                            <Link
                                href="/astrology/horoscope/weekly/next"
                                className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors"
                            >
                                Next Week Preview
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Zodiac Signs Grid */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Zodiac Sign</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {zodiacSigns.map((sign) => (
                            <div key={sign.name} className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-purple-300 transition-all duration-300">
                                <div className="text-4xl mb-3">{sign.symbol}</div>
                                <h3 className="font-bold text-xl mb-1 text-gray-900">{sign.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{sign.dates}</p>
                                <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mb-4">
                                    {sign.element}
                                </span>
                                <div className="flex flex-col gap-2">
                                    <Link
                                        href={`/astrology/horoscope/today/sign/${sign.name.toLowerCase()}`}
                                        className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
                                    >
                                        Daily Horoscope
                                    </Link>
                                    <Link
                                        href={`/astrology/horoscope/weekly/sign/${sign.name.toLowerCase()}`}
                                        className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors"
                                    >
                                        Weekly Horoscope
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How to Read Horoscopes Section */}
                <section className="mb-16 bg-gray-50 rounded-2xl p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">How to Read and Understand Your Horoscope</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl">🔮</span>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Understand Planetary Movements</h3>
                            <p className="text-gray-600 text-sm">Learn how moon phases and planetary transits affect your zodiac sign's energy and predictions.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl">💫</span>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Apply to Your Life</h3>
                            <p className="text-gray-600 text-sm">Connect horoscope insights with your daily experiences in relationships, work, and personal growth.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl">📊</span>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Track Patterns</h3>
                            <p className="text-gray-600 text-sm">Regular reading helps identify recurring themes and prepare for upcoming astrological events.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl">🌙</span>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Timing is Key</h3>
                            <p className="text-gray-600 text-sm">Read your horoscope in the morning to set intentions and navigate the day's energy effectively.</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About Horoscopes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 text-purple-600">How often are horoscopes updated?</h3>
                                <p className="text-gray-700">Our daily horoscopes are updated every morning at 6:00 AM EST, while weekly horoscopes are published every Sunday evening for the upcoming week.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 text-purple-600">Are horoscopes accurate for everyone?</h3>
                                <p className="text-gray-700">Horoscopes provide general guidance based on sun signs. For personalized accuracy, consider your rising sign and complete birth chart analysis.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 text-purple-600">What's the difference between daily and weekly horoscopes?</h3>
                                <p className="text-gray-700">Daily horoscopes focus on immediate guidance and daily energy, while weekly horoscopes provide broader trends and upcoming opportunities for the entire week.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 text-purple-600">Can horoscopes predict my future?</h3>
                                <p className="text-gray-700">Horoscopes don't predict fixed futures but highlight potential energies and opportunities. Your free will and choices ultimately shape your path.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 text-purple-600">Why should I read my horoscope regularly?</h3>
                                <p className="text-gray-700">Regular reading helps you understand planetary influences, make informed decisions, and align with cosmic energies for personal growth.</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 text-purple-600">What if my horoscope doesn't resonate?</h3>
                                <p className="text-gray-700">Try reading for your rising sign instead of your sun sign. Also, horoscopes are general guidance - apply what resonates and leave what doesn't.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEO Content Section */}
                <section className="prose prose-lg max-w-none bg-white rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-6">Understanding Daily and Weekly Horoscopes</h2>

                    <h3 className="text-xl font-semibold mb-4">What Are Daily Horoscopes?</h3>
                    <p>
                        <strong>Daily horoscopes</strong> provide astrological predictions and guidance for each day based on the current planetary positions and their aspects to your zodiac sign.
                        These readings help you navigate daily challenges, recognize opportunities, and understand the cosmic energy influencing your day. Our daily horoscope readings cover
                        essential life areas including <strong>love and relationships</strong>, <strong>career and finance</strong>, <strong>health and wellness</strong>, and <strong>personal growth</strong>.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-4">Benefits of Weekly Horoscope Readings</h3>
                    <p>
                        <strong>Weekly horoscopes</strong> offer a broader perspective on upcoming trends and patterns for each zodiac sign. Unlike daily horoscopes that focus on immediate guidance,
                        weekly predictions help you plan ahead, anticipate challenges, and prepare for significant astrological events. They're particularly valuable for:
                    </p>
                    <ul className="list-disc pl-6 mt-3">
                        <li><strong>Strategic planning</strong> for career moves and important decisions</li>
                        <li><strong>Relationship guidance</strong> for the week ahead</li>
                        <li><strong>Health and wellness</strong> preparation and self-care scheduling</li>
                        <li><strong>Financial planning</strong> based on cosmic influences</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-4">Zodiac Signs and Their Elements</h3>
                    <p>
                        Each of the 12 zodiac signs belongs to one of four elements: <strong>Fire (Aries, Leo, Sagittarius)</strong>, <strong>Earth (Taurus, Virgo, Capricorn)</strong>,
                        <strong> Air (Gemini, Libra, Aquarius)</strong>, and <strong>Water (Cancer, Scorpio, Pisces)</strong>. Understanding your sign's element helps you better
                        interpret horoscope readings and apply them to your life circumstances.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-4">Why Trust Our Horoscope Readings?</h3>
                    <p>
                        Our astrological predictions are crafted by experienced astrologers who analyze current planetary transits, moon phases, and astrological aspects.
                        We combine traditional astrology principles with modern interpretations to provide <strong>accurate, relevant, and practical guidance</strong> for today's world.
                        Whether you're new to astrology or a seasoned enthusiast, our daily and weekly horoscopes offer valuable insights for personal development and self-awareness.
                    </p>
                </section>
                <Footer></Footer>
            </div>
        </>
    );
}
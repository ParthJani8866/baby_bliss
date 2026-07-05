// pages/astrology/horoscope/weekly/index.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function WeeklyHoroscopeHub() {
    const currentWeek = getCurrentWeekRange();
    const nextWeek = getNextWeekRange();

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

    const weeklyThemes = [
        {
            title: "Relationship Harmony",
            description: "Venus trine Jupiter brings beautiful opportunities for love connections and partnership growth",
            impact: "Positive for all signs, especially Libra, Taurus, and Cancer"
        },
        {
            title: "Career Breakthroughs",
            description: "Mars aligns with Saturn creating perfect conditions for professional advancement and strategic planning",
            impact: "Excellent for Capricorn, Aries, and Scorpio career moves"
        },
        {
            title: "Financial Shifts",
            description: "Mercury enters financial houses prompting important money decisions and investment opportunities",
            impact: "Key week for Taurus, Virgo, and Capricorn financial planning"
        },
        {
            title: "Emotional Healing",
            description: "Full Moon in water signs encourages emotional release and spiritual growth",
            impact: "Powerful for Cancer, Scorpio, Pisces inner work"
        }
    ];

    return (
        <>
            <Head>
                <title>Weekly Horoscope {currentWeek.year} | Free 7-Day Zodiac Predictions & Astrology Forecast</title>
                <meta
                    name="description"
                    content={`Free weekly horoscope predictions for all 12 zodiac signs from ${currentWeek.start} to ${currentWeek.end}. Get detailed 7-day astrology forecasts for love, career, money, and relationships. Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces weekly readings.`}
                />
                <meta
                    name="keywords"
                    content={`weekly horoscope, ${currentWeek.month} weekly horoscope, 7-day horoscope, zodiac predictions this week, astrology forecast, love horoscope weekly, career predictions, weekly astrology, ${zodiacSigns.map(sign => sign.name + ' weekly horoscope').join(', ')}, what to expect this week, weekly planetary transits`}
                />
                <link rel="canonical" href="https://yoursite.com/astrology/horoscope/weekly" />

                {/* Open Graph */}
                <meta property="og:title" content={`Weekly Horoscope ${currentWeek.year} - Free 7-Day Zodiac Predictions`} />
                <meta property="og:description" content={`Get your free weekly horoscope for ${currentWeek.start} to ${currentWeek.end}. Detailed love, career, and relationship predictions for all zodiac signs.`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yoursite.com/astrology/horoscope/weekly" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": `Weekly Horoscopes - ${currentWeek.start} to ${currentWeek.end}`,
                            "description": "Comprehensive weekly horoscope readings and astrology forecasts for all zodiac signs",
                            "url": "https://yoursite.com/astrology/horoscope/weekly",
                            "mainEntity": {
                                "@type": "ItemList",
                                "numberOfItems": 12,
                                "itemListElement": zodiacSigns.map((sign, index) => ({
                                    "@type": "ListItem",
                                    "position": index + 1,
                                    "item": {
                                        "@type": "Astrology",
                                        "name": `${sign.name} Weekly Horoscope`,
                                        "description": `7-day horoscope predictions for ${sign.name} zodiac sign`,
                                        "url": `https://yoursite.com/astrology/horoscope/weekly/${sign.name.toLowerCase()}`
                                    }
                                }))
                            }
                        })
                    }}
                />
            </Head>

            <div className="min-h-screen bg-gray-50">
                <Header />
                {/* Navigation */}
                <nav className="bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4">
                                <Link href="/astrology/horoscope" className="text-gray-600 hover:text-purple-600">
                                    All Horoscopes
                                </Link>
                                <Link href="/astrology/horoscope/today" className="text-gray-600 hover:text-purple-600">
                                    Daily
                                </Link>
                                <Link href="/astrology/horoscope/weekly"
                                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                                    Weekly Horoscope
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="container mx-auto px-4 py-8">
                    {/* Header Section */}
                    <header className="text-center mb-12">
                        <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Weekly Horoscope
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Weekly Horoscope Forecast
                        </h1>
                        <p className="text-xl text-gray-600 mb-2">
                            {currentWeek.start} - {currentWeek.end}
                        </p>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Your complete 7-day astrology guide for love, career, finances, and personal growth.
                            Plan your week with cosmic confidence.
                        </p>
                    </header>

                    {/* Key Themes This Week */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Key Astrological Themes This Week</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {weeklyThemes.map((theme, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                                    <h3 className="font-bold text-lg mb-3 text-gray-900">{theme.title}</h3>
                                    <p className="text-gray-700 mb-3 text-sm">{theme.description}</p>
                                    <div className="bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-full inline-block">
                                        {theme.impact}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Quick Week Navigation */}
                    <section className="mb-12">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold mb-6 text-center">Quick Week Navigation</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <Link
                                    href="/astrology/horoscope/today"
                                    className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-purple-300 hover:shadow-md transition-all"
                                >
                                    <div className="text-2xl mb-2">📅</div>
                                    <h3 className="font-semibold mb-1">Today</h3>
                                    <p className="text-sm text-gray-600">Daily guidance</p>
                                </Link>
                                <div className="border-2 border-purple-500 rounded-lg p-4 text-center bg-purple-50">
                                    <div className="text-2xl mb-2">🌟</div>
                                    <h3 className="font-semibold mb-1">This Week</h3>
                                    <p className="text-sm text-purple-600">{currentWeek.start} - {currentWeek.end}</p>
                                </div>
                                <Link
                                    href="/astrology/horoscope/weekly/next"
                                    className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-purple-300 hover:shadow-md transition-all"
                                >
                                    <div className="text-2xl mb-2">🔮</div>
                                    <h3 className="font-semibold mb-1">Next Week</h3>
                                    <p className="text-sm text-gray-600">{nextWeek.start} - {nextWeek.end}</p>
                                </Link>
                                <Link
                                    href="/astrology/horoscope/monthly"
                                    className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-purple-300 hover:shadow-md transition-all"
                                >
                                    <div className="text-2xl mb-2">📊</div>
                                    <h3 className="font-semibold mb-1">Monthly</h3>
                                    <p className="text-sm text-gray-600">30-day overview</p>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Zodiac Signs Grid */}
                    <section id="zodiac-signs" className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Weekly Horoscope for Each Zodiac Sign</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {zodiacSigns.map((sign) => (
                                <div key={sign.name} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl">{sign.symbol}</span>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{sign.name}</h3>
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

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-start gap-2">
                                            <span className="text-pink-500">💖</span>
                                            <div>
                                                <h4 className="font-semibold text-sm">Love</h4>
                                                <p className="text-xs text-gray-600">{getWeeklyTheme(sign.name, 'love')}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-green-500">💼</span>
                                            <div>
                                                <h4 className="font-semibold text-sm">Career</h4>
                                                <p className="text-xs text-gray-600">{getWeeklyTheme(sign.name, 'career')}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-blue-500">💰</span>
                                            <div>
                                                <h4 className="font-semibold text-sm">Finance</h4>
                                                <p className="text-xs text-gray-600">{getWeeklyTheme(sign.name, 'finance')}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Link
                                            href={`/astrology/horoscope/weekly/${sign.name.toLowerCase()}`}
                                            className="flex-1 bg-purple-600 text-white text-center py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
                                        >
                                            Full Weekly Reading
                                        </Link>
                                        <Link
                                            href={`/astrology/horoscope/today/sign/${sign.name.toLowerCase()}`}
                                            className="flex-1 border border-gray-300 text-gray-700 text-center py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                                        >
                                            Today Horoscope
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Weekly Planning Tips */}
                    <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-3xl font-bold mb-8 text-center">How to Use Your Weekly Horoscope for Better Planning</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📅</span>
                                </div>
                                <h3 className="font-semibold text-lg mb-3">Schedule Important Meetings</h3>
                                <p className="text-gray-600">
                                    Use favorable career days identified in your weekly horoscope to schedule key meetings,
                                    presentations, and important business discussions for maximum impact.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">💖</span>
                                </div>
                                <h3 className="font-semibold text-lg mb-3">Plan Social & Romance</h3>
                                <p className="text-gray-600">
                                    Align your social calendar with positive relationship days. Plan dates, family gatherings,
                                    and important conversations during harmoniously aspected periods.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h3 className="font-semibold text-lg mb-3">Navigate Challenges</h3>
                                <p className="text-gray-600">
                                    Prepare for potentially challenging aspects by scheduling lighter activities on those days
                                    and focusing on self-care rather than pushing through obstacles.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 text-center">Weekly Horoscope FAQs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">When are weekly horoscopes updated?</h3>
                                    <p className="text-gray-700">
                                        Our weekly horoscopes are updated every Sunday morning, giving you a complete 7-day forecast
                                        from Monday to Sunday. This allows you to plan your entire week with cosmic guidance.
                                    </p>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">How accurate are weekly predictions?</h3>
                                    <p className="text-gray-700">
                                        Weekly horoscopes provide general trends based on planetary transits. While they can not predict
                                        specific events, they accurately describe the energy and opportunities you are likely to encounter
                                        throughout the week.
                                    </p>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">Should I read daily or weekly horoscopes?</h3>
                                    <p className="text-gray-700">
                                        Both! Weekly horoscopes help you plan ahead and understand broader trends, while daily horoscopes
                                        provide specific guidance for each day. Many readers use weekly forecasts for planning and daily
                                        readings for daily navigation.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">Can weekly horoscopes help with decision-making?</h3>
                                    <p className="text-gray-700">
                                        Absolutely! Weekly horoscopes highlight favorable and challenging periods, helping you time important
                                        decisions, meetings, and conversations for optimal outcomes based on cosmic energies.
                                    </p>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">What is the difference between sun sign and rising sign weekly horoscopes?</h3>
                                    <p className="text-gray-700">
                                        Sun sign horoscopes relate to your core identity, while rising sign horoscopes reflect how you experience
                                        the world. Many people find reading both provides a more complete picture of their weekly energy.
                                    </p>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">How far in advance can weekly horoscopes predict?</h3>
                                    <p className="text-gray-700">
                                        Weekly horoscopes typically cover the upcoming 7 days. For longer-term planning, monthly horoscopes
                                        provide broader overviews, while annual forecasts cover major trends for the entire year.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SEO Content Section */}
                    <section className="prose prose-lg max-w-none bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Complete Guide to Weekly Horoscopes and 7-Day Astrology Predictions</h2>

                        <h3 className="text-xl font-semibold mb-4">What Are Weekly Horoscopes and How Can They Transform Your Week?</h3>
                        <p>
                            <strong>Weekly horoscopes</strong> provide a comprehensive 7-day astrology forecast that helps you navigate the upcoming
                            week with cosmic awareness and strategic planning. Unlike daily horoscopes that focus on immediate guidance,
                            <strong> weekly astrology predictions</strong> give you a broader perspective on trends, opportunities, and challenges
                            affecting your zodiac sign. This allows you to plan important meetings, relationship conversations, financial decisions,
                            and personal activities during the most favorable planetary periods.
                        </p>

                        <h3 className="text-xl font-semibold mt-8 mb-4">Understanding Planetary Transits in Weekly Horoscope Readings</h3>
                        <p>
                            Our <strong>weekly horoscope forecasts</strong> are based on careful analysis of planetary movements including Moon phases,
                            Mercury retrogrades, Venus transitions, and Mars aspects. Each planetary transit creates unique energy that influences
                            different areas of your life:
                        </p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li><strong>Moon phases</strong> affect emotional patterns and intuition throughout the week</li>
                            <li><strong>Mercury movements</strong> influence communication, technology, and travel plans</li>
                            <li><strong>Venus aspects</strong> shape relationship dynamics and social opportunities</li>
                            <li><strong>Mars transits</strong> impact energy levels, motivation, and conflict resolution</li>
                            <li><strong>Jupiter and Saturn</strong> create longer-term opportunities and lessons</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-8 mb-4">How to Get the Most Value from Your Weekly Zodiac Predictions</h3>
                        <p>
                            Reading your <strong>weekly horoscope</strong> effectively involves more than just passive reading. Here is how to integrate
                            cosmic guidance into your weekly planning for maximum benefit:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-6 mt-4">
                            <h4 className="font-semibold text-lg mb-3">Weekly Horoscope Integration Strategy</h4>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Read on Sunday evening</strong> to plan your upcoming week with cosmic insights</li>
                                <li><strong>Note favorable days</strong> for important activities and challenging periods for self-care</li>
                                <li><strong>Combine with your intuition</strong> - use horoscope guidance as a tool, not absolute prediction</li>
                                <li><strong>Track patterns</strong> over several weeks to understand how planetary energies affect you personally</li>
                                <li><strong>Apply practical actions</strong> based on the guidance rather than waiting for predictions to manifest</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-semibold mt-8 mb-4">The Difference Between Daily, Weekly, and Monthly Horoscopes</h3>
                        <p>
                            While <strong>daily horoscopes</strong> provide immediate guidance for navigating each day energy,
                            <strong> weekly horoscopes</strong> offer strategic planning insights for the entire week. <strong>Monthly horoscopes</strong>
                            give you an even broader overview of upcoming trends and major transits. Many astrology enthusiasts use all three:
                            monthly for big-picture planning, weekly for weekly strategy, and daily for daily navigation.
                        </p>

                        <h3 className="text-xl font-semibold mt-8 mb-4">Why Our Weekly Horoscope Readings Stand Out</h3>
                        <p>
                            Our <strong>weekly zodiac predictions</strong> are crafted by experienced astrologers who combine traditional
                            astrology principles with modern life applications. We focus on providing <strong>actionable guidance</strong>
                            that you can actually use to improve your relationships, advance your career, manage your finances, and enhance
                            your personal growth. Each weekly forecast includes specific dates for favorable activities, relationship advice,
                            career opportunities, and health recommendations tailored to your zodiac sign energy.
                        </p>

                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mt-8">
                            <h3 className="text-xl font-semibold mb-3">💫 Professional Astrology Insights</h3>
                            <p className="mb-0">
                                Weekly horoscopes are your cosmic planning tool. They help you align your actions with planetary energies,
                                making you more effective in your personal and professional life. Think of them as your celestial strategic
                                planner for the week ahead. - Master Astrologer Team
                            </p>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}

// Helper functions
function getCurrentWeekRange() {
    const today = new Date();
    const startOfWeek = new Date(today);
    const dayOfWeek = today.getDay();
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    startOfWeek.setDate(diff);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    return {
        start: startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        end: endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        month: startOfWeek.toLocaleDateString('en-US', { month: 'long' }),
        year: startOfWeek.getFullYear()
    };
}

function getNextWeekRange() {
    const today = new Date();
    const startOfNextWeek = new Date(today);
    const dayOfWeek = today.getDay();
    const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? 1 : 8);
    startOfNextWeek.setDate(diff);

    const endOfNextWeek = new Date(startOfNextWeek);
    endOfNextWeek.setDate(startOfNextWeek.getDate() + 6);

    return {
        start: startOfNextWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        end: endOfNextWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
}

function getWeeklyTheme(sign, category) {
    const themes = {
        Aries: {
            love: "Passionate connections mid-week, perfect for rekindling romance",
            career: "Leadership opportunities arise Thursday, team projects excel",
            finance: "Unexpected income possible Friday, avoid impulsive spending"
        },
        Taurus: {
            love: "Stable relationships deepen, new connections through friends",
            career: "Financial planning pays off, long-term projects successful",
            finance: "Investment opportunities Wednesday, budget review beneficial"
        },
        Gemini: {
            love: "Communication key in relationships, social events bring connections",
            career: "Multiple projects demand attention, networking brings opportunities",
            finance: "Side income possible, avoid too many small purchases"
        },
        Cancer: {
            love: "Emotional intimacy grows, family connections important",
            career: "Creative solutions appreciated, work-life balance crucial",
            finance: "Home-related expenses, but good for saving"
        },
        Leo: {
            love: "Romantic gestures appreciated, social magnetism high",
            career: "Recognition for hard work, creative projects shine",
            finance: "Luxury temptations, but good for career investments"
        },
        Virgo: {
            love: "Practical expressions of love, service strengthens bonds",
            career: "Attention to detail rewarded, efficiency improvements",
            finance: "Good for financial planning, avoid risky investments"
        },
        Libra: {
            love: "Harmony in relationships, partnership decisions favorable",
            career: "Collaboration brings success, diplomatic skills valuable",
            finance: "Joint financial decisions, balance spending and saving"
        },
        Scorpio: {
            love: "Deep connections possible, honesty strengthens relationships",
            career: "Research yields results, hidden opportunities emerge",
            finance: "Transformation in finances, good for investments"
        },
        Sagittarius: {
            love: "Adventurous connections, travel brings romantic opportunities",
            career: "Big-picture thinking appreciated, international connections",
            finance: "Unexpected travel expenses, but opportunities abroad"
        },
        Capricorn: {
            love: "Serious connections favored, commitment discussions positive",
            career: "Career advancements possible, authority figures supportive",
            finance: "Long-term planning successful, disciplined approach works"
        },
        Aquarius: {
            love: "Unconventional connections, group activities bring romance",
            career: "Innovative ideas appreciated, technology-related success",
            finance: "Unexpected income through networks, good for tech investments"
        },
        Pisces: {
            love: "Spiritual connections, romantic idealism high",
            career: "Creative projects successful, intuition guides decisions",
            finance: "Artistic income possible, be mindful of boundaries"
        }
    };

    return themes[sign]?.[category] || "Positive developments in this area throughout the week";
}
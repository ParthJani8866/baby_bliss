// pages/astrology/horoscope/today/[sign]/[sign].js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

export default function DailySignHoroscope({ horoscopeData, error }) {
    const router = useRouter();
    const { sign } = router.query;
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Horoscope Not Found</h1>
                    <p className="text-gray-600 mb-6">The horoscope for this zodiac sign is not available.</p>
                    <Link href="/astrology/horoscope" className="bg-purple-600 text-white px-6 py-3 rounded-lg">
                        Browse All Horoscopes
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
                    <p className="text-gray-600">Loading your weekly horoscope...</p>
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
                <link rel="canonical" href={`https://yoursite.com/astrology/horoscope/today/sign/${sign}`} />

                {/* Open Graph */}
                <meta property="og:title" content={horoscopeData.metaTitle} />
                <meta property="og:description" content={horoscopeData.metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://yoursite.com/astrology/horoscope/today/sign/${sign}`} />

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
                            "datePublished": new Date().toISOString(),
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
                                    "url": "https://baby-toys.shop/logo.png"
                                }
                            },
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `https://baby-toys.shop/astrology/sign/${sign}`
                            }
                        })
                    }}
                />
            </Head>

            <div className="min-h-screen bg-gray-50">
                <Header></Header>
                {/* Navigation */}
                <nav className="bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4">
                                <Link href="/astrology/horoscope" className="text-gray-600 hover:text-purple-600">
                                    All Horoscopes
                                </Link>
                                <Link href="/astrology/horoscope/weekly" className="text-gray-600 hover:text-purple-600">
                                    Weekly
                                </Link>
                                <Link href="/astrology/zodiac-signs" className="text-gray-600 hover:text-purple-600">
                                    Zodiac Signs
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="container mx-auto px-4 py-8">
                    {/* Header Section */}
                    <header className="text-center mb-12">
                        <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Daily Horoscope
                        </div>
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <span className="text-5xl">{horoscopeData.symbol}</span>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                    {horoscopeData.name} Daily Horoscope
                                </h1>
                                <p className="text-xl text-gray-600 mt-2">{currentDate}</p>
                            </div>
                        </div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {horoscopeData.dates} • {horoscopeData.element} Element
                        </p>
                    </header>

                    {/* Quick Stats */}
                    <section className="mb-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                                <div className="text-2xl mb-2">🪐</div>
                                <h3 className="font-semibold text-gray-900">Ruling Planet</h3>
                                <p className="text-gray-600">{horoscopeData.rulingPlanet}</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                                <div className="text-2xl mb-2">🎨</div>
                                <h3 className="font-semibold text-gray-900">Lucky Color</h3>
                                <p className="text-gray-600">{horoscopeData.luckyColor}</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                                <div className="text-2xl mb-2">🔢</div>
                                <h3 className="font-semibold text-gray-900">Lucky Numbers</h3>
                                <p className="text-gray-600">{horoscopeData.luckyNumbers.join(', ')}</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                                <div className="text-2xl mb-2">⭐</div>
                                <h3 className="font-semibold text-gray-900">Compatibility</h3>
                                <p className="text-gray-600">{horoscopeData.compatibility.join(', ')}</p>
                            </div>
                        </div>
                    </section>

                    {/* Quick Navigation */}
                    <section className="mb-12">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold mb-6 text-center">Quick Navigation</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Link
                                    href="/astrology/horoscope/today"
                                    className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-purple-300 hover:shadow-md transition-all"
                                >
                                    <div className="text-2xl mb-2">📅</div>
                                    <h3 className="font-semibold mb-1">All Daily Horoscopes</h3>
                                    <p className="text-sm text-gray-600">View all zodiac signs</p>
                                </Link>
                                <Link
                                    href={`/astrology/horoscope/weekly/${sign}`}
                                    className="border-2 border-purple-500 rounded-lg p-4 text-center bg-purple-50"
                                >
                                    <div className="text-2xl mb-2">📆</div>
                                    <h3 className="font-semibold mb-1">Weekly Horoscope</h3>
                                    <p className="text-sm text-purple-600">7-day forecast for {horoscopeData.name}</p>
                                </Link>
                                <Link
                                    href={`/astrology/zodiac-signs/${sign}`}
                                    className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-purple-300 hover:shadow-md transition-all"
                                >
                                    <div className="text-2xl mb-2">✨</div>
                                    <h3 className="font-semibold mb-1">Sign Guide</h3>
                                    <p className="text-sm text-gray-600">Complete {horoscopeData.name} profile</p>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Horoscope Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Daily Overview */}
                            <section className="bg-white rounded-xl shadow-lg p-6">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">🌟 Today Overview</h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {horoscopeData.overview}
                                </p>
                                <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                    <h3 className="font-semibold text-blue-900 mb-2">💫 Cosmic Insight</h3>
                                    <p className="text-blue-800 text-sm">
                                        {horoscopeData.cosmicInsight}
                                    </p>
                                </div>
                            </section>

                            {/* Category Predictions */}
                            <section className="space-y-6">
                                {/* Love & Relationships */}
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-pink-100 text-pink-600 rounded-full p-2">
                                            💖
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Love & Relationships</h2>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        {horoscopeData.love}
                                    </p>
                                    <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                                        <h3 className="font-semibold text-pink-900 mb-1">Best Time for Love</h3>
                                        <p className="text-pink-800 text-sm">{horoscopeData.bestTimeForLove}</p>
                                    </div>
                                </div>

                                {/* Career & Finance */}
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-green-100 text-green-600 rounded-full p-2">
                                            💼
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Career & Finance</h2>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        {horoscopeData.career}
                                    </p>
                                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                                        <h3 className="font-semibold text-green-900 mb-1">Financial Tip</h3>
                                        <p className="text-green-800 text-sm">{horoscopeData.financialTip}</p>
                                    </div>
                                </div>

                                {/* Health & Wellness */}
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-blue-100 text-blue-600 rounded-full p-2">
                                            🌿
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Health & Wellness</h2>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        {horoscopeData.health}
                                    </p>
                                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                        <h3 className="font-semibold text-blue-900 mb-1">Wellness Suggestion</h3>
                                        <p className="text-blue-800 text-sm">{horoscopeData.wellnessSuggestion}</p>
                                    </div>
                                </div>

                                {/* Luck & Opportunities */}
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-yellow-100 text-yellow-600 rounded-full p-2">
                                            ✨
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Luck & Opportunities</h2>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        {horoscopeData.luck}
                                    </p>
                                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                                        <h3 className="font-semibold text-yellow-900 mb-1">Lucky Moment</h3>
                                        <p className="text-yellow-800 text-sm">{horoscopeData.luckyMoment}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Planetary Influences */}
                            <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">🪐 Today Planetary Influences</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {horoscopeData.planetaryInfluences.map((influence, index) => (
                                        <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-xl">{influence.planet}</span>
                                                <h3 className="font-semibold text-gray-900">{influence.name}</h3>
                                            </div>
                                            <p className="text-gray-700 text-sm">{influence.effect}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Sign Quick Facts */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="font-bold text-lg mb-4">📋 {horoscopeData.name} Quick Facts</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-gray-600">Element:</span>
                                        <span className="text-gray-900">{horoscopeData.element}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-gray-600">Quality:</span>
                                        <span className="text-gray-900">{horoscopeData.modality}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-gray-600">Ruling Planet:</span>
                                        <span className="text-gray-900">{horoscopeData.rulingPlanet}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-gray-600">Birthstone:</span>
                                        <span className="text-gray-900">{horoscopeData.birthstone}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-gray-600">Flower:</span>
                                        <span className="text-gray-900">{horoscopeData.flower}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Daily Affirmation */}
                            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-6 text-white">
                                <h3 className="font-bold text-lg mb-3">🧘 Daily Affirmation</h3>
                                <p className="text-lg italic mb-4">{horoscopeData.dailyAffirmation}</p>
                                <p className="text-sm opacity-90">Repeat this throughout your day to align with today positive energy.</p>
                            </div>

                            {/* Compatibility */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="font-bold text-lg mb-4">💕 Today Best Matches</h3>
                                <div className="space-y-3">
                                    {horoscopeData.todaysBestMatches.map((match, index) => (
                                        <Link
                                            key={index}
                                            href={`/astrology/horoscope/today/sign/${match.sign.toLowerCase()}`}
                                            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">{match.symbol}</span>
                                                <span className="font-semibold text-gray-900">{match.sign}</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-semibold text-green-600">{match.rating}/5</div>
                                                <div className="text-xs text-gray-500">{match.reason}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="font-bold text-lg mb-4">⚡ Quick Actions</h3>
                                <div className="space-y-3">
                                    <Link
                                        href={`/astrology/horoscope/weekly/${sign}`}
                                        className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-orange-600 transition-colors block"
                                    >
                                        View Weekly Horoscope
                                    </Link>
                                    <Link
                                        href={`/astrology/zodiac-signs/${sign}`}
                                        className="w-full border border-purple-500 text-purple-600 py-2 px-4 rounded-lg text-center font-semibold hover:bg-purple-50 transition-colors block"
                                    >
                                        Complete Sign Guide
                                    </Link>
                                    <Link
                                        href="/astrology/birth-chart"
                                        className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-center font-semibold hover:bg-gray-50 transition-colors block"
                                    >
                                        Calculate Birth Chart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Content */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6 text-center">Explore More Horoscopes</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {horoscopeData.relatedSigns.map((relatedSign) => (
                                <Link
                                    key={relatedSign.name}
                                    href={`/astrology/horoscope/today/sign/${relatedSign.name.toLowerCase()}`}
                                    className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all border-2 border-gray-200 hover:border-purple-300"
                                >
                                    <div className="text-2xl mb-2">{relatedSign.symbol}</div>
                                    <h3 className="font-semibold text-gray-900 text-sm">{relatedSign.name}</h3>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mt-12 bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">How accurate is today horoscope for {horoscopeData.name}?</h3>
                                    <p className="text-gray-700">
                                        Today horoscope for {horoscopeData.name} is based on current planetary transits and their aspects to your sun sign.
                                        While it provides valuable guidance, remember that horoscopes are general and should be used as inspiration rather than absolute prediction.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">What is the best time to read my daily horoscope?</h3>
                                    <p className="text-gray-700">
                                        Many {horoscopeData.name} individuals find reading their horoscope in the morning helps set intentions for the day.
                                        However, you can read it anytime that allows you to reflect on how the guidance might apply to your current situation.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">Why should I read my horoscope daily?</h3>
                                    <p className="text-gray-700">
                                        Regular horoscope reading helps {horoscopeData.name} natives stay attuned to cosmic energies,
                                        recognize opportunities, and navigate challenges with greater awareness. It is a tool for self-reflection and personal growth.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">What if today predictions do not resonate?</h3>
                                    <p className="text-gray-700">
                                        If today horoscope does not resonate, consider reading for your rising sign instead of your sun sign.
                                        Also, remember that horoscopes are general guidance - apply what feels right and disregard what does not align with your experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <Footer></Footer>
            </div>
        </>
    );
}

// SSR - This runs on every request
export async function getServerSideProps(context) {
    try {
        const { sign } = context.params;
        const horoscopeData = await getDailyHoroscopeForSign(sign);

        if (!horoscopeData) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                horoscopeData,
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

// Helper function to get daily horoscope for specific sign
async function getDailyHoroscopeForSign(sign) {
    // Add similar data for all 12 signs...
    const signData = {
        aries: {
            name: 'Aries',
            symbol: '♈',
            dates: 'March 21 - April 19',
            element: 'Fire',
            modality: 'Cardinal',
            rulingPlanet: 'Mars',
            luckyColor: 'Red',
            luckyNumbers: [1, 9, 17],
            compatibility: ['Leo', 'Sagittarius', 'Gemini'],
            birthstone: 'Diamond',
            flower: 'Honeysuckle',
            overview: `Today brings dynamic energy and new beginnings, Aries! The Moon in your sign amplifies your natural courage and initiative. This is a perfect day to start new projects and take bold actions. Your leadership qualities shine, and others will naturally look to you for direction. Trust your instincts when making quick decisions.`,
            cosmicInsight: `Mars energizes your sector of new beginnings, giving you the courage to pursue what truly matters. Don't hesitate to take the first step toward your goals today.`,
            love: `Your passionate nature is highlighted in relationships today. Single Aries might encounter someone intriguing during afternoon activities. For committed relationships, plan an adventurous date night to rekindle the spark. Communication flows easily, so express your feelings openly and directly.`,
            bestTimeForLove: '2:00 PM - 4:00 PM',
            career: `Professional opportunities emerge through networking events or unexpected meetings. Your innovative ideas get noticed by superiors - don't hesitate to speak up in meetings. Financial gains possible through side projects or investments made earlier. Take calculated risks in business matters.`,
            financialTip: 'Consider short-term investments that align with your ambitious nature',
            health: `High energy levels today, but be mindful of stress-related tension. Incorporate cardio exercises to channel your fiery energy positively. Pay attention to headaches - take breaks and stay hydrated throughout your busy schedule. Consider trying a new workout routine.`,
            wellnessSuggestion: 'Try high-intensity interval training to match your energetic nature',
            luck: `Lucky moments occur between 2-4 PM. Trust your instincts when making quick decisions. Unexpected financial opportunities may come through social connections. Your bold approach to challenges brings fortunate outcomes.`,
            luckyMoment: 'Unexpected recognition for your leadership skills',
            dailyAffirmation: 'I embrace new beginnings with courage and confidence',
            planetaryInfluences: [
                { planet: '☀️', name: 'Sun', effect: 'Boosts confidence and personal power' },
                { planet: '♂', name: 'Mars', effect: 'Enhances energy and motivation' },
                { planet: '☿', name: 'Mercury', effect: 'Sharpens communication skills' },
                { planet: '♀', name: 'Venus', effect: 'Brings harmony in relationships' }
            ],
            todaysBestMatches: [
                { sign: 'Leo', symbol: '♌', rating: 5, reason: 'Shared passion' },
                { sign: 'Sagittarius', symbol: '♐', rating: 4, reason: 'Adventurous spirit' },
                { sign: 'Gemini', symbol: '♊', rating: 4, reason: 'Mental stimulation' }
            ],
            relatedSigns: [
                { name: 'Taurus', symbol: '♉' },
                { name: 'Gemini', symbol: '♊' },
                { name: 'Cancer', symbol: '♋' },
                { name: 'Leo', symbol: '♌' },
                { name: 'Virgo', symbol: '♍' },
                { name: 'Libra', symbol: '♎' }
            ],
            metaTitle: 'Aries Daily Horoscope Today | Free Accurate Predictions for Love, Career & Health',
            metaDescription: `Get your free Aries daily horoscope for today. Accurate predictions for love, relationships, career, money, and health. Discover what the stars have in store for Aries natives.`,
            metaKeywords: `Aries daily horoscope, Aries today, Aries love horoscope, Aries career, Aries health, March 21 April 19, fire sign horoscope, Aries predictions`
        },
        taurus: {
            name: 'Taurus',
            symbol: '♉',
            dates: 'April 20 - May 20',
            element: 'Earth',
            modality: 'Fixed',
            rulingPlanet: 'Venus',
            luckyColor: 'Green',
            luckyNumbers: [2, 6, 9],
            compatibility: ['Virgo', 'Capricorn', 'Cancer'],
            birthstone: 'Emerald',
            flower: 'Rose',
            overview: `A grounded and practical day awaits you, Taurus. Venus blesses your endeavors with harmony and beauty. Focus on financial planning and relationship building. Your steady approach helps you make significant progress on long-term goals while enjoying life's simple pleasures.`,
            cosmicInsight: `Venus enhances your appreciation for beauty and comfort today. Create a peaceful environment and indulge in sensory pleasures that nourish your soul.`,
            love: `Romantic energies are strong today. Existing relationships deepen through meaningful conversations and shared values. Single Taurus might connect with someone through mutual friends or work environments. Express appreciation for loved ones through practical gestures.`,
            bestTimeForLove: '6:00 PM - 8:00 PM',
            career: `Stable financial growth continues, with opportunities for increasing income through diligent work. Your practical solutions to workplace challenges impress colleagues. Consider long-term investments that align with your security needs. Team collaborations bring unexpected success.`,
            financialTip: 'Review your budget and consider stable long-term investments',
            health: `Focus on digestive health and maintaining routine. Comfort foods are appealing but balance with nutritious options. Gentle exercises like yoga or walking in nature help maintain your earthy equilibrium and reduce stress. Pay attention to neck and throat tension.`,
            wellnessSuggestion: 'Practice mindful eating and enjoy a relaxing massage',
            luck: `Financial luck appears through unexpected sources. Check old emails for overlooked opportunities. Your patience pays off in negotiations. Lucky encounters happen in stable, comfortable environments rather than chaotic settings.`,
            luckyMoment: 'Finding a valuable item you thought was lost',
            dailyAffirmation: 'I attract abundance and stability through consistent action',
            planetaryInfluences: [
                { planet: '♀', name: 'Venus', effect: 'Enhances love and financial harmony' },
                { planet: '☿', name: 'Mercury', effect: 'Supports practical communication' },
                { planet: '♄', name: 'Saturn', effect: 'Brings discipline to goals' },
                { planet: '🌙', name: 'Moon', effect: 'Stabilizes emotions' }
            ],
            todaysBestMatches: [
                { sign: 'Virgo', symbol: '♍', rating: 5, reason: 'Practical harmony' },
                { sign: 'Capricorn', symbol: '♑', rating: 5, reason: 'Shared values' },
                { sign: 'Cancer', symbol: '♋', rating: 4, reason: 'Emotional security' }
            ],
            relatedSigns: [
                { name: 'Aries', symbol: '♈' },
                { name: 'Gemini', symbol: '♊' },
                { name: 'Cancer', symbol: '♋' },
                { name: 'Leo', symbol: '♌' },
                { name: 'Virgo', symbol: '♍' },
                { name: 'Libra', symbol: '♎' }
            ],
            metaTitle: 'Taurus Daily Horoscope Today | Free Accurate Predictions for Love, Career & Health',
            metaDescription: `Get your free Taurus daily horoscope for today. Accurate predictions for love, relationships, career, money, and health. Discover what the stars have in store for Taurus natives.`,
            metaKeywords: `Taurus daily horoscope, Taurus today, Taurus love horoscope, Taurus career, Taurus health, April 20 May 20, earth sign horoscope, Taurus predictions`
        },
        gemini: {
            name: 'Gemini',
            symbol: '♊',
            dates: 'May 21 - June 20',
            element: 'Air',
            modality: 'Mutable',
            rulingPlanet: 'Mercury',
            luckyColor: 'Yellow',
            luckyNumbers: [5, 7, 14],
            compatibility: ['Libra', 'Aquarius', 'Aries'],
            birthstone: 'Pearl',
            flower: 'Lavender',
            overview: `Your communication skills are highlighted today, Gemini! Mercury's influence makes this perfect for networking, learning, and expressing ideas. You'll find multiple opportunities to connect with interesting people and gather valuable information for future projects. Stay curious and open-minded.`,
            cosmicInsight: `Mercury enhances your mental agility today. Use this energy for learning, writing, or having important conversations that could lead to exciting opportunities.`,
            love: `Intellectual connections lead to romantic possibilities today. Meaningful conversations create bonds stronger than physical attraction. For existing relationships, plan an activity that stimulates both your minds and creates shared learning experiences.`,
            bestTimeForLove: '3:00 PM - 5:00 PM',
            career: `Multiple projects demand your attention simultaneously. Your adaptability becomes your greatest asset. Networking events or casual conversations could lead to significant career opportunities. Document creative ideas that emerge throughout the day.`,
            financialTip: 'Diversify your income streams and explore communication-based side hustles',
            health: `Mental stimulation is high, but watch for nervous energy. Practice deep breathing when feeling overwhelmed. Variety in your exercise routine keeps you engaged. Pay attention to respiratory health and avoid stressful situations.`,
            wellnessSuggestion: 'Try a new fitness class or outdoor activity to satisfy your need for variety',
            luck: `Lucky breaks come through communication - emails, messages, or chance conversations. Your curiosity leads you to beneficial information. Social media interactions might reveal unexpected opportunities. Stay open to last-minute invitations.`,
            luckyMoment: 'Unexpected message bringing good news',
            dailyAffirmation: 'I communicate clearly and attract positive connections',
            planetaryInfluences: [
                { planet: '☿', name: 'Mercury', effect: 'Enhances communication and learning' },
                { planet: '♀', name: 'Venus', effect: 'Brings social opportunities' },
                { planet: '♅', name: 'Uranus', effect: 'Inspires innovative thinking' },
                { planet: '🌙', name: 'Moon', effect: 'Supports emotional expression' }
            ],
            todaysBestMatches: [
                { sign: 'Libra', symbol: '♎', rating: 5, reason: 'Mental connection' },
                { sign: 'Aquarius', symbol: '♒', rating: 5, reason: 'Intellectual stimulation' },
                { sign: 'Aries', symbol: '♈', rating: 4, reason: 'Energetic harmony' }
            ],
            relatedSigns: [
                { name: 'Taurus', symbol: '♉' },
                { name: 'Cancer', symbol: '♋' },
                { name: 'Leo', symbol: '♌' },
                { name: 'Virgo', symbol: '♍' },
                { name: 'Libra', symbol: '♎' },
                { name: 'Scorpio', symbol: '♏' }
            ],
            metaTitle: 'Gemini Daily Horoscope Today | Free Accurate Predictions for Love, Career & Health',
            metaDescription: `Get your free Gemini daily horoscope for today. Accurate predictions for love, relationships, career, money, and health. Discover what the stars have in store for Gemini natives.`,
            metaKeywords: `Gemini daily horoscope, Gemini today, Gemini love horoscope, Gemini career, Gemini health, May 21 June 20, air sign horoscope, Gemini predictions`
        },
        cancer: {
            name: 'Cancer',
            symbol: '♋',
            dates: 'June 21 - July 22',
            element: 'Water',
            modality: 'Cardinal',
            rulingPlanet: 'Moon',
            luckyColor: 'Silver',
            luckyNumbers: [2, 7, 11],
            compatibility: ['Scorpio', 'Pisces', 'Taurus'],
            birthstone: 'Ruby',
            flower: 'Lily',
            overview: `Emotional depth and intuition guide your day, Cancer. The Moon's influence enhances your natural sensitivity, making this perfect for nurturing relationships and creating comfortable environments. Trust your gut feelings when making important decisions about home and family matters.`,
            cosmicInsight: `The Moon in your sign heightens your intuition today. Pay attention to dreams and subtle feelings - they may contain important guidance about your emotional needs.`,
            love: `Deep emotional connections flourish today. Express your feelings openly with partners - vulnerability strengthens bonds. Single Cancer might attract someone through shared emotional understanding. Home-based dates create the perfect romantic atmosphere.`,
            bestTimeForLove: '7:00 PM - 9:00 PM',
            career: `Your empathetic approach helps resolve workplace conflicts. Creative projects benefit from your intuitive insights. Financial decisions should be made after consulting trusted advisors. Team collaborations bring unexpected success through emotional intelligence.`,
            financialTip: 'Focus on home-related investments and family financial planning',
            health: `Emotional wellness directly impacts physical health today. Create a peaceful home environment for relaxation. Water-based activities like swimming or long baths help balance your emotional energy. Pay attention to stomach-related issues and digestive health.`,
            wellnessSuggestion: 'Create a cozy self-care ritual with candles and soothing music',
            luck: `Lucky moments occur in familiar, comfortable settings. Family connections might bring unexpected benefits. Your intuition guides you to hidden opportunities. Evening hours are particularly fortunate for personal matters.`,
            luckyMoment: 'Unexpected family support or reconnection',
            dailyAffirmation: 'I trust my intuition and create emotional security',
            planetaryInfluences: [
                { planet: '🌙', name: 'Moon', effect: 'Amplifies intuition and emotions' },
                { planet: '♀', name: 'Venus', effect: 'Enhances domestic harmony' },
                { planet: '♆', name: 'Neptune', effect: 'Inspires creativity' },
                { planet: '♄', name: 'Saturn', effect: 'Provides emotional stability' }
            ],
            todaysBestMatches: [
                { sign: 'Scorpio', symbol: '♏', rating: 5, reason: 'Emotional depth' },
                { sign: 'Pisces', symbol: '♓', rating: 5, reason: 'Spiritual connection' },
                { sign: 'Taurus', symbol: '♉', rating: 4, reason: 'Domestic harmony' }
            ],
            relatedSigns: [
                { name: 'Gemini', symbol: '♊' },
                { name: 'Leo', symbol: '♌' },
                { name: 'Virgo', symbol: '♍' },
                { name: 'Libra', symbol: '♎' },
                { name: 'Scorpio', symbol: '♏' },
                { name: 'Sagittarius', symbol: '♐' }
            ],
            metaTitle: 'Cancer Daily Horoscope Today | Free Accurate Predictions for Love, Career & Health',
            metaDescription: `Get your free Cancer daily horoscope for today. Accurate predictions for love, relationships, career, money, and health. Discover what the stars have in store for Cancer natives.`,
            metaKeywords: `Cancer daily horoscope, Cancer today, Cancer love horoscope, Cancer career, Cancer health, June 21 July 22, water sign horoscope, Cancer predictions`
        },
        leo: {
            name: 'Leo',
            symbol: '♌',
            dates: 'July 23 - August 22',
            element: 'Fire',
            modality: 'Fixed',
            rulingPlanet: 'Sun',
            luckyColor: 'Gold',
            luckyNumbers: [1, 4, 10],
            compatibility: ['Aries', 'Sagittarius', 'Gemini'],
            birthstone: 'Peridot',
            flower: 'Sunflower',
            overview: `Your charismatic energy shines brightly today, Leo! The Sun's position enhances your natural leadership qualities and creative expression. This is an excellent day for taking center stage, pursuing artistic endeavors, and inspiring others with your vision and warmth.`,
            cosmicInsight: `The Sun illuminates your creative sector today. Express yourself boldly through art, performance, or leadership. Your radiant energy attracts admiration and opportunities.`,
            love: `Romantic opportunities arise in social settings where you can showcase your personality. Existing relationships benefit from grand gestures and heartfelt compliments. Your warmth and generosity attract admiration and deeper connections. Be open to spontaneous romance.`,
            bestTimeForLove: '5:00 PM - 7:00 PM',
            career: `Creative projects receive recognition and support. Leadership roles come naturally - don't shy away from taking charge. Financial gains possible through artistic talents or entertainment industry connections. Your confidence impresses decision-makers.`,
            financialTip: 'Invest in personal branding or creative ventures that showcase your talents',
            health: `High energy levels support ambitious activities, but watch for heart-related stress. Balance social engagements with quiet recovery time. Dramatic physical activities or dance satisfy your need for expressive movement. Protect yourself from overheating.`,
            wellnessSuggestion: 'Try dance cardio or theatrical exercise classes to express yourself',
            luck: `Luck finds you when you're in the spotlight. Performance opportunities lead to bigger breaks. Your generous acts return multiplied benefits. Important connections happen at social events or through creative collaborations.`,
            luckyMoment: 'Unexpected compliment from someone influential',
            dailyAffirmation: 'I shine brightly and attract abundance through creative expression',
            planetaryInfluences: [
                { planet: '☀️', name: 'Sun', effect: 'Boosts confidence and vitality' },
                { planet: '♀', name: 'Venus', effect: 'Enhances creativity and romance' },
                { planet: '♃', name: 'Jupiter', effect: 'Brings expansion opportunities' },
                { planet: '♂', name: 'Mars', effect: 'Provides energetic drive' }
            ],
            todaysBestMatches: [
                { sign: 'Aries', symbol: '♈', rating: 5, reason: 'Dynamic energy' },
                { sign: 'Sagittarius', symbol: '♐', rating: 5, reason: 'Adventurous spirit' },
                { sign: 'Gemini', symbol: '♊', rating: 4, reason: 'Playful connection' }
            ],
            relatedSigns: [
                { name: 'Cancer', symbol: '♋' },
                { name: 'Virgo', symbol: '♍' },
                { name: 'Libra', symbol: '♎' },
                { name: 'Scorpio', symbol: '♏' },
                { name: 'Sagittarius', symbol: '♐' },
                { name: 'Capricorn', symbol: '♑' }
            ],
            metaTitle: 'Leo Daily Horoscope Today | Free Accurate Predictions for Love, Career & Health',
            metaDescription: `Get your free Leo daily horoscope for today. Accurate predictions for love, relationships, career, money, and health. Discover what the stars have in store for Leo natives.`,
            metaKeywords: `Leo daily horoscope, Leo today, Leo love horoscope, Leo career, Leo health, July 23 August 22, fire sign horoscope, Leo predictions`
        },
        virgo: {
            name: 'Virgo',
            symbol: '♍',
            dates: 'August 23 - September 22',
            element: 'Earth',
            modality: 'Mutable',
            rulingPlanet: 'Mercury',
            luckyColor: 'Navy Blue',
            luckyNumbers: [5, 14, 23],
            compatibility: ['Taurus', 'Capricorn', 'Cancer'],
            birthstone: 'Sapphire',
            flower: 'Buttercup',
            overview: `Analytical skills and attention to detail serve you well today, Virgo. Mercury's practical influence helps you organize complex projects and improve systems. Your methodical approach leads to tangible results and recognition for your diligent work and helpful nature.`,
            cosmicInsight: `Mercury enhances your problem-solving abilities today. Use this energy to create efficient systems, help others, and make practical improvements in your daily routines.`,
            love: `Practical expressions of love resonate more than grand gestures today. Helping partners with tasks or offering thoughtful advice strengthens bonds. Single Virgo might connect with someone through work or health-focused activities. Communication should be clear and specific.`,
            bestTimeForLove: '6:00 PM - 8:00 PM',
            career: `Your organizational skills solve persistent workplace problems. Detailed work gets noticed and appreciated. Financial planning efforts pay off - review budgets and investment strategies. Efficiency improvements lead to time and resource savings.`,
            financialTip: 'Create detailed financial plans and consider health-related investments',
            health: `Focus on preventive care and routine health maintenance. Your analytical mind helps identify needed lifestyle adjustments. Pay attention to digestive health and incorporate more fiber. Structured exercise routines work best for you today.`,
            wellnessSuggestion: 'Try a new wellness app or tracking system to optimize your health routine',
            luck: `Lucky discoveries happen through careful research and attention to detail. Overlooked opportunities resurface when you review old projects. Your practical solutions to problems bring unexpected rewards and recognition.`,
            luckyMoment: 'Finding an efficient solution to a long-standing problem',
            dailyAffirmation: 'I create order and beauty through mindful attention to details',
            planetaryInfluences: [
                { planet: '☿', name: 'Mercury', effect: 'Enhances analytical thinking' },
                { planet: '♄', name: 'Saturn', effect: 'Brings discipline to work' },
                { planet: '♀', name: 'Venus', effect: 'Supports practical beauty' },
                { planet: '🌙', name: 'Moon', effect: 'Stabilizes daily routines' }
            ],
            todaysBestMatches: [
                { sign: 'Taurus', symbol: '♉', rating: 5, reason: 'Practical harmony' },
                { sign: 'Capricorn', symbol: '♑', rating: 5, reason: 'Shared discipline' },
                { sign: 'Cancer', symbol: '♋', rating: 4, reason: 'Nurturing support' }
            ],
            relatedSigns: [
                { name: 'Leo', symbol: '♌' },
                { name: 'Libra', symbol: '♎' },
                { name: 'Scorpio', symbol: '♏' },
                { name: 'Sagittarius', symbol: '♐' },
                { name: 'Capricorn', symbol: '♑' },
                { name: 'Aquarius', symbol: '♒' }
            ],
            metaTitle: 'Virgo Daily Horoscope Today | Free Accurate Predictions for Love, Career & Health',
            metaDescription: `Get your free Virgo daily horoscope for today. Accurate predictions for love, relationships, career, money, and health. Discover what the stars have in store for Virgo natives.`,
            metaKeywords: `Virgo daily horoscope, Virgo today, Virgo love horoscope, Virgo career, Virgo health, August 23 September 22, earth sign horoscope, Virgo predictions`
        },
        libra: {
            name: 'Libra',
            symbol: '♎',
            dates: 'September 23 - October 22',
            element: 'Air',
            modality: 'Cardinal',
            rulingPlanet: 'Venus',
            luckyColor: 'Pink',
            luckyNumbers: [6, 15, 24],
            compatibility: ['Gemini', 'Aquarius', 'Leo'],
            birthstone: 'Opal',
            flower: 'Rose',
            overview: `Harmony and balance define your day, Libra. Venus blesses your relationships and aesthetic pursuits. Focus on creating beauty in your environment and resolving conflicts through diplomacy. Your natural charm helps navigate social situations gracefully and attract positive connections.`,
            cosmicInsight: `Venus enhances your desire for beauty and partnership today. Seek balance in all areas of life and create harmonious environments that reflect your refined taste.`,
            love: `Romantic energies are particularly strong today. Existing relationships reach new levels of harmony and understanding. Single Libra attracts admirers through social grace and artistic sensibilities. Partnership decisions made today have long-term positive effects.`,
            bestTimeForLove: '7:00 PM - 9:00 PM',
            career: `Collaborative projects succeed through your diplomatic approach. Creative fields and design work receive favorable attention. Financial opportunities come through partnerships or joint ventures. Your ability to see multiple perspectives becomes valuable in negotiations.`,
            financialTip: 'Consider partnership-based investments and artistic ventures',
            health: `Balance is key - alternate between social activities and quiet reflection. Beauty treatments or spa visits enhance wellbeing. Pay attention to kidney health and maintain fluid balance. Gentle exercises like yoga or dance support your need for harmony.`,
            wellnessSuggestion: 'Try couples yoga or partner dancing for social exercise',
            luck: `Lucky encounters happen in beautiful environments or cultural settings. Your sense of timing helps you seize perfect opportunities. Partnership-based ventures bring unexpected benefits. Social connections lead to fortunate developments.`,
            luckyMoment: 'Unexpected invitation to an elegant social event',
            dailyAffirmation: 'I attract harmonious relationships and beautiful experiences',
            planetaryInfluences: [
                { planet: '♀', name: 'Venus', effect: 'Enhances beauty and relationships' },
                { planet: '☿', name: 'Mercury', effect: 'Supports diplomatic communication' },
                { planet: '♅', name: 'Uranus', effect: 'Brings social innovation' },
                { planet: '🌙', name: 'Moon', effect: 'Balances emotions' }
            ],
            todaysBestMatches: [
                { sign: 'Gemini', symbol: '♊', rating: 5, reason: 'Mental harmony' },
                { sign: 'Aquarius', symbol: '♒', rating: 5, reason: 'Social connection' },
                { sign: 'Leo', symbol: '♌', rating: 4, reason: 'Creative partnership' }
            ],
            relatedSigns: [
                { name: 'Virgo', symbol: '♍' },
                { name: 'Scorpio', symbol: '♏' },
                { name: 'Sagittarius', symbol: '♐' },
                { name: 'Capricorn', symbol: '♑' },
                { name: 'Aquarius', symbol: '♒' },
                { name: 'Pisces', symbol: '♓' }
            ],
            metaTitle: 'Libra Daily Horoscope Today | Free Accurate Predictions for Love, Career & Health',
            metaDescription: `Get your free Libra daily horoscope for today. Accurate predictions for love, relationships, career, money, and health. Discover what the stars have in store for Libra natives.`,
            metaKeywords: `Libra daily horoscope, Libra today, Libra love horoscope, Libra career, Libra health, September 23 October 22, air sign horoscope, Libra predictions`
        },
        scorpio: {
            name: 'Scorpio',
            symbol: '♏',
            dates: 'October 23 - November 21',
            element: 'Water',
            modality: 'Fixed',
            rulingPlanet: 'Pluto',
            luckyColor: 'Black',
            luckyNumbers: [8, 11, 18],
            compatibility: ['Cancer', 'Pisces', 'Virgo'],
            birthstone: 'Topaz',
            flower: 'Chrysanthemum',
            overview: `Intense transformations and deep insights characterize your day, Scorpio. Pluto's influence brings powerful revelations and opportunities for personal growth. Your magnetic presence attracts important connections and reveals hidden truths in both personal and professional matters.`,
            cosmicInsight: `Pluto empowers your transformative abilities today. Embrace change and let go of what no longer serves your highest good. Your intensity can be channeled into powerful personal growth.`,
            love: `Passionate encounters and deep emotional connections possible today. Existing relationships undergo positive transformations through honest communication. Single Scorpio might attract intense, meaningful connections that feel destined. Vulnerability leads to deeper intimacy.`,
            bestTimeForLove: '8:00 PM - 10:00 PM',
            career: `Research and investigation yield valuable insights. Your ability to uncover hidden information serves you well in business. Financial transformations possible through inheritance, investments, or partnership arrangements. Power dynamics at work shift in your favor.`,
            financialTip: 'Consider research-based investments and transformational financial strategies',
            health: `Emotional intensity needs constructive outlets. Transformative practices like meditation or therapy bring breakthroughs. Pay attention to reproductive health and stress management. Intense physical activities help release pent-up energy.`,
            wellnessSuggestion: 'Try intense cardio or martial arts to channel your powerful energy',
            luck: `Lucky breaks come through uncovering hidden information or solving mysteries. Your intuition guides you to overlooked opportunities. Evening hours bring fortunate developments in personal transformations and financial matters.`,
            luckyMoment: 'Discovering valuable information that was previously hidden',
            dailyAffirmation: 'I embrace transformation and trust my inner power',
            planetaryInfluences: [
                { planet: '♇', name: 'Pluto', effect: 'Brings transformation and power' },
                { planet: '♂', name: 'Mars', effect: 'Enhances intensity and drive' },
                { planet: '♆', name: 'Neptune', effect: 'Deepens intuition' },
                { planet: '🌙', name: 'Moon', effect: 'Amplifies emotional depth' }
            ],
            todaysBestMatches: [
                { sign: 'Cancer', symbol: '♋', rating: 5, reason: 'Emotional depth' },
                { sign: 'Pisces', symbol: '♓', rating: 5, reason: 'Spiritual connection' },
                { sign: 'Virgo', symbol: '♍', rating: 4, reason: 'Practical support' }
            ],
            relatedSigns: [
                { name: 'Libra', symbol: '♎' },
                { name: 'Sagittarius', symbol: '♐' },
                { name: 'Capricorn', symbol: '♑' },
                { name: 'Aquarius', symbol: '♒' },
                { name: 'Pisces', symbol: '♓' },
                { name: 'Aries', symbol: '♈' }
            ],
            metaTitle: 'Scorpio Daily Horoscope Today | Free Accurate Predictions for Love, Career & Health',
            metaDescription: `Get your free Scorpio daily horoscope for today. Accurate predictions for love, relationships, career, money, and health. Discover what the stars have in store for Scorpio natives.`,
            metaKeywords: `Scorpio daily horoscope, Scorpio today, Scorpio love horoscope, Scorpio career, Scorpio health, October 23 November 21, water sign horoscope, Scorpio predictions`
        },
        sagittarius: {
            name: 'Sagittarius',
            symbol: '♐',
            dates: 'November 22 - December 21',
            element: 'Fire',
            modality: 'Mutable',
            rulingPlanet: 'Jupiter',
            luckyColor: 'Purple',
            luckyNumbers: [3, 7, 9],
            compatibility: ['Aries', 'Leo', 'Aquarius'],
            birthstone: 'Turquoise',
            flower: 'Carnation',
            overview: `Adventure and expansion call today, Sagittarius! Jupiter's influence brings opportunities for learning, travel, and philosophical growth. Your optimistic outlook attracts positive experiences and helps you see the bigger picture in challenging situations. Embrace spontaneity and new horizons.`,
            cosmicInsight: `Jupiter expands your horizons today. Seek knowledge, adventure, and philosophical insights. Your optimism attracts fortunate opportunities and meaningful connections with people from different backgrounds.`,
            love: `Romantic possibilities emerge through educational settings, travel, or cultural events. Existing relationships benefit from shared adventures and learning experiences. Your enthusiasm and honesty create genuine connections with like-minded people who appreciate your freedom-loving nature.`,
            bestTimeForLove: '4:00 PM - 6:00 PM',
            career: `International connections or long-distance opportunities arise. Your big-picture thinking impresses superiors. Financial gains possible through publishing, teaching, or legal matters. Philosophical approaches to business problems yield innovative solutions that benefit everyone.`,
            financialTip: 'Consider investments in education, travel, or international ventures',
            health: `Optimism supports overall wellbeing, but watch for overextension. Outdoor activities and sports satisfy your need for adventure. Pay attention to hip and liver health. Learning new health practices keeps you engaged and motivated.`,
            wellnessSuggestion: 'Try outdoor adventures or group fitness classes in nature',
            luck: `Lucky breaks occur when you follow your wanderlust. Spontaneous decisions lead to fortunate encounters. Educational pursuits open doors to unexpected opportunities. Your faith in the universe rewards you with synchronicities and meaningful coincidences.`,
            luckyMoment: 'Unexpected travel opportunity or cultural experience',
            dailyAffirmation: 'I explore life with curiosity and attract abundant opportunities',
            planetaryInfluences: [
                { planet: '♃', name: 'Jupiter', effect: 'Brings expansion and optimism' },
                { planet: '☿', name: 'Mercury', effect: 'Enhances learning abilities' },
                { planet: '♅', name: 'Uranus', effect: 'Inspires adventure' },
                { planet: '☀️', name: 'Sun', effect: 'Boosts confidence' }
            ],
            todaysBestMatches: [
                { sign: 'Aries', symbol: '♈', rating: 5, reason: 'Adventurous spirit' },
                { sign: 'Leo', symbol: '♌', rating: 5, reason: 'Optimistic energy' },
                { sign: 'Aquarius', symbol: '♒', rating: 4, reason: 'Philosophical connection' }
            ],
            relatedSigns: [
                { name: 'Scorpio', symbol: '♏' },
                { name: 'Capricorn', symbol: '♑' },
                { name: 'Aquarius', symbol: '♒' },
                { name: 'Pisces', symbol: '♓' },
                { name: 'Aries', symbol: '♈' },
                { name: 'Taurus', symbol: '♉' }
            ],
            metaTitle: 'Sagittarius Daily Horoscope Today | Free Accurate Predictions for Love, Career & Health',
            metaDescription: `Get your free Sagittarius daily horoscope for today. Accurate predictions for love, relationships, career, money, and health. Discover what the stars have in store for Sagittarius natives.`,
            metaKeywords: `Sagittarius daily horoscope, Sagittarius today, Sagittarius love horoscope, Sagittarius career, Sagittarius health, November 22 December 21, fire sign horoscope, Sagittarius predictions`
        },
        capricorn: {
            name: 'Capricorn',
            symbol: '♑',
            dates: 'December 22 - January 19',
            element: 'Earth',
            modality: 'Cardinal',
            rulingPlanet: 'Saturn',
            luckyColor: 'Brown',
            luckyNumbers: [4, 8, 13],
            compatibility: ['Taurus', 'Virgo', 'Scorpio'],
            birthstone: 'Garnet',
            flower: 'Ivy',
            overview: `Ambitious energy drives your success today, Capricorn. Saturn's discipline helps you make significant progress toward long-term goals. Your practical wisdom and responsible approach earn respect and open doors to authority positions. Structure and planning lead to tangible results.`,
            cosmicInsight: `Saturn supports your ambitious nature today. Focus on long-term goals and practical achievements. Your disciplined approach brings recognition and establishes your authority in professional matters.`,
            love: `Serious connections and committed relationships flourish today. Single Capricorn might attract someone through professional settings or shared ambitions. Your reliability and integrity create strong foundations for lasting partnerships. Practical expressions of love are most meaningful.`,
            bestTimeForLove: '8:00 PM - 10:00 PM',
            career: `Career advancements and recognition for your hard work likely today. Leadership roles come naturally as others trust your judgment. Financial planning and long-term investments show promising returns. Your structured approach solves complex business problems efficiently.`,
            financialTip: 'Focus on long-term investments and retirement planning',
            health: `Focus on bone and joint health through weight-bearing exercises. Your disciplined approach serves your wellness goals well. Balance work demands with adequate rest - your ambitious nature might push you too hard. Skin health benefits from consistent care routines.`,
            wellnessSuggestion: 'Try structured fitness programs with clear goals and progress tracking',
            luck: `Luck comes through disciplined efforts and long-term planning. Opportunities you've worked toward finally materialize. Your reputation for reliability attracts beneficial connections. Evening hours bring fortunate career developments and financial opportunities.`,
            luckyMoment: 'Unexpected promotion or professional recognition',
            dailyAffirmation: 'I achieve my goals through disciplined action and practical wisdom',
            planetaryInfluences: [
                { planet: '♄', name: 'Saturn', effect: 'Brings discipline and structure' },
                { planet: '☿', name: 'Mercury', effect: 'Enhances practical thinking' },
                { planet: '♃', name: 'Jupiter', effect: 'Supports long-term growth' },
                { planet: '🌙', name: 'Moon', effect: 'Provides emotional stability' }
            ],
            todaysBestMatches: [
                { sign: 'Taurus', symbol: '♉', rating: 5, reason: 'Shared values' },
                { sign: 'Virgo', symbol: '♍', rating: 5, reason: 'Practical harmony' },
                { sign: 'Scorpio', symbol: '♏', rating: 4, reason: 'Ambitious partnership' }
            ],
            relatedSigns: [
                { name: 'Sagittarius', symbol: '♐' },
                { name: 'Aquarius', symbol: '♒' },
                { name: 'Pisces', symbol: '♓' },
                { name: 'Aries', symbol: '♈' },
                { name: 'Taurus', symbol: '♉' },
                { name: 'Gemini', symbol: '♊' }
            ],
            metaTitle: 'Capricorn Daily Horoscope Today | Free Accurate Predictions for Love, Career & Health',
            metaDescription: `Get your free Capricorn daily horoscope for today. Accurate predictions for love, relationships, career, money, and health. Discover what the stars have in store for Capricorn natives.`,
            metaKeywords: `Capricorn daily horoscope, Capricorn today, Capricorn love horoscope, Capricorn career, Capricorn health, December 22 January 19, earth sign horoscope, Capricorn predictions`
        },
        aquarius: {
            name: 'Aquarius',
            symbol: '♒',
            dates: 'January 20 - February 18',
            element: 'Air',
            modality: 'Fixed',
            rulingPlanet: 'Uranus',
            luckyColor: 'Blue',
            luckyNumbers: [4, 7, 11],
            compatibility: ['Gemini', 'Libra', 'Sagittarius'],
            birthstone: 'Amethyst',
            flower: 'Orchid',
            overview: `Innovative ideas and social connections highlight your day, Aquarius. Uranus brings unexpected insights and revolutionary approaches to old problems. Your unique perspective helps you see opportunities others miss and connect with forward-thinking individuals who share your vision for the future.`,
            cosmicInsight: `Uranus sparks your innovative thinking today. Embrace unconventional ideas and connect with like-minded people who appreciate your unique perspective. Your humanitarian ideals attract positive attention.`,
            love: `Unconventional relationships and intellectual connections appeal today. Existing partnerships benefit from trying new activities together that stimulate your minds. Single Aquarius might connect with someone through technology, social causes, or group activities with friends.`,
            bestTimeForLove: '6:00 PM - 8:00 PM',
            career: `Technological innovations and group projects succeed through your visionary input. Your humanitarian approach to business impresses influential people. Financial opportunities emerge through networking and social media connections. Original ideas receive support and funding.`,
            financialTip: 'Consider investments in technology, innovation, or social enterprises',
            health: `Mental stimulation is crucial, but balance with physical activity. Unusual exercise routines or group fitness classes keep you engaged. Pay attention to circulatory health and maintain social connections for emotional wellbeing. Avoid excessive screen time.`,
            wellnessSuggestion: 'Try group activities that combine social interaction with physical exercise',
            luck: `Lucky breaks come through unexpected channels and technological means. Your willingness to try new approaches reveals hidden opportunities. Group activities and social causes lead to fortunate connections and developments that align with your values.`,
            luckyMoment: 'Unexpected technological solution or innovative idea',
            dailyAffirmation: 'I embrace my uniqueness and attract progressive opportunities',
            planetaryInfluences: [
                { planet: '♅', name: 'Uranus', effect: 'Brings innovation and sudden insights' },
                { planet: '♃', name: 'Jupiter', effect: 'Expands social connections' },
                { planet: '☿', name: 'Mercury', effect: 'Enhances original thinking' },
                { planet: '♀', name: 'Venus', effect: 'Supports friendship bonds' }
            ],
            todaysBestMatches: [
                { sign: 'Gemini', symbol: '♊', rating: 5, reason: 'Mental stimulation' },
                { sign: 'Libra', symbol: '♎', rating: 5, reason: 'Social harmony' },
                { sign: 'Sagittarius', symbol: '♐', rating: 4, reason: 'Adventurous thinking' }
            ],
            relatedSigns: [
                { name: 'Capricorn', symbol: '♑' },
                { name: 'Pisces', symbol: '♓' },
                { name: 'Aries', symbol: '♈' },
                { name: 'Taurus', symbol: '♉' },
                { name: 'Gemini', symbol: '♊' },
                { name: 'Cancer', symbol: '♋' }
            ],
            metaTitle: 'Aquarius Daily Horoscope Today | Free Accurate Predictions for Love, Career & Health',
            metaDescription: `Get your free Aquarius daily horoscope for today. Accurate predictions for love, relationships, career, money, and health. Discover what the stars have in store for Aquarius natives.`,
            metaKeywords: `Aquarius daily horoscope, Aquarius today, Aquarius love horoscope, Aquarius career, Aquarius health, January 20 February 18, air sign horoscope, Aquarius predictions`
        },
        pisces: {
            name: 'Pisces',
            symbol: '♓',
            dates: 'February 19 - March 20',
            element: 'Water',
            modality: 'Mutable',
            rulingPlanet: 'Neptune',
            luckyColor: 'Sea Green',
            luckyNumbers: [3, 9, 12],
            compatibility: ['Cancer', 'Scorpio', 'Capricorn'],
            birthstone: 'Aquamarine',
            flower: 'Water Lily',
            overview: `Intuitive insights and creative inspiration flow today, Pisces. Neptune enhances your spiritual connection and artistic sensitivities. This is a perfect day for creative projects, meditation, and helping others through your compassionate nature. Trust your dreams and subtle intuitive messages.`,
            cosmicInsight: `Neptune heightens your spiritual awareness today. Pay attention to dreams, synchronicities, and intuitive feelings. Your compassionate nature attracts healing opportunities and creative inspiration.`,
            love: `Deep spiritual connections and romantic idealism characterize your relationships today. Existing partnerships reach new levels of emotional intimacy through shared dreams and spiritual practices. Single Pisces might attract someone through artistic or spiritual activities that touch your soul.`,
            bestTimeForLove: '9:00 PM - 11:00 PM',
            career: `Creative projects and helping professions receive divine inspiration. Your intuitive approach to business decisions yields surprising success. Financial opportunities emerge through artistic talents or spiritual services. Team collaborations benefit from your empathy and understanding.`,
            financialTip: 'Consider investments in creative projects or healing services',
            health: `Focus on spiritual and emotional wellness through meditation, prayer, or time in nature. Water-based therapies and gentle exercises support your sensitive nature. Pay attention to foot health and avoid substance overindulgence. Rest and dream work are particularly beneficial.`,
            wellnessSuggestion: 'Try water-based exercises, meditation, or creative visualization',
            luck: `Lucky moments occur through intuitive guidance and synchronicities. Your dreams may contain important messages about opportunities. Helping others brings unexpected rewards. Creative expressions open doors to fortunate opportunities that align with your spiritual path.`,
            luckyMoment: 'Unexpected creative inspiration or spiritual insight',
            dailyAffirmation: 'I trust my intuition and attract magical experiences',
            planetaryInfluences: [
                { planet: '♆', name: 'Neptune', effect: 'Enhances intuition and creativity' },
                { planet: '🌙', name: 'Moon', effect: 'Amplifies emotional sensitivity' },
                { planet: '♀', name: 'Venus', effect: 'Supports artistic expression' },
                { planet: '♃', name: 'Jupiter', effect: 'Brings spiritual expansion' }
            ],
            todaysBestMatches: [
                { sign: 'Cancer', symbol: '♋', rating: 5, reason: 'Emotional depth' },
                { sign: 'Scorpio', symbol: '♏', rating: 5, reason: 'Spiritual connection' },
                { sign: 'Capricorn', symbol: '♑', rating: 4, reason: 'Practical support' }
            ],
            relatedSigns: [
                { name: 'Aquarius', symbol: '♒' },
                { name: 'Aries', symbol: '♈' },
                { name: 'Taurus', symbol: '♉' },
                { name: 'Gemini', symbol: '♊' },
                { name: 'Cancer', symbol: '♋' },
                { name: 'Leo', symbol: '♌' }
            ],
            metaTitle: 'Pisces Daily Horoscope Today | Free Accurate Predictions for Love, Career & Health',
            metaDescription: `Get your free Pisces daily horoscope for today. Accurate predictions for love, relationships, career, money, and health. Discover what the stars have in store for Pisces natives.`,
            metaKeywords: `Pisces daily horoscope, Pisces today, Pisces love horoscope, Pisces career, Pisces health, February 19 March 20, water sign horoscope, Pisces predictions`
        }
    };

    const signKey = sign.toLowerCase();
    return signData[signKey] || null;
}
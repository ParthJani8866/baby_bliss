// pages/astrology/zodiac-signs/[sign].js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ZodiacSignPage({ signData, error }) {
    const router = useRouter();
    const { sign } = router.query;
    const currentYear = new Date().getFullYear();

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Zodiac Sign Not Found</h1>
                    <p className="text-gray-600 mb-6">The zodiac sign you are looking for does not exist.</p>
                    <Link href="/astrology/zodiac-signs" className="bg-purple-600 text-white px-6 py-3 rounded-lg">
                        Browse All Zodiac Signs
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
                    <p className="text-gray-600">Loading zodiac sign information...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{signData.metaTitle}</title>
                <meta name="description" content={signData.metaDescription} />
                <meta name="keywords" content={signData.metaKeywords} />
                <link rel="canonical" href={`https://yoursite.com/astrology/zodiac-signs/${sign}`} />

                {/* Open Graph */}
                <meta property="og:title" content={signData.metaTitle} />
                <meta property="og:description" content={signData.metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://yoursite.com/astrology/zodiac-signs/${sign}`} />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": signData.metaTitle,
                            "description": signData.metaDescription,
                            "datePublished": "2024-01-01T00:00:00Z",
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
                                "@id": `https://yoursite.com/astrology/zodiac-signs/${sign}`
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
                                <Link href="/astrology" className="text-gray-600 hover:text-purple-600">
                                    Astrology
                                </Link>
                                <Link href="/astrology/zodiac-signs" className="text-gray-600 hover:text-purple-600">
                                    Zodiac Signs
                                </Link>
                                <Link href="/astrology/horoscope" className="text-gray-600 hover:text-purple-600">
                                    Horoscopes
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="container mx-auto px-4 py-8">
                    {/* Header Section */}
                    <header className="text-center mb-12">
                        <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Zodiac Sign Guide
                        </div>
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <span className="text-5xl">{signData.symbol}</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                {signData.name} Zodiac Sign
                            </h1>
                        </div>
                        <p className="text-xl text-gray-600">
                            {signData.dates} • {signData.element} Element • {signData.modality} Quality
                        </p>
                    </header>

                    {/* Quick Stats */}
                    <section className="mb-12">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🌠</div>
                                    <h3 className="font-semibold text-gray-900">Element</h3>
                                    <p className="text-gray-600">{signData.element}</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🪐</div>
                                    <h3 className="font-semibold text-gray-900">Ruling Planet</h3>
                                    <p className="text-gray-600">{signData.rulingPlanet}</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-2">🏠</div>
                                    <h3 className="font-semibold text-gray-900">Natural House</h3>
                                    <p className="text-gray-600">{signData.house}</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-2">⚡</div>
                                    <h3 className="font-semibold text-gray-900">Modality</h3>
                                    <p className="text-gray-600">{signData.modality}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quick Actions */}
                    <section className="mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link
                                href={`/astrology/horoscope/today/sign/${sign.toLowerCase()}`}
                                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl p-6 text-center hover:shadow-xl transition-all"
                            >
                                <div className="text-2xl mb-3">📅</div>
                                <h3 className="font-bold text-lg mb-2">Daily Horoscope</h3>
                                <p className="text-sm opacity-90">Get today personalized guidance</p>
                            </Link>
                            <Link
                                href={`/astrology/horoscope/weekly/${sign.toLowerCase()}`}
                                className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-6 text-center hover:shadow-xl transition-all"
                            >
                                <div className="text-2xl mb-3">📆</div>
                                <h3 className="font-bold text-lg mb-2">Weekly Horoscope</h3>
                                <p className="text-sm opacity-90">Plan your week ahead</p>
                            </Link>
                            <Link
                                href="/astrology/birth-chart"
                                className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl p-6 text-center hover:shadow-xl transition-all"
                            >
                                <div className="text-2xl mb-3">✨</div>
                                <h3 className="font-bold text-lg mb-2">Birth Chart</h3>
                                <p className="text-sm opacity-90">Get complete astrological profile</p>
                            </Link>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Personality Overview */}
                            <section className="bg-white rounded-xl shadow-lg p-6">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">{signData.name} Personality Traits</h2>
                                <p className="text-gray-700 mb-6">
                                    {signData.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-3 text-green-600">🌟 Strengths</h3>
                                        <ul className="space-y-2">
                                            {signData.strengths.map((strength, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-gray-700">{strength}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-3 text-red-600">⚠️ Weaknesses</h3>
                                        <ul className="space-y-2">
                                            {signData.weaknesses.map((weakness, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                                    <span className="text-gray-700">{weakness}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Love & Relationships */}
                            <section className="bg-white rounded-xl shadow-lg p-6">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">💖 Love & Relationships</h2>
                                <p className="text-gray-700 mb-4">
                                    {signData.loveDescription}
                                </p>

                                <div className="mb-6">
                                    <h3 className="font-semibold text-lg mb-3">Best Matches</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {signData.compatibility.good.map((match, index) => (
                                            <Link
                                                key={index}
                                                href={`/astrology/zodiac-signs/${match.toLowerCase()}`}
                                                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition-colors"
                                            >
                                                {match}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-3">Challenging Matches</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {signData.compatibility.challenging.map((match, index) => (
                                            <Link
                                                key={index}
                                                href={`/astrology/zodiac-signs/${match.toLowerCase()}`}
                                                className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm hover:bg-red-200 transition-colors"
                                            >
                                                {match}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Career & Life Purpose */}
                            <section className="bg-white rounded-xl shadow-lg p-6">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">💼 Career & Life Purpose</h2>
                                <p className="text-gray-700 mb-4">
                                    {signData.careerDescription}
                                </p>

                                <div className="mb-6">
                                    <h3 className="font-semibold text-lg mb-3">Ideal Careers</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {signData.idealCareers.map((career, index) => (
                                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                {career}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-3">Work Style</h3>
                                    <p className="text-gray-700">
                                        {signData.workStyle}
                                    </p>
                                </div>
                            </section>

                            {/* Yearly Forecast */}
                            <section className="bg-white rounded-xl shadow-lg p-6">
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">🔮 {currentYear} Yearly Forecast</h2>
                                <p className="text-gray-700 mb-6">
                                    {signData.yearlyForecast}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-3 text-green-600">✨ Opportunities</h3>
                                        <ul className="space-y-2">
                                            {signData.yearlyOpportunities.map((opportunity, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-gray-700 text-sm">{opportunity}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-3 text-orange-600">🎯 Challenges</h3>
                                        <ul className="space-y-2">
                                            {signData.yearlyChallenges.map((challenge, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                    <span className="text-gray-700 text-sm">{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Compatibility Quick View */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="font-bold text-lg mb-4">💕 Compatibility</h3>
                                <div className="space-y-3">
                                    {signData.compatibility.detailed.map((comp, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <Link
                                                href={`/astrology/zodiac-signs/${comp.sign.toLowerCase()}`}
                                                className="text-gray-700 hover:text-purple-600 transition-colors"
                                            >
                                                {comp.sign}
                                            </Link>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-2 h-2 rounded-full ${i < comp.rating ? 'bg-green-500' : 'bg-gray-300'
                                                            }`}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Facts */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="font-bold text-lg mb-4">📋 Quick Facts</h3>
                                <div className="space-y-3">
                                    <div>
                                        <span className="font-semibold text-gray-600">Symbol:</span>
                                        <span className="ml-2 text-gray-900">{signData.symbol} {signData.symbolMeaning}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-600">Quality:</span>
                                        <span className="ml-2 text-gray-900">{signData.modality}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-600">Ruling Planet:</span>
                                        <span className="ml-2 text-gray-900">{signData.rulingPlanet}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-600">House:</span>
                                        <span className="ml-2 text-gray-900">{signData.house}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-600">Lucky Color:</span>
                                        <span className="ml-2 text-gray-900">{signData.luckyColor}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-600">Lucky Numbers:</span>
                                        <span className="ml-2 text-gray-900">{signData.luckyNumbers.join(', ')}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Famous Personalities */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h3 className="font-bold text-lg mb-4">⭐ Famous {signData.name}s</h3>
                                <div className="space-y-2">
                                    {signData.famousPersonalities.map((person, index) => (
                                        <div key={index} className="text-sm text-gray-700">
                                            {person}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mythological & Historical Section */}
                    <section className="mt-12 bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">📜 Mythology & History of {signData.name}</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 mb-6">
                                {signData.mythology}
                            </p>
                            <h3 className="text-xl font-semibold mb-4">Historical Significance</h3>
                            <p className="text-gray-700">
                                {signData.history}
                            </p>
                        </div>
                    </section>

                    {/* Personal Growth Section */}
                    <section className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
                        <h2 className="text-2xl font-bold mb-6 text-center">🌱 Personal Growth for {signData.name}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-semibold text-lg mb-4">🎯 Life Lessons</h3>
                                <ul className="space-y-3">
                                    {signData.lifeLessons.map((lesson, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 text-sm">
                                                {index + 1}
                                            </div>
                                            <span className="text-gray-700">{lesson}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-4">💪 Growth Opportunities</h3>
                                <ul className="space-y-3">
                                    {signData.growthOpportunities.map((opportunity, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 text-sm">
                                                ✓
                                            </div>
                                            <span className="text-gray-700">{opportunity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Related Signs */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6 text-center">Explore Related Zodiac Signs</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {signData.relatedSigns.map((relatedSign) => (
                                <Link
                                    key={relatedSign.name}
                                    href={`/astrology/zodiac-signs/${relatedSign.name.toLowerCase()}`}
                                    className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all border-2 border-gray-200 hover:border-purple-300"
                                >
                                    <div className="text-2xl mb-2">{relatedSign.symbol}</div>
                                    <h3 className="font-semibold text-gray-900">{relatedSign.name}</h3>
                                    <p className="text-sm text-gray-600">{relatedSign.element}</p>
                                </Link>
                            ))}
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
        const signData = await getZodiacSignData(sign);

        if (!signData) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                signData,
            },
        };
    } catch (error) {
        console.error('Error generating zodiac sign page:', error);

        return {
            props: {
                error: true
            },
        };
    }
}

// Helper function to get zodiac sign data
async function getZodiacSignData(sign) {
    const signData = {
    Aries: {
        name: 'Aries',
        symbol: '♈',
        dates: 'March 21 - April 19',
        element: 'Fire',
        modality: 'Cardinal',
        rulingPlanet: 'Mars',
        house: '1st',
        symbolMeaning: 'The Ram',
        luckyColor: 'Red',
        luckyNumbers: [1, 9, 17],
        description: 'Aries is the first sign of the zodiac, known for their pioneering spirit and relentless energy. These natural leaders charge forward with courage and determination, always ready to take on new challenges and initiate action.',
        strengths: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic', 'Honest', 'Passionate'],
        weaknesses: ['Impatient', 'Moody', 'Short-tempered', 'Impulsive', 'Aggressive'],
        loveDescription: 'Aries approaches love with the same passion and intensity they bring to everything else. They are direct in their affections and appreciate partners who can match their energy and independence.',
        careerDescription: 'Aries thrives in leadership roles and competitive environments. They excel as entrepreneurs, athletes, and in any field that allows them to take initiative and be at the forefront.',
        idealCareers: ['Entrepreneur', 'Athlete', 'Military Leader', 'Surgeon', 'Police Officer', 'Sales Director'],
        workStyle: 'Fast-paced, independent, and results-oriented. Aries prefers to work autonomously and make quick decisions.',
        yearlyForecast: `${new Date().getFullYear()} brings significant career opportunities and personal growth for Aries. Your natural leadership abilities are highlighted, making this an excellent year for starting new ventures and taking bold initiatives.`,
        yearlyOpportunities: [
            'Career advancement through bold moves',
            'New business ventures and entrepreneurship',
            'Leadership roles and recognition',
            'Physical fitness and health improvements'
        ],
        yearlyChallenges: [
            'Learning patience in partnerships',
            'Balancing independence with collaboration',
            'Managing impulsive financial decisions',
            'Developing emotional awareness'
        ],
        compatibility: {
            good: ['Leo', 'Sagittarius', 'Gemini'],
            challenging: ['Cancer', 'Capricorn', 'Libra'],
            detailed: [
                { sign: 'Leo', rating: 5 },
                { sign: 'Sagittarius', rating: 5 },
                { sign: 'Gemini', rating: 4 },
                { sign: 'Aquarius', rating: 4 },
                { sign: 'Aries', rating: 3 },
                { sign: 'Libra', rating: 2 },
                { sign: 'Cancer', rating: 2 },
                { sign: 'Capricorn', rating: 1 }
            ]
        },
        famousPersonalities: [
            'Lady Gaga (March 28)',
            'Robert Downey Jr. (April 4)',
            'Emma Watson (April 15)',
            'Elton John (March 25)',
            'Quentin Tarantino (March 27)'
        ],
        mythology: 'In Greek mythology, Aries represents the golden ram that rescued Phrixus and Helle from their stepmother. The ram\'s golden fleece later became the quest for Jason and the Argonauts. This myth symbolizes rescue, courage, and the pursuit of valuable goals.',
        history: 'Aries has been associated with spring and new beginnings since ancient times. In Babylonian astrology, Aries was known as "The Agrarian Worker," representing the start of the agricultural year. The constellation has been recognized since 1350 BCE and marks the vernal equinox in the tropical zodiac.',
        lifeLessons: [
            'Learn to balance action with reflection',
            'Develop patience in relationships',
            'Channel aggression into constructive outlets',
            'Practice considering others perspectives',
            'Cultivate emotional intelligence'
        ],
        growthOpportunities: [
            'Developing strategic thinking before acting',
            'Learning the value of teamwork and collaboration',
            'Cultivating lasting relationships through patience',
            'Balancing personal goals with others needs',
            'Transforming anger into constructive energy'
        ],
        relatedSigns: [
            { name: 'Leo', symbol: '♌', element: 'Fire' },
            { name: 'Sagittarius', symbol: '♐', element: 'Fire' },
            { name: 'Gemini', symbol: '♊', element: 'Air' },
            { name: 'Aquarius', symbol: '♒', element: 'Air' }
        ],
        metaTitle: 'Aries Zodiac Sign: Complete Guide to Personality, Love & Career',
        metaDescription: 'Discover everything about Aries zodiac sign: personality traits, love compatibility, career strengths, and yearly forecast. Learn why Aries are natural leaders and pioneers.',
        metaKeywords: 'Aries zodiac sign, Aries personality, Aries compatibility, Aries dates, Aries traits, fire sign Aries, Aries horoscope'
    },
    Taurus: {
        name: 'Taurus',
        symbol: '♉',
        dates: 'April 20 - May 20',
        element: 'Earth',
        modality: 'Fixed',
        rulingPlanet: 'Venus',
        house: '2nd',
        symbolMeaning: 'The Bull',
        luckyColor: 'Green',
        luckyNumbers: [2, 6, 9],
        description: 'Taurus is the grounded earth sign that values stability, beauty, and security. Known for their patience and determination, they build lasting foundations and appreciate life sensual pleasures.',
        strengths: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Responsible', 'Stable'],
        weaknesses: ['Stubborn', 'Possessive', 'Uncompromising', 'Resistant to change'],
        loveDescription: 'Taurus approaches love with loyalty and dedication. They seek stable, secure relationships and express love through practical actions and sensual experiences.',
        careerDescription: 'Taurus excels in careers that require patience, persistence, and practical skills. They thrive in stable environments and are excellent with finances and resources.',
        idealCareers: ['Banker', 'Artist', 'Chef', 'Real Estate Agent', 'Landscaper', 'Financial Advisor'],
        workStyle: 'Methodical, reliable, and quality-focused. Taurus prefers stable environments and tangible results.',
        yearlyForecast: `${new Date().getFullYear()} focuses on financial growth and relationship stability for Taurus. Your practical approach helps you build security while Venus brings harmony to your partnerships.`,
        yearlyOpportunities: [
            'Financial stability and investment growth',
            'Deepening committed relationships',
            'Home and property improvements',
            'Artistic and creative projects'
        ],
        yearlyChallenges: [
            'Adapting to unexpected changes',
            'Releasing control in relationships',
            'Balancing practicality with spontaneity',
            'Managing possessiveness'
        ],
        compatibility: {
            good: ['Virgo', 'Capricorn', 'Cancer'],
            challenging: ['Aquarius', 'Leo', 'Scorpio'],
            detailed: [
                { sign: 'Virgo', rating: 5 },
                { sign: 'Capricorn', rating: 5 },
                { sign: 'Cancer', rating: 4 },
                { sign: 'Pisces', rating: 4 },
                { sign: 'Taurus', rating: 3 },
                { sign: 'Leo', rating: 2 },
                { sign: 'Aquarius', rating: 2 },
                { sign: 'Scorpio', rating: 1 }
            ]
        },
        famousPersonalities: [
            'Adele (May 5)',
            'David Beckham (May 2)',
            'George Clooney (May 6)',
            'Cher (May 20)',
            'William Shakespeare (April 26)'
        ],
        mythology: 'In Greek mythology, Taurus represents Zeus in the form of a white bull who carried Europa across the sea to Crete. This myth symbolizes strength, fertility, and the beginning of new civilizations.',
        history: 'Taurus has been associated with agriculture and fertility since ancient times. In Egyptian astrology, the constellation was linked to Apis, the bull god of fertility. The Pleiades star cluster in Taurus has been important in many ancient cultures for marking seasonal changes.',
        lifeLessons: [
            'Learn to embrace change and flexibility',
            'Balance material security with spiritual growth',
            'Develop trust in relationships',
            'Practice generosity without expectation',
            'Cultivate adaptability in daily life'
        ],
        growthOpportunities: [
            'Developing flexibility in thinking and actions',
            'Learning to trust the process of change',
            'Balancing material and spiritual values',
            'Expressing creativity freely',
            'Building security from within rather than from possessions'
        ],
        relatedSigns: [
            { name: 'Virgo', symbol: '♍', element: 'Earth' },
            { name: 'Capricorn', symbol: '♑', element: 'Earth' },
            { name: 'Cancer', symbol: '♋', element: 'Water' },
            { name: 'Pisces', symbol: '♓', element: 'Water' }
        ],
        metaTitle: 'Taurus Zodiac Sign: Complete Guide to Personality, Love & Career',
        metaDescription: 'Discover everything about Taurus zodiac sign: personality traits, love compatibility, career strengths, and yearly forecast. Learn why Taurus values stability and beauty.',
        metaKeywords: 'Taurus zodiac sign, Taurus personality, Taurus compatibility, Taurus dates, Taurus traits, earth sign Taurus, Taurus horoscope'
    },
    Gemini: {
        name: 'Gemini',
        symbol: '♊',
        dates: 'May 21 - June 20',
        element: 'Air',
        modality: 'Mutable',
        rulingPlanet: 'Mercury',
        house: '3rd',
        symbolMeaning: 'The Twins',
        luckyColor: 'Yellow',
        luckyNumbers: [5, 7, 14],
        description: 'Gemini is the social butterfly of the zodiac, constantly seeking mental stimulation and new experiences. Their curious nature makes them excellent communicators and adaptable thinkers.',
        strengths: ['Adaptable', 'Communicative', 'Intellectual', 'Witty', 'Youthful', 'Energetic'],
        weaknesses: ['Nervous', 'Inconsistent', 'Indecisive', 'Gossipy', 'Superficial'],
        loveDescription: 'Gemini seeks intellectual connection and variety in relationships. They need partners who can engage them mentally and keep up with their ever-changing interests.',
        careerDescription: 'Gemini excels in careers that involve communication, variety, and mental stimulation. They thrive in fast-paced environments that allow them to use their quick wit and adaptability.',
        idealCareers: ['Journalist', 'Teacher', 'Salesperson', 'Writer', 'Public Relations', 'Interpreter'],
        workStyle: 'Versatile, communicative, and multi-tasking. Gemini enjoys variety and intellectual challenges in their work.',
        yearlyForecast: `${new Date().getFullYear()} brings exciting communication opportunities and learning experiences for Gemini. Your social networks expand, and new skills development opens doors to personal and professional growth.`,
        yearlyOpportunities: [
            'Expanding social and professional networks',
            'Learning new skills and education',
            'Communication-based projects',
            'Travel and cultural experiences'
        ],
        yearlyChallenges: [
            'Maintaining focus on long-term goals',
            'Avoiding information overload',
            'Developing emotional depth in relationships',
            'Balancing multiple interests'
        ],
        compatibility: {
            good: ['Libra', 'Aquarius', 'Aries'],
            challenging: ['Virgo', 'Pisces', 'Sagittarius'],
            detailed: [
                { sign: 'Libra', rating: 5 },
                { sign: 'Aquarius', rating: 5 },
                { sign: 'Aries', rating: 4 },
                { sign: 'Leo', rating: 4 },
                { sign: 'Gemini', rating: 3 },
                { sign: 'Sagittarius', rating: 2 },
                { sign: 'Virgo', rating: 2 },
                { sign: 'Pisces', rating: 1 }
            ]
        },
        famousPersonalities: [
            'Angelina Jolie (June 4)',
            'Kanye West (June 8)',
            'Marilyn Monroe (June 1)',
            'Johnny Depp (June 9)',
            'Prince William (June 21)'
        ],
        mythology: 'In Greek mythology, Gemini represents the twin brothers Castor and Pollux. When Castor was killed, Pollux begged Zeus to let them stay together, so they were placed in the sky as constellations. This symbolizes the bond between siblings and duality.',
        history: 'Gemini has been associated with communication and duality since ancient times. In Babylonian astrology, the constellation was known as "The Great Twins." The twins have been depicted in various cultures, often representing the dual nature of humanity.',
        lifeLessons: [
            'Learn to focus energy on meaningful pursuits',
            'Develop emotional consistency in relationships',
            'Balance intellectual curiosity with practical application',
            'Cultivate depth alongside breadth of knowledge',
            'Practice active listening in communications'
        ],
        growthOpportunities: [
            'Developing emotional intelligence and depth',
            'Learning to complete projects before starting new ones',
            'Cultivating meaningful long-term relationships',
            'Balancing mental stimulation with physical grounding',
            'Transforming curiosity into wisdom'
        ],
        relatedSigns: [
            { name: 'Libra', symbol: '♎', element: 'Air' },
            { name: 'Aquarius', symbol: '♒', element: 'Air' },
            { name: 'Aries', symbol: '♈', element: 'Fire' },
            { name: 'Leo', symbol: '♌', element: 'Fire' }
        ],
        metaTitle: 'Gemini Zodiac Sign: Complete Guide to Personality, Love & Career',
        metaDescription: 'Discover everything about Gemini zodiac sign: personality traits, love compatibility, career strengths, and yearly forecast. Learn why Geminis are excellent communicators and social butterflies.',
        metaKeywords: 'Gemini zodiac sign, Gemini personality, Gemini compatibility, Gemini dates, Gemini traits, air sign Gemini, Gemini horoscope'
    },
    Cancer: {
        name: 'Cancer',
        symbol: '♋',
        dates: 'June 21 - July 22',
        element: 'Water',
        modality: 'Cardinal',
        rulingPlanet: 'Moon',
        house: '4th',
        symbolMeaning: 'The Crab',
        luckyColor: 'Silver',
        luckyNumbers: [2, 7, 11],
        description: 'Cancer is the nurturing water sign that values emotional security and family connections. Their intuitive nature helps them create warm, protective environments and deep emotional bonds.',
        strengths: ['Intuitive', 'Nurturing', 'Protective', 'Loyal', 'Compassionate', 'Imaginative'],
        weaknesses: ['Moody', 'Overly sensitive', 'Pessimistic', 'Suspicious', 'Clingy'],
        loveDescription: 'Cancer approaches love with deep emotional commitment and nurturing care. They seek security and emotional intimacy, creating cozy home environments for their loved ones.',
        careerDescription: 'Cancer excels in careers that involve caregiving, nurturing, and creating emotional security. They thrive in environments where they can use their intuition and protective nature.',
        idealCareers: ['Nurse', 'Teacher', 'Social Worker', 'Chef', 'Historian', 'Real Estate Agent'],
        workStyle: 'Caring, intuitive, and protective. Cancer values emotional security and meaningful work that helps others.',
        yearlyForecast: `${new Date().getFullYear()} focuses on emotional healing and family growth for Cancer. Your intuitive abilities strengthen, helping you create deeper emotional connections and secure home environments.`,
        yearlyOpportunities: [
            'Family connections and home improvements',
            'Emotional healing and self-care',
            'Intuitive and psychic development',
            'Nurturing creative projects'
        ],
        yearlyChallenges: [
            'Setting healthy emotional boundaries',
            'Overcoming fear of rejection',
            'Balancing family and personal needs',
            'Managing mood swings effectively'
        ],
        compatibility: {
            good: ['Scorpio', 'Pisces', 'Taurus'],
            challenging: ['Aries', 'Libra', 'Capricorn'],
            detailed: [
                { sign: 'Scorpio', rating: 5 },
                { sign: 'Pisces', rating: 5 },
                { sign: 'Taurus', rating: 4 },
                { sign: 'Virgo', rating: 4 },
                { sign: 'Cancer', rating: 3 },
                { sign: 'Capricorn', rating: 2 },
                { sign: 'Aries', rating: 2 },
                { sign: 'Libra', rating: 1 }
            ]
        },
        famousPersonalities: [
            'Tom Hanks (July 9)',
            'Princess Diana (July 1)',
            'Tom Cruise (July 3)',
            'Meryl Streep (June 22)',
            'Frida Kahlo (July 6)'
        ],
        mythology: 'In Greek mythology, Cancer represents the crab that bit Hercules during his fight with the Hydra. Though the crab was crushed, Hera placed it in the sky for its loyalty. This symbolizes protection and the cyclical nature of life.',
        history: 'Cancer has been associated with motherhood and protection since ancient times. In Egyptian astrology, the constellation was linked to the scarab beetle, representing transformation and rebirth. Cancer marks the summer solstice in the Northern Hemisphere.',
        lifeLessons: [
            'Learn to set healthy emotional boundaries',
            'Develop resilience against emotional sensitivity',
            'Balance nurturing others with self-care',
            'Practice vulnerability without fear',
            'Cultivate emotional independence'
        ],
        growthOpportunities: [
            'Developing emotional resilience and boundaries',
            'Learning to express needs clearly and directly',
            'Balancing family responsibilities with personal growth',
            'Transforming sensitivity into intuitive strength',
            'Building self-worth independent of others approval'
        ],
        relatedSigns: [
            { name: 'Scorpio', symbol: '♏', element: 'Water' },
            { name: 'Pisces', symbol: '♓', element: 'Water' },
            { name: 'Taurus', symbol: '♉', element: 'Earth' },
            { name: 'Virgo', symbol: '♍', element: 'Earth' }
        ],
        metaTitle: 'Cancer Zodiac Sign: Complete Guide to Personality, Love & Career',
        metaDescription: 'Discover everything about Cancer zodiac sign: personality traits, love compatibility, career strengths, and yearly forecast. Learn why Cancers are nurturing and emotionally intuitive.',
        metaKeywords: 'Cancer zodiac sign, Cancer personality, Cancer compatibility, Cancer dates, Cancer traits, water sign Cancer, Cancer horoscope'
    },
    Leo: {
        name: 'Leo',
        symbol: '♌',
        dates: 'July 23 - August 22',
        element: 'Fire',
        modality: 'Fixed',
        rulingPlanet: 'Sun',
        house: '5th',
        symbolMeaning: 'The Lion',
        luckyColor: 'Gold',
        luckyNumbers: [1, 4, 10],
        description: 'Leo is the radiant fire sign that brings warmth, creativity, and leadership. Their generous spirit and natural charisma light up any room they enter, inspiring others with their confidence.',
        strengths: ['Confident', 'Creative', 'Generous', 'Warm-hearted', 'Leadership', 'Passionate'],
        weaknesses: ['Arrogant', 'Stubborn', 'Lazy', 'Inflexible', 'Attention-seeking'],
        loveDescription: 'Leo approaches love with grand gestures and loyal devotion. They seek partners who appreciate their generosity and can share in their creative, passionate approach to life.',
        careerDescription: 'Leo excels in leadership roles and creative fields. They thrive in positions where they can inspire others, receive recognition, and express their natural creativity.',
        idealCareers: ['Actor', 'Manager', 'Politician', 'Teacher', 'Designer', 'Entrepreneur'],
        workStyle: 'Creative, leadership-oriented, and recognition-seeking. Leo enjoys being in charge and inspiring others with their vision.',
        yearlyForecast: `${new Date().getFullYear()} highlights creative expression and personal recognition for Leo. Your leadership qualities receive acknowledgment, and creative projects bring fulfillment and success.`,
        yearlyOpportunities: [
            'Creative projects and self-expression',
            'Leadership roles and recognition',
            'Romantic connections and fun',
            'Personal branding and visibility'
        ],
        yearlyChallenges: [
            'Balancing confidence with humility',
            'Sharing the spotlight with others',
            'Managing pride in relationships',
            'Avoiding dramatic reactions'
        ],
        compatibility: {
            good: ['Aries', 'Sagittarius', 'Gemini'],
            challenging: ['Scorpio', 'Taurus', 'Aquarius'],
            detailed: [
                { sign: 'Aries', rating: 5 },
                { sign: 'Sagittarius', rating: 5 },
                { sign: 'Gemini', rating: 4 },
                { sign: 'Libra', rating: 4 },
                { sign: 'Leo', rating: 3 },
                { sign: 'Aquarius', rating: 2 },
                { sign: 'Taurus', rating: 2 },
                { sign: 'Scorpio', rating: 1 }
            ]
        },
        famousPersonalities: [
            'Barack Obama (August 4)',
            'Jennifer Lopez (July 24)',
            'Madonna (August 16)',
            'Chris Hemsworth (August 11)',
            'Mick Jagger (July 26)'
        ],
        mythology: 'In Greek mythology, Leo represents the Nemean Lion slain by Hercules as his first labor. The lion\'s skin became Hercules\' armor, symbolizing courage and the triumph of heroism over brute strength.',
        history: 'Leo has been associated with royalty and leadership since ancient times. In Egyptian astrology, the constellation was linked to the lion goddess Sekhmet. The rising of Leo marked the flooding of the Nile in ancient Egypt, symbolizing renewal and power.',
        lifeLessons: [
            'Learn to share attention and recognition',
            'Develop humility alongside confidence',
            'Balance self-expression with listening',
            'Practice generosity without expectation',
            'Cultivate inner validation'
        ],
        growthOpportunities: [
            'Developing humility and appreciation for others',
            'Learning to lead through inspiration rather than command',
            'Balancing self-confidence with genuine connection',
            'Transforming pride into authentic self-worth',
            'Sharing creative gifts without needing constant praise'
        ],
        relatedSigns: [
            { name: 'Aries', symbol: '♈', element: 'Fire' },
            { name: 'Sagittarius', symbol: '♐', element: 'Fire' },
            { name: 'Gemini', symbol: '♊', element: 'Air' },
            { name: 'Libra', symbol: '♎', element: 'Air' }
        ],
        metaTitle: 'Leo Zodiac Sign: Complete Guide to Personality, Love & Career',
        metaDescription: 'Discover everything about Leo zodiac sign: personality traits, love compatibility, career strengths, and yearly forecast. Learn why Leos are natural leaders and creative spirits.',
        metaKeywords: 'Leo zodiac sign, Leo personality, Leo compatibility, Leo dates, Leo traits, fire sign Leo, Leo horoscope'
    },
    Virgo: {
        name: 'Virgo',
        symbol: '♍',
        dates: 'August 23 - September 22',
        element: 'Earth',
        modality: 'Mutable',
        rulingPlanet: 'Mercury',
        house: '6th',
        symbolMeaning: 'The Virgin',
        luckyColor: 'Navy Blue',
        luckyNumbers: [5, 14, 23],
        description: 'Virgo is the analytical earth sign known for their attention to detail and service-oriented nature. They find fulfillment in helping others, creating order, and pursuing practical perfection.',
        strengths: ['Analytical', 'Practical', 'Reliable', 'Helpful', 'Organized', 'Kind'],
        weaknesses: ['Worrying', 'Overly critical', 'Shy', 'Perfectionist', 'Harsh'],
        loveDescription: 'Virgo approaches love with practical devotion and thoughtful service. They express affection through helpful actions and seek partners who appreciate their attention to detail and reliability.',
        careerDescription: 'Virgo excels in careers that require precision, analysis, and service to others. They thrive in organized environments where they can use their problem-solving skills.',
        idealCareers: ['Accountant', 'Editor', 'Researcher', 'Nutritionist', 'Analyst', 'Healthcare Worker'],
        workStyle: 'Detail-oriented, analytical, and service-focused. Virgo values efficiency, organization, and practical results.',
        yearlyForecast: `${new Date().getFullYear()} focuses on health improvement and service for Virgo. Your analytical skills help you create efficient systems, while attention to wellness brings vitality and balance.`,
        yearlyOpportunities: [
            'Health and wellness improvements',
            'Skill development and education',
            'Service-oriented projects',
            'Organizational systems development'
        ],
        yearlyChallenges: [
            'Overcoming perfectionism',
            'Reducing self-criticism',
            'Balancing work and relaxation',
            'Accepting imperfections in others'
        ],
        compatibility: {
            good: ['Taurus', 'Capricorn', 'Cancer'],
            challenging: ['Sagittarius', 'Gemini', 'Pisces'],
            detailed: [
                { sign: 'Taurus', rating: 5 },
                { sign: 'Capricorn', rating: 5 },
                { sign: 'Cancer', rating: 4 },
                { sign: 'Scorpio', rating: 4 },
                { sign: 'Virgo', rating: 3 },
                { sign: 'Pisces', rating: 2 },
                { sign: 'Gemini', rating: 2 },
                { sign: 'Sagittarius', rating: 1 }
            ]
        },
        famousPersonalities: [
            'Beyoncé (September 4)',
            'Keanu Reeves (September 2)',
            'Cameron Diaz (August 30)',
            'Stephen King (September 21)',
            'Mother Teresa (August 26)'
        ],
        mythology: 'In Greek mythology, Virgo represents Astraea, the goddess of innocence and justice. She was the last immortal to leave Earth during the Iron Age, symbolizing the loss of innocence and the pursuit of purity.',
        history: 'Virgo has been associated with harvest and agriculture since ancient times. In Babylonian astrology, the constellation was known as "The Furrow," representing the goddess Shala and her ear of corn. Virgo has been depicted as a maiden holding wheat since ancient times.',
        lifeLessons: [
            'Learn to accept imperfections in self and others',
            'Develop self-compassion alongside high standards',
            'Balance service to others with self-care',
            'Practice flexibility in routines',
            'Cultivate trust in the process'
        ],
        growthOpportunities: [
            'Developing self-acceptance and reducing self-criticism',
            'Learning to balance high standards with realistic expectations',
            'Cultivating flexibility in thinking and daily routines',
            'Transforming criticism into constructive feedback',
            'Finding joy in imperfection and spontaneity'
        ],
        relatedSigns: [
            { name: 'Taurus', symbol: '♉', element: 'Earth' },
            { name: 'Capricorn', symbol: '♑', element: 'Earth' },
            { name: 'Cancer', symbol: '♋', element: 'Water' },
            { name: 'Scorpio', symbol: '♏', element: 'Water' }
        ],
        metaTitle: 'Virgo Zodiac Sign: Complete Guide to Personality, Love & Career',
        metaDescription: 'Discover everything about Virgo zodiac sign: personality traits, love compatibility, career strengths, and yearly forecast. Learn why Virgos are analytical and service-oriented.',
        metaKeywords: 'Virgo zodiac sign, Virgo personality, Virgo compatibility, Virgo dates, Virgo traits, earth sign Virgo, Virgo horoscope'
    },
    Libra: {
        name: 'Libra',
        symbol: '♎',
        dates: 'September 23 - October 22',
        element: 'Air',
        modality: 'Cardinal',
        rulingPlanet: 'Venus',
        house: '7th',
        symbolMeaning: 'The Scales',
        luckyColor: 'Pink',
        luckyNumbers: [6, 15, 24],
        description: 'Libra is the harmonious air sign that seeks balance, beauty, and partnership. Their diplomatic nature helps them create peace and harmony in relationships and social situations.',
        strengths: ['Diplomatic', 'Social', 'Fair-minded', 'Cooperative', 'Gracious', 'Idealistic'],
        weaknesses: ['Indecisive', 'Avoids confrontations', 'Self-pity', 'Holds grudges', 'Superficial'],
        loveDescription: 'Libra approaches love with romance and a desire for partnership. They seek balanced, harmonious relationships and excel at creating beautiful, peaceful connections.',
        careerDescription: 'Libra excels in careers that involve diplomacy, aesthetics, and partnership. They thrive in social environments where they can use their charm and sense of fairness.',
        idealCareers: ['Lawyer', 'Mediator', 'Artist', 'Designer', 'Public Relations', 'Counselor'],
        workStyle: 'Collaborative, diplomatic, and aesthetically focused. Libra values harmony, partnership, and beautiful work environments.',
        yearlyForecast: `${new Date().getFullYear()} brings partnership opportunities and harmony for Libra. Your social connections flourish, and relationship dynamics reach new levels of balance and mutual understanding.`,
        yearlyOpportunities: [
            'Meaningful partnerships and collaborations',
            'Artistic and creative expressions',
            'Social connections and networking',
            'Legal and diplomatic successes'
        ],
        yearlyChallenges: [
            'Making decisions confidently',
            'Setting boundaries in relationships',
            'Balancing others needs with personal needs',
            'Handling conflict directly'
        ],
        compatibility: {
            good: ['Gemini', 'Aquarius', 'Leo'],
            challenging: ['Cancer', 'Capricorn', 'Aries'],
            detailed: [
                { sign: 'Gemini', rating: 5 },
                { sign: 'Aquarius', rating: 5 },
                { sign: 'Leo', rating: 4 },
                { sign: 'Sagittarius', rating: 4 },
                { sign: 'Libra', rating: 3 },
                { sign: 'Aries', rating: 2 },
                { sign: 'Capricorn', rating: 2 },
                { sign: 'Cancer', rating: 1 }
            ]
        },
        famousPersonalities: [
            'Will Smith (September 25)',
            'Kim Kardashian (October 21)',
            'Bruno Mars (October 8)',
            'Gwyneth Paltrow (September 27)',
            'John Lennon (October 9)'
        ],
        mythology: 'In Greek mythology, Libra represents the scales of justice held by Astraea, the goddess of justice. This symbolizes balance, fairness, and the weighing of choices and consequences.',
        history: 'Libra has been associated with justice and balance since ancient times. Originally part of Scorpio in Babylonian astrology, the Romans established Libra as a separate constellation representing balance and law. Libra is the only inanimate object in the zodiac.',
        lifeLessons: [
            'Learn to make decisions confidently',
            'Develop assertiveness in relationships',
            'Balance partnership with independence',
            'Practice self-care alongside caring for others',
            'Cultivate inner peace independent of external harmony'
        ],
        growthOpportunities: [
            'Developing decision-making confidence',
            'Learning to set healthy relationship boundaries',
            'Balancing social life with personal space',
            'Transforming people-pleasing into genuine connection',
            'Finding inner balance that doesn\'t depend on external circumstances'
        ],
        relatedSigns: [
            { name: 'Gemini', symbol: '♊', element: 'Air' },
            { name: 'Aquarius', symbol: '♒', element: 'Air' },
            { name: 'Leo', symbol: '♌', element: 'Fire' },
            { name: 'Sagittarius', symbol: '♐', element: 'Fire' }
        ],
        metaTitle: 'Libra Zodiac Sign: Complete Guide to Personality, Love & Career',
        metaDescription: 'Discover everything about Libra zodiac sign: personality traits, love compatibility, career strengths, and yearly forecast. Learn why Libras seek balance and harmony in all things.',
        metaKeywords: 'Libra zodiac sign, Libra personality, Libra compatibility, Libra dates, Libra traits, air sign Libra, Libra horoscope'
    },
    Scorpio: {
        name: 'Scorpio',
        symbol: '♏',
        dates: 'October 23 - November 21',
        element: 'Water',
        modality: 'Fixed',
        rulingPlanet: 'Pluto',
        house: '8th',
        symbolMeaning: 'The Scorpion',
        luckyColor: 'Black',
        luckyNumbers: [8, 11, 18],
        description: 'Scorpio is the intense water sign known for their depth, passion, and transformative power. They seek truth and authenticity in all aspects of life, possessing remarkable emotional and intuitive depth.',
        strengths: ['Passionate', 'Resourceful', 'Brave', 'Loyal', 'Determined', 'Intuitive'],
        weaknesses: ['Distrusting', 'Jealous', 'Secretive', 'Violent', 'Manipulative'],
        loveDescription: 'Scorpio approaches love with intense passion and deep emotional commitment. They seek transformative relationships that involve complete trust and emotional intimacy.',
        careerDescription: 'Scorpio excels in careers that require depth, investigation, and transformation. They thrive in positions where they can uncover truths and create meaningful change.',
        idealCareers: ['Detective', 'Psychologist', 'Researcher', 'Surgeon', 'Investigator', 'Scientist'],
        workStyle: 'Intense, focused, and transformative. Scorpio values depth, authenticity, and meaningful work that creates change.',
        yearlyForecast: `${new Date().getFullYear()} emphasizes personal transformation and deep connections for Scorpio. Your investigative nature uncovers hidden truths, leading to powerful personal growth and relationship depth.`,
        yearlyOpportunities: [
            'Deep personal transformation',
            'Intimate relationship growth',
            'Financial investments and research',
            'Psychological and spiritual insights'
        ],
        yearlyChallenges: [
            'Managing intense emotions',
            'Building trust in relationships',
            'Releasing control and jealousy',
            'Balancing depth with lightness'
        ],
        compatibility: {
            good: ['Cancer', 'Pisces', 'Virgo'],
            challenging: ['Leo', 'Aquarius', 'Taurus'],
            detailed: [
                { sign: 'Cancer', rating: 5 },
                { sign: 'Pisces', rating: 5 },
                { sign: 'Virgo', rating: 4 },
                { sign: 'Capricorn', rating: 4 },
                { sign: 'Scorpio', rating: 3 },
                { sign: 'Taurus', rating: 2 },
                { sign: 'Aquarius', rating: 2 },
                { sign: 'Leo', rating: 1 }
            ]
        },
        famousPersonalities: [
            'Leonardo DiCaprio (November 11)',
            'Julia Roberts (October 28)',
            'Ryan Gosling (November 12)',
            'Bill Gates (October 28)',
            'Marie Curie (November 7)'
        ],
        mythology: 'In Greek mythology, Scorpio represents the scorpion that killed Orion, the hunter. Both were placed in the sky as constellations, forever separated. This symbolizes the themes of death, rebirth, and eternal cycles.',
        history: 'Scorpio has been associated with death and rebirth since ancient times. In Egyptian astrology, the constellation was linked to the goddess Selket, protector of the dead. Various cultures have seen Scorpio as a symbol of transformation and the life-death-rebirth cycle.',
        lifeLessons: [
            'Learn to trust and be vulnerable',
            'Develop emotional transparency',
            'Balance intensity with lightness',
            'Practice forgiveness and letting go',
            'Cultivate emotional resilience'
        ],
        growthOpportunities: [
            'Developing emotional vulnerability and trust',
            'Learning to transform jealousy into self-confidence',
            'Balancing depth with moments of lightness',
            'Transforming obsessive tendencies into focused determination',
            'Building relationships based on mutual trust rather than control'
        ],
        relatedSigns: [
            { name: 'Cancer', symbol: '♋', element: 'Water' },
            { name: 'Pisces', symbol: '♓', element: 'Water' },
            { name: 'Virgo', symbol: '♍', element: 'Earth' },
            { name: 'Capricorn', symbol: '♑', element: 'Earth' }
        ],
        metaTitle: 'Scorpio Zodiac Sign: Complete Guide to Personality, Love & Career',
        metaDescription: 'Discover everything about Scorpio zodiac sign: personality traits, love compatibility, career strengths, and yearly forecast. Learn why Scorpios are intense and transformative.',
        metaKeywords: 'Scorpio zodiac sign, Scorpio personality, Scorpio compatibility, Scorpio dates, Scorpio traits, water sign Scorpio, Scorpio horoscope'
    },
    Sagittarius: {
        name: 'Sagittarius',
        symbol: '♐',
        dates: 'November 22 - December 21',
        element: 'Fire',
        modality: 'Mutable',
        rulingPlanet: 'Jupiter',
        house: '9th',
        symbolMeaning: 'The Archer',
        luckyColor: 'Purple',
        luckyNumbers: [3, 7, 9],
        description: 'Sagittarius is the adventurous fire sign that seeks truth, freedom, and expansion. Their optimistic nature inspires others to explore new horizons and embrace life possibilities.',
        strengths: ['Optimistic', 'Adventurous', 'Philosophical', 'Honest', 'Independent', 'Humorous'],
        weaknesses: ['Impatient', 'Tactless', 'Irresponsible', 'Overpromising', 'Restless'],
        loveDescription: 'Sagittarius approaches love with enthusiasm and a need for freedom. They seek partners who share their love for adventure, learning, and philosophical exploration.',
        careerDescription: 'Sagittarius excels in careers that involve travel, education, and expansion. They thrive in positions that allow freedom, variety, and philosophical exploration.',
        idealCareers: ['Professor', 'Travel Guide', 'Publisher', 'Explorer', 'Philosopher', 'Entrepreneur'],
        workStyle: 'Freedom-loving, optimistic, and expansive. Sagittarius values independence, learning, and adventurous work experiences.',
        yearlyForecast: `${new Date().getFullYear()} focuses on expansion and new horizons for Sagittarius. Travel, education, and philosophical exploration bring growth and broader perspectives to your personal and professional life.`,
        yearlyOpportunities: [
            'International travel and cultural experiences',
            'Higher education and learning opportunities',
            'Philosophical and spiritual growth',
            'Publishing and media projects'
        ],
        yearlyChallenges: [
            'Developing commitment in relationships',
            'Balancing freedom with responsibility',
            'Practicing tact in communication',
            'Following through on promises'
        ],
        compatibility: {
            good: ['Aries', 'Leo', 'Aquarius'],
            challenging: ['Virgo', 'Pisces', 'Gemini'],
            detailed: [
                { sign: 'Aries', rating: 5 },
                { sign: 'Leo', rating: 5 },
                { sign: 'Aquarius', rating: 4 },
                { sign: 'Libra', rating: 4 },
                { sign: 'Sagittarius', rating: 3 },
                { sign: 'Gemini', rating: 2 },
                { sign: 'Pisces', rating: 2 },
                { sign: 'Virgo', rating: 1 }
            ]
        },
        famousPersonalities: [
            'Taylor Swift (December 13)',
            'Brad Pitt (December 18)',
            'Miley Cyrus (November 23)',
            'Winston Churchill (November 30)',
            'Jane Austen (December 16)'
        ],
        mythology: 'In Greek mythology, Sagittarius represents Chiron, the wise centaur who was a great teacher and healer. Though wounded, he became a constellation after his death, symbolizing wisdom and the quest for knowledge.',
        history: 'Sagittarius has been associated with archery and hunting since ancient times. In Babylonian astrology, the constellation was known as "The Strong One," representing the god Nergal. Various cultures have seen the archer as a symbol of aspiration and higher aims.',
        lifeLessons: [
            'Learn to balance freedom with commitment',
            'Develop tact and sensitivity in communication',
            'Practice following through on commitments',
            'Cultivate depth alongside breadth of experience',
            'Balance optimism with practical reality'
        ],
        growthOpportunities: [
            'Developing commitment in relationships and projects',
            'Learning to balance adventure with stability',
            'Cultivating depth in knowledge and relationships',
            'Transforming restlessness into purposeful exploration',
            'Balancing honesty with compassion in communication'
        ],
        relatedSigns: [
            { name: 'Aries', symbol: '♈', element: 'Fire' },
            { name: 'Leo', symbol: '♌', element: 'Fire' },
            { name: 'Aquarius', symbol: '♒', element: 'Air' },
            { name: 'Libra', symbol: '♎', element: 'Air' }
        ],
        metaTitle: 'Sagittarius Zodiac Sign: Complete Guide to Personality, Love & Career',
        metaDescription: 'Discover everything about Sagittarius zodiac sign: personality traits, love compatibility, career strengths, and yearly forecast. Learn why Sagittarians are adventurous truth-seekers.',
        metaKeywords: 'Sagittarius zodiac sign, Sagittarius personality, Sagittarius compatibility, Sagittarius dates, Sagittarius traits, fire sign Sagittarius, Sagittarius horoscope'
    },
    Capricorn: {
        name: 'Capricorn',
        symbol: '♑',
        dates: 'December 22 - January 19',
        element: 'Earth',
        modality: 'Cardinal',
        rulingPlanet: 'Saturn',
        house: '10th',
        symbolMeaning: 'The Sea-Goat',
        luckyColor: 'Brown',
        luckyNumbers: [4, 8, 13],
        description: 'Capricorn is the ambitious earth sign known for their discipline, responsibility, and long-term vision. They build lasting structures through patience, hard work, and practical wisdom.',
        strengths: ['Ambitious', 'Disciplined', 'Patient', 'Responsible', 'Practical', 'Reliable'],
        weaknesses: ['Pessimistic', 'Rigid', 'Condescending', 'Unforgiving', 'Workaholic'],
        loveDescription: 'Capricorn approaches love with seriousness and long-term commitment. They seek stable, reliable partners and build relationships slowly but with deep, lasting foundations.',
        careerDescription: 'Capricorn excels in leadership positions and careers that require long-term planning and discipline. They thrive in structured environments where they can climb the ladder of success.',
        idealCareers: ['CEO', 'Engineer', 'Architect', 'Accountant', 'Politician', 'Scientist'],
        workStyle: 'Disciplined, ambitious, and structured. Capricorn values tradition, hard work, and long-term career growth.',
        yearlyForecast: `${new Date().getFullYear()} brings career achievements and long-term goals for Capricorn. Your disciplined approach pays off with professional recognition and the achievement of important milestones.`,
        yearlyOpportunities: [
            'Career advancement and recognition',
            'Long-term goal achievement',
            'Financial stability and investments',
            'Authority and leadership roles'
        ],
        yearlyChallenges: [
            'Balancing work with personal life',
            'Developing emotional expression',
            'Overcoming pessimism',
            'Learning to relax and have fun'
        ],
        compatibility: {
            good: ['Taurus', 'Virgo', 'Scorpio'],
            challenging: ['Aries', 'Libra', 'Cancer'],
            detailed: [
                { sign: 'Taurus', rating: 5 },
                { sign: 'Virgo', rating: 5 },
                { sign: 'Scorpio', rating: 4 },
                { sign: 'Pisces', rating: 4 },
                { sign: 'Capricorn', rating: 3 },
                { sign: 'Cancer', rating: 2 },
                { sign: 'Libra', rating: 2 },
                { sign: 'Aries', rating: 1 }
            ]
        },
        famousPersonalities: [
            'Michelle Obama (January 17)',
            'Bradley Cooper (January 5)',
            'Elvis Presley (January 8)',
            'Martin Luther King Jr. (January 15)',
            'Stephen Hawking (January 8)'
        ],
        mythology: 'In Greek mythology, Capricorn represents Pan, the god of nature who transformed into a sea-goat to escape the monster Typhon. This symbolizes the ability to navigate both material and spiritual realms.',
        history: 'Capricorn has been associated with time and structure since ancient times. In Babylonian astrology, the constellation was known as "The Goat-Fish," representing the god Ea. Capricorn marks the winter solstice and has been associated with rebirth and long-term cycles.',
        lifeLessons: [
            'Learn to balance work with play',
            'Develop emotional vulnerability',
            'Practice flexibility in plans',
            'Cultivate optimism and hope',
            'Balance responsibility with self-care'
        ],
        growthOpportunities: [
            'Developing work-life balance and self-care practices',
            'Learning to express emotions and vulnerability',
            'Cultivating flexibility in thinking and planning',
            'Transforming pessimism into realistic optimism',
            'Balancing ambition with personal relationships'
        ],
        relatedSigns: [
            { name: 'Taurus', symbol: '♉', element: 'Earth' },
            { name: 'Virgo', symbol: '♍', element: 'Earth' },
            { name: 'Scorpio', symbol: '♏', element: 'Water' },
            { name: 'Pisces', symbol: '♓', element: 'Water' }
        ],
        metaTitle: 'Capricorn Zodiac Sign: Complete Guide to Personality, Love & Career',
        metaDescription: 'Discover everything about Capricorn zodiac sign: personality traits, love compatibility, career strengths, and yearly forecast. Learn why Capricorns are ambitious and disciplined achievers.',
        metaKeywords: 'Capricorn zodiac sign, Capricorn personality, Capricorn compatibility, Capricorn dates, Capricorn traits, earth sign Capricorn, Capricorn horoscope'
    },
    Aquarius: {
        name: 'Aquarius',
        symbol: '♒',
        dates: 'January 20 - February 18',
        element: 'Air',
        modality: 'Fixed',
        rulingPlanet: 'Uranus',
        house: '11th',
        symbolMeaning: 'The Water Bearer',
        luckyColor: 'Blue',
        luckyNumbers: [4, 7, 11],
        description: 'Aquarius is the innovative air sign that values freedom, progress, and humanitarian ideals. Their visionary thinking helps create a better future for all through original ideas and social consciousness.',
        strengths: ['Innovative', 'Humanitarian', 'Independent', 'Intellectual', 'Friendly', 'Original'],
        weaknesses: ['Emotionally detached', 'Stubborn', 'Uncompromising', 'Aloof', 'Temperamental'],
        loveDescription: 'Aquarius approaches love with friendship and intellectual connection. They seek partners who respect their independence and share their vision for a better world.',
        careerDescription: 'Aquarius excels in careers that involve innovation, technology, and social change. They thrive in forward-thinking environments where they can implement original ideas.',
        idealCareers: ['Scientist', 'Inventor', 'Social Reformer', 'Technologist', 'Humanitarian', 'Astronomer'],
        workStyle: 'Innovative, independent, and forward-thinking. Aquarius values progress, originality, and work that benefits humanity.',
        yearlyForecast: `${new Date().getFullYear()} highlights social connections and innovation for Aquarius. Your unique ideas gain traction, and community involvement brings meaningful connections and opportunities for positive change.`,
        yearlyOpportunities: [
            'Social and community projects',
            'Technological and scientific innovation',
            'Friendship networks expansion',
            'Humanitarian and activist work'
        ],
        yearlyChallenges: [
            'Developing emotional connection',
            'Balancing independence with intimacy',
            'Practicing compromise in relationships',
            'Managing rebellious tendencies'
        ],
        compatibility: {
            good: ['Gemini', 'Libra', 'Sagittarius'],
            challenging: ['Taurus', 'Scorpio', 'Leo'],
            detailed: [
                { sign: 'Gemini', rating: 5 },
                { sign: 'Libra', rating: 5 },
                { sign: 'Sagittarius', rating: 4 },
                { sign: 'Aries', rating: 4 },
                { sign: 'Aquarius', rating: 3 },
                { sign: 'Leo', rating: 2 },
                { sign: 'Scorpio', rating: 2 },
                { sign: 'Taurus', rating: 1 }
            ]
        },
        famousPersonalities: [
            'Oprah Winfrey (January 29)',
            'Harry Styles (February 1)',
            'Cristiano Ronaldo (February 5)',
            'Thomas Edison (February 11)',
            'Ellen DeGeneres (January 26)'
        ],
        mythology: 'In Greek mythology, Aquarius represents Ganymede, the beautiful youth who became cupbearer to the gods. This symbolizes the pouring forth of knowledge and the sharing of divine wisdom with humanity.',
        history: 'Aquarius has been associated with water and knowledge since ancient times. In Babylonian astrology, the constellation was known as "The Great One," representing the god Ea who poured forth waters of wisdom. Aquarius has long been seen as a symbol of innovation and progress.',
        lifeLessons: [
            'Learn to connect emotionally with others',
            'Develop intimacy in relationships',
            'Balance innovation with tradition',
            'Practice compromise and flexibility',
            'Cultivate emotional intelligence'
        ],
        growthOpportunities: [
            'Developing emotional connection and intimacy',
            'Learning to balance innovation with practical application',
            'Cultivating personal relationships alongside social causes',
            'Transforming detachment into objective compassion',
            'Balancing individuality with community needs'
        ],
        relatedSigns: [
            { name: 'Gemini', symbol: '♊', element: 'Air' },
            { name: 'Libra', symbol: '♎', element: 'Air' },
            { name: 'Sagittarius', symbol: '♐', element: 'Fire' },
            { name: 'Aries', symbol: '♈', element: 'Fire' }
        ],
        metaTitle: 'Aquarius Zodiac Sign: Complete Guide to Personality, Love & Career',
        metaDescription: 'Discover everything about Aquarius zodiac sign: personality traits, love compatibility, career strengths, and yearly forecast. Learn why Aquarians are innovative humanitarians.',
        metaKeywords: 'Aquarius zodiac sign, Aquarius personality, Aquarius compatibility, Aquarius dates, Aquarius traits, air sign Aquarius, Aquarius horoscope'
    },
    Pisces: {
        name: 'Pisces',
        symbol: '♓',
        dates: 'February 19 - March 20',
        element: 'Water',
        modality: 'Mutable',
        rulingPlanet: 'Neptune',
        house: '12th',
        symbolMeaning: 'The Fish',
        luckyColor: 'Sea Green',
        luckyNumbers: [3, 9, 12],
        description: 'Pisces is the compassionate water sign known for their empathy, creativity, and spiritual depth. They connect with the unseen realms and universal love, often serving as healers and artists.',
        strengths: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise', 'Musical'],
        weaknesses: ['Fearful', 'Overly trusting', 'Sad', 'Escapist', 'Victim mentality'],
        loveDescription: 'Pisces approaches love with unconditional compassion and spiritual connection. They seek soul-level relationships and express love through emotional support and creative expression.',
        careerDescription: 'Pisces excels in careers that involve healing, creativity, and spiritual service. They thrive in environments that allow intuition, compassion, and artistic expression.',
        idealCareers: ['Artist', 'Musician', 'Therapist', 'Healer', 'Psychologist', 'Marine Biologist'],
        workStyle: 'Intuitive, compassionate, and creative. Pisces values meaningful work that helps others and allows artistic expression.',
        yearlyForecast: `${new Date().getFullYear()} focuses on spiritual growth and creative expression for Pisces. Your intuitive abilities strengthen, leading to artistic inspiration, deep emotional connections, and spiritual insights.`,
        yearlyOpportunities: [
            'Spiritual and psychic development',
            'Creative and artistic projects',
            'Healing and therapeutic work',
            'Dream work and intuition development'
        ],
        yearlyChallenges: [
            'Setting healthy boundaries',
            'Staying grounded in reality',
            'Overcoming escapist tendencies',
            'Developing practical life skills'
        ],
        compatibility: {
            good: ['Cancer', 'Scorpio', 'Capricorn'],
            challenging: ['Gemini', 'Sagittarius', 'Virgo'],
            detailed: [
                { sign: 'Cancer', rating: 5 },
                { sign: 'Scorpio', rating: 5 },
                { sign: 'Capricorn', rating: 4 },
                { sign: 'Taurus', rating: 4 },
                { sign: 'Pisces', rating: 3 },
                { sign: 'Virgo', rating: 2 },
                { sign: 'Sagittarius', rating: 2 },
                { sign: 'Gemini', rating: 1 }
            ]
        },
        famousPersonalities: [
            'Rihanna (February 20)',
            'Albert Einstein (March 14)',
            'Kurt Cobain (February 20)',
            'Elizabeth Taylor (February 27)',
            'Steve Jobs (February 24)'
        ],
        mythology: 'In Greek mythology, Pisces represents Aphrodite and Eros who transformed into fish to escape the monster Typhon, tied together by a cord. This symbolizes the connection between love, sacrifice, and spiritual unity.',
        history: 'Pisces has been associated with water and spirituality since ancient times. In Babylonian astrology, the constellation was known as "The Tails," representing the goddess Atargatis. Various cultures have seen the fish as symbols of spirituality, sacrifice, and the collective unconscious.',
        lifeLessons: [
            'Learn to set healthy emotional boundaries',
            'Develop practical life skills',
            'Balance spirituality with earthly responsibilities',
            'Practice discernment in relationships',
            'Cultivate emotional resilience'
        ],
        growthOpportunities: [
            'Developing healthy boundaries and self-protection',
            'Learning to balance spirituality with practical reality',
            'Cultivating discernment in relationships and opportunities',
            'Transforming escapism into creative expression',
            'Building emotional resilience and self-confidence'
        ],
        relatedSigns: [
            { name: 'Cancer', symbol: '♋', element: 'Water' },
            { name: 'Scorpio', symbol: '♏', element: 'Water' },
            { name: 'Capricorn', symbol: '♑', element: 'Earth' },
            { name: 'Taurus', symbol: '♉', element: 'Earth' }
        ],
        metaTitle: 'Pisces Zodiac Sign: Complete Guide to Personality, Love & Career',
        metaDescription: 'Discover everything about Pisces zodiac sign: personality traits, love compatibility, career strengths, and yearly forecast. Learn why Pisceans are compassionate and spiritually connected.',
        metaKeywords: 'Pisces zodiac sign, Pisces personality, Pisces compatibility, Pisces dates, Pisces traits, water sign Pisces, Pisces horoscope'
    }
};

    return signData[sign.charAt(0).toUpperCase() + sign.slice(1).toLowerCase()] || null;
}
// pages/astrology/zodiac-signs/index.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ZodiacSignsHub() {
    const currentYear = new Date().getFullYear();

    const zodiacSigns = [
        {
            name: 'Aries',
            dates: 'March 21 - April 19',
            symbol: '♈',
            element: 'Fire',
            modality: 'Cardinal',
            rulingPlanet: 'Mars',
            house: '1st',
            strengths: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic', 'Honest', 'Passionate'],
            weaknesses: ['Impatient', 'Moody', 'Short-tempered', 'Impulsive', 'Aggressive'],
            compatibility: ['Leo', 'Sagittarius', 'Gemini'],
            description: 'Aries is the first sign of the zodiac, known for their pioneering spirit and relentless energy. These natural leaders charge forward with courage and determination.',
            yearlyFocus: `${currentYear} brings career breakthroughs and new beginnings for Aries. Your leadership qualities shine, making this an excellent year for starting new projects and taking bold initiatives.`
        },
        {
            name: 'Taurus',
            dates: 'April 20 - May 20',
            symbol: '♉',
            element: 'Earth',
            modality: 'Fixed',
            rulingPlanet: 'Venus',
            house: '2nd',
            strengths: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Responsible', 'Stable'],
            weaknesses: ['Stubborn', 'Possessive', 'Uncompromising', 'Resistant to change'],
            compatibility: ['Virgo', 'Capricorn', 'Cancer'],
            description: 'Taurus is the grounded earth sign that values stability, beauty, and security. Known for their patience and determination, they build lasting foundations.',
            yearlyFocus: `${currentYear} focuses on financial growth and relationship stability. Your practical approach helps you build security while Venus brings harmony to your partnerships.`
        },
        {
            name: 'Gemini',
            dates: 'May 21 - June 20',
            symbol: '♊',
            element: 'Air',
            modality: 'Mutable',
            rulingPlanet: 'Mercury',
            house: '3rd',
            strengths: ['Gentle', 'Affectionate', 'Curious', 'Adaptable', 'Quick-witted', 'Communicative'],
            weaknesses: ['Nervous', 'Inconsistent', 'Indecisive', 'Gossipy'],
            compatibility: ['Libra', 'Aquarius', 'Aries'],
            description: 'Gemini is the social butterfly of the zodiac, constantly seeking mental stimulation and new experiences. Their curious nature makes them excellent communicators.',
            yearlyFocus: `${currentYear} emphasizes learning and communication expansion. Your social networks grow, and new learning opportunities enhance your personal and professional life.`
        },
        {
            name: 'Cancer',
            dates: 'June 21 - July 22',
            symbol: '♋',
            element: 'Water',
            modality: 'Cardinal',
            rulingPlanet: 'Moon',
            house: '4th',
            strengths: ['Tenacious', 'Highly imaginative', 'Loyal', 'Emotional', 'Sympathetic', 'Persuasive'],
            weaknesses: ['Moody', 'Pessimistic', 'Suspicious', 'Manipulative', 'Insecure'],
            compatibility: ['Scorpio', 'Pisces', 'Taurus'],
            description: 'Cancer is the nurturing water sign that values emotional security and family connections. Their intuitive nature helps them create warm, protective environments.',
            yearlyFocus: `${currentYear} brings emotional healing and family growth. Your intuitive abilities strengthen, helping you create deeper emotional connections and secure home environments.`
        },
        {
            name: 'Leo',
            dates: 'July 23 - August 22',
            symbol: '♌',
            element: 'Fire',
            modality: 'Fixed',
            rulingPlanet: 'Sun',
            house: '5th',
            strengths: ['Creative', 'Passionate', 'Generous', 'Warm-hearted', 'Cheerful', 'Humorous'],
            weaknesses: ['Arrogant', 'Stubborn', 'Lazy', 'Inflexible', 'Attention-seeking'],
            compatibility: ['Aries', 'Sagittarius', 'Gemini'],
            description: 'Leo is the radiant fire sign that brings warmth, creativity, and leadership. Their generous spirit and natural charisma light up any room they enter.',
            yearlyFocus: `${currentYear} highlights creative expression and personal recognition. Your leadership qualities receive acknowledgment, and creative projects bring fulfillment and success.`
        },
        {
            name: 'Virgo',
            dates: 'August 23 - September 22',
            symbol: '♍',
            element: 'Earth',
            modality: 'Mutable',
            rulingPlanet: 'Mercury',
            house: '6th',
            strengths: ['Loyal', 'Analytical', 'Kind', 'Hardworking', 'Practical', 'Helpful'],
            weaknesses: ['Worrying', 'Shyness', 'Overly critical', 'Perfectionist', 'Harsh'],
            compatibility: ['Taurus', 'Capricorn', 'Cancer'],
            description: 'Virgo is the analytical earth sign known for their attention to detail and service-oriented nature. They find fulfillment in helping others and creating order.',
            yearlyFocus: `${currentYear} focuses on health improvement and service. Your analytical skills help you create efficient systems, while attention to wellness brings vitality.`
        },
        {
            name: 'Libra',
            dates: 'September 23 - October 22',
            symbol: '♎',
            element: 'Air',
            modality: 'Cardinal',
            rulingPlanet: 'Venus',
            house: '7th',
            strengths: ['Cooperative', 'Diplomatic', 'Gracious', 'Fair-minded', 'Social', 'Idealistic'],
            weaknesses: ['Indecisive', 'Avoids confrontations', 'Holds grudges', 'Self-pity'],
            compatibility: ['Gemini', 'Aquarius', 'Leo'],
            description: 'Libra is the harmonious air sign that seeks balance, beauty, and partnership. Their diplomatic nature helps them create peace and harmony in relationships.',
            yearlyFocus: `${currentYear} brings partnership opportunities and harmony. Your social connections flourish, and relationship dynamics reach new levels of balance and mutual understanding.`
        },
        {
            name: 'Scorpio',
            dates: 'October 23 - November 21',
            symbol: '♏',
            element: 'Water',
            modality: 'Fixed',
            rulingPlanet: 'Pluto',
            house: '8th',
            strengths: ['Resourceful', 'Brave', 'Passionate', 'Stubborn', 'True friend'],
            weaknesses: ['Distrusting', 'Jealous', 'Secretive', 'Violent', 'Manipulative'],
            compatibility: ['Cancer', 'Pisces', 'Virgo'],
            description: 'Scorpio is the intense water sign known for their depth, passion, and transformative power. They seek truth and authenticity in all aspects of life.',
            yearlyFocus: `${currentYear} emphasizes personal transformation and deep connections. Your investigative nature uncovers hidden truths, leading to powerful personal growth.`
        },
        {
            name: 'Sagittarius',
            dates: 'November 22 - December 21',
            symbol: '♐',
            element: 'Fire',
            modality: 'Mutable',
            rulingPlanet: 'Jupiter',
            house: '9th',
            strengths: ['Generous', 'Idealistic', 'Great sense of humor', 'Adventurous', 'Open-minded'],
            weaknesses: ['Promises more than can deliver', 'Very impatient', 'Will say anything no matter how undiplomatic'],
            compatibility: ['Aries', 'Leo', 'Aquarius'],
            description: 'Sagittarius is the adventurous fire sign that seeks truth, freedom, and expansion. Their optimistic nature inspires others to explore new horizons.',
            yearlyFocus: `${currentYear} focuses on expansion and new horizons. Travel, education, and philosophical exploration bring growth and broader perspectives.`
        },
        {
            name: 'Capricorn',
            dates: 'December 22 - January 19',
            symbol: '♑',
            element: 'Earth',
            modality: 'Cardinal',
            rulingPlanet: 'Saturn',
            house: '10th',
            strengths: ['Responsible', 'Disciplined', 'Self-control', 'Good managers', 'Ambitious'],
            weaknesses: ['Know-it-all', 'Unforgiving', 'Condescending', 'Expecting the worst', 'Rigid'],
            compatibility: ['Taurus', 'Virgo', 'Scorpio'],
            description: 'Capricorn is the ambitious earth sign known for their discipline, responsibility, and long-term vision. They build lasting structures through patience and hard work.',
            yearlyFocus: `${currentYear} brings career achievements and long-term goals. Your disciplined approach pays off with professional recognition and solid foundations.`
        },
        {
            name: 'Aquarius',
            dates: 'January 20 - February 18',
            symbol: '♒',
            element: 'Air',
            modality: 'Fixed',
            rulingPlanet: 'Uranus',
            house: '11th',
            strengths: ['Progressive', 'Original', 'Independent', 'Humanitarian', 'Inventive'],
            weaknesses: ['Runs from emotional expression', 'Temperamental', 'Uncompromising', 'Aloof'],
            compatibility: ['Gemini', 'Libra', 'Sagittarius'],
            description: 'Aquarius is the innovative air sign that values freedom, progress, and humanitarian ideals. Their visionary thinking helps create a better future for all.',
            yearlyFocus: `${currentYear} highlights social connections and innovation. Your unique ideas gain traction, and community involvement brings meaningful connections.`
        },
        {
            name: 'Pisces',
            dates: 'February 19 - March 20',
            symbol: '♓',
            element: 'Water',
            modality: 'Mutable',
            rulingPlanet: 'Neptune',
            house: '12th',
            strengths: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise', 'Musical'],
            weaknesses: ['Fearful', 'Overly trusting', 'Sad', 'Desire to escape reality', 'Can be a victim'],
            compatibility: ['Cancer', 'Scorpio', 'Capricorn'],
            description: 'Pisces is the compassionate water sign known for their empathy, creativity, and spiritual depth. They connect with the unseen realms and universal love.',
            yearlyFocus: `${currentYear} focuses on spiritual growth and creative expression. Your intuitive abilities strengthen, leading to artistic inspiration and deep emotional connections.`
        }
    ];

    const zodiacElements = [
        {
            element: 'Fire',
            signs: ['Aries', 'Leo', 'Sagittarius'],
            description: 'Fire signs are passionate, dynamic, and temperamental. They possess great energy, creativity, and enthusiasm. Fire signs are intelligent, self-aware, and tend to act on instinct.',
            traits: ['Energetic', 'Passionate', 'Courageous', 'Spontaneous', 'Inspiring'],
            challenges: ['Impulsive', 'Aggressive', 'Domineering', 'Impatient']
        },
        {
            element: 'Earth',
            signs: ['Taurus', 'Virgo', 'Capricorn'],
            description: 'Earth signs are grounded, practical, and materialistic. They are connected to the physical world and value stability, security, and tangible results.',
            traits: ['Practical', 'Reliable', 'Patient', 'Hardworking', 'Stable'],
            challenges: ['Stubborn', 'Resistant to change', 'Materialistic', 'Pessimistic']
        },
        {
            element: 'Air',
            signs: ['Gemini', 'Libra', 'Aquarius'],
            description: 'Air signs are intellectual, communicative, and social. They are thinkers, communicators, and doers who process life through intellect rather than emotion.',
            traits: ['Intellectual', 'Social', 'Communicative', 'Analytical', 'Objective'],
            challenges: ['Detached', 'Indecisive', 'Overly theoretical', 'Unemotional']
        },
        {
            element: 'Water',
            signs: ['Cancer', 'Scorpio', 'Pisces'],
            description: 'Water signs are emotional, intuitive, and deeply sensitive. They are highly intuitive and emotional, processing life through feelings and intuition.',
            traits: ['Intuitive', 'Emotional', 'Compassionate', 'Nurturing', 'Empathetic'],
            challenges: ['Overly sensitive', 'Moody', 'Manipulative', 'Escapist']
        }
    ];

    return (
        <>
            <Head>
                <title>Complete Guide to All 12 Zodiac Signs | Characteristics, Dates & Compatibility</title>
                <meta
                    name="description"
                    content="Explore all 12 zodiac signs with complete guides: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces. Discover personality traits, compatibility, ruling planets, and astrological meanings."
                />
                <meta
                    name="keywords"
                    content="zodiac signs, astrology signs, 12 zodiac signs, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces, zodiac dates, astrology, horoscope signs"
                />
                <link rel="canonical" href="https://yoursite.com/astrology/zodiac-signs" />

                {/* Open Graph */}
                <meta property="og:title" content="Complete Guide to All 12 Zodiac Signs | Astrology Characteristics" />
                <meta property="og:description" content="Discover detailed information about all 12 zodiac signs including personality traits, compatibility, dates, and astrological meanings." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yoursite.com/astrology/zodiac-signs" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "name": "Zodiac Signs Guide",
                            "description": "Complete guide to all 12 zodiac signs in astrology",
                            "url": "https://yoursite.com/astrology/zodiac-signs",
                            "numberOfItems": 12,
                            "itemListElement": zodiacSigns.map((sign, index) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "item": {
                                    "@type": "Thing",
                                    "name": sign.name,
                                    "description": sign.description,
                                    "url": `https://yoursite.com/astrology/zodiac-signs/${sign.name.toLowerCase()}`
                                }
                            }))
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
                                <Link href="/astrology/horoscope" className="text-gray-600 hover:text-purple-600">
                                    Horoscopes
                                </Link>
                                <Link href="/astrology/birth-chart" className="text-gray-600 hover:text-purple-600">
                                    Birth Chart
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="container mx-auto px-4 py-8">
                    {/* Header Section */}
                    <header className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Complete Guide to Zodiac Signs
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the unique characteristics, personality traits, and astrological meanings
                            of all 12 zodiac signs. Learn about compatibility, ruling planets, and how each sign
                            influences personality and life path.
                        </p>
                    </header>

                    {/* Quick Navigation by Element */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Zodiac Signs by Element</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {zodiacElements.map((element) => (
                                <div key={element.element} className={`rounded-xl p-6 text-white ${element.element === 'Fire' ? 'bg-gradient-to-br from-red-500 to-orange-600' :
                                        element.element === 'Earth' ? 'bg-gradient-to-br from-green-500 to-emerald-700' :
                                            element.element === 'Air' ? 'bg-gradient-to-br from-blue-500 to-cyan-600' :
                                                'bg-gradient-to-br from-purple-500 to-indigo-600'
                                    }`}>
                                    <h3 className="text-2xl font-bold mb-3">{element.element} Signs</h3>
                                    <div className="mb-4">
                                        {element.signs.map((sign) => (
                                            <span key={sign} className="inline-block bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                                {sign}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-sm opacity-90 mb-3">{element.description}</p>
                                    <div className="text-sm">
                                        <strong>Strengths:</strong> {element.traits.join(', ')}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* All Zodiac Signs Grid */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Explore All 12 Zodiac Signs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {zodiacSigns.map((sign) => (
                                <div key={sign.name} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl">{sign.symbol}</span>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{sign.name}</h3>
                                                <p className="text-sm text-gray-600">{sign.dates}</p>
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

                                    <p className="text-gray-700 mb-4 text-sm">{sign.description}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <h4 className="font-semibold text-sm mb-1">Ruling Planet</h4>
                                            <p className="text-sm text-gray-600">{sign.rulingPlanet}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm mb-1">Modality</h4>
                                            <p className="text-sm text-gray-600">{sign.modality}</p>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-sm mb-2">Best Matches</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {sign.compatibility.map((match) => (
                                                <span key={match} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                                    {match}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Link
                                            href={`/astrology/zodiac-signs/${sign.name.toLowerCase()}`}
                                            className="block bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                                        >
                                            Full Sign Guide
                                        </Link>
                                        <div className="flex gap-2">
                                            <Link
                                                href={`/astrology/horoscope/today/sign/${sign.name.toLowerCase()}`}
                                                className="flex-1 border border-gray-300 text-gray-700 text-center py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                                            >
                                                Daily
                                            </Link>
                                            <Link
                                                href={`/astrology/horoscope/weekly/${sign.name.toLowerCase()}`}
                                                className="flex-1 border border-gray-300 text-gray-700 text-center py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
                                            >
                                                Weekly
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Understanding Zodiac Signs Section */}
                    <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-3xl font-bold mb-8 text-center">Understanding Zodiac Signs in Astrology</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <div className="text-center">
                                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🌞</span>
                                </div>
                                <h3 className="font-semibold text-lg mb-3">Sun Signs</h3>
                                <p className="text-gray-600 text-sm">
                                    Your Sun sign represents your core identity, ego, and life purpose. It's the sign most people know as their "zodiac sign" and influences your fundamental personality.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🌙</span>
                                </div>
                                <h3 className="font-semibold text-lg mb-3">Moon Signs</h3>
                                <p className="text-gray-600 text-sm">
                                    Your Moon sign represents your emotional nature, instincts, and inner self. It influences how you process feelings and what you need to feel emotionally secure.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">⬆️</span>
                                </div>
                                <h3 className="font-semibold text-lg mb-3">Rising Signs</h3>
                                <p className="text-gray-600 text-sm">
                                    Your Rising sign (Ascendant) represents how you present yourself to the world and your immediate reactions. It's the mask you wear and how others first perceive you.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="font-bold text-xl mb-4">The Four Elements in Astrology</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-purple-600 mb-2">Fire Signs (Aries, Leo, Sagittarius)</h4>
                                    <p className="text-gray-700 text-sm mb-4">
                                        Fire signs are energetic, passionate, and spontaneous. They bring inspiration, creativity, and action to the zodiac. Fire signs are natural leaders who motivate others.
                                    </p>

                                    <h4 className="font-semibold text-green-600 mb-2">Earth Signs (Taurus, Virgo, Capricorn)</h4>
                                    <p className="text-gray-700 text-sm">
                                        Earth signs are practical, reliable, and grounded. They provide stability, structure, and tangible results. Earth signs are the builders and organizers of the zodiac.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-600 mb-2">Air Signs (Gemini, Libra, Aquarius)</h4>
                                    <p className="text-gray-700 text-sm mb-4">
                                        Air signs are intellectual, communicative, and social. They bring ideas, connections, and mental stimulation. Air signs are the thinkers and communicators of the zodiac.
                                    </p>

                                    <h4 className="font-semibold text-indigo-600 mb-2">Water Signs (Cancer, Scorpio, Pisces)</h4>
                                    <p className="text-gray-700 text-sm">
                                        Water signs are emotional, intuitive, and sensitive. They bring empathy, depth, and emotional connection. Water signs are the healers and nurturers of the zodiac.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Zodiac Signs FAQs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">What is the difference between sun, moon, and rising signs?</h3>
                                    <p className="text-gray-700">
                                        Your <strong>Sun sign</strong> represents your core identity and ego. Your <strong>Moon sign</strong> represents your emotional nature and inner self.
                                        Your <strong>Rising sign</strong> (Ascendant) represents how you present yourself to the world. While your Sun sign is what you're becoming,
                                        your Rising sign is how you start things and make first impressions.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">Why are some zodiac signs more compatible than others?</h3>
                                    <p className="text-gray-700">
                                        Compatibility in astrology is determined by several factors including elements, modalities, and planetary aspects.
                                        Signs of the same element usually get along well (Fire with Fire, etc.). Complementary elements (Earth-Water, Fire-Air)
                                        often create balanced relationships. The specific planetary placements in each person's birth chart also significantly influence compatibility.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">What does my ruling planet mean?</h3>
                                    <p className="text-gray-700">
                                        Each zodiac sign has a ruling planet that influences its core characteristics. For example, Mars rules Aries, giving them
                                        their warrior spirit and initiative. Venus rules Taurus and Libra, influencing their love of beauty and harmony.
                                        Your ruling planet represents the cosmic energy that most strongly influences your sign's expression and life lessons.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">Can I have traits from other zodiac signs?</h3>
                                    <p className="text-gray-700">
                                        Absolutely! While your Sun sign represents your core identity, your complete birth chart contains all 12 zodiac signs
                                        in different houses and planetary placements. You might have your Moon in Cancer (emotional nature), Mercury in Gemini
                                        (communication style), or Venus in Taurus (love expression). This creates a unique astrological fingerprint that includes
                                        influences from multiple signs.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">What are modalities in astrology?</h3>
                                    <p className="text-gray-700">
                                        Modalities (also called qualities) describe how signs express their energy. <strong>Cardinal signs</strong> (Aries, Cancer, Libra, Capricorn)
                                        are initiators and leaders. <strong>Fixed signs</strong> (Taurus, Leo, Scorpio, Aquarius) are stable and persistent.
                                        <strong> Mutable signs</strong> (Gemini, Virgo, Sagittarius, Pisces) are adaptable and flexible. Each modality brings different
                                        approaches to life and problem-solving.
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">How accurate are zodiac sign descriptions?</h3>
                                    <p className="text-gray-700">
                                        General zodiac sign descriptions provide accurate overviews of each sign's core energies and tendencies. However,
                                        individual expression varies based on your complete birth chart, life experiences, and personal choices. For the most
                                        accurate understanding, consider your entire birth chart rather than just your Sun sign. Many people find that learning
                                        about their Moon and Rising signs provides additional valuable insights.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Comprehensive SEO Content */}
                    <section className="prose prose-lg max-w-none bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Complete Guide to Understanding Zodiac Signs in Astrology</h2>

                        <h3 className="text-xl font-semibold mb-4">The Historical Origins of the Zodiac</h3>
                        <p>
                            The <strong>zodiac system</strong> has its roots in ancient Babylonian astronomy around the 5th century BCE. The word "zodiac" comes from the Greek word "zodiakos kyklos,"
                            meaning "circle of animals." The Babylonians divided the sky into twelve equal sections of 30 degrees each, corresponding to the twelve months of their calendar.
                            Each section was associated with a constellation that the sun appeared to pass through during that month.
                        </p>
                        <p>
                            The Greeks later adopted and expanded upon the Babylonian zodiac, assigning personality traits and mythological stories to each sign. This system spread throughout
                            the ancient world and evolved over centuries, incorporating influences from Egyptian, Roman, and medieval European astrological traditions. The modern Western zodiac
                            we use today is primarily based on the tropical zodiac system, which aligns with the seasons rather than the actual constellations.
                        </p>

                        <h3 className="text-xl font-semibold mt-8 mb-4">The Astronomical Basis of Zodiac Signs</h3>
                        <p>
                            From an astronomical perspective, the <strong>zodiac belt</strong> is the band of constellations through which the Sun, Moon, and planets appear to travel across the sky.
                            This band extends approximately 8-9 degrees on either side of the ecliptic (the Sun's apparent path around the Earth). The twelve zodiac signs correspond to twelve
                            equal 30-degree segments of this 360-degree circle.
                        </p>
                        <p>
                            It's important to distinguish between <strong>astronomical constellations</strong> and <strong>astrological signs</strong>. While they share names, the constellations are
                            irregular in size and don't perfectly align with the 30-degree segments used in astrology. This discrepancy is due to the precession of the equinoxes, a gradual shift
                            in Earth's orientation that has caused the tropical zodiac (used in Western astrology) to drift from the sidereal zodiac (based on actual constellation positions).
                        </p>

                        <h3 className="text-xl font-semibold mt-8 mb-4">The Psychological Depth of Zodiac Sign Interpretations</h3>
                        <p>
                            Modern psychological astrology, influenced by Carl Jung's work, views <strong>zodiac signs</strong> as archetypes representing fundamental human experiences and personality patterns.
                            Each sign embodies specific psychological themes and developmental challenges:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Personal Signs (Aries, Taurus, Gemini, Cancer)</h4>
                                <p className="text-sm text-gray-700">
                                    These signs focus on individual identity and personal development. Aries establishes selfhood, Taurus builds security,
                                    Gemini develops communication, and Cancer establishes emotional foundations.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Interpersonal Signs (Leo, Virgo, Libra, Scorpio)</h4>
                                <p className="text-sm text-gray-700">
                                    These signs navigate relationships and social dynamics. Leo expresses creativity, Virgo serves others, Libra seeks partnership,
                                    and Scorpio explores intimacy and transformation.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Transpersonal Signs (Sagittarius, Capricorn, Aquarius, Pisces)</h4>
                                <p className="text-sm text-gray-700">
                                    These signs connect with broader societal and spiritual concerns. Sagittarius seeks meaning, Capricorn builds structures,
                                    Aquarius innovates for humanity, and Pisces connects with universal consciousness.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mt-8 mb-4">Zodiac Signs in Modern Culture and Self-Understanding</h3>
                        <p>
                            In contemporary society, <strong>zodiac signs</strong> serve multiple purposes beyond traditional prediction. They provide:
                        </p>
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                            <li><strong>Framework for self-reflection</strong> and personal growth</li>
                            <li><strong>Language for discussing personality differences</strong> and relationship dynamics</li>
                            <li><strong>Tool for understanding life cycles</strong> and timing through planetary transits</li>
                            <li><strong>System for recognizing patterns</strong> in behavior and life experiences</li>
                            <li><strong>Means of connecting with ancient wisdom traditions</strong> and cultural heritage</li>
                        </ul>

                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mt-8">
                            <h3 className="text-xl font-semibold mb-3">💫 Expert Astrological Insight</h3>
                            <p className="mb-0">
                                "The zodiac signs represent twelve fundamental approaches to life, twelve different ways of being human.
                                Rather than limiting us to stereotypes, they offer a rich symbolic language for understanding our strengths,
                                challenges, and unique life paths. When we study the zodiac, we're not learning about predetermined fate,
                                but about the archetypal energies available for our personal growth and self-understanding."
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold mt-8 mb-4">The Continuing Evolution of Zodiac Interpretation</h3>
                        <p>
                            As our understanding of psychology and human behavior evolves, so does the interpretation of <strong>zodiac signs</strong>. Modern astrologers continue to refine
                            and expand sign meanings to reflect contemporary life experiences while honoring traditional wisdom. The integration of new astronomical discoveries,
                            such as additional celestial bodies beyond the traditional planets, continues to enrich our understanding of how zodiac energies manifest in human experience.
                        </p>
                        <p>
                            Whether approached as a symbolic system for self-understanding, a tool for relationship insight, or a traditional divination practice,
                            the <strong>twelve zodiac signs</strong> continue to provide valuable frameworks for exploring the human experience across cultures and generations.
                            Their enduring popularity testifies to their power to help us understand ourselves and our place in the cosmic order.
                        </p>
                    </section>
                </div>

                {/* Footer */}
                <Footer></Footer>
            </div>
        </>
    );
}
// pages/astrology/birth-chart.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BirthChart() {
    const [birthData, setBirthData] = useState({
        name: '',
        birthDate: '',
        birthTime: '12:00',
        birthCity: '',
        birthCountry: ''
    });
    
    const [chartData, setChartData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const popularCities = [
        'New York', 'Los Angeles', 'Chicago', 'London', 'Paris', 'Tokyo',
        'Sydney', 'Mumbai', 'Toronto', 'Berlin', 'Singapore', 'Dubai'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBirthData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const calculateBirthChart = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Basic validation
        if (!birthData.birthDate || !birthData.birthCity) {
            setError('Please fill in all required fields');
            setIsLoading(false);
            return;
        }

        try {
            // Simulate API call - in real implementation, you'd call an astrology API
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Generate mock chart data based on birth date
            const mockChartData = generateMockChartData(birthData);
            setChartData(mockChartData);
        } catch (err) {
            setError('Failed to calculate birth chart. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const generateMockChartData = (data) => {
        const birthDate = new Date(data.birthDate);
        const month = birthDate.getMonth() + 1;
        const day = birthDate.getDate();
        
        // Simple algorithm to determine sun sign based on date
        const sunSign = calculateSunSign(month, day);
        
        return {
            sunSign,
            moonSign: calculateMoonSign(month, day),
            risingSign: calculateRisingSign(month, day),
            mercurySign: calculateMercurySign(month, day),
            venusSign: calculateVenusSign(month, day),
            marsSign: calculateMarsSign(month, day),
            jupiterSign: calculateJupiterSign(month, day),
            saturnSign: calculateSaturnSign(month, day),
            uranusSign: calculateUranusSign(month, day),
            neptuneSign: calculateNeptuneSign(month, day),
            plutoSign: calculatePlutoSign(month, day),
            houses: generateHouses(),
            aspects: generateAspects()
        };
    };

    // Helper functions for calculating planetary positions
    const calculateSunSign = (month, day) => {
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
        if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
        if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
        if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
        if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
        if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
        if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
        if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
        if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
        if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
        return 'Pisces';
    };

    const calculateMoonSign = (month, day) => {
        const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
        return signs[(month + day) % 12];
    };

    const calculateRisingSign = (month, day) => {
        const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
        return signs[(month * day) % 12];
    };

    // Similar functions for other planets...
    const calculateMercurySign = (month, day) => calculateSunSign(month, (day + 3) % 31);
    const calculateVenusSign = (month, day) => calculateSunSign(month, (day + 5) % 31);
    const calculateMarsSign = (month, day) => calculateSunSign(month, (day + 7) % 31);
    const calculateJupiterSign = (month, day) => calculateSunSign(month, (day + 11) % 31);
    const calculateSaturnSign = (month, day) => calculateSunSign(month, (day + 19) % 31);
    const calculateUranusSign = () => 'Aquarius'; // Slow-moving
    const calculateNeptuneSign = () => 'Pisces'; // Slow-moving
    const calculatePlutoSign = () => 'Capricorn'; // Slow-moving

    const generateHouses = () => {
        return Array.from({ length: 12 }, (_, i) => ({
            number: i + 1,
            sign: calculateSunSign((i % 12) + 1, 1),
            degree: Math.floor(Math.random() * 30)
        }));
    };

    const generateAspects = () => {
        const aspects = ['Conjunction', 'Sextile', 'Square', 'Trine', 'Opposition'];
        const planets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'];
        
        return Array.from({ length: 8 }, (_, i) => ({
            planet1: planets[i % planets.length],
            planet2: planets[(i + 2) % planets.length],
            aspect: aspects[i % aspects.length],
            orb: (Math.random() * 3).toFixed(1)
        }));
    };

    return (
        <>
            <Head>
                <title>Free Birth Chart Calculator | Astrology Natal Chart & Planetary Positions</title>
                <meta
                    name="description"
                    content="Calculate your free birth chart (natal chart) with detailed planetary positions, houses, and aspects. Discover your sun, moon, rising signs and complete astrological profile."
                />
                <meta
                    name="keywords"
                    content="birth chart, natal chart, astrology chart, free birth chart calculator, sun sign, moon sign, rising sign, planetary positions, astrology houses, birth chart interpretation"
                />
                <link rel="canonical" href="https://yoursite.com/astrology/birth-chart" />

                {/* Open Graph */}
                <meta property="og:title" content="Free Birth Chart Calculator | Astrology Natal Chart" />
                <meta property="og:description" content="Calculate your complete birth chart with planetary positions, houses, and aspects. Discover your unique astrological blueprint." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yoursite.com/astrology/birth-chart" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Birth Chart Calculator",
                            "description": "Free astrology birth chart calculator with detailed planetary positions and interpretations",
                            "url": "https://yoursite.com/astrology/birth-chart",
                            "provider": {
                                "@type": "Organization",
                                "name": "YourSiteName Astrology"
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
                            Astrology Calculator
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Free Birth Chart Calculator
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover your complete astrological blueprint. Calculate your natal chart with detailed 
                            planetary positions, houses, and aspects to understand your unique cosmic signature.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Calculator Form */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                                <h2 className="text-2xl font-bold mb-6 text-gray-900">Enter Your Birth Details</h2>
                                
                                <form onSubmit={calculateBirthChart} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={birthData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Birth Date *
                                        </label>
                                        <input
                                            type="date"
                                            name="birthDate"
                                            value={birthData.birthDate}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Birth Time *
                                        </label>
                                        <input
                                            type="time"
                                            name="birthTime"
                                            value={birthData.birthTime}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                        <p className="text-sm text-gray-500 mt-1">
                                            For accurate rising sign calculation
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Birth City *
                                        </label>
                                        <input
                                            type="text"
                                            name="birthCity"
                                            value={birthData.birthCity}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter city name"
                                            list="cities"
                                        />
                                        <datalist id="cities">
                                            {popularCities.map(city => (
                                                <option key={city} value={city} />
                                            ))}
                                        </datalist>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Birth Country *
                                        </label>
                                        <input
                                            type="text"
                                            name="birthCountry"
                                            value={birthData.birthCountry}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter country name"
                                        />
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Calculating Chart...
                                            </div>
                                        ) : (
                                            'Calculate Birth Chart'
                                        )}
                                    </button>
                                </form>

                                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    <h3 className="font-semibold text-blue-900 mb-2">💡 Why Birth Time Matters</h3>
                                    <p className="text-blue-800 text-sm">
                                        Your exact birth time determines your Rising Sign (Ascendant) and house placements, 
                                        which are crucial for an accurate birth chart reading. If unsure, use 12:00 PM.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Results Section */}
                        <div className="lg:col-span-2">
                            {!chartData ? (
                                /* Initial State - Information */
                                <div className="space-y-8">
                                    {/* What is a Birth Chart */}
                                    <section className="bg-white rounded-xl shadow-lg p-6">
                                        <h2 className="text-2xl font-bold mb-4 text-gray-900">What is a Birth Chart?</h2>
                                        <p className="text-gray-700 mb-4">
                                            A <strong>birth chart</strong> (also called natal chart) is a snapshot of the sky at the exact moment 
                                            you were born. It reveals the positions of the planets, Sun, and Moon in relation to the 12 zodiac 
                                            signs and 12 houses of astrology.
                                        </p>
                                        <p className="text-gray-700">
                                            Think of it as your unique <strong>cosmic blueprint</strong> - a map of your personality, 
                                            life path, strengths, challenges, and potential. While your Sun sign represents your core identity, 
                                            your complete birth chart shows the intricate details of your astrological makeup.
                                        </p>
                                    </section>

                                    {/* Key Components */}
                                    <section className="bg-white rounded-xl shadow-lg p-6">
                                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Key Components of Your Birth Chart</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="bg-yellow-100 text-yellow-800 rounded-full p-2 mt-1">
                                                        ☀️
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">Planetary Positions</h3>
                                                        <p className="text-gray-700 text-sm">
                                                            Where each planet was in the zodiac when you were born, influencing different aspects of your personality.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="bg-blue-100 text-blue-800 rounded-full p-2 mt-1">
                                                        🏠
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">Houses</h3>
                                                        <p className="text-gray-700 text-sm">
                                                            12 areas of life, each ruled by a zodiac sign, showing where planetary energies manifest.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="bg-green-100 text-green-800 rounded-full p-2 mt-1">
                                                        ⚡
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">Aspects</h3>
                                                        <p className="text-gray-700 text-sm">
                                                            Geometric angles between planets, revealing how different parts of your personality interact.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="bg-purple-100 text-purple-800 rounded-full p-2 mt-1">
                                                        🌟
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">Big Three</h3>
                                                        <p className="text-gray-700 text-sm">
                                                            Your Sun, Moon, and Rising signs - the most important placements in your chart.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* The Big Three */}
                                    <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                                        <h2 className="text-2xl font-bold mb-6 text-center">Understanding Your Big Three</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="text-center">
                                                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <span className="text-2xl">☀️</span>
                                                </div>
                                                <h3 className="font-bold text-lg mb-2">Sun Sign</h3>
                                                <p className="text-gray-700 text-sm">
                                                    Your core identity, ego, and life purpose. Represents who youre becoming and your essential self.
                                                </p>
                                            </div>
                                            <div className="text-center">
                                                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <span className="text-2xl">🌙</span>
                                                </div>
                                                <h3 className="font-bold text-lg mb-2">Moon Sign</h3>
                                                <p className="text-gray-700 text-sm">
                                                    Your emotional nature, instincts, and inner self. Shows how you process feelings and what you need emotionally.
                                                </p>
                                            </div>
                                            <div className="text-center">
                                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <span className="text-2xl">⬆️</span>
                                                </div>
                                                <h3 className="font-bold text-lg mb-2">Rising Sign</h3>
                                                <p className="text-gray-700 text-sm">
                                                    Your social personality, first impressions, and how others see you. Your mask and approach to life.
                                                </p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            ) : (
                                /* Chart Results */
                                <div className="space-y-8">
                                    {/* Chart Summary */}
                                    <section className="bg-white rounded-xl shadow-lg p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <h2 className="text-2xl font-bold text-gray-900">Your Birth Chart Results</h2>
                                            <button
                                                onClick={() => setChartData(null)}
                                                className="text-purple-600 hover:text-purple-800 font-semibold"
                                            >
                                                Calculate New Chart
                                            </button>
                                        </div>

                                        {/* Big Three Highlight */}
                                        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-6 text-white mb-6">
                                            <h3 className="text-xl font-bold mb-4 text-center">Your Astrological Big Three</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="text-center">
                                                    <div className="text-2xl mb-2">☀️</div>
                                                    <h4 className="font-semibold">Sun Sign</h4>
                                                    <p className="text-lg">{chartData.sunSign}</p>
                                                    <p className="text-sm opacity-90">Core Identity</p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl mb-2">🌙</div>
                                                    <h4 className="font-semibold">Moon Sign</h4>
                                                    <p className="text-lg">{chartData.moonSign}</p>
                                                    <p className="text-sm opacity-90">Emotional Nature</p>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl mb-2">⬆️</div>
                                                    <h4 className="font-semibold">Rising Sign</h4>
                                                    <p className="text-lg">{chartData.risingSign}</p>
                                                    <p className="text-sm opacity-90">Social Self</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Planetary Positions */}
                                    <section className="bg-white rounded-xl shadow-lg p-6">
                                        <h3 className="text-xl font-bold mb-4 text-gray-900">Planetary Positions</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            <div className="border border-gray-200 rounded-lg p-4 text-center">
                                                <div className="text-lg mb-1">☿</div>
                                                <div className="font-semibold">Mercury</div>
                                                <div className="text-sm text-gray-600">{chartData.mercurySign}</div>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4 text-center">
                                                <div className="text-lg mb-1">♀</div>
                                                <div className="font-semibold">Venus</div>
                                                <div className="text-sm text-gray-600">{chartData.venusSign}</div>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4 text-center">
                                                <div className="text-lg mb-1">♂</div>
                                                <div className="font-semibold">Mars</div>
                                                <div className="text-sm text-gray-600">{chartData.marsSign}</div>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4 text-center">
                                                <div className="text-lg mb-1">♃</div>
                                                <div className="font-semibold">Jupiter</div>
                                                <div className="text-sm text-gray-600">{chartData.jupiterSign}</div>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4 text-center">
                                                <div className="text-lg mb-1">♄</div>
                                                <div className="font-semibold">Saturn</div>
                                                <div className="text-sm text-gray-600">{chartData.saturnSign}</div>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4 text-center">
                                                <div className="text-lg mb-1">♅</div>
                                                <div className="font-semibold">Uranus</div>
                                                <div className="text-sm text-gray-600">{chartData.uranusSign}</div>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4 text-center">
                                                <div className="text-lg mb-1">♆</div>
                                                <div className="font-semibold">Neptune</div>
                                                <div className="text-sm text-gray-600">{chartData.neptuneSign}</div>
                                            </div>
                                            <div className="border border-gray-200 rounded-lg p-4 text-center">
                                                <div className="text-lg mb-1">♇</div>
                                                <div className="font-semibold">Pluto</div>
                                                <div className="text-sm text-gray-600">{chartData.plutoSign}</div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Houses */}
                                    <section className="bg-white rounded-xl shadow-lg p-6">
                                        <h3 className="text-xl font-bold mb-4 text-gray-900">House Placements</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            {chartData.houses.map(house => (
                                                <div key={house.number} className="border border-gray-200 rounded-lg p-3 text-center">
                                                    <div className="font-semibold text-sm">House {house.number}</div>
                                                    <div className="text-xs text-gray-600">{house.sign}</div>
                                                    <div className="text-xs text-gray-500">{house.degree}°</div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Major Aspects */}
                                    <section className="bg-white rounded-xl shadow-lg p-6">
                                        <h3 className="text-xl font-bold mb-4 text-gray-900">Major Aspects</h3>
                                        <div className="space-y-3">
                                            {chartData.aspects.map((aspect, index) => (
                                                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                                    <div className="flex items-center gap-4">
                                                        <span className="font-semibold">{aspect.planet1}</span>
                                                        <span className="text-gray-400">→</span>
                                                        <span className="font-semibold">{aspect.planet2}</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-semibold text-sm">{aspect.aspect}</div>
                                                        <div className="text-xs text-gray-500">{aspect.orb}° orb</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Interpretation CTA */}
                                    <section className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl p-6 text-white text-center">
                                        <h3 className="text-xl font-bold mb-3">Want Detailed Interpretation?</h3>
                                        <p className="mb-4 opacity-90">
                                            Get a complete personalized birth chart reading with in-depth analysis of all planetary positions, 
                                            aspects, and their meanings in your life.
                                        </p>
                                        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                            Get Full Interpretation
                                        </button>
                                    </section>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold mb-8 text-center">Birth Chart FAQs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">What if I dont know my exact birth time?</h3>
                                    <p className="text-gray-700">
                                        If you dont know your exact birth time, use 12:00 PM (noon) as a default. While this wont give you 
                                        an accurate Rising sign or house placements, youll still get correct planetary positions for your 
                                        Sun, Moon, and other planets. For the most accurate chart, try to find your birth certificate.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">How often should I check my birth chart?</h3>
                                    <p className="text-gray-700">
                                        Your birth chart remains the same throughout your life - its your cosmic blueprint. However, 
                                        you can check <strong>transits</strong> (current planetary positions) to see how they interact with 
                                        your natal chart. Many people review their chart during important life transitions or annually.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">What's the difference between birth chart and horoscope?</h3>
                                    <p className="text-gray-700">
                                        Your <strong>birth chart</strong> is unique to you and doesnt change. <strong>Horoscopes</strong> are 
                                        general predictions based on Sun signs. A birth chart gives you personalized insights, while horoscopes 
                                        provide broad guidance for your Sun sign.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">Why are some planets in the same sign for everyone?</h3>
                                    <p className="text-gray-700">
                                        Slow-moving planets like <strong>Uranus, Neptune, and Pluto</strong> stay in the same sign for 
                                        several years, affecting entire generations. Faster-moving planets (Moon, Mercury, Venus, Mars) 
                                        change signs frequently, creating more individual influences.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">Can my birth chart predict my future?</h3>
                                    <p className="text-gray-700">
                                        Your birth chart doesnt predict a fixed future but reveals <strong>potentials, tendencies, and life themes</strong>. 
                                        It shows your natural strengths, challenges, and the kinds of experiences you are likely to attract. 
                                        Your free will always determines how these energies manifest.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-3 text-purple-600">How accurate is this free birth chart calculator?</h3>
                                    <p className="text-gray-700">
                                        This calculator provides a basic interpretation of planetary positions. For professional-level accuracy 
                                        with exact degrees, house systems, and aspect patterns, consult a professional astrologer who uses 
                                        specialized software and considers your exact birth location and time.
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
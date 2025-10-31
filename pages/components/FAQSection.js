'use client';

import { useState } from 'react';

// FAQ Data (moved from original file)
const faqData = (selectedGender, selectedLetter, nameCount) => [
  {
    question: `How many ${selectedGender.toLowerCase()} names start with ${selectedLetter}?`,
    answer: `Our database contains ${nameCount} ${selectedGender.toLowerCase()} names starting with ${selectedLetter}, including popular, traditional, and unique names from various cultures and origins. We regularly update our collection with new and trending names.`
  },
  {
    question: `Are ${selectedGender.toLowerCase()} names starting with ${selectedLetter} currently popular?`,
    answer: `Many ${selectedGender.toLowerCase()} names starting with ${selectedLetter} are currently trending. Names like Alexander, Aaron, Adam have seen significant popularity in recent years. However, popularity varies by region and culture.`
  },
  {
    question: "Do you provide name meanings and origins for these names?",
    answer: "Yes! Each name in our detailed name pages includes comprehensive information about its meaning, origin, cultural significance, pronunciation, and popularity trends. This helps you make an informed decision based on more than just the sound of the name."
  },
  {
    question: `Can I find ${selectedGender.toLowerCase()} names from specific cultures starting with ${selectedLetter}?`,
    answer: `Absolutely! Our database includes ${selectedGender.toLowerCase()} names starting with ${selectedLetter} from various cultures including English, Spanish, Arabic, Hebrew, Indian, African, and Asian origins. Each name page specifies the cultural background and meaning.`
  },
  {
    question: "How often is your baby names database updated?",
    answer: "We update our baby names database quarterly with new trending names, popularity statistics, and cultural variations. We also add names based on user requests and emerging naming trends from around the world."
  }
];

export default function FAQSection({ selectedGender, selectedLetter, totalNames }) {
  const [openFAQ, setOpenFAQ] = useState(null);
  const currentFaqData = faqData(selectedGender, selectedLetter, totalNames);

  const toggleFAQ = (idx) => setOpenFAQ(openFAQ === idx ? null : idx);

  return (
    <section className="max-w-4xl mx-auto mb-12">
      <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        ❓ Frequently Asked Questions
      </h2>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {currentFaqData.map((faq, idx) => (
          <div
            key={idx}
            className="border-b border-gray-200 last:border-b-0"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex justify-between items-center text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
              aria-expanded={openFAQ === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <span className="text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <span className={`text-blue-600 font-bold text-xl transition-transform ${openFAQ === idx ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {openFAQ === idx && (
              <div
                id={`faq-answer-${idx}`}
                className="p-6 pt-0"
              >
                <div className="text-gray-700 leading-relaxed bg-blue-50 rounded-xl p-4 border border-blue-200">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
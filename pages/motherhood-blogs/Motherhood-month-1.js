"use client";

import { useState } from "react";
import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth1() {
  // Accordion toggle for FAQs
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (idx) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  const sections = [
    {
      title: "🌸 Intro — A True Mom Moment",
      content:
        "The first month of motherhood feels like stepping into an entirely new world. Everything is intense — your emotions, your bond with your baby, and even your exhaustion. These first 30 days are a rollercoaster of survival, wonder, and tiny victories. Many moms describe it as overwhelming yet beautiful, filled with both tears and laughter."
    },
    {
      title: "💖 Your Body & Emotions",
      content:
        "Your body and mind are recovering while adjusting to caring for a newborn. It’s normal to feel exhausted, uncertain, or emotional.",
      list: [
        "Postpartum bleeding (lochia) lasts 4–6 weeks — rest and follow your doctor’s care instructions.",
        "Baby blues (mood swings, tearfulness) are common in the first 2 weeks. If feelings worsen or last beyond 2 weeks, seek professional help.",
        "Stay hydrated and eat balanced meals — your recovery depends on nourishment.",
        "Sleep when the baby sleeps. Even 20–30 minute naps help restore energy."
      ]
    },
    {
      title: "👶 Baby Growth & Milestones (Month 1)",
      content: "Your baby is adjusting to life outside the womb, and every small milestone counts.",
      list: [
        "⚖️ **Weight:** 2.5–4.5 kg at birth; some weight loss in week 1 is normal.",
        "🛌 **Sleep:** 14–17 hours per day in short bursts (2–4 hours each).",
        "✋ **Reflexes:** Moro reflex (startle), rooting (searching for nipple), and grasping reflex are active.",
        "👀 **Senses:** Baby recognizes your voice and face, and can focus briefly on close objects."
      ]
    },
    {
      title: "🍼 Feeding Schedule — Practical Example",
      content:
        "Feeding is frequent in the first month. Babies eat on demand, and schedules vary, but patterns start forming by week 4.",
      subsections: [
        {
          subtitle: "🤱 Breastfed Baby",
          list: [
            "Feed on demand, usually every 2–3 hours (8–12 times/day).",
            "Watch for signs: rooting, sucking motions, hand-to-mouth movements.",
            "Cluster feeding in evenings is normal and helps milk supply.",
            "Check for at least 6 wet diapers/day as a sign of good intake."
          ]
        },
        {
          subtitle: "🍼 Formula-fed Baby",
          list: [
            "Offer 2.5–3 oz (75–90 ml) every 2–3 hours (doctor may adjust).",
            "Burp after every feed to prevent discomfort.",
            "Never force-feed; stop if baby turns head or pushes bottle away."
          ]
        }
      ]
    },
    {
      title: "💌 Real Mom Story — The Night I Learned to Let Go",
      content:
        "\"On day 10, I was pacing the room at 3 AM with my crying baby. I tried rocking, swaddling, singing — nothing worked. Finally, I placed her in the crib and sat nearby, exhausted. After a few minutes, she calmed down on her own. That night, I learned it’s okay to pause, breathe, and trust my instincts.\" — Riya, Mumbai"
    },
    {
      title: "✅ Checklist — First 30 Days",
      content: "Keep these essentials handy to make the first month smoother:",
      list: [
        "Postpartum pads & comfortable underwear",
        "Nursing bras & nipple cream",
        "Soft swaddles & onesies",
        "Thermometer, baby nail clippers, bulb syringe",
        "Breast pump (optional) / Formula starter kit (if needed)",
        "Comfortable chair for feeding & burping sessions"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content:
        "The first month is all about adjustment — for you and your baby. Be kind to yourself, accept help, and remember: perfection is not the goal. Every smile, cry, and cuddle builds your bond. When in doubt, always reach out to your pediatrician or healthcare provider."
    }
  ];

  const faqs = [
    {
      q: "How long does postpartum bleeding last?",
      a: "Typically 4–6 weeks. It changes from red to brown to yellowish before stopping. If bleeding is very heavy, has a bad smell, or includes large clots, call your doctor."
    },
    {
      q: "How do I know if my baby is getting enough milk?",
      a: "Check diaper output (6+ wet diapers/day), steady weight gain, and baby seems satisfied after feeds. If unsure, consult your pediatrician."
    },
    {
      q: "Is it normal for my newborn to sleep so much?",
      a: "Yes! Newborns sleep 14–17 hours/day, usually in 2–4 hour intervals. Wake them gently for feeds every 2–3 hours during the first weeks."
    },
    {
      q: "When should I call the doctor?",
      a: "For baby: fever over 100.4°F (38°C), breathing difficulties, persistent vomiting, refusal to feed. For mom: very heavy bleeding, severe pain, or ongoing sadness beyond 2 weeks."
    },
    {
      q: "Can I exercise in the first month?",
      a: "Gentle walking and pelvic floor exercises may be safe, but confirm with your doctor, especially if you had a C-section or complications."
    },
    {
      q: "How can I cope with sleep deprivation?",
      a: "Nap when baby naps, share responsibilities, and keep baby’s crib near your bed for easier night feeds."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 1 — Surviving the First 30 Days"
      description="An in-depth guide for new moms: body recovery, baby milestones, feeding schedules, real mom stories, a checklist for essentials, and FAQs for the first month of motherhood."
      mainImage="/images/motherhood-1.jpg"
      sections={sections}
    >
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">❓ FAQs — Motherhood Month 1</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg">
              <button
                className="w-full text-left px-4 py-3 font-medium text-gray-700 hover:bg-orange-50 flex justify-between items-center"
                onClick={() => toggleFAQ(idx)}
              >
                {faq.q}
                <span>{openFAQ === idx ? "−" : "+"}</span>
              </button>
              {openFAQ === idx && (
                <div className="px-4 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </BlogLayout>
  );
}

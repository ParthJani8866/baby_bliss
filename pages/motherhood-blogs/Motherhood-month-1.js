"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth1() {
  const sections = [
    {
      title: "🌸 Intro — A True Mom Moment",
      content:
        "The first month is like stepping into a new world. \"I remember the first week like a soft, blurry movie — milk-stained shirts, a tiny human with eyes that seemed older than mine, and a constant hum of ‘Am I doing this right?’\" These 30 days are a mix of survival, wonder, and tiny victories."
    },
    {
      title: "💖 Your Body & Emotions",
      list: [
        "Postpartum bleeding (lochia) can last 4–6 weeks — prioritize rest and follow your doctor’s advice.",
        "Baby blues are common in the first 2 weeks; seek support if symptoms persist.",
        "Hydration, nutritious meals, and short naps whenever possible are essential.",
        "Embrace the rollercoaster of emotions — every tear, smile, and laugh is part of bonding."
      ]
    },
    {
      title: "👶 Baby Growth & Milestones (Month 1)",
      list: [
        "⚖️ **Weight:** Usually between 2.5–4.5 kg at birth.",
        "🛌 **Sleep:** 14–17 hours a day, often in short stretches.",
        "✋ **Reflexes:** Rooting, Moro, and grasping reflexes are present.",
        "👀 **Senses:** Prefers human faces and voices; can briefly focus on nearby objects."
      ]
    },
    {
      title: "🍼 Feeding Schedule — Practical Example",
      content:
        "Feeding in the first month varies based on breastfeeding or formula feeding. Expect frequent feeds and some cluster feeding in evenings.",
      subsections: [
        {
          subtitle: "🤱 Breastfed Baby",
          list: [
            "Feed on demand, typically every 2–3 hours (8–12 times/day).",
            "Check for 6+ wet diapers/day as a good intake indicator.",
            "Cluster feeding in the evening is normal and helps milk supply."
          ]
        },
        {
          subtitle: "🍼 Formula-fed Baby",
          list: [
            "Offer 2.5–3 oz (75–90 ml) every 2–3 hours (per pediatric guidance).",
            "Do not force-feed — stop if baby turns head or slows sucking.",
            "Burp the baby upright after feeds for comfort."
          ]
        }
      ]
    },
    {
      title: "💌 Real Mom Story — The Night I Learned to Let Go",
      content:
        "\"On day 10, I was pacing at 3 AM with a crying baby. I tried everything — rocking, swaddling, singing. Nothing worked. I finally set her in the crib and sat beside it, letting her cry while I breathed. After 10 minutes, she calmed. That night, I learned patience and to trust my instincts.\" — Riya, Mumbai"
    },
    {
      title: "✅ Checklist — First 30 Days",
      list: [
        "Postpartum pads & comfortable underwear",
        "Nipple cream & nursing bras",
        "Soft swaddles & 2–3 onesies",
        "Thermometer, baby nail clippers, bulb syringe",
        "Breast pump (optional) / Formula starter kit (optional)",
        "Comfortable chair for feeding & burping"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content:
        "The first month is full of changes, challenges, and tiny victories. Give yourself permission to be imperfect, accept help, and cherish every moment. Consult your pediatrician for any concerns regarding growth, feeding, or sleep."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 1 — Surviving the First 30 Days"
      description="Tips, feeding schedules, growth milestones, real mom stories, and a checklist for the first month of motherhood."
      sections={sections}
      sidebarCategory="motherhood"
      sidebarTitle="Must-Have Essentials"
    />
  );
}

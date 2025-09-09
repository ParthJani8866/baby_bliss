"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth11() {
  const sections = [
    {
      title: "🌟 Intro — Little Steps, Big Achievements",
      content:
        "By month 11, your baby is on the brink of walking independently. They explore furniture, cruise along walls, and may attempt first steps. Language development accelerates, with more words and gestures appearing. Parents witness a growing sense of independence, curiosity, and playfulness."
    },
    {
      title: "💪 Your Body & Emotions",
      list: [
        "Many moms feel more confident managing daily routines, though night waking may still cause fatigue.",
        "Balancing work, baby care, and personal life continues to require planning and support.",
        "Emotional highs are frequent — witnessing new skills and independence is incredibly rewarding.",
        "Remember to take time for yourself and celebrate your baby’s achievements."
      ]
    },
    {
      title: "👶 Baby Growth & Milestones (Month 11)",
      list: [
        "🦶 **Early Walking Attempts**: Baby may stand alone briefly, cruise, or take a few independent steps.",
        "🗣️ **Language Expansion**: Vocabulary grows — simple words like 'mama', 'dada', 'bye-bye', 'ball', or names of family members.",
        "👋 **Gestures & Communication**: Waving, clapping, pointing, and shaking head 'no' become clearer.",
        "🧩 **Problem Solving**: Enjoys simple stacking toys, opening boxes, and exploring cause-effect toys.",
        "🎶 **Playfulness & Social Skills**: Likes interactive games, dancing to music, and imitating adult actions.",
        "📈 **Physical Growth**: Babies may be able to sit, crawl, pull up, cruise, and take early steps confidently."
      ]
    },
    {
      title: "🍼 Feeding Schedule (Month 11)",
      content:
        "Milk remains important, but solid foods now dominate the daily diet. Focus is on self-feeding and trying new textures and flavors.",
      subsections: [
        {
          subtitle: "Milk Feeds",
          list: [
            "Breastfed: 3–4 feeds/day, often shorter sessions.",
            "Formula-fed: 20–24 oz (590–710 ml) daily.",
            "Night feeds may decrease, but some babies continue for comfort."
          ]
        },
        {
          subtitle: "Solids",
          list: [
            "Offer 3 main meals + 1–2 snacks daily.",
            "Encourage self-feeding with finger foods, soft-cooked vegetables, fruits, rice, pasta, eggs, lentils, and paneer.",
            "Introduce variety of flavors and textures to encourage exploration.",
            "Avoid whole nuts, popcorn, grapes, and hard chunks to prevent choking."
          ]
        }
      ]
    },
    {
      title: "💌 Real Mom Stories",
      subsections: [
        {
          subtitle: "First Steps",
          content:
            "\"I remember cheering so loudly when my baby took her first step towards me. It was a magical moment — pure joy and pride!\" — Anjali, Mumbai"
        },
        {
          subtitle: "Expanding Words",
          content:
            "\"At 11 months, my son started saying 'ball', 'dog', and 'bye-bye'. Every new word felt like a milestone and a reason to celebrate!\" — Priya, Hyderabad"
        }
      ]
    },
    {
      title: "📝 Checklist — Month 11 Essentials",
      list: [
        "🛋️ **Sturdy Furniture & Baby-Proofing**: Secure edges, corners, cabinets, and electrical outlets.",
        "🦶 **Non-Slip Socks or Shoes**: Support early walking attempts.",
        "🍽️ **Soft Spoons & Divided Plates**: Encourage independent eating.",
        "🧸 **Interactive & Educational Toys**: Puzzles, stacking toys, cause-effect toys.",
        "📚 **Board Books & Picture Books**: Encourage language development and imagination.",
        "🎵 **Music & Dance**: Encourage rhythm, coordination, and fun.",
        "🍼 **Snack & Water Cups**: Support self-feeding and hydration."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content:
        "Month 11 is a stage of exciting independence. Babies begin walking, expand their vocabulary, and explore the world with confidence. While it requires close supervision and patience, the joy of seeing your little one achieve these milestones is unmatched. Celebrate each first step, word, and gesture — every moment is a memory in the making."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 11 — Early Walking, First Words & Playful Independence"
      description="At 11 months, babies start walking, expand vocabulary, and enjoy playful interaction. Learn feeding, milestones, and real mom stories."
      sections={sections}
      sidebarCategory="motherhood"
      sidebarTitle="Milestone & Play Essentials"
    />
  );
}

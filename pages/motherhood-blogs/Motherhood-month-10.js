"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth10() {
  const sections = [
    {
      title: "🌟 Intro — Tiny Communicator",
      content:
        "By month 10, babies become more interactive and expressive. Many begin saying their **first words**, understand simple commands, and refine their mobility skills. Peek-a-boo and other games are now magical, and parents witness a real spark of personality emerging."
    },
    {
      title: "💪 Your Body & Emotions",
      list: [
        "By now, moms often feel more confident in routines and handling daily baby care.",
        "Fatigue may persist due to night waking, but joy from milestones outweighs it.",
        "Balancing work and motherhood (Parenting) may still feel challenging — support and self-care are crucial.",
        "Emotionally, watching your baby communicate and understand you brings immense satisfaction and strengthens the bond."
      ]
    },
    {
      title: "👶 Baby Growth & Milestones (Month 10)",
      list: [
        "🗣️ **First Words**: Many babies say simple words like 'mama', 'dada', 'baba', or mimic animal sounds.",
        "🧍 **Cruising & Pulling Up**: Stronger balance, can stand while holding furniture and move along it.",
        "🤲 **Pincer Grasp Improves**: Picks up small objects between thumb and forefinger.",
        "🎵 **Imitating Sounds & Actions**: Copies clapping, waving, and simple gestures.",
        "👀 **Understanding Simple Commands**: May respond to 'come here', 'give me', or 'no'.",
        "🎭 **Play & Interaction**: Loves peek-a-boo, hide-and-seek, and interactive songs."
      ]
    },
    {
      title: "🍼 Feeding Schedule (Month 10)",
      content:
        "At 10 months, babies enjoy a wide variety of solid foods while continuing milk feeds.",
      subsections: [
        {
          subtitle: "Milk Feeds",
          list: [
            "Breastfed: 3–5 feeds/day, often shorter.",
            "Formula-fed: 20–28 oz (590–830 ml) total daily.",
            "Night feeds may continue for some babies, though often reduced."
          ]
        },
        {
          subtitle: "Solids",
          list: [
            "Offer 3 meals and 2 snacks daily.",
            "Encourage self-feeding with soft finger foods.",
            "Introduce variety: soft-cooked vegetables, fruits, rice, pasta, lentils, eggs, paneer.",
            "Teach textures and flavors — mashed, minced, or small bite-size chunks.",
            "Avoid choking hazards: whole nuts, popcorn, grapes, or hard chunks."
          ]
        }
      ]
    },
    {
      title: "💌 Real Mom Stories",
      subsections: [
        {
          subtitle: "First Words",
          content:
            "\"When my baby said 'mama' clearly for the first time, I couldn’t stop crying. It felt like a whole new level of connection had begun!\" — Ritu, Delhi"
        },
        {
          subtitle: "Peek-a-Boo Fun",
          content:
            "\"Playing peek-a-boo has become our favorite game. She laughs hysterically every time I hide behind the pillow — it’s pure joy and the best stress-reliever for me too.\" — Sneha, Bangalore"
        }
      ]
    },
    {
      title: "📝 Checklist — Month 10 Essentials",
      list: [
        "🛋️ **Sturdy Furniture & Baby-Proofing**: Continue to secure all edges, corners, and cabinets.",
        "🍽️ **Soft Spoons & Divided Plates**: Encourage self-feeding and practice independent eating.",
        "🧸 **Interactive & Musical Toys**: Boost motor skills, rhythm, and cause-effect learning.",
        "📚 **Board Books & Touch-and-Feel Books**: Stimulate language, recognition, and imagination.",
        "🦷 **Teething Toys**: Comfort sore gums and encourage chewing.",
        "👟 **Non-Slip Socks or Soft Shoes**: Support safer cruising and early steps.",
        "🎵 **Simple Songs & Games**: Peek-a-boo, clapping games, and rhymes for interaction."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content:
        "Month 10 is full of communication breakthroughs, stronger mobility, and fun interactive play. Watching your baby say their first words, respond to cues, and enjoy peek-a-boo shows the growing bond between parent and child. Celebrate these joyful milestones — each moment is a building block for confidence, independence, and learning."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 10 — First Words, Peek-a-Boo & Stronger Mobility"
      description="At Motherhood Month 10, babies start speaking first words, cruising, and enjoying interactive games. Learn feeding tips, milestones, and real mom stories."
      sections={sections}
      sidebarCategory="motherhood"
      sidebarTitle="Interactive Play Essentials"
    />
  );
}

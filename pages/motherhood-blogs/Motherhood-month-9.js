"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth9() {
  const sections = [
    {
      title: "🌟 Intro — Little Adventurer on the Rise",
      content:
        "By month 9, babies are full of curiosity and energy. Many are pulling up to stand, cruising along furniture, and babbling with more purpose. This stage is all about exploration, communication, and building independence — while still needing plenty of cuddles and reassurance."
    },
    {
      title: "💪 Your Body & Emotions",
      list: [
        "By this stage, many moms feel more confident balancing baby care, home, and (if applicable) work.",
        "Fatigue may still creep in due to teething and night waking.",
        "Some moms experience emotional highs and lows as their babies become more mobile and independent.",
        "Watching your baby play and respond to you brings immense joy and strengthens the bond."
      ]
    },
    {
      title: "👶 Baby Growth & Milestones (Month 9)",
      list: [
        "🧍 **Standing with Support**: Babies pull up on furniture and may cruise sideways.",
        "👋 **Gestures Begin**: Waving, clapping, and pointing may appear.",
        "🗣️ **Babbling with Meaning**: Sounds like 'mama' and 'dada' may be used more purposefully.",
        "🥄 **Self-Feeding**: Babies enjoy holding spoons, cups, or finger foods — though mess is guaranteed.",
        "🎶 **Rhythm & Play**: Babies may bounce or sway when they hear music.",
        "📈 **Growth**: Weight is typically 2.5–3 times birth weight by now."
      ]
    },
    {
      title: "🍼 Feeding Schedule (Month 9)",
      content:
        "At 9 months, babies are exploring more textures and flavors while still relying heavily on breast milk or formula.",
      subsections: [
        {
          subtitle: "Milk Feeds",
          list: [
            "Breastfed: 4–6 feeds/day, often shorter but still frequent.",
            "Formula-fed: 24–30 oz (710–890 ml) daily, spread across 3–4 bottles."
          ]
        },
        {
          subtitle: "Solids",
          list: [
            "Offer 3 meals + 1–2 snacks daily.",
            "Focus on soft finger foods: well-cooked pasta, small chapati pieces with dal, soft fruits (banana, papaya, pear).",
            "Introduce proteins: mashed paneer, lentils, eggs (if pediatrician approved).",
            "Encourage self-feeding with finger foods and spoon practice.",
            "Avoid whole nuts, popcorn, grapes, and hard chunks to prevent choking."
          ]
        }
      ]
    },
    {
      title: "💌 Real Mom Stories",
      subsections: [
        {
          subtitle: "Cruising Along",
          content:
            "\"One day, I found my daughter standing in her crib, smiling proudly. The next week, she was cruising along the sofa like a tiny explorer. We had to lower the crib immediately — safety became priority number one!\" — Kavita, Jaipur"
        },
        {
          subtitle: "First Wave",
          content:
            "\"When my son waved bye-bye for the first time, my heart just melted. He did it with his whole arm, flapping like a bird, and everyone in the family cheered!\" — Sneha, Bangalore"
        }
      ]
    },
    {
      title: "📝 Checklist — Month 9 Essentials",
      list: [
        "🛋️ **Sturdy Furniture**: Babies pull up on everything — secure wobbly tables and shelves.",
        "🔒 **Baby-Proofing Locks**: Especially for cabinets and drawers.",
        "🥄 **Baby Utensils**: Encourage messy but fun self-feeding.",
        "🦷 **Teething Biscuits or Rings**: To soothe sore gums.",
        "🧸 **Push Toys**: Baby walkers without wheels or sturdy push toys encourage standing.",
        "📚 **Interactive Storybooks**: Peek-a-boo and textured books keep babies engaged.",
        "👟 **Non-Slip Socks**: For safer cruising around furniture."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content:
        "Month 9 is all about independence and exploration. With standing, cruising, and playful babbling, babies reveal their adventurous spirit. It’s also a reminder for parents to baby-proof thoroughly and encourage safe exploration. Celebrate the little milestones, because every clap, wave, and wobble is a step toward walking and talking."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 9 — Standing with Support, Stronger Communication & Play"
      description="At Motherhood Month 9, babies pull up, cruise, and start purposeful babbling. Learn about feeding, growth milestones, and real mom stories in this exciting stage."
      sections={sections}
      sidebarCategory="motherhood"
      sidebarTitle="Baby Exploration Essentials"
    />
  );
}

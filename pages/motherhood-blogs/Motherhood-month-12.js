"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth12() {
  const sections = [
    {
      title: "🌟 Intro — Celebrating One Year!",
      content:
        "Month 12 marks the first birthday — a huge milestone for both baby and parents. By now, most babies can stand independently, take first steps, say a few meaningful words, and show distinct personality traits. It’s a time to celebrate growth, achievements, and the incredible journey of the first year."
    },
    {
      title: "💪 Your Body & Emotions",
      list: [
        "Moms often feel proud and emotional reflecting on the past year — from sleepless nights to first smiles and steps.",
        "Energy levels may vary depending on baby’s sleep and activity, but seeing milestones makes it worthwhile.",
        "Parenting confidence grows, though constant supervision is still essential for safety.",
        "It’s important to celebrate your achievements and take moments for self-care amid the celebrations."
      ]
    },
    {
      title: "👶 Baby Growth & Milestones (Month 12)",
      list: [
        "🦶 **Independent Walking**: Many babies take their first steps or walk confidently with support.",
        "🗣️ **Language Skills**: Vocabulary expands — says 'mama', 'dada', 'bye-bye', 'ball', 'more', and may mimic simple phrases.",
        "🎭 **Personality Shines**: Shows preferences, humor, empathy, and enjoys interactive play.",
        "🤲 **Self-Feeding**: Uses pincer grasp well, feeds with fingers, and may attempt to use a spoon.",
        "🧩 **Problem-Solving**: Stacks blocks, pushes/pulls toys, understands simple cause-effect.",
        "🎵 **Play & Interaction**: Loves peek-a-boo, simple games, and dances to music."
      ]
    },
    {
      title: "🍼 Feeding Schedule (Month 12)",
      content:
        "By 12 months, solids form the main part of the diet, but milk (breast milk or formula) is still important for nutrients.",
      subsections: [
        {
          subtitle: "Milk Feeds",
          list: [
            "Breastfed: 2–4 feeds/day, often after meals or before bedtime.",
            "Formula-fed: 16–24 oz (470–710 ml) daily, spread across 2–3 bottles.",
            "Night feeds may be reduced or eliminated depending on baby’s sleep."
          ]
        },
        {
          subtitle: "Solids",
          list: [
            "Offer 3 main meals + 2–3 snacks.",
            "Encourage self-feeding with small, soft pieces.",
            "Include a variety: fruits, vegetables, grains, lentils, eggs, dairy, and soft meats if introduced.",
            "Avoid choking hazards: whole nuts, popcorn, large chunks of raw vegetables."
          ]
        }
      ]
    },
    {
      title: "💌 Real Mom Stories",
      subsections: [
        {
          subtitle: "First Steps Celebration",
          content:
            "\"On my son’s first birthday, he walked independently for the first time! Tears of joy rolled down my cheeks. It felt like the culmination of a year of love, patience, and milestones.\" — Ananya, Pune"
        },
        {
          subtitle: "Talking Milestones",
          content:
            "\"By 12 months, my daughter was saying 'mama', 'dada', and 'ball'. Every word felt like a gift, and our home was filled with laughter and chatter.\" — Radhika, Delhi"
        }
      ]
    },
    {
      title: "📝 Checklist — Month 12 Essentials",
      list: [
        "🦶 **Non-Slip Shoes**: Support confident walking.",
        "🛋️ **Baby-Proofing**: Continue securing furniture, stairs, and cabinets.",
        "🥄 **Child-Friendly Utensils**: Encourage self-feeding and independence.",
        "📚 **Interactive Books**: Board books, touch-and-feel books, picture books.",
        "🧸 **Push Toys & Ride-Ons**: Encourage mobility and balance.",
        "🎉 **Birthday Essentials**: Safe decorations, soft balloons, and healthy snacks.",
        "🎵 **Music & Games**: Encourage dancing, clapping, and interactive play."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content:
        "Month 12 is a time of celebration — the first year of motherhood complete! From first steps to first words, your baby has grown immensely. Reflect on the journey, cherish the milestones, and continue supporting your little explorer as they step into the second year with curiosity, confidence, and joy."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 12 — First Birthday, Walking, Talking & Celebrating Milestones"
      description="At Motherhood Month 12, babies start walking, expand vocabulary, and show personality. Learn feeding, milestones, real mom stories, and tips for celebrating the first birthday."
      sections={sections}
      sidebarCategory="motherhood"
      sidebarTitle="First Birthday & Milestone Essentials"
    />
  );
}

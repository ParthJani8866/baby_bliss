"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth6() {
  const sections = [
    {
      title: "🌟 Intro — Half a Year of Motherhood!",
      content:
        "Congratulations, Mama! You’ve made it to 6 months — a huge milestone. Your little one is now more active, playful, and expressive. This month marks exciting changes: **first solid foods, more sitting balance, and babbling sounds that warm your heart.** For moms, it’s a time of celebration, but also new adjustments in feeding, sleep, and safety."
    },
    {
      title: "💪 Your Body & Emotions",
      list: [
        "Many moms feel stronger and more confident in routines by month 6.",
        "If you had a C-section, your body may feel fully healed now, allowing for more exercise.",
        "Some moms notice postpartum hair loss slowing down.",
        "Returning to work or balancing career and motherhood may feel overwhelming — remember, it’s okay to ask for support.",
        "Emotionally, there’s joy in watching your baby become interactive, but fatigue can still linger due to night waking."
      ]
    },
    {
      title: "👶 Baby Growth & Milestones (Month 6)",
      list: [
        "🍎 **First Solids**: Baby may show readiness signs like sitting with support, showing interest in food, and losing the tongue-thrust reflex.",
        "🪑 **Sitting Progress**: Many babies can sit briefly without support or tripod (hands forward for balance).",
        "🗣️ **Babbling**: Repeated consonant sounds like 'ba-ba' or 'da-da' start emerging.",
        "💪 **Rolling Mastery**: Baby rolls easily both ways and may start scooting or attempting army crawls.",
        "🤲 **Hand Control**: Picks up toys using a raking grasp (all fingers together).",
        "👀 **Recognition**: Knows familiar faces and may show shyness around strangers."
      ]
    },
    {
      title: "🍼 Feeding Schedule (Month 6)",
      content:
        "At 6 months, breast milk or formula is still the main source of nutrition — but solids are introduced as a complement, not a replacement.",
      subsections: [
        {
          subtitle: "Breastfed Baby",
          list: [
            "6–8 feeds/day, often every 3–4 hours.",
            "Baby may nurse more quickly and efficiently now.",
            "Continue offering both breasts at each feed."
          ]
        },
        {
          subtitle: "Formula-fed Baby",
          list: [
            "6–8 oz (180–240 ml) every 3–4 hours.",
            "Total intake usually 24–32 oz (710–950 ml) per day."
          ]
        },
        {
          subtitle: "Introducing Solids",
          list: [
            "Start with single-ingredient purees: rice cereal, mashed banana, sweet potato, or carrot.",
            "Introduce **1 new food at a time** and wait 3 days before trying another to monitor allergies.",
            "Offer 1–2 tablespoons once a day at first, slowly increasing.",
            "Baby-led weaning (BLW) is an option: offering soft finger foods instead of purees.",
            "Avoid honey, whole nuts, cow’s milk (as main drink), and added sugar/salt."
          ]
        }
      ]
    },
    {
      title: "💌 Real Mom Stories",
      subsections: [
        {
          subtitle: "The First Bite",
          content:
            "\"We gave Aarav mashed sweet potato as his very first food. The look on his face was priceless — half disgust, half curiosity. By the third spoon, he was giggling and grabbing the spoon himself!\" — Meera, Bangalore"
        },
        {
          subtitle: "Sitting Strong",
          content:
            "\"I remember propping pillows around my daughter as she practiced sitting. One day, she suddenly balanced on her own and clapped her hands. It was such a proud moment — her first taste of independence.\" — Radhika, Pune"
        }
      ]
    },
    {
      title: "📝 Checklist — Month 6 Essentials",
      list: [
        "🍽️ **High Chair**: Choose one with proper safety straps for starting solids.",
        "🥄 **Baby Spoons & Bowls**: Soft-tipped spoons to protect gums.",
        "🦷 **Teething Toys**: Babies may get their first tooth around now.",
        "🛝 **Play Mats**: Encourage rolling and crawling practice.",
        "📚 **Cloth & Board Books**: Stimulate language with textures and sounds.",
        "🍼 **Sippy Cup/Trainer Cup**: Introduce small sips of water with solids.",
        "👕 **Bibs & Wipes**: Mealtime is messy but fun!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content:
        "Month 6 is a milestone-filled chapter in both your and your baby’s journey. Introducing solids, watching them babble, and seeing them sit up for the first time makes all the sleepless nights worthwhile. Take plenty of photos, cherish the giggles, and remember — your encouragement is the fuel for their growing independence."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 6 — Starting Solids & Sitting Up"
      description="At 6 months, babies begin solids, practice sitting, and start babbling. Learn feeding tips, milestones, and real mom stories for this exciting stage."
      sections={sections}
      sidebarCategory="motherhood"
      sidebarTitle="Parenting Essentials"
    />
  );
}

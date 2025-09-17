"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth5() {
  const sections = [
    {
      title: "🌟 Intro — Discovery & Teething",
      content:
        "By month 5, babies become little explorers! They grab toys with intention, laugh at silly faces, and may even begin showing the first signs of teething. For moms, this stage is full of joy but also brings challenges like drool, crankiness, and disrupted sleep."
    },
    {
      title: "💪 Your Body & Emotions",
      list: [
        "Energy is improving for many moms, though interrupted sleep may return if baby begins teething.",
        "If breastfeeding, supply is well-established, and you may notice baby becoming more distracted at the breast.",
        "Some moms start preparing to return to work — which may bring both excitement and guilt.",
        "Emotional ups and downs are normal. Don’t hesitate to ask for help or take short breaks for self-care."
      ]
    },
    {
      title: "👶 Baby Growth & Milestones (Month 5)",
      list: [
        "⭐ **Teething Signs**: Drooling, chewing on hands/toys, fussiness.",
        "💪 **Rolling Skills**: Many babies can now roll both from tummy to back and back to tummy.",
        "🖐️ **Hand Coordination**: Passes toys from one hand to another and mouths everything.",
        "🛏️ **Sleep**: Some babies may regress and wake more often due to teething or growth spurts.",
        "👂 **Hearing & Awareness**: Turns head toward familiar voices and responds to their name.",
        "🤣 **Laughter**: Full belly laughs are common — play peek-a-boo for endless giggles."
      ]
    },
    {
      title: "🍼 Feeding Schedule",
      content:
        "Most babies are still on breast milk or formula as the main source of nutrition. Pediatricians may start discussing readiness for solids around 6 months, but month 5 is still practice-only.",
      subsections: [
        {
          subtitle: "Breastfed Baby",
          list: [
            "6–8 feeds/day, typically every 3 hours.",
            "Baby may get easily distracted — try feeding in a quiet, calm space.",
            "Cluster feeding may reappear during growth spurts."
          ]
        },
        {
          subtitle: "Formula-fed Baby",
          list: [
            "6–8 oz (180–240 ml) every 3–4 hours.",
            "Total intake is around 24–32 oz (710–950 ml) per day.",
            "If appetite increases suddenly, it may be a growth spurt."
          ]
        },
        {
          subtitle: "Not Yet Solids (But Getting Close!)",
          list: [
            "Baby sits with some support and shows interest in your food.",
            "Pediatricians usually recommend waiting until 6 months before introducing solids.",
            "Teething toys and chilled washcloths can soothe gums without early solids."
          ]
        }
      ]
    },
    {
      title: "💌 Real Mom Stories",
      subsections: [
        {
          subtitle: "The First Tooth",
          content:
            "\"I was convinced my daughter was just cranky from a growth spurt, but one morning I felt a tiny sharp tooth! It was such a proud and emotional moment — my baby was growing so fast.\" — Priya, Hyderabad"
        },
        {
          subtitle: "Giggles All Day",
          content:
            "\"By month 5, my son laughed at everything — from my sneezes to the dog wagging its tail. His laughter filled our home with so much joy, it made the sleepless nights worth it.\" — Ayesha, Chennai"
        }
      ]
    },
    {
      title: "📝 Checklist — Month 5 Essentials",
      list: [
        "🦷 **Teething Rings & Chew Toys**: Relieve sore gums and keep baby occupied.",
        "🪞 **Activity Gym & Mirror Toys**: Encourage rolling, grabbing, and self-discovery.",
        "📚 **Cloth Books & Board Books**: Babies love crinkly textures and colors.",
        "🛏️ **Sleep Sack**: Ensures safe sleep as rolling increases.",
        "👕 **Drool Bibs**: Keep baby dry and prevent skin irritation.",
        "🎶 **Musical Toys**: Stimulate hearing and rhythm awareness.",
        "👶 **High Chair (Optional Prep)**: Some parents start introducing baby to the high chair without food — just to get familiar."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content:
        "Month 5 is filled with giggles, drool, and new discoveries. Teething can be tough, but it’s also the start of exciting changes. Babies become more interactive, playful, and curious every day. Take joy in the little milestones, and remember: your presence and love are your baby’s greatest comfort."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 5 — Teething & Playtime"
      description="By Motherhood month 5, babies laugh, explore, and begin teething. Learn what to expect, how to soothe discomfort, and enjoy the playful milestones."
      sections={sections}
      sidebarCategory="motherhood"
      sidebarTitle="Parenting Essentials"
    />
  );
}

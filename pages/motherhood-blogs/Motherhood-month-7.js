"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth7() {
  const sections = [
    {
      title: "🌟 Intro — On the Move!",
      content:
        "By month 7, babies become more adventurous. Many begin crawling or attempting to scoot across the floor. With mobility comes curiosity, and with curiosity comes the need for extra vigilance. Stranger anxiety may surface, and mealtimes get exciting as finger foods enter the picture!"
    },
    {
      title: "💪 Your Body & Emotions",
      list: [
        "By now, many moms feel more physically recovered and confident.",
        "Balancing housework, baby care, and (for some) work outside the home can still feel overwhelming.",
        "It’s common to feel bittersweet as your tiny baby starts showing independence.",
        "Postpartum anxiety may still linger — especially as babies become more mobile. Deep breaths and routines help."
      ]
    },
    {
      title: "👶 Baby Growth & Milestones (Month 7)",
      list: [
        "🚼 **Crawling Begins**: Some babies crawl traditionally, while others scoot, roll, or army crawl.",
        "🖐️ **Improved Hand Skills**: Begins developing a pincer grasp (using thumb and forefinger).",
        "🗣️ **Sounds Expand**: Babbling sounds include more consonants — 'ma-ma,' 'da-da,' or 'ba-ba.'",
        "😊 **Stranger Anxiety**: Baby may cling to parents and cry around unfamiliar people.",
        "🎶 **Social Play**: Loves peek-a-boo, pat-a-cake, and other interactive games.",
        "📈 **Growth**: Babies usually double their birth length around this stage."
      ]
    },
    {
      title: "🍼 Feeding Schedule (Month 7)",
      content:
        "Solid foods now become a regular part of your baby's routine. Breast milk or formula remains the main source of nutrition, but solids build important skills.",
      subsections: [
        {
          subtitle: "Milk Feeds",
          list: [
            "Breastfed: 6–8 feeds/day.",
            "Formula-fed: 24–32 oz (710–950 ml) total per day.",
            "Night feedings may still be needed, but some babies start sleeping longer stretches."
          ]
        },
        {
          subtitle: "Solids",
          list: [
            "Offer 2–3 solid meals per day.",
            "Include purees, mashed foods, or soft finger foods.",
            "Good first finger foods: soft-cooked carrots, avocado chunks, ripe banana pieces.",
            "Avoid choking hazards: whole grapes, raw veggies, nuts, or hard chunks of food.",
            "Introduce allergenic foods (like egg, peanut, dairy) one at a time, if recommended by your pediatrician."
          ]
        }
      ]
    },
    {
      title: "💌 Real Mom Stories",
      subsections: [
        {
          subtitle: "The First Crawl",
          content:
            "\"One morning, I set a toy just out of reach. To my surprise, Aarohi wiggled, pushed, and somehow crawled right to it! I screamed with excitement — and then quickly realized I needed to baby-proof the whole house!\" — Neha, Mumbai"
        },
        {
          subtitle: "Stranger Anxiety",
          content:
            "\"At a family gathering, my son clung to me and cried whenever someone tried to hold him. At first, I worried something was wrong, but later I learned it’s a normal part of development. He just needed reassurance.\" — Shalini, Hyderabad"
        }
      ]
    },
    {
      title: "📝 Checklist — Month 7 Essentials",
      list: [
        "🔒 **Baby Gates**: For stairs and doorways.",
        "🧸 **Interactive Toys**: Stacking cups, soft blocks, activity cubes.",
        "🍽️ **Baby Plates & Utensils**: Encourage self-feeding.",
        "👶 **Teething Rings**: Many babies cut their first teeth around now.",
        "📚 **Cloth & Touch Books**: Stimulate sensory play.",
        "🛋️ **Corner & Edge Protectors**: Baby-proof furniture.",
        "🍼 **High Chair with Harness**: For safe finger food meals."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content:
        "Month 7 is an adventurous stage where curiosity meets mobility. Crawling, babbling, and new foods make every day exciting (and sometimes exhausting). Baby-proof your space, embrace the clinginess during stranger anxiety, and celebrate each wobbly crawl — these are precious memories in the making."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 7 — Crawling, Stranger Anxiety & Finger Foods"
      description="Month 7 brings crawling, babbling, and the introduction of finger foods. Learn about growth milestones, feeding tips, and real mom stories in this exciting stage."
      sections={sections}
      sidebarCategory="motherhood"
      sidebarTitle="Baby Safety Essentials"
    />
  );
}

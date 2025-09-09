"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth3() {
  const sections = [
    {
      title: "Intro — Emerging Personality",
      content:
        "The third month of motherhood is often described as a breakthrough stage. Your baby is no longer a sleepy newborn; instead, they are starting to show their personality with coos, giggles, and long stares. For moms, this month often feels like a reward after weeks of sleepless nights and uncertainty. You may notice your confidence as a parent growing alongside your baby’s development."
    },
    {
      title: "Your Body & Emotions",
      list: [
        "Energy levels start improving, but occasional exhaustion is still normal.",
        "Postpartum hair loss may increase this month — it is temporary and linked to hormone shifts.",
        "If you had a C-section, scar tissue may feel tender but should gradually improve.",
        "Emotionally, many mothers feel more stable, but anxiety about returning to work or managing routines may appear.",
        "Take short walks or light stretches (if cleared by your doctor) — it helps boost mood and energy."
      ]
    },
    {
      title: "Baby Growth & Milestones (Month 3)",
      list: [
        "Weight: Most babies have gained 1.8–2.7 kg since birth and continue steady growth.",
        "Head control improves significantly; babies may push up on forearms during tummy time.",
        "Hands open more often, and your baby may swat or reach for dangling toys.",
        "Increased vocalization: coos, gurgles, and early laughter appear.",
        "Vision improves; babies can follow objects across a room and recognize familiar faces.",
        "Sleep stretches at night may lengthen to 5–6 hours, though naps remain frequent."
      ]
    },
    {
      title: "Feeding Schedule",
      content:
        "Feeding during month 3 becomes slightly more predictable. Babies are more efficient feeders, and you may notice longer gaps between sessions.",
      subsections: [
        {
          subtitle: "Breastfed Baby",
          list: [
            "Average 7–9 feeds/day, lasting 15–20 minutes each.",
            "Baby may cluster feed in the evening before a longer sleep stretch.",
            "Watch for wet diapers (6–8/day) and steady weight gain as reassurance."
          ]
        },
        {
          subtitle: "Formula-fed Baby",
          list: [
            "4–6 oz (120–180 ml) every 3–4 hours.",
            "Some babies begin sleeping through one longer stretch at night, skipping a feed.",
            "Avoid overfeeding; if baby turns away or pushes bottle, they are full."
          ]
        }
      ]
    },
    {
      title: "Real Mom Stories",
      subsections: [
        {
          subtitle: "Peek-a-Boo Giggles",
          content:
            "\"At 3 months, my son started giggling whenever I played peek-a-boo. After weeks of sleepless nights, those laughs felt like medicine for my soul. It was the first time I felt like we were connecting beyond survival.\" — Kavya, Bangalore"
        },
        {
          subtitle: "The First Long Sleep",
          content:
            "\"One night, my daughter slept 6 hours straight. I woke up panicked because I thought something was wrong, only to find her peacefully sleeping. That night gave me hope that the hard days do ease up.\" — Alisha, Pune"
        }
      ]
    },
    {
      title: "Checklist — Month 3 Essentials",
      list: [
        "A safe, colorful play mat for tummy time",
        "Soft rattles and grasping toys to encourage hand coordination",
        "A lightweight stroller for neighborhood walks",
        "Muslin blankets for swaddling or light covering",
        "A baby journal or app to track feeds, naps, and milestones",
        "Larger clothing (0–3 months often gets snug quickly!)",
        "Nursing pillow for comfortable feeds",
        "Black-and-white or high-contrast books for visual development"
      ]
    },
    {
      title: "Final Thoughts",
      content:
        "Month 3 marks a joyful shift in parenting — your baby is more alert, responsive, and interactive. For moms, confidence builds as routines settle in, even if sleep is still unpredictable. Celebrate these little victories and remember: your baby’s first giggles are as much a milestone for you as they are for them."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 3 — Giggles & Growing Confidence"
      description="Month 3 brings more interaction, cooing, and longer sleep stretches. Learn what to expect during this exciting stage of early motherhood."
      sections={sections}
      sidebarCategory="motherhood"
      sidebarTitle="Parenting Essentials"
    />
  );
}

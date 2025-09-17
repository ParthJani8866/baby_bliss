"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth2() {
  const sections = [
    {
      title: "🌸 Intro — Settling Into a Rhythm",
      content:
        "By month 2, many moms notice the first glimpses of predictability. Feeding and sleep may still feel chaotic, but babies begin staying awake longer and rewarding parents with genuine social smiles. This month is about bonding, building confidence, and cherishing those small but magical moments."
    },
    {
      title: "💪 Your Body & Emotions",
      list: [
        "Energy begins to slowly return, but fatigue from night wakings is still common.",
        "Hormones start to stabilize, reducing baby blues for many moms.",
        "Some hair shedding may begin — a normal postpartum change.",
        "Light exercise, short walks, or gentle stretches may now be possible (if cleared by your doctor).",
        "Emotionally, bonding grows stronger, but some moms feel anxious about routines or future responsibilities."
      ]
    },
    {
      title: "👶 Baby Growth & Milestones (Month 2)",
      list: [
        "⭐ **Social Smiles**: Your baby smiles in response to faces and voices.",
        "👀 **Visual Tracking**: Eyes follow objects for short distances; baby prefers high-contrast patterns.",
        "💪 **Neck Strength**: Improved head control during tummy time, lifting head briefly.",
        "🍼 **Weight Gain**: Typically 900g–1.8kg since birth.",
        "🛏️ **Sleep**: 14–17 hours/day, though still in short stretches.",
        "🗣️ **Sounds**: Coos, gurgles, and different cries for hunger, tiredness, or discomfort."
      ]
    },
    {
      title: "🍼 Feeding Schedule",
      content:
        "Feeding in month 2 still revolves around frequent sessions, but babies may start spacing feeds slightly more.",
      subsections: [
        {
          subtitle: "Breastfed Baby",
          list: [
            "8–12 feeds per day, still every 2–3 hours.",
            "Feeding sessions may be shorter but more efficient.",
            "Look for wet diapers (6–8 per day) to confirm good intake."
          ]
        },
        {
          subtitle: "Formula-fed Baby",
          list: [
            "4–6 oz (120–180 ml) every 3–4 hours.",
            "Total: about 6–8 feeds per day.",
            "Avoid overfeeding — if baby turns away or spits up often, scale back slightly."
          ]
        }
      ]
    },
    {
      title: "💌 Real Mom Stories",
      subsections: [
        {
          subtitle: "The First Smile",
          content:
            "\"The first time my baby smiled at me, I cried. It wasn’t just gas this time — it felt like she really knew me. That tiny smile erased weeks of exhaustion.\" — Ananya, Delhi"
        },
        {
          subtitle: "Finding a Rhythm",
          content:
            "\"By 2 months, I could finally tell the difference between my son’s hunger cry and his tired cry. It made me feel so much more confident as a mom.\" — Neha, Pune"
        }
      ]
    },
    {
      title: "📝 Checklist — Month 2 Essentials",
      list: [
        "🎀 **Tummy Time Mat**: Builds neck and shoulder strength.",
        "🖤 **Black-and-White Contrast Toys**: Stimulates early vision.",
        "🔔 **Soft Rattles**: Encourage grasping and hearing awareness.",
        "🪞 **Baby-Safe Mirror**: Helps baby explore reflections and faces.",
        "📖 **Board Books**: Reading early supports bonding and language.",
        "👶 **Comfortable Baby Carrier**: Keeps baby close while freeing your hands."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content:
        "Month 2 is when parenting begins to feel rewarding — those first smiles and coos are heart-melting. Sleep is still fragmented, but establishing gentle routines, embracing tummy time, and enjoying bonding moments will set a positive foundation for the months ahead."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 2 — Smiles & Early Connections"
      description="Motherhood Month 2 focuses on first smiles, bonding, and early growth milestones. Learn about development, feeding, and real mom stories."
      sections={sections}
      sidebarCategory="motherhood"
      sidebarTitle="Helpful Tools"
    />
  );
}

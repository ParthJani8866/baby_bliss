"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth4() {
  const sections = [
    {
      title: "Intro — Rolling Into a New Phase",
      content:
        "Month 4 is often described as the 'golden period' of early parenting. Your baby is more alert, more social, and you finally start seeing the little personality that has been hiding behind newborn sleepiness. For many mothers, this month brings a sense of relief — feeding becomes smoother, sleep is slightly more predictable, and you’re rewarded with laughter and playful interactions. While every baby develops at their own pace, month 4 is a time of exciting changes that set the stage for new skills in the months ahead."
    },
    {
      title: "Your Body & Emotions",
      list: [
        "Energy levels improve as your body continues to heal, but ongoing nighttime waking can still leave you tired.",
        "Hormonal hair shedding may peak — you might notice hair on your pillow or in the shower. This is temporary and usually resolves by month 6.",
        "If you had a C-section, numbness or sensitivity around the scar is normal. Gentle massage (if cleared by your doctor) may help.",
        "Breastfeeding moms often find their milk supply stabilizes, making feeds more predictable.",
        "Emotionally, many moms feel more confident now that they know their baby’s cues. However, anxiety about routines, returning to work, or balancing responsibilities can creep in.",
        "Mild 'baby blues' should have eased, but if you’re still feeling persistently sad, hopeless, or anxious, it’s important to discuss this with your doctor — it could be postpartum depression."
      ]
    },
    {
      title: "Baby Growth & Milestones (Month 4)",
      list: [
        "✔️ **Weight & Growth**: Many babies double their birth weight by month 4, and their cheeks look chubbier as baby fat develops.",
        "✔️ **Head Control**: Babies can now hold their head steady without support, making tummy time more enjoyable.",
        "✔️ **Rolling Over**: First rolls often happen this month — usually from tummy to back.",
        "✔️ **Hand-Eye Coordination**: Babies bring hands together, grab toys intentionally, and sometimes put them in their mouth.",
        "✔️ **Language Development**: You’ll hear babbling sounds like 'ba', 'ga', or squeals of joy. They’re testing their vocal cords!",
        "✔️ **Social Interaction**: Babies laugh out loud and may giggle when you play peek-a-boo or make silly faces.",
        "✔️ **Sleep Patterns**: Many babies begin sleeping 6–8 hours at night, though some still wake every 3–4 hours. Daytime naps (3–4) remain important."
      ]
    },
    {
      title: "Feeding Schedule",
      content:
        "Feeding in month 4 becomes more consistent. Babies are more efficient eaters, and sessions may be shorter but more effective. Solid foods are generally not recommended until 6 months, but you might start noticing early readiness cues.",
      subsections: [
        {
          subtitle: "Breastfed Baby",
          list: [
            "6–8 feeds/day, lasting 10–15 minutes each.",
            "Cluster feeding (frequent evening feeds) is less common now.",
            "You may notice your baby gets distracted during feeds — this is normal curiosity."
          ]
        },
        {
          subtitle: "Formula-fed Baby",
          list: [
            "4–6 oz (120–180 ml) every 3–4 hours.",
            "Night feeds may drop if your baby sleeps longer stretches.",
            "Do not start cereals or solids unless advised by your pediatrician."
          ]
        },
        {
          subtitle: "Signs Baby is *Almost* Ready for Solids (Not Yet!)",
          list: [
            "Sits with some support and good head control.",
            "Shows interest in your food — watches you eat, opens mouth.",
            "Doubles birth weight (a milestone that often happens between 4–6 months)."
          ]
        }
      ]
    },
    {
      title: "Real Mom Stories",
      subsections: [
        {
          subtitle: "The First Roll",
          content:
            "\"I’ll never forget the moment my daughter rolled over for the first time. I was sipping tea when I heard her grunt during tummy time — and suddenly, there she was on her back, smiling at me like she’d just conquered the world. That small roll felt like a giant leap.\" — Riya, Delhi"
        },
        {
          subtitle: "Finally, a Routine",
          content:
            "\"By the fourth month, things finally started to feel manageable. I could predict my son’s nap times, which meant I had moments for myself again — to shower, read, or simply drink my coffee hot. The predictability was a gift I didn’t know I needed.\" — Meera, Mumbai"
        }
      ]
    },
    {
      title: "Checklist — Month 4 Essentials",
      list: [
        "🎀 **Play Gym with Hanging Toys**: Encourages reaching, grabbing, and visual tracking.",
        "🎀 **Tummy Time Pillow**: Helps strengthen neck and shoulder muscles.",
        "🎀 **Teething Toys**: Some babies begin drooling and chewing, early signs of teething.",
        "🎀 **Stroller with Good Head Support**: Perfect for short outdoor walks as babies enjoy new sights.",
        "🎀 **Sleep Sack (Instead of Swaddle)**: Promotes safe sleep once babies start rolling.",
        "🎀 **Baby Mirror**: Helps babies recognize themselves and improves social interaction.",
        "🎀 **Rattles and Soft Toys**: Encourage motor skills and hand-eye coordination.",
        "🎀 **Milestone Journal or App**: Record first laughs, rolls, and adorable babbles."
      ]
    },
    {
      title: "Final Thoughts",
      content:
        "Month 4 is a joyful stage filled with laughter, play, and new skills. While routines are becoming more predictable, remember that every baby develops at their own pace. Celebrate small victories — whether it’s the first roll, the first giggle, or the first time your baby sleeps for 6 hours straight. These milestones mark not just your baby’s growth, but your growth as a confident, nurturing parent too."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 4 — Rolling & Routines"
      description="By month 4, babies begin rolling, laughing, and showing stronger head control. Learn what to expect, how to adjust routines, and stories from real moms."
      sections={sections}
      sidebarCategory="motherhood"
      sidebarTitle="Parenting Essentials"
    />
  );
}

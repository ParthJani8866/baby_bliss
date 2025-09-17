"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth8() {
  const sections = [
    {
      title: "🌟 Intro — Little Explorer on the Move",
      content:
        "By month 8, your baby is transforming into an active little explorer. Many babies begin pulling up to stand, teething kicks in more strongly, and their personalities shine brighter each day. While this stage is filled with laughter and discovery, it also demands extra supervision and patience."
    },
    {
      title: "💪 Your Body & Emotions",
      list: [
        "By now, many moms feel physically recovered, though fatigue from night waking may continue.",
        "If you’ve returned to work, juggling professional life and motherhood can feel draining — routines and support systems are vital.",
        "Some moms may feel emotional as their babies become more independent, while also cherishing the deeper bond forming through play and interaction.",
        "Postpartum mood changes can still linger — if anxiety or sadness feels overwhelming, don’t hesitate to seek professional help."
      ]
    },
    {
      title: "👶 Baby Growth & Milestones (Month 8)",
      list: [
        "🧗 **Pulling Up**: Babies may pull themselves up on furniture or parents’ hands.",
        "🚼 **Crawling Variations**: Some crawl traditionally, others do a commando crawl or scoot.",
        "🦷 **Teething**: The first teeth often erupt now (usually bottom central incisors).",
        "🗣️ **Babbling Advances**: Strings of sounds like 'mamama' or 'dadada' become more common.",
        "👀 **Separation Anxiety**: Babies may cry when you leave the room, but calm when you return.",
        "🎵 **Responding to Music**: Babies may bounce, clap, or sway to songs.",
        "📈 **Fine Motor Skills**: Picks up small objects using the beginnings of a pincer grasp."
      ]
    },
    {
      title: "🍼 Feeding Schedule (Month 8)",
      content:
        "Feeding at this stage includes both milk and a greater variety of solid foods. The focus is on texture exploration and nutrient-rich meals.",
      subsections: [
        {
          subtitle: "Milk Feeds",
          list: [
            "Breastfed: 4–6 feeds/day.",
            "Formula-fed: 24–30 oz (710–890 ml) total daily.",
            "Night feeds may decrease but still occur for comfort."
          ]
        },
        {
          subtitle: "Solids",
          list: [
            "Offer 2–3 meals and 1 snack daily.",
            "Textures can be thicker: mashed, minced, or small soft finger foods.",
            "Great options: mashed pumpkin, steamed peas, scrambled egg, soft chapati pieces dipped in dal.",
            "Introduce protein-rich foods like lentils, beans, and well-cooked meat.",
            "Avoid honey, whole nuts, and choking hazards."
          ]
        }
      ]
    },
    {
      title: "💌 Real Mom Stories",
      subsections: [
        {
          subtitle: "First Tooth Drama",
          content:
            "\"When my daughter’s first tooth appeared, she was cranky and drooling nonstop. I tried chilled teething rings, and they were lifesavers! Now every time she smiles, I see that tiny tooth peeking through, and my heart melts.\" — Priya, Chennai"
        },
        {
          subtitle: "Separation Anxiety",
          content:
            "\"I couldn’t even go to the bathroom without my son crying. At first, it was stressful, but over time I realized it’s his way of showing attachment. Now we play peek-a-boo to make short separations fun.\" — Aarti, Delhi"
        }
      ]
    },
    {
      title: "📝 Checklist — Month 8 Essentials",
      list: [
        "🦷 **Teething Toys**: Chilled rings or silicone teethers.",
        "🛋️ **Baby-Proofing Gear**: Outlet covers, cabinet locks, and playpen.",
        "🧗 **Safe Furniture**: Avoid sharp edges — babies are pulling up everywhere.",
        "🍽️ **Baby-Friendly Utensils**: Encourage self-feeding with soft spoons and divided plates.",
        "📚 **Interactive Books**: Flap books, touch-and-feel textures.",
        "🎶 **Musical Toys**: Drums, xylophones, or rattles for rhythm play.",
        "🍼 **Snack Cups**: Spill-proof containers for finger foods."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content:
        "Month 8 is equal parts exciting and exhausting. With crawling, pulling up, teething, and separation anxiety, your baby needs both freedom to explore and reassurance of your presence. This stage strengthens the emotional bond while preparing your little one for even bigger milestones ahead."
    }
  ];

  return (
    <BlogLayout
      title="Motherhood Month 8 — Pulling Up, Teething & Stronger Bonding"
      description="At Motherhood Month 8, babies pull up, babble more, and experience teething and separation anxiety. Learn about feeding, growth milestones, and real mom stories in this stage."
      sections={sections}
      sidebarCategory="motherhood"
      sidebarTitle="Baby-Proofing Essentials"
    />
  );
}

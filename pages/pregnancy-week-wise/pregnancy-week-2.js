"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek2() {
  const sections = [
    {
      title: "🌸 Intro — The Ovulation Phase",
      content: `
        Welcome to Week 2 of your pregnancy journey! Even though you are not technically pregnant yet, 
        this week is crucial because ovulation and possible fertilization usually occur. 
        Your body is gearing up to release an egg that could meet sperm and begin the miraculous process of creating a baby.  
        
        This is one of the most fertile times in your cycle, and timing is everything if you’re trying to conceive.
      `
    },
    {
      title: "👶 Baby’s Development (Conception Possibility)",
      content: `
        - There’s still no baby yet, but the stage is being set.  
        - Around mid-cycle, one of your ovaries releases a mature egg — this is **ovulation**.  
        - Once released, the egg travels through the fallopian tube and waits for sperm.  
        - If fertilization happens, the egg and sperm unite to form a **zygote** — the very first cell of your baby.  
        - This zygote contains all the genetic information from both parents, including hair color, eye color, and even some personality traits!  
        
        The magic of life truly begins here.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        During Week 2, you may start noticing signs that your body is fertile and ready for conception.  

        **Common experiences:**  
        - Clear, stretchy, egg-white-like cervical mucus (a sign of peak fertility).  
        - A slight rise in basal body temperature after ovulation.  
        - Mild pelvic discomfort or twinges (sometimes called **mittelschmerz**) when the egg is released.  
        - Heightened sense of smell, increased libido, or subtle mood shifts due to hormonal changes.  

        Many women feel normal, while others notice their bodies sending subtle “fertile signals.”  
      `
    },
    {
      title: "🥦 Health & Nutrition Tips",
      subsections: [
        {
          subtitle: "Vitamins & Supplements",
          content: `
            Continue taking **prenatal vitamins** with folic acid daily. 
            Add foods or supplements rich in zinc and vitamin E, which support egg health and sperm quality. 
            CoQ10 and omega-3 fatty acids are also beneficial if you’re focusing on fertility.
          `
        },
        {
          subtitle: "Diet & Fertility Foods",
          content: `
            Choose foods that promote hormone balance and ovulation:  
            - Avocados and nuts for healthy fats.  
            - Beans, lentils, and chickpeas for plant-based protein.  
            - Fresh fruits (especially berries) packed with antioxidants.  
            - Eggs for choline and protein.  
            
            Limit processed foods and trans fats, which can negatively impact fertility.
          `
        },
        {
          subtitle: "Avoid",
          content: `
            - Excess caffeine (stick to 1 cup of coffee/tea daily).  
            - Raw or undercooked seafood.  
            - Alcohol and smoking, as they can reduce fertility in both men and women.  
          `
        }
      ]
    },
    {
      title: "🧘 Lifestyle & Wellness",
      content: `
        Lifestyle plays a huge role in conception success.  

        **Suggestions:**  
        - Have intercourse every 1–2 days during your fertile window (the 5 days before ovulation and on ovulation day).  
        - Use ovulation predictor kits (OPKs) to pinpoint your most fertile days.  
        - Engage in light exercise like yoga, walking, or swimming to reduce stress and improve blood flow.  
        - Avoid excessive workouts or overexertion, which may disrupt ovulation.  
        - Practice relaxation techniques like meditation to keep stress hormones low.  
      `
    },
    {
      title: "💌 Real Mom Story — The Fertile Window",
      content: `
        "During our second month of trying, I started tracking ovulation using test strips. 
        I noticed the changes in my cervical mucus too, which confirmed my fertile window. 
        It felt empowering to understand my body better. 
        That was the month we conceived! Sometimes just being more in tune with your cycle makes all the difference."  
        — Radhika, Delhi
      `
    },
    {
      title: "✅ Checklist — Week 2",
      list: [
        "✔️ Track ovulation with apps, temperature charting, or OPKs.",
        "✔️ Continue prenatal vitamins with folic acid.",
        "✔️ Eat fertility-friendly foods rich in antioxidants and omega-3s.",
        "✔️ Have intercourse regularly during fertile days.",
        "✔️ Avoid smoking, alcohol, and excessive caffeine.",
        "✔️ Manage stress with gentle exercise or meditation."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 2 is one of the most exciting weeks of your pregnancy timeline, even though pregnancy hasn’t officially started yet.  
        The egg and sperm may meet, and conception could occur. By the end of this week, you might already be carrying the earliest form of your baby — a single cell with limitless potential.  

        Take care of yourself physically and emotionally, because this is where the journey truly begins.
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 2 — Ovulation & Fertilization"
      description="Pregnancy Week 2 of pregnancy is all about ovulation, fertilization, and preparing your body for conception. Learn what’s happening inside and how to boost fertility."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

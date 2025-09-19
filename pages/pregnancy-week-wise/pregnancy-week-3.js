"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek3() {
  const sections = [
    {
      title: "🌸 Intro — The Miracle of Conception",
      content: `
        Congratulations — Week 3 is when pregnancy can officially begin!  
        If sperm successfully met your egg last week, fertilization happens and a brand-new life is created.  
        This week is about microscopic events: one single cell forming, dividing, and traveling through your fallopian tube toward the uterus.  
        You won’t know you’re pregnant yet, but the groundwork of your baby’s future has started.
      `
    },
    {
      title: "👶 Baby’s Development (Zygote → Blastocyst)",
      content: `
        - The fertilized egg is now called a **zygote**.  
        - Within hours, it begins dividing into multiple cells — a process called **cleavage**.  
        - By day 3–4 post-fertilization, it becomes a **morula** (a ball of cells).  
        - By day 5–6, it transforms into a **blastocyst**, a hollow ball of cells with two parts:  
          - The **inner cell mass** (future baby).  
          - The **outer layer** (trophoblast — will become the placenta).  
        - The blastocyst continues traveling through the fallopian tube toward the uterus, where it will implant around the end of Week 3 or early Week 4.  
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        At this point, most women do not yet realize they’re pregnant.  
        However, some very early symptoms may begin due to hormonal shifts.  

        **Possible signs this week:**  
        - Light spotting (sometimes called **implantation bleeding**, though this more often occurs in Week 4).  
        - Mild cramping or a heavy feeling in the pelvis.  
        - Breast tenderness or tingling.  
        - Increased sense of smell or taste changes.  
        - Mood swings or fatigue from rising progesterone.  

        Many women feel completely normal at this stage — every body is different!
      `
    },
    {
      title: "🥦 Health & Nutrition Tips",
      subsections: [
        {
          subtitle: "Continue Prenatal Vitamins",
          content: `
            Stick with your daily **prenatal vitamins**, especially folic acid (400–800 mcg).  
            Neural tube development begins soon, so folate is absolutely critical now.  
          `
        },
        {
          subtitle: "Focus on Whole Foods",
          content: `
            Eat foods that support healthy cell division:  
            - Leafy greens (spinach, kale, broccoli) for folate.  
            - Dairy or fortified alternatives for calcium.  
            - Fish (low-mercury, like salmon) for omega-3s.  
            - Eggs and beans for protein and choline.  
          `
        },
        {
          subtitle: "Avoid Harmful Substances",
          content: `
            - Alcohol, smoking, and drugs — they can interfere with implantation and early development.  
            - Too much caffeine (limit to 200mg/day).  
            - Raw fish, unpasteurized dairy, and undercooked meats.  
          `
        }
      ]
    },
    {
      title: "🧘 Lifestyle & Wellness",
      content: `
        Implantation is about to happen, so supporting your body is key.  

        **Suggestions:**  
        - Rest well and aim for 7–8 hours of sleep.  
        - Manage stress with deep breathing or meditation. Stress hormones can affect implantation.  
        - Stay lightly active with walking or gentle yoga.  
        - If you’ve been trying for pregnancy, avoid excessive alcohol or high-intensity workouts.  
        - Share with your partner — emotional support is important during this waiting period.  
      `
    },
    {
      title: "💌 Real Mom Story — The Two-Week Wait",
      content: `
        "Week 3 was the hardest for me emotionally. I knew something might be happening inside, but I had to wait for confirmation.  
        I noticed small changes — fatigue and sore breasts — but I didn’t want to get too hopeful.  
        Looking back, it was the week my little one first existed, even though I had no idea yet."  
        — Meera, Bengaluru
      `
    },
    {
      title: "✅ Checklist — Week 3",
      list: [
        "✔️ Continue taking prenatal vitamins with folic acid.",
        "✔️ Stick to a balanced, fertility-friendly diet.",
        "✔️ Avoid alcohol, smoking, and harmful substances.",
        "✔️ Track symptoms, but remember it’s too early for most pregnancy tests.",
        "✔️ Stay calm and manage stress — implantation is delicate.",
        "✔️ Keep hydrated and get adequate sleep."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 3 is a time of incredible microscopic transformation — from a single cell to a rapidly dividing cluster of life.  
        You may not feel pregnant yet, but your body is already working overtime to nurture this new beginning.  
        Be gentle with yourself, keep up healthy habits, and trust that your body knows what to do.  
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 3 — Fertilization & Early Cell Division"
      description="Pregnancy Week 3 is when fertilization happens, and your baby begins life as a tiny ball of dividing cells. Learn what’s happening and how to support implantation."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

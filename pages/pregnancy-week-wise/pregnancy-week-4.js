"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek4() {
  const sections = [
    {
      title: "🌸 Intro — The Big Moment: Implantation",
      content: `
        Week 4 is often the first week you might suspect you’re pregnant.  
        This is the week when the fertilized egg (now a **blastocyst**) implants into your uterine lining.  
        Once implantation happens, your body begins producing **hCG (human chorionic gonadotropin)** — the hormone that pregnancy tests detect.  
        For many women, this is the week of the “missed period” and the first faint positive test!
      `
    },
    {
      title: "👶 Baby’s Development (Blastocyst to Embryo)",
      content: `
        - The blastocyst burrows into your uterine wall in a process called **implantation**.  
        - Cells in the outer layer (trophoblast) begin forming the **placenta**, which will supply nutrients and oxygen.  
        - The inner cell mass begins organizing into layers that will become your baby’s organs and tissues.  
        - Your baby is now technically called an **embryo**, though it’s only the size of a poppy seed (about 0.1–0.2 mm).  
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        With implantation and rising hormones, your body may start sending signals.  
        Some women notice symptoms, while others still feel completely normal.  

        **Common early signs:**  
        - Light spotting or implantation bleeding (usually pink or brown, lighter than a period).  
        - Mild cramping as the embryo attaches to the uterus.  
        - Breast tenderness, swelling, or tingling.  
        - Fatigue and needing extra rest.  
        - Increased urination from early hormonal shifts.  
        - Heightened sense of smell or sudden food aversions.  

        Some women mistake these for PMS symptoms — so don’t worry if you’re unsure!
      `
    },
    {
      title: "🧪 Pregnancy Testing",
      content: `
        - Most **home pregnancy tests** can detect hCG around the time of a missed period (end of Week 4).  
        - For more accurate results, test with **first morning urine** when hormone concentration is highest.  
        - A blood test at a doctor’s office can confirm pregnancy earlier and track hCG levels.  
      `
    },
    {
      title: "🥦 Health & Nutrition Tips",
      subsections: [
        {
          subtitle: "Continue Prenatal Vitamins",
          content: `
            Folic acid remains the superstar supplement — it supports early neural tube development.  
            Continue daily **prenatal vitamins** with folate, iron, and DHA.  
          `
        },
        {
          subtitle: "Balanced Diet",
          content: `
            Focus on nutrient-rich meals:  
            - Fruits and vegetables (antioxidants & fiber).  
            - Whole grains for steady energy.  
            - Lean proteins like chicken, fish (low-mercury), lentils, and eggs.  
            - Dairy or fortified alternatives for calcium.  
          `
        },
        {
          subtitle: "Avoid Harmful Foods",
          content: `
            - Raw seafood, undercooked meats, and unpasteurized dairy.  
            - Deli meats unless heated thoroughly.  
            - High-mercury fish (shark, swordfish, king mackerel).  
          `
        }
      ]
    },
    {
      title: "🧘 Lifestyle & Wellness",
      content: `
        - Avoid alcohol, smoking, and recreational drugs — all harmful in early pregnancy.  
        - Cut caffeine to under 200mg/day (about 1–2 small cups of coffee).  
        - Continue light to moderate exercise (walking, prenatal yoga).  
        - Prioritize rest — your body is adjusting to new hormone levels.  
        - Begin researching and choosing an **OB-GYN or midwife** if you haven’t already.  
      `
    },
    {
      title: "💌 Real Mom Story — The First Positive Test",
      content: `
        "At 4 weeks, I was a day late and decided to take a test.  
        The line was so faint, I thought my eyes were playing tricks on me.  
        But that tiny line changed everything — it was the start of the most exciting journey of my life."  
        — Neha, Delhi
      `
    },
    {
      title: "✅ Checklist — Week 4",
      list: [
        "✔️ Take a home pregnancy test if your period is late.",
        "✔️ Schedule your first prenatal doctor’s appointment.",
        "✔️ Continue prenatal vitamins with folic acid.",
        "✔️ Eat a balanced, nutrient-rich diet.",
        "✔️ Avoid smoking, alcohol, and excess caffeine.",
        "✔️ Rest as much as needed — fatigue is normal.",
        "✔️ Begin researching healthcare providers and prenatal care options."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 4 is when pregnancy becomes real for many women.  
        Implantation is complete, hormones are rising, and your baby has officially begun developing.  
        This is a magical but emotional time — filled with excitement, nervousness, and anticipation.  
        Remember: every pregnancy is unique. Trust your body, nurture yourself, and take it one week at a time.  
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 4 — Implantation & First Signs"
      description="Pregnancy Week 4 marks implantation, the first signs of pregnancy, and the possibility of a positive test. Learn about your baby’s development and early symptoms."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

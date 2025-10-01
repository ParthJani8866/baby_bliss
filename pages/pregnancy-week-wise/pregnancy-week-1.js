"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek1() {
  const sections = [
    {
      title: "🌸 Intro — Preparing for Conception",
      content: `
        Pregnancy might feel like it should start with conception, but medically, it’s counted from the first day of your last menstrual period (LMP). 
        That means Week 1 is technically before you’re even pregnant! Doctors use this method because it’s almost impossible to know the exact moment of conception. 
        So, Week 1 is the “ground zero” of your journey — your body is shedding the old uterine lining and preparing a fresh, cozy environment for a future embryo.
      `
    },
    {
      title: "👶 Baby’s Development (or Pre-Development)",
      content: `
        - At this point, there’s no baby yet. However, your body is getting ready for ovulation, which usually happens in Week 2.  
        - Your ovaries are maturing follicles, one of which will eventually release an egg.  
        - The uterus is cleaning house, removing the previous month’s lining during menstruation, and will soon rebuild it to support a fertilized egg.  
        - Hormones like **follicle-stimulating hormone (FSH)** are working behind the scenes to stimulate egg development.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        You are on your period this week. It may feel like business as usual, but this is the official start of your pregnancy clock.  

        **What you may experience:**
        - Menstrual cramps, fatigue, bloating, and mood swings.  
        - Low levels of estrogen and progesterone, which will rise again soon.  
        - Emotional ups and downs — some women feel hopeful and excited, while others feel stressed about starting their pregnancy journey.  
        
        Remember, this is a great time to focus on your health and set the stage for conception.
      `
    },
    {
      title: "🥦 Health & Nutrition Tips",
      subsections: [
        {
          subtitle: "Vitamins & Supplements",
          content: `
            Begin **prenatal vitamins** if you haven’t already. The most important one right now is **folic acid** (400–800 mcg daily). 
            This nutrient plays a key role in preventing neural tube defects, which form very early in pregnancy — often before you even know you’re pregnant. 
            Some doctors may also recommend iron, vitamin D, or DHA supplements depending on your health.
          `
        },
        {
          subtitle: "Diet & Hydration",
          content: `
            Focus on nutrient-rich foods that support fertility:  
            - Leafy greens (spinach, kale) for folate and iron.  
            - Whole grains for steady energy.  
            - Lean proteins (chicken, lentils, eggs) for cell development.  
            - Omega-3s (salmon, flaxseeds, walnuts) for hormone balance.  

            Stay hydrated with 8–10 glasses of water daily. Proper hydration helps regulate body temperature and supports reproductive health.
          `
        },
        {
          subtitle: "Avoid",
          content: `
            - Alcohol, smoking, and recreational drugs — all can interfere with fertility.  
            - Excess caffeine (limit to 200mg/day — about 1–2 small cups of coffee).  
            - Highly processed foods and too much sugar, which can disrupt hormonal balance.  
          `
        }
      ]
    },
    {
      title: "🧘 Lifestyle & Wellness",
      content: `
        This is a perfect time to build healthy habits that will carry you through pregnancy.  

        **Suggestions:**  
        - Track your menstrual cycle with an app or calendar — this will help identify ovulation later.  
        - Exercise lightly (walking, yoga, or Pilates) to reduce stress and regulate hormones.  
        - Prioritize 7–8 hours of sleep each night. Sleep is directly linked to fertility and hormonal balance.  
        - Try mindfulness practices like meditation, breathing exercises, or journaling to lower stress levels. High stress can affect ovulation.  
      `
    },
    {
      title: "💌 Real Mom Story — Preconception Reflections",
      content: `
        "When we decided to try for a baby, I didn’t realize that pregnancy was counted from my last period. 
        At first, it felt strange to be 'pregnant' when I was actually on my period. But I started taking folic acid right away, 
        improved my eating habits, and tracked my cycle carefully. Knowing my body was preparing for something so special made even this early stage feel meaningful."  
        — Anjali, Pune
      `
    },
    {
      title: "✅ Checklist — Week 1",
      list: [
        "✔️ Start prenatal vitamins with folic acid.",
        "✔️ Eat a balanced, fertility-friendly diet.",
        "✔️ Track your menstrual cycle and ovulation window.",
        "✔️ Stay hydrated and get 7–8 hours of sleep.",
        "✔️ Avoid smoking, alcohol, and excess caffeine.",
        "✔️ Book a preconception check-up if you haven’t had one recently."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 1 may feel uneventful because there’s no baby yet, but it’s the critical foundation of your pregnancy timeline. 
        The healthier and more prepared you are now, the stronger the environment you create for your baby in the weeks ahead. 
        Think of this week as planting the seeds for the journey of a lifetime.
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 1 — Preparing for Conception"
      description="Pregnancy Week 1 is counted from the first day of your last menstrual period. Discover what’s happening in Week 1, how your body prepares, and the best steps to take for a healthy start."
      mainImage="/images/Pregnancy week 1.jpg"
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

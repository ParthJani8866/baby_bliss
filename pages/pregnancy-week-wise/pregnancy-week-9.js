"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek9() {
  const sections = [
    {
      title: "🌸 Intro — Welcome to the Fetal Stage",
      content: `
        Congratulations, mama! 🎉 At **Week 9**, your baby officially graduates from the embryonic stage to the **fetal stage**.  
        This means all the major organs have begun forming, and now the focus shifts to growth and fine-tuning.  

        For you, symptoms may still be strong (thanks to surging hormones), but this is also a time when many moms feel emotionally closer to their pregnancy.  
        Every wave of nausea, fatigue, or food craving is a sign that your body is building a healthy baby. 💖
      `
    },
    {
      title: "👶 Baby’s Development — Looking More Human",
      content: `
        Your baby is developing at an incredible pace!  

        - **Size:** About 2.3–2.5 cm (around the size of a grape 🍇).  
        - **Head & Face:** Head is large but more rounded. Facial features like eyes, nose, and lips are more defined. Eyelids are fused shut for now.  
        - **Limbs:** Arms and legs are longer, with **tiny fingers and toes** becoming more distinct. Wrists, ankles, and elbows are forming.  
        - **Internal Organs:**  
          - Heart is fully formed and beating strongly at **170–180 bpm**.  
          - Liver is producing blood cells.  
          - Kidneys are developing and will soon start producing urine.  
          - Pancreas is forming insulin-producing cells.  
        - **Brain & Nervous System:** Rapid growth — the brain is developing 100,000+ new neurons every minute!  
        - **Movements:** Baby is making tiny jerky movements and may start flexing arms and legs (though you can’t feel it yet).  

        Fun fact: By Week 9, your baby already has **unique fingerprints** forming. 🌟
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        By now, you may feel like pregnancy is really settling in. Symptoms can be challenging but are also reassuring signs of progress.  

        **Common symptoms in Week 9:**  
        - 🤢 **Morning sickness** — nausea may still be strong.  
        - 😴 **Fatigue** — your body is working double-time to support baby.  
        - 👙 **Breast changes** — tenderness, darkening areolas, and visible veins.  
        - 💧 **Frequent urination** — growing uterus pressing on the bladder.  
        - 😭 **Mood swings** — emotional highs and lows are common.  
        - 🤯 **Headaches or light dizziness** — due to hormonal shifts.  
        - 🥴 **Bloating & constipation** — slower digestion from progesterone.  

        👉 If you’re struggling with nausea or constipation, talk to your doctor about safe remedies.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        - 🩺 **Prenatal check-ups**: You may have your first or second prenatal visit this week.  
        - 📷 **Ultrasound**: If scheduled, you might see your baby moving for the first time!  
        - 🧬 **Genetic testing**: Your doctor may start discussing first-trimester screening tests for chromosomal conditions.  
        - 🩸 **Lab tests**: Blood tests may check iron, thyroid, infections, and your blood type.  
        - 🧾 Ask your doctor about managing nausea, safe exercise, and weight gain goals.  
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Key Nutrients",
          content: `
            - **Folic acid**: Continue daily (critical for brain & spinal cord).  
            - **Iron**: Prevents anemia and supports blood supply.  
            - **Protein**: Lean meat, beans, tofu, and eggs.  
            - **Vitamin B6**: Helps reduce nausea (bananas, chicken, avocados).  
            - **Calcium & Vitamin D**: Build strong bones and teeth.  
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **small, frequent meals** to manage nausea.  
            - Stay hydrated — aim for 8–10 glasses of water daily.  
            - Choose whole grains, fresh fruits, and vegetables for steady energy.  
            - Limit processed/junk food that worsens bloating and fatigue.  
          `
        },
        {
          subtitle: "Foods to Avoid",
          content: `
            - Raw or undercooked seafood, meat, or eggs.  
            - High-mercury fish (shark, swordfish, king mackerel).  
            - Unpasteurized dairy products.  
            - Excess caffeine (stick to under 200mg/day).  
            - Alcohol, tobacco, and recreational drugs — strictly avoid.  
          `
        }
      ]
    },
    {
      title: "🧘 Lifestyle & Emotional Wellness",
      content: `
        - 🛌 Prioritize rest — naps are completely normal and necessary.  
        - 🚶‍♀️ Stay active with gentle movement: walking, stretching, or prenatal yoga.  
        - 🧘 Try meditation, breathing exercises, or calming music to reduce stress.  
        - 💕 Share your feelings with your partner, family, or support group.  
        - 📔 Start tracking milestones — belly photos, notes, and journal entries.  
        - 🛑 Avoid lifting heavy objects or overexerting yourself.  
      `
    },
    {
      title: "💌 Real Mom Story — The Grape-Sized Baby",
      content: `
        "When I found out my baby was the size of a grape at 9 weeks, it suddenly felt real.  
        The nausea was tough, but I had my first ultrasound and saw the baby move.  
        That tiny flicker of life gave me so much strength."  
        — Neha, Delhi
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 9",
      list: [
        "✔️ Keep taking prenatal vitamins daily.",
        "✔️ Drink plenty of water and eat small meals.",
        "✔️ Avoid alcohol, smoking, and unsafe foods.",
        "✔️ Schedule/attend prenatal appointments.",
        "✔️ Ask your doctor about first-trimester screening tests.",
        "✔️ Practice light exercise like walking or yoga.",
        "✔️ Rest and listen to your body’s signals.",
        "✔️ Document this stage with notes or photos."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 9 is a turning point — your baby is no longer an embryo but a tiny fetus with forming organs, fingers, toes, and even fingerprints.  
        While symptoms may still be intense, remember that every change is building the foundation for a healthy pregnancy.  

        This week is all about embracing growth — both your baby’s and your own journey into motherhood. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 9 — Entering the Fetal Stage"
      description="Pregnancy Week 9 marks the start of the fetal stage. Your baby is grape-sized with tiny fingers, toes, and organs forming rapidly. Learn what to expect for you and your baby."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

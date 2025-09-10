"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek24() {
  const sections = [
    {
      title: "🌸 Intro — Baby’s Lungs & Movements",
      content: `
        Welcome to **Week 24**! 🎉 Your baby is growing fast and becoming more active.  
        Movements are stronger and more noticeable, and you might start feeling tiny **hiccups**.  
        This week marks a critical point in lung development, preparing your baby for life outside the womb.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Lungs",
      content: `
        Your baby is about the size of an **ear of corn** 🌽 (~21–22 cm), weighing ~600 grams.  

        - **Lungs:** Bronchioles continue developing; alveoli multiply; surfactant production begins.  
        - **Movements:** Kicks, rolls, stretches, and somersaults are strong and coordinated.  
        - **Skin & Hair:** Lanugo covers the body; skin begins to thicken but is still translucent.  
        - **Facial Features:** Expressions may be noticed via ultrasound.  
        - **Senses:** Baby responds to sounds, light, and touch; may move in response to voices or music.  
        - **Digestive System:** Swallows amniotic fluid; intestines continue maturing.  
        - **Brain & Nervous System:** Rapid growth continues; neural connections strengthen, supporting movements and sensory responses.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body continues adapting to a growing baby.  

        **Common experiences:**  
        - 🌸 Baby bump more prominent; uterus near the level of the belly button or slightly above.  
        - 💧 Back pain, round ligament discomfort, and leg cramps may persist.  
        - 👙 Breasts continue growing; colostrum leakage may occur.  
        - 🌿 Energy levels may fluctuate; some fatigue is normal.  
        - 💤 Sleep may be disrupted due to belly growth, bathroom trips, or fetal movements.  
        - 🤰 Occasional swelling in feet, ankles, or hands.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 24:  

        - 📋 Routine prenatal visit: weight, blood pressure, and review of symptoms.  
        - 📷 Ultrasound (if scheduled) to check growth and movements.  
        - 🩺 Discuss any unusual pain, bleeding, or reduced fetal movements.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports muscle and organ development.  
            - **Calcium & Vitamin D:** Critical for bone and teeth development.  
            - **Iron & Vitamin C:** Prevents anemia and supports blood health.  
            - **Omega-3 (DHA):** Supports brain, eye, and lung development.  
            - **Healthy Fats:** Nuts, seeds, avocado, olive oil support fat layer formation and energy.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** rich in vegetables, fruits, whole grains, protein, and healthy fats.  
            - Include fiber to prevent constipation.  
            - Stay hydrated — 8–10 glasses of water daily.  
            - Small, frequent meals help maintain energy and reduce discomfort.
          `
        },
        {
          subtitle: "Foods to Avoid",
          content: `
            - Raw or undercooked seafood, eggs, or meat.  
            - Unpasteurized dairy.  
            - High-mercury fish.  
            - Alcohol and smoking — strictly avoid.  
            - Excess caffeine (>200 mg/day).
          `
        }
      ]
    },
    {
      title: "🧘 Lifestyle & Emotional Wellness",
      content: `
        - 🚶 Gentle exercises: walking, swimming, prenatal yoga.  
        - 🛌 Prioritize rest and quality sleep.  
        - 💬 Share pregnancy experiences with partner, family, or support group.  
        - 📔 Track pregnancy milestones via journal or app.  
        - 🧘 Mindfulness, meditation, and breathing exercises reduce stress and improve bonding.
      `
    },
    {
      title: "💌 Real Mom Story — Feeling Baby Hiccups",
      content: `
        "At 24 weeks, I started feeling tiny, rhythmic movements — baby’s hiccups!  
        It was amazing to feel these little patterns and know my baby is growing strong and healthy."  
        — Priya, Delhi
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 24",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced meals rich in protein, calcium, and healthy fats.",
        "✔️ Attend prenatal appointments and ultrasounds if scheduled.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Track baby movements and report any concerns.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy feeling baby hiccups and stronger movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 24 is an exciting milestone — baby’s lungs are developing, movements are strong and coordinated, and hiccups may be felt for the first time.  
        Embrace this stage, bond with your baby, and continue nurturing your health. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 24 — Lung Development & Baby Hiccups"
      description="Pregnancy Week 24 marks significant lung development and stronger baby movements. Baby is corn-sized, mom may feel hiccups, and prenatal care continues. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

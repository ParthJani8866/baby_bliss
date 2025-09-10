"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek31() {
  const sections = [
    {
      title: "🌸 Intro — Strong Movements & Growing Baby",
      content: `
        Welcome to **Week 31**! 🎉 Baby continues to grow rapidly and becomes more active.  
        You may notice stronger kicks, rolls, and stretches, and some movements may even be visible from the outside.  
        Mom’s body adjusts to accommodate the growing baby, which can bring both excitement and challenges.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Organs",
      content: `
        Your baby is about the size of a **pineapple** 🍍 (~41 cm), weighing ~1.5 kg.  

        - **Movements:** Strong, coordinated kicks, rolls, and stretches; baby responds to sound, light, and touch.  
        - **Body Fat:** Fat continues to accumulate, giving baby a rounder appearance and regulating body temperature.  
        - **Lungs:** Alveoli and surfactant production increase, preparing for breathing after birth.  
        - **Brain & Nervous System:** Neural connections strengthen; sleep-wake cycles become more established.  
        - **Skin:** Pink, smooth, and less translucent; lanugo continues thinning.  
        - **Senses:** Can respond to voices, touch, and light; may recognize familiar sounds.  
        - **Digestive System:** Swallows amniotic fluid; digestive organs continue maturing.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is adjusting to a larger, more active baby.  

        **Common experiences:**  
        - 🌸 Belly is prominent; uterus reaches just below rib cage.  
        - 💧 Back pain, pelvic pressure, Braxton Hicks contractions, and leg cramps are common.  
        - 👙 Breasts may leak colostrum; wear supportive bras.  
        - 🌿 Energy may fluctuate; fatigue is normal.  
        - 💤 Sleep may be interrupted due to size, movements, or frequent bathroom trips.  
        - 🤰 Swelling in feet, ankles, or hands; elevate feet when resting.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 31:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 🩺 Monitor for signs of preterm labor or unusual symptoms.  
        - 📷 Ultrasound (if indicated) to check growth, amniotic fluid, and fetal position.  
        - 🩺 Report any unusual pain, bleeding, or decreased fetal movements promptly.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports organ and muscle development.  
            - **Calcium & Vitamin D:** Crucial for bones and teeth.  
            - **Iron & Vitamin C:** Prevents anemia and supports blood health.  
            - **Omega-3 (DHA):** Supports brain, eye, and lung development.  
            - **Healthy Fats:** Nuts, seeds, avocado, olive oil for fat layer formation and energy.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** with vegetables, fruits, whole grains, protein, and healthy fats.  
            - Include fiber to prevent constipation.  
            - Stay hydrated — 8–10 glasses of water daily.  
            - Small, frequent meals help digestion and comfort.
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
        - 🧘 Practice mindfulness, meditation, and breathing exercises to reduce stress and connect with your baby.
      `
    },
    {
      title: "💌 Real Mom Story — Feeling Every Stretch",
      content: `
        "Week 31 was unforgettable — I could feel my baby moving and stretching so vividly that sometimes it took my breath away.  
        It’s incredible to experience how active and responsive the baby is at this stage."  
        — Ritu, Hyderabad
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 31",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal check-ups and report any unusual symptoms.",
        "✔️ Track baby movements and report any concerns.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy stronger, more distinct baby movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 31 is an exciting stage — baby is growing rapidly, body fat increases, lungs and brain mature further, and movements are strong and visible.  
        Enjoy feeling each kick, roll, and stretch as your baby prepares for the final weeks before birth. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 31 — Strong Movements & Rapid Growth"
      description="Pregnancy Week 31 brings strong, coordinated baby movements, rapid growth, lung and brain maturation, and increased maternal awareness of fetal activity."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek29() {
  const sections = [
    {
      title: "🌸 Intro — Rapid Growth & Strong Movements",
      content: `
        Welcome to **Week 29**! 🎉 Your baby is growing rapidly, with stronger and more coordinated movements.  
        This week, the third trimester is in full swing, and mom may notice more pronounced kicks, stretches, and occasional jabs to the ribs or bladder.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Body Fat",
      content: `
        Your baby is about the size of a **butternut squash** 🎃 (~38–39 cm), weighing ~1.1–1.2 kg.  

        - **Movements:** Strong kicks, rolls, stretches; baby responds to external stimuli like sound, light, and touch.  
        - **Body Fat:** Rapid fat accumulation helps regulate temperature after birth.  
        - **Lungs:** Alveoli continue maturing; surfactant production increases for breathing readiness.  
        - **Brain & Nervous System:** Neural connections strengthen; baby may show patterns of sleep and wakefulness.  
        - **Skin:** Pink, smooth, and less translucent; lanugo may start thinning.  
        - **Senses:** Eyes can open and respond to light; baby recognizes familiar voices.  
        - **Digestive System:** Swallows amniotic fluid; intestines continue maturing.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is adjusting to a larger, more active baby.  

        **Common experiences:**  
        - 🌸 Belly is prominent; uterus 3–4 inches above the belly button.  
        - 💧 Back pain, pelvic pressure, Braxton Hicks contractions, leg cramps, and shortness of breath may occur.  
        - 👙 Breasts continue enlarging; colostrum leakage possible.  
        - 🌿 Energy may fluctuate; fatigue is normal.  
        - 💤 Sleep may be affected due to belly size, movements, or frequent bathroom trips.  
        - 🤰 Swelling in feet, ankles, or hands; elevate feet when resting.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 29:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 🩺 Gestational diabetes follow-up if screening done previously.  
        - 📷 Ultrasound (if indicated) to monitor growth, amniotic fluid, and fetal position.  
        - 🩺 Report any unusual pain, bleeding, or reduced fetal movements promptly.
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
            - Eat small, frequent meals to improve digestion and comfort.
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
      title: "💌 Real Mom Story — Feeling Every Kick",
      content: `
        "Week 29 was amazing — I could feel my baby’s kicks and rolls more distinctly, and even hiccups were noticeable.  
        The pelvic pressure reminded me that baby is growing rapidly. It’s both challenging and magical!"  
        — Sneha, Mumbai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 29",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal check-ups and follow up on gestational diabetes if needed.",
        "✔️ Track baby movements and report any concerns.",
        "✔️ Engage in gentle, pregnancy-safe exercises.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy stronger, more pronounced baby movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 29 is a thrilling stage — baby is growing rapidly, gaining body fat, and movements are stronger and more distinct.  
        Enjoy feeling every kick, stretch, and hiccup as your baby prepares for the final weeks before birth. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 29 — Stronger Movements & Rapid Growth"
      description="Pregnancy Week 29 brings stronger, coordinated baby movements, rapid growth, increased body fat, and continued lung and brain maturation. Mom may feel pronounced kicks, stretches, and pelvic pressure."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

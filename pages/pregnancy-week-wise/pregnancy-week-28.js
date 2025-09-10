"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek28() {
  const sections = [
    {
      title: "🌸 Intro — Entering the Third Trimester",
      content: `
        Welcome to **Week 28**! 🎉 You’ve officially entered the third trimester.  
        Baby is growing quickly, lungs and brain continue maturing, and movements are more noticeable.  
        This week marks a major step toward viability outside the womb, as lungs produce more surfactant and baby’s body fat increases.
      `
    },
    {
      title: "👶 Baby’s Development — Growth & Organs",
      content: `
        Your baby is about the size of an **eggplant** 🍆 (~37–38 cm), weighing ~1 kg.  

        - **Movements:** Strong, distinct kicks, rolls, and stretches; baby may even respond to your voice and touch.  
        - **Lungs:** Alveoli and surfactant production increase, preparing for breathing after birth.  
        - **Brain & Nervous System:** Rapid neural growth; baby may have more distinct sleep-wake cycles and respond to stimuli.  
        - **Skin:** Less translucent, gradually becoming pink and soft; fat layer formation continues.  
        - **Senses:** Reacts to sound, light, and touch; may recognize voices.  
        - **Digestive System:** Swallows amniotic fluid; intestines and gut continue maturing.  
        - **Hair & Nails:** Hair and nails grow steadily; lanugo may start fading.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body is adjusting to a rapidly growing baby and third-trimester changes.  

        **Common experiences:**  
        - 🌸 Belly is more prominent; uterus now 3–4 inches above belly button.  
        - 💧 Back pain, pelvic pressure, Braxton Hicks contractions, and leg cramps may occur.  
        - 👙 Breasts continue enlarging; colostrum leakage possible.  
        - 🌿 Energy may fluctuate; fatigue is common.  
        - 💤 Sleep may be interrupted due to belly size, movements, or bathroom trips.  
        - 🤰 Swelling in feet, ankles, or hands; elevate feet when resting.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 28:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 🩺 Gestational diabetes screening is usually recommended around this week.  
        - 📷 Ultrasound (if needed) to monitor growth, movements, and amniotic fluid levels.  
        - 🩺 Report any unusual pain, bleeding, or reduced fetal movements promptly.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports organ and muscle growth.  
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
            - Small, frequent meals help with digestion and comfort.
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
        - 🧘 Mindfulness, meditation, and breathing exercises reduce stress and help connect with your baby.
      `
    },
    {
      title: "💌 Real Mom Story — Third Trimester Excitement",
      content: `
        "Week 28 felt magical — I could feel every kick and roll, and my belly movements became more pronounced.  
        Knowing my baby is preparing lungs and brain for life outside gave me reassurance and excitement!"  
        — Meera, Delhi
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 28",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal check-ups and gestational diabetes screening.",
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
        Week 28 is an exciting milestone — baby is growing rapidly, lungs and brain continue maturing, and movements are strong and distinct.  
        Cherish feeling each kick, roll, and hiccup as your baby prepares for the next stages of development. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 28 — Entering the Third Trimester"
      description="Pregnancy Week 28 marks entry into the third trimester with stronger, distinct baby movements, lung and brain maturation, and increased maternal awareness of fetal activity. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

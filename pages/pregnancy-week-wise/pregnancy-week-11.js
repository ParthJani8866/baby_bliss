"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek11() {
  const sections = [
    {
      title: "🌸 Intro — Approaching the End of the First Trimester",
      content: `
        Welcome to **Week 11**! 🎉 You’re almost through the first trimester.  
        Your baby is growing rapidly, and many of the major organs are fully formed — now it’s mostly about growth and maturation.  

        This week, your baby is about the size of a **lime** (approx. 4–5 cm) and is starting to look more like a tiny human.  
        Moms may start noticing some easing of early pregnancy symptoms, though fatigue and nausea can still persist.
      `
    },
    {
      title: "👶 Baby’s Development — Tiny but Mighty",
      content: `
        Your baby is developing fast this week:  

        - **Size:** ~4–5 cm (lime-sized), weighing ~7–8 grams.  
        - **Head & Face:** Eyes are fully formed, though fused shut. Ears are nearly in final position, nose and mouth are defined.  
        - **Limbs:** Arms and legs are longer, with tiny fingers and toes fully separated. Fingernails and toenails are forming.  
        - **Movements:** Baby can flex, kick, and make small movements (not yet felt by mom).  
        - **Internal Organs:**  
          - Heart pumps blood efficiently; heartbeat is strong (~170 bpm).  
          - Kidneys produce small amounts of urine.  
          - Liver produces red blood cells.  
          - Brain continues rapid growth — neurons forming fast.  
        - **Genitalia:** External genitalia are forming, but it’s still too early to reliably determine sex on ultrasound.  
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Week 11 may feel more comfortable than earlier weeks, but every mom’s experience is unique.  

        **Common symptoms:**  
        - 🤢 Nausea and vomiting may start to ease, but can persist.  
        - 😴 Fatigue remains due to high progesterone levels.  
        - 👙 Breast tenderness, tingling, or growth continues.  
        - 💧 Frequent urination continues.  
        - 🌸 Mild roundness of lower abdomen may start showing.  
        - 😭 Mood swings are normal due to hormonal changes.  
        - 🥴 Headaches or light dizziness may occur.  

        Tips: Listen to your body, rest when needed, and continue gentle exercise.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        This is a key week for prenatal care:  

        - 📋 **Prenatal checkup:** Blood pressure, weight, and symptom review.  
        - 📷 **Ultrasound:** Baby may appear more active; heartbeat visible.  
        - 🧬 **First-trimester screening:** Nuchal translucency scan and blood tests may be done between weeks 11–13.  
        - 💉 **Vaccinations:** If you missed flu or other vaccines, discuss with your doctor.  
        - 🩺 Discuss any lingering symptoms such as nausea or fatigue.  
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Nutrients to Focus On",
          content: `
            - **Folic Acid:** Continue daily to support neural tube development.  
            - **Iron & Vitamin C:** Prevent anemia, support blood flow.  
            - **Protein:** Lean meats, legumes, eggs for growth and repair.  
            - **Calcium & Vitamin D:** Support bone and teeth development.  
            - **Omega-3s (DHA):** Aid brain and eye development.  
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **small, frequent meals** to manage nausea.  
            - Include **high-fiber foods** to ease constipation.  
            - Stay hydrated with water and herbal teas.  
            - Avoid skipping meals; aim for nutrient-dense snacks like yogurt, nuts, and fruit.  
          `
        },
        {
          subtitle: "Foods to Avoid",
          content: `
            - Raw or undercooked seafood, eggs, or meat.  
            - Unpasteurized dairy products.  
            - High-mercury fish.  
            - Alcohol and smoking — strictly off-limits.  
            - Excess caffeine (>200 mg/day).  
          `
        }
      ]
    },
    {
      title: "🧘 Lifestyle & Emotional Wellness",
      content: `
        - 🚶 Gentle exercise: Walking, prenatal yoga, stretching.  
        - 🛌 Nap or rest when tired; listen to your body.  
        - 💬 Talk to your partner or support group about your experiences.  
        - 📔 Keep a pregnancy journal or photo diary to track changes.  
        - 🧘 Mindfulness: Meditation, deep breathing, or calm music can reduce stress.  
      `
    },
    {
      title: "💌 Real Mom Story — Lime-Sized Miracle",
      content: `
        "At 11 weeks, my baby was the size of a lime, and I could finally see the first real bumps in my belly.  
        The nausea was slowly fading, and I felt a stronger bond seeing the tiny shape on ultrasound.  
        Every little milestone felt like magic!"  
        — Meera, Chennai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 11",
      list: [
        "✔️ Continue prenatal vitamins and hydration.",
        "✔️ Eat small, nutrient-rich meals.",
        "✔️ Attend prenatal appointments and first-trimester screenings if scheduled.",
        "✔️ Practice gentle exercise daily.",
        "✔️ Track symptoms and share any concerns with your doctor.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Take photos or keep a pregnancy journal.",
        "✔️ Rest and listen to your body’s cues."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 11 is a beautiful stage: almost the end of the first trimester, your baby is more human than ever.  
        Continue nurturing your body and your growing baby, celebrate small milestones, and look forward to the coming weeks when energy often returns and the second trimester begins! 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 11 — Almost Done with First Trimester"
      mainImage="/images/Pregnancy Week 11.jpg"
      description="Pregnancy Week 11 marks the final full week of the first trimester. Baby is lime-sized, organs are forming, and movements are beginning. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

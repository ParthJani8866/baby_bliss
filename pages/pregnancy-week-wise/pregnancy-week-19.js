"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek19() {
  const sections = [
    {
      title: "🌸 Intro — Baby Hair & Pronounced Movements",
      content: `
        Welcome to **Week 19**! 🎉 Your baby is growing quickly, and this week marks some exciting milestones.  
        Fine hair called **lanugo** covers the baby’s body, helping regulate temperature. Mom may feel stronger, more pronounced movements, giving a real sense of your growing little one.
      `
    },
    {
      title: "👶 Baby’s Development — Lanugo & Rapid Growth",
      content: `
        Your baby is about the size of a **mango** 🥭 (~15 cm), weighing ~240 grams.  

        - **Hair & Skin:** Fine lanugo hair covers the body; skin still translucent.  
        - **Limbs & Movements:** Baby’s kicks, stretches, and rolls are stronger; movements may be noticeable to mom.  
        - **Fingers & Toes:** Nails continue to grow; fingerprints and toe prints well-formed.  
        - **Facial Features:** Eyebrows, eyelids, and eyelash development continues.  
        - **Internal Organs:**  
          - Heart pumps blood efficiently.  
          - Kidneys produce urine; bladder fills and empties.  
          - Digestive system continues maturing; intestines absorb amniotic fluid nutrients.  
        - **Movements:** Mom can feel distinct kicks and rolls; some may even see them externally.  
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body continues adapting to the growing baby.  

        **Common experiences:**  
        - 🌸 Baby bump more prominent; uterus grows higher.  
        - 💧 Backaches, leg cramps, and round ligament pain may appear.  
        - 👙 Breasts continue growing; may leak colostrum.  
        - 🌿 Energy and mood generally positive.  
        - 💤 Sleep may be interrupted by bathroom trips or belly discomfort.  
        - 🤰 Mild swelling in feet or ankles possible.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 19:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 📷 Ultrasound: Mid-pregnancy anatomy scan may be performed.  
        - 🧬 Screening: Review results of quad screen or other mid-trimester tests.  
        - 🩺 Report any unusual pain, bleeding, or reduced fetal movements immediately.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports growth and development.  
            - **Calcium & Vitamin D:** For baby’s bones and teeth.  
            - **Iron & Vitamin C:** Prevents anemia and supports blood health.  
            - **Omega-3 (DHA):** Supports brain and eye development.  
            - **Healthy Fats:** Nuts, seeds, avocado support fat layer development.
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat balanced meals with vegetables, fruits, whole grains, protein, and healthy fats.  
            - Include fiber to prevent constipation.  
            - Stay hydrated — 8–10 glasses of water daily.  
            - Small, frequent meals maintain energy and reduce discomfort.  
          `
        },
        {
          subtitle: "Foods to Avoid",
          content: `
            - Raw or undercooked seafood, eggs, or meat.  
            - Unpasteurized dairy.  
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
        - 🚶 Gentle exercises: walking, swimming, prenatal yoga.  
        - 🛌 Prioritize rest and sleep.  
        - 💬 Communicate openly with partner or support group.  
        - 📔 Track pregnancy milestones with photos or journal entries.  
        - 🧘 Practice mindfulness, meditation, and deep-breathing exercises to reduce stress.
      `
    },
    {
      title: "💌 Real Mom Story — Feeling Baby Strongly",
      content: `
        "At 19 weeks, I could really feel my baby moving, stretching, and even rolling!  
        It was amazing to see my belly shift and feel the little flutters turning into stronger movements.  
        Every kick reminded me that my baby was healthy and growing."  
        — Meera, Chennai
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 19",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal appointments and mid-pregnancy ultrasound.",
        "✔️ Engage in gentle, pregnancy-safe exercise.",
        "✔️ Track baby movements and report concerns if any.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy feeling baby’s stronger movements."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 19 is full of excitement as your baby grows stronger, develops lanugo, and movements become more distinct.  
        Enjoy this phase, continue self-care, and celebrate the amazing journey of pregnancy. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 19 — Baby Hair & Pronounced Movements"
      description="Pregnancy Week 19 marks baby’s lanugo development and stronger movements. Baby is mango-sized, and mom can feel distinct kicks. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

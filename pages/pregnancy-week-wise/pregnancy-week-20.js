"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek20() {
  const sections = [
    {
      title: "🌸 Intro — Halfway There!",
      content: `
        Congratulations! 🎉 You’ve reached **Week 20**, the official halfway point of your pregnancy.  
        Your baby is growing rapidly, movements are more coordinated, and you may feel kicks and stretches more frequently.  
        The belly is becoming more prominent, and this week often brings a sense of excitement and connection as you feel your baby more actively.
      `
    },
    {
      title: "👶 Baby’s Development — Midway Milestones",
      content: `
        Your baby is about the size of a **banana** 🍌 (~16–17 cm), weighing ~300 grams.  

        - **Skeleton & Bones:** Bones continue hardening; cartilage gradually replaced by bone.  
        - **Movements:** Baby kicks, stretches, flips, and may respond to touch and sound. Mom may notice stronger and more frequent movements.  
        - **Hair & Skin:** Lanugo covers the body; eyebrows and scalp hair continue growing.  
        - **Internal Organs:**  
          - Heart pumps ~25–30 liters of blood per day.  
          - Kidneys producing urine; bladder filling and emptying regularly.  
          - Digestive system continues maturing; baby swallows amniotic fluid.  
        - **Sensory Development:** Taste buds forming; baby can hear muffled sounds from outside.  
        - **Genitalia:** Clearly visible on ultrasound if parents wish to know sex.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Mom’s body shows more visible changes.  

        **Common experiences:**  
        - 🌸 Baby bump is clearly visible; uterus reaches around the belly button.  
        - 💧 Back pain, round ligament pain, and leg cramps may persist.  
        - 👙 Breasts continue growing; colostrum leakage may occur.  
        - 🌿 Energy levels remain good; mood is generally stable.  
        - 💤 Sleep may be affected by belly size or bathroom trips.  
        - 🤰 Occasional swelling in feet or ankles, especially after long periods of standing.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key check-ins for Week 20:  

        - 📋 Routine prenatal visit: weight, blood pressure, and symptom review.  
        - 📷 **Anatomy Scan/Level 2 Ultrasound:**  
          - Check baby's growth, organs, heart, limbs, and spine.  
          - Determine sex if desired.  
        - 🩺 Discuss any unusual pain, bleeding, or changes in fetal movements.
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Protein:** Supports growth of muscles and organs.  
            - **Calcium & Vitamin D:** Crucial for bones and teeth.  
            - **Iron & Vitamin C:** Prevents anemia and supports blood health.  
            - **Omega-3 (DHA):** Brain and eye development.  
            - **Healthy Fats:** Nuts, seeds, avocado, olive oil support growth and fat layers.  
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** with vegetables, fruits, whole grains, protein, and healthy fats.  
            - Include fiber to prevent constipation.  
            - Hydrate well — 8–10 glasses of water daily.  
            - Small, frequent meals maintain energy and comfort.  
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
        - 🚶 Gentle exercises: walking, swimming, prenatal yoga.  
        - 🛌 Prioritize rest and quality sleep.  
        - 💬 Communicate with partner, family, or support group about pregnancy experiences.  
        - 📔 Track pregnancy milestones with photos, journal, or a pregnancy app.  
        - 🧘 Practice mindfulness, meditation, and breathing exercises to reduce stress.
      `
    },
    {
      title: "💌 Real Mom Story — Halfway Feeling",
      content: `
        "Week 20 was magical — I could feel my baby moving more frequently and strongly.  
        The anatomy scan showed my little one was healthy, and seeing the tiny arms and legs moving on the screen was unforgettable!"  
        — Shruti, Delhi
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 20",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals with protein, calcium, and healthy fats.",
        "✔️ Attend prenatal appointments and anatomy scan.",
        "✔️ Engage in gentle, safe exercises.",
        "✔️ Track baby movements and report concerns if any.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document pregnancy milestones and belly growth.",
        "✔️ Rest, hydrate, and enjoy feeling the baby’s movements!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 20 marks a major milestone — halfway through your pregnancy!  
        Baby movements are stronger, development continues rapidly, and mom’s belly is more pronounced.  
        Celebrate this exciting phase and continue nurturing your body and baby. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 20 — Halfway There & Stronger Baby Movements"
      description="Pregnancy Week 20 marks the halfway point, stronger baby movements, and mid-pregnancy anatomy scan. Baby is banana-sized, and mom may feel frequent kicks. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

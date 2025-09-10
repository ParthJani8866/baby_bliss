"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek14() {
  const sections = [
    {
      title: "🌸 Intro — Energy Returns & Baby Grows",
      content: `
        Welcome to **Week 14**! 🎉 You’re now in the heart of your second trimester.  
        Many moms notice a return of energy, improved mood, and relief from nausea.  

        Your baby is growing quickly and starting to look more like a tiny human, with more defined facial features and longer limbs.  
        This week is all about growth, movement, and preparing your body for the weeks ahead.
      `
    },
    {
      title: "👶 Baby’s Development — More Expressive & Active",
      content: `
        Your baby is about the size of a **lemon** 🍋 (~8–9 cm), weighing ~43 grams.  

        - **Head & Face:** Eyelids fully formed, eyebrows appearing, mouth can make sucking movements.  
        - **Limbs & Movements:** Arms and legs grow longer; baby can bend elbows, wrists, knees, and ankles.  
        - **Fingers & Toes:** Fully separated, nails forming.  
        - **Movements:** Tiny movements increase — rolling, stretching, and kicking (though you won’t feel them yet).  
        - **Internal Organs:**  
          - Kidneys produce urine.  
          - Liver, spleen, and pancreas continue developing.  
          - Brain continues rapid growth and nerve connections.  
        - **Genitalia:** More distinct, though ultrasound may still be needed to determine sex.  
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Week 14 often brings **increased comfort and energy**.  

        **Common experiences:**  
        - 🌸 Nausea usually fades completely.  
        - 😴 Fatigue lessens, energy returns.  
        - 👙 Breasts continue to grow; darkening of areolas may occur.  
        - 💧 Frequent urination continues due to growing uterus.  
        - 🌿 Mood stabilizes; many women feel more positive.  
        - 🌸 Belly may start to show a small bump, especially for first-time moms.  
        - 🤯 Occasional mild headaches or dizziness can occur.  
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Key prenatal check-ins this week:  

        - 📋 Routine prenatal appointment: check weight, blood pressure, symptoms.  
        - 📷 Ultrasound: Baby’s anatomy and growth may be assessed.  
        - 🧬 Screening: Any first-trimester results reviewed; additional testing if recommended.  
        - 🩺 Discuss any ongoing symptoms or concerns with your healthcare provider.  
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Folic Acid:** Continue daily for neural tube and brain development.  
            - **Iron & Vitamin C:** Support blood health and prevent anemia.  
            - **Protein:** Lean meats, beans, tofu, eggs for growth and repair.  
            - **Calcium & Vitamin D:** Bone and teeth development.  
            - **Omega-3 (DHA):** Brain and eye development.  
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** with fruits, vegetables, grains, and protein.  
            - Include fiber-rich foods to prevent constipation.  
            - Hydrate well with water, herbal teas, and fruit juices.  
            - Small, frequent meals help maintain energy and prevent bloating.  
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
        - 🚶 Gentle exercise: walking, swimming, prenatal yoga.  
        - 🛌 Rest as needed; sleep is essential for energy and fetal development.  
        - 💬 Talk to partner or support group about pregnancy experiences.  
        - 📔 Keep a journal or take weekly photos of your belly growth.  
        - 🧘 Practice mindfulness, meditation, or breathing exercises for stress reduction.  
      `
    },
    {
      title: "💌 Real Mom Story — Lemon-Sized Wonder",
      content: `
        "At 14 weeks, I felt like I had my energy back!  
        Seeing my baby’s little movements on ultrasound made me so excited.  
        The nausea was gone, and I could finally enjoy my pregnancy more fully."  
        — Rhea, Bangalore
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 14",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal appointments and ultrasounds as scheduled.",
        "✔️ Engage in gentle exercises suitable for pregnancy.",
        "✔️ Track symptoms and share any concerns with your doctor.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document your pregnancy journey with notes or photos.",
        "✔️ Rest, hydrate, and celebrate the return of energy!"
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 14 is a joyful period — energy is returning, nausea fades, and your baby is growing fast.  
        Enjoy this “honeymoon” phase of pregnancy, continue nurturing yourself, and relish seeing your little one develop inside you. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 14 — Energy Returns & Baby Grows"
      description="Pregnancy Week 14 marks the second full week of the second trimester. Baby is lemon-sized, movements increase, and energy returns. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek13() {
  const sections = [
    {
      title: "🌸 Intro — First Week of the Second Trimester",
      content: `
        Welcome to **Week 13**! 🎉 You’re officially in the second trimester, often called the “honeymoon phase” of pregnancy.  
        Many moms feel a boost in energy, reduced nausea, and more comfort in daily activities.  

        Your baby is growing fast and starting to look even more like a tiny human. Week 13 marks a pivotal stage in development as major systems continue to mature.
      `
    },
    {
      title: "👶 Baby’s Development — Tiny but Growing Fast",
      content: `
        This week, your baby is about the size of a **peach** 🍑 (~7–8 cm), weighing around 23 grams.  

        - **Head & Face:** Neck starts straightening, jaw and chin more defined, eyelids fused but moving, ears in near-final position.  
        - **Limbs & Movements:** Arms and legs grow longer; tiny fingers and toes fully separated. Baby can make small movements like stretching, bending, and kicking (though you won’t feel them yet).  
        - **Internal Organs:**  
          - Kidneys produce urine, stomach produces digestive juices.  
          - Liver continues making red blood cells.  
          - Brain is developing rapidly, and nerves are connecting.  
        - **Genitalia:** External organs continue forming — sex may be detectable via ultrasound soon.  
        - **Movements:** Tiny reflexes appear; your baby can open fists and bend elbows.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Many moms experience relief from first-trimester symptoms this week.  

        **Common experiences:**  
        - 😴 Fatigue may start easing, energy returning.  
        - 🌸 Morning sickness usually decreases.  
        - 👙 Breasts remain tender or continue growing.  
        - 💧 Frequent urination may continue as uterus grows.  
        - 🌿 Mood swings stabilize for many women.  
        - 🌸 Slight baby bump may begin to appear in some moms.  
        - 🤯 Occasional headaches or dizziness may occur.  
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Week 13 is a good time for a check-in with your healthcare provider:  

        - 📋 Routine prenatal appointment: weight, blood pressure, symptom review.  
        - 📷 Ultrasound: Check fetal growth, heartbeat, and sometimes detect sex.  
        - 🧬 Screening: Results from first-trimester tests may be discussed.  
        - 🩺 Ask your doctor about any lingering nausea or other symptoms.  
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
          subtitle: "Diet Tips",
          content: `
            - Eat **balanced meals** with fruits, vegetables, grains, and protein.  
            - Include fiber-rich foods to prevent constipation.  
            - Hydrate well with water, herbal teas, and fruit juices.  
            - Small, frequent meals may help maintain energy and reduce nausea.  
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
        - 🚶 Gentle exercise: walking, swimming, prenatal yoga.  
        - 🛌 Rest when needed and prioritize sleep.  
        - 💬 Talk to partner or support group about experiences.  
        - 📔 Keep a pregnancy journal or take weekly bump photos.  
        - 🧘 Practice mindfulness, meditation, or breathing exercises for stress management.  
      `
    },
    {
      title: "💌 Real Mom Story — The Peach-Sized Miracle",
      content: `
        "At 13 weeks, I felt a surge of energy after a long first trimester.  
        Seeing my baby on ultrasound, tiny arms and legs moving, made everything feel real.  
        I could finally enjoy being pregnant without constant nausea!"  
        — Ananya, Hyderabad
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 13",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend prenatal appointments and ultrasounds.",
        "✔️ Begin gentle exercise routines.",
        "✔️ Track symptoms and discuss any concerns with your doctor.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document your pregnancy journey with notes or photos.",
        "✔️ Start planning for second-trimester wardrobe or maternity clothing."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 13 is an exciting milestone — the **start of the second trimester**!  
        Your baby is growing fast, movements are increasing, and you may feel relief from early pregnancy symptoms.  
        Celebrate this week, nurture yourself, and enjoy the energy and excitement that comes with the second trimester. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 13 — First Week of the Second Trimester"
      description="Pregnancy Week 13 marks the beginning of the second trimester. Baby is peach-sized, movements increase, and energy often returns. Learn what to expect this week."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek12() {
  const sections = [
    {
      title: "🌸 Intro — Hello Second Trimester!",
      content: `
        Welcome to **Week 12**, mama! 🎉 You’ve officially entered the second trimester, often called the “honeymoon period” of pregnancy.  
        Many moms notice that nausea eases, energy levels improve, and mood stabilizes.  

        Your baby is growing rapidly and now looks more distinctly human, with tiny fingers and toes, facial features, and more movement inside the womb.  
        This week is a turning point for both you and your baby.
      `
    },
    {
      title: "👶 Baby’s Development — Tiny but Mighty",
      content: `
        Your baby continues amazing growth:  

        - **Size:** About 5–6 cm (size of a lime or small plum 🍋), weighing ~14 grams.  
        - **Head & Face:** Eyes are moving into position, ears almost fully formed. Eyelids cover the eyes but can blink.  
        - **Limbs & Movements:** Arms and legs are longer; fingers and toes fully separated. Baby can make small movements like stretching, kicking, and curling fingers.  
        - **Internal Organs:**  
          - Intestines move from the umbilical cord into the abdomen.  
          - Kidneys produce urine.  
          - Liver produces red blood cells.  
          - Brain continues rapid neuron development.  
        - **Genitalia:** External organs are forming — sex may be detectable soon via ultrasound.  
        - **Heartbeat:** Strong (~170 bpm), often audible via Doppler in upcoming checkups.  
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        Many moms start to feel **more comfortable this week**, though symptoms vary.  

        **Common symptoms:**  
        - 🌸 Nausea may be decreasing, but occasional waves can remain.  
        - 😴 Fatigue improves but still may need naps.  
        - 👙 Breast tenderness or enlargement continues.  
        - 💧 Frequent urination due to growing uterus.  
        - 🤯 Mood swings stabilize for many moms.  
        - 🌸 Slight bump may start showing in some women.  

        Tips: Continue listening to your body and maintain gentle activity and healthy eating habits.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Week 12 is an important checkpoint in prenatal care:  

        - 📋 **Prenatal appointment:** Check weight, blood pressure, and symptoms.  
        - 📷 **Ultrasound:** Sometimes called the “dating scan,” used to measure baby’s size, check heartbeat, and confirm gestational age.  
        - 🧬 **Screening tests:** First-trimester combined screening (nuchal translucency + blood test) may be reviewed.  
        - 💉 Vaccinations or supplements may be discussed.  
        - 🩺 Address lingering nausea, fatigue, or other concerns with your provider.  
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Folic Acid:** Still crucial for neural tube and brain development.  
            - **Iron & Vitamin C:** Prevent anemia, support blood flow.  
            - **Protein:** Lean meats, beans, eggs, tofu for growth and repair.  
            - **Calcium & Vitamin D:** Strong bones and teeth for mom and baby.  
            - **Omega-3 (DHA):** Brain and eye development.  
          `
        },
        {
          subtitle: "Eating Habits",
          content: `
            - Eat **balanced meals** with fruits, veggies, grains, and protein.  
            - Continue small, frequent meals if nausea persists.  
            - Include high-fiber foods to prevent constipation.  
            - Hydrate with water, herbal teas, and natural fruit juices.  
          `
        },
        {
          subtitle: "Foods to Avoid",
          content: `
            - Raw/undercooked seafood, meat, and eggs.  
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
        - 🚶 Gentle exercise: Walking, prenatal yoga, stretching.  
        - 🛌 Take naps or rest when needed.  
        - 💬 Talk to partner or friends about your pregnancy experiences.  
        - 📔 Keep a journal or take weekly bump photos.  
        - 🧘 Practice mindfulness, meditation, or breathing exercises for stress management.  
      `
    },
    {
      title: "💌 Real Mom Story — A Fresh Start",
      content: `
        "At 12 weeks, I finally felt relief from constant nausea.  
        My first ultrasound showed my baby moving inside me, and seeing those tiny arms and legs made all the early discomfort worth it.  
        The second trimester felt like a fresh start!"  
        — Sanya, Delhi
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 12",
      list: [
        "✔️ Continue prenatal vitamins daily.",
        "✔️ Eat balanced, nutrient-rich meals.",
        "✔️ Attend scheduled prenatal appointments and ultrasounds.",
        "✔️ Begin gentle exercise routines.",
        "✔️ Hydrate and rest as needed.",
        "✔️ Avoid unsafe foods, alcohol, and smoking.",
        "✔️ Document your pregnancy journey with notes or photos.",
        "✔️ Start planning for second-trimester wardrobe or maternity clothing."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 12 marks the exciting start of your **second trimester**!  
        Symptoms may ease, energy may return, and your baby continues to grow quickly.  
        Celebrate this milestone and enjoy a slightly easier, more comfortable phase of pregnancy. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 12 — Welcome to the Second Trimester"
      mainImage="/images/Pregnancy Week 12.jpg"
      description="Pregnancy Week 12 marks the beginning of the second trimester. Baby is lime-sized, symptoms ease, and energy returns. Learn what to expect for you and your baby."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

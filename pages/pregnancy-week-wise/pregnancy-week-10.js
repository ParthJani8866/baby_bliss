"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek10() {
  const sections = [
    {
      title: "🌸 Intro — Almost Through the First Trimester",
      content: `
        Welcome to **Week 10**, mama! 🌟 You’re now in the last few weeks of the first trimester.  
        Many of the hardest early pregnancy symptoms may still be lingering, but relief is around the corner.  

        This week, your baby is continuing rapid development — becoming less of a blob-like embryo and more of a recognizable little human.  
        It’s also a time when many parents feel more comfortable sharing their pregnancy news, especially after upcoming checkups. 💕
      `
    },
    {
      title: "👶 Baby’s Development — A Real Little Person",
      content: `
        Your baby is now officially called a **fetus** and looks more human than ever.  

        - **Size:** About 3.1–4 cm (the size of a strawberry 🍓), weighing around 4 grams.  
        - **Head & Face:** Head is still large, but the neck is forming so it’s less tucked.  
        - **Features:** Ears are moving into place, eyelids cover the eyes (still fused shut), and tiny tooth buds are forming under the gums.  
        - **Limbs:** Fingers and toes are separated (no more webbing). Nails are beginning to form. Wrists and elbows can bend.  
        - **Organs:**  
          - Vital organs (liver, kidneys, intestines, brain, and lungs) are developing and beginning to function.  
          - Stomach produces digestive juices.  
          - Kidneys start producing small amounts of urine.  
        - **Movements:** Baby kicks, wiggles, and stretches, though you still won’t feel it.  
        - **Heartbeat:** Strong and steady, beating at about **170 bpm**.  

        Fun fact: If you could see inside, your baby might be sucking their thumb already! 💖
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        You may still feel many early pregnancy symptoms, but some women start noticing slight improvement around Week 10.  

        **Possible symptoms this week:**  
        - 🤢 Morning sickness (still common, but may start easing soon).  
        - 😴 Fatigue from high progesterone levels.  
        - 👙 Breast tenderness, growth, and visible veins.  
        - 🤯 Headaches, light dizziness, or forgetfulness.  
        - 😭 Mood swings — still common with hormone fluctuations.  
        - 💧 Frequent urination continues as uterus grows.  
        - 🌸 Slight roundness in lower belly for some women.  

        👉 If nausea is severe and you’re unable to keep food or water down, speak with your doctor about **hyperemesis gravidarum**.
      `
    },
    {
      title: "🧪 Medical & Prenatal Guidance",
      content: `
        Around this time, your healthcare provider may:  
        - 📋 Review your prenatal lab results.  
        - 📷 Perform an ultrasound to check growth and heartbeat.  
        - 🧬 Discuss **first-trimester screening**: between weeks 10–13, you may have a nuchal translucency scan and blood tests to screen for chromosomal conditions.  
        - 💉 Talk about vaccines if needed (like flu shot, depending on season).  
        - 🩺 Track weight, blood pressure, and any symptoms you report.  
      `
    },
    {
      title: "🥦 Nutrition & Wellness Tips",
      subsections: [
        {
          subtitle: "Essential Nutrients",
          content: `
            - **Folic Acid**: Still crucial at this stage.  
            - **Iron & Vitamin C**: Prevent anemia and boost immunity.  
            - **Omega-3 fatty acids (DHA)**: Support brain and eye development.  
            - **Calcium & Vitamin D**: Strong bones and teeth for both you and baby.  
            - **Protein**: Lean meats, beans, tofu, eggs, and lentils.  
          `
        },
        {
          subtitle: "Diet Tips",
          content: `
            - Eat **balanced meals** with small snacks to reduce nausea.  
            - Stay hydrated — aim for 8–10 cups of water daily.  
            - Include high-fiber foods (fruits, veggies, whole grains) to ease constipation.  
            - If you can’t tolerate large meals, focus on **nutrient-dense snacks** like yogurt, nuts, or boiled eggs.  
          `
        },
        {
          subtitle: "Avoid",
          content: `
            - Raw seafood, undercooked meat, or unpasteurized foods.  
            - High-mercury fish.  
            - Too much caffeine (stay under 200 mg/day).  
            - Alcohol and smoking (strictly off-limits).  
          `
        }
      ]
    },
    {
      title: "🧘 Lifestyle & Emotional Wellness",
      content: `
        - 🚶 Keep moving: Gentle walks or prenatal yoga are great.  
        - 🛌 Nap or rest whenever your body asks.  
        - 🧘 Try journaling or meditation to manage stress.  
        - 💬 Share your symptoms with your partner so they understand what you’re going through.  
        - 📸 Start taking weekly bump photos — you’ll love looking back!  
        - 🧑‍🤝‍🧑 Consider joining an online pregnancy support group for encouragement.  
      `
    },
    {
      title: "💌 Real Mom Story — The Strawberry Moment",
      content: `
        "At 10 weeks, I read that my baby was the size of a strawberry, and I couldn’t stop smiling.  
        The nausea was tough, but I had my first ultrasound, and hearing that strong heartbeat made every difficult moment worth it.  
        I remember crying happy tears the whole way home."  
        — Priya, Bangalore
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 10",
      list: [
        "✔️ Continue taking prenatal vitamins daily.",
        "✔️ Drink plenty of water and eat fiber-rich foods.",
        "✔️ Prepare for first-trimester screening (if recommended).",
        "✔️ Keep up with light exercise routines.",
        "✔️ Track your symptoms and share with your doctor.",
        "✔️ Avoid alcohol, smoking, and unsafe foods.",
        "✔️ Start documenting your pregnancy journey with notes/photos.",
        "✔️ Look into maternity clothing if your pants feel snug."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Week 10 is a joyful stage — your baby now looks much more human, with fingers, toes, and even nails forming.  
        Though symptoms may still be tough, the end of the first trimester is near, bringing relief for many moms.  
        
        This is a week to celebrate progress, take care of your body, and look forward to the exciting weeks ahead. 🌸
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 10 — Your Baby Looks More Human"
      description="Pregnancy Week 10 marks a huge milestone: your baby is strawberry-sized with tiny nails, bending elbows, and growing organs. Learn what to expect this week for you and your little one."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

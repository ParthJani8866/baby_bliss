"use client";

import BlogLayout from "../../pages/components/BlogLayout";

export default function PregnancyWeek6() {
  const sections = [
    {
      title: "🌸 Intro — The Heartbeat of New Life",
      content: `
        Week 6 marks a beautiful milestone — your baby’s **tiny heart is beating** for the very first time!  
        Although you may not hear it yet without an ultrasound, knowing that life is pulsing inside you can be both thrilling and emotional.  

        On the flip side, this week can bring **stronger pregnancy symptoms**, especially nausea, fatigue, and mood swings.  
        It’s all a sign that your body is adjusting beautifully to support this new journey.
      `
    },
    {
      title: "👶 Baby’s Development — The Beginning of Organs",
      content: `
        Your baby is now developing at lightning speed!  

        - **Size:** About the size of a sweet pea (4–6 mm long).  
        - **Heartbeat:** The heart is beating at about 100–120 beats per minute, and blood is circulating.  
        - **Brain & Nervous System:** The neural tube (brain and spinal cord) is closing. Brain regions are beginning to form.  
        - **Limb Buds:** Tiny buds that will become arms and legs are starting to sprout.  
        - **Eyes & Ears:** Dark spots where eyes and inner ears will develop are visible.  
        - **Digestive & Respiratory Systems:** The stomach, intestines, and lungs are starting their earliest formation.  

        By the end of this week, your baby looks more like a little tadpole — tiny, curled, and growing rapidly every day.
      `
    },
    {
      title: "🤰 Mother’s Body & Symptoms",
      content: `
        By Week 6, hormonal changes are in full swing, and most women start feeling very pregnant.  

        **Common Week 6 symptoms:**  
        - 🤢 **Morning sickness** (can occur all day, triggered by smells or hunger).  
        - 😴 **Exhaustion** — due to high progesterone and increased blood production.  
        - 👙 **Breast changes** — swelling, tenderness, and visible veins.  
        - 💧 **Frequent urination** — your kidneys are processing more fluid.  
        - 😭 **Mood swings** — emotional highs and lows are completely normal.  
        - 🌡️ **Mild cramps & bloating** as your uterus expands.  
        - 🤯 **Food aversions & cravings** — smells and tastes may feel very intense.  

        👉 If nausea or vomiting becomes severe (you can’t keep food or fluids down), consult your doctor about **hyperemesis gravidarum**.
      `
    },
    {
      title: "🧪 Medical & Testing Guidance",
      content: `
        This may be the week of your **first prenatal appointment**.  

        - 🩺 **Ultrasound:** May detect a tiny flickering heartbeat (though sometimes it’s easier to see at week 7).  
        - 🧬 **Blood tests:** Confirm hormone levels (hCG, progesterone) and check for anemia, thyroid function, and blood type.  
        - 💉 **Infections screening:** Tests for immunity to rubella, HIV, hepatitis, syphilis, and other conditions.  
        - 💊 **Medication review:** Discuss any prescription or over-the-counter drugs you’re taking to ensure safety.  

        📅 If you haven’t scheduled your prenatal visit yet, now is the time!
      `
    },
    {
      title: "🥦 Health, Diet & Nutrition",
      subsections: [
        {
          subtitle: "Managing Nausea Naturally",
          content: `
            - Eat **small, frequent snacks** (don’t let your stomach stay empty).  
            - Try **cold meals** (less smell = less nausea).  
            - Sip **ginger tea** or chew ginger candies.  
            - Experiment with bland foods: rice, bananas, toast, applesauce.  
          `
        },
        {
          subtitle: "Essential Nutrients This Week",
          content: `
            - **Folic acid** — critical for brain & spinal cord development.  
            - **Vitamin B6** — may reduce nausea (found in bananas, potatoes, chickpeas).  
            - **Protein** — helps stabilize blood sugar and supports growth.  
            - **Iron-rich foods** — spinach, beans, lean meat to prevent anemia.  
            - **Calcium & Vitamin D** — continue supporting bone formation.  
          `
        },
        {
          subtitle: "Foods & Habits to Avoid",
          content: `
            - ❌ Raw eggs, sushi, unpasteurized milk products.  
            - ❌ Deli meats unless heated until steaming (to avoid listeria).  
            - ❌ Limit caffeine to under 200 mg/day.  
            - ❌ Alcohol and smoking — completely off-limits.  
          `
        }
      ]
    },
    {
      title: "🧘 Lifestyle, Rest & Emotional Wellness",
      content: `
        - 🛌 **Listen to your body** — rest when you’re tired, even short naps.  
        - 🚶 **Move gently** — light walking, yoga, or stretching can ease stress.  
        - 🧘 **Mind-body care** — meditation and deep breathing help with anxiety.  
        - 🤝 **Lean on support** — talk openly with your partner or a close friend.  
        - 🎧 **Soothing routines** — calming music, warm (not hot) baths, and journaling.  

        This is also a good week to start thinking about lifestyle adjustments like reducing household toxins (switching to natural cleaners, avoiding harsh chemicals).
      `
    },
    {
      title: "💌 Real Mom Story — The First Ultrasound",
      content: `
        "At 6 weeks, I went in for my first scan. The screen showed this tiny flicker — the heartbeat.  
        It was so surreal. I cried instantly because it suddenly became real: there’s life inside me.  

        The nausea was brutal, and I was tired all the time, but seeing that flicker gave me hope and strength.  
        It reminded me that every symptom had a purpose — my body was working hard to protect and grow this little one."  
        — Priya, Bangalore
      `
    },
    {
      title: "✅ Checklist — Pregnancy Week 6",
      list: [
        "✔️ Schedule or attend your first prenatal appointment.",
        "✔️ Continue daily prenatal vitamins (especially folic acid).",
        "✔️ Eat small, frequent meals to fight nausea.",
        "✔️ Start a pregnancy-safe exercise routine.",
        "✔️ Track your symptoms in a pregnancy journal/app.",
        "✔️ Prepare questions for your doctor (medications, diet, risks).",
        "✔️ Discuss lifestyle changes with your partner (diet, home prep).",
        "✔️ Avoid alcohol, smoking, and unsafe foods."
      ]
    },
    {
      title: "🌟 Final Thoughts",
      content: `
        Pregnancy Week 6 is a rollercoaster of emotions and physical changes.  
        Your baby’s heartbeat has begun, tiny organs are forming, and your symptoms are proof of the incredible work happening inside.  

        While the nausea, fatigue, and emotions may be overwhelming, remember: these are signs of growth and progress.  
        Be gentle with yourself, rest when you can, and embrace this magical stage — your baby is already making their presence known. 💖
      `
    }
  ];

  return (
    <BlogLayout
      title="Pregnancy Week 6 — Heartbeat, Symptoms & First Prenatal Visit"
      mainImage="/images/Pregnancy week 6.jpg"
      description="Pregnancy Week 6 brings your baby's first heartbeat, stronger symptoms, and often your first prenatal appointment. Learn baby growth, health tips, and real mom stories."
      sections={sections}
      sidebarCategory="pregnancy"
      sidebarTitle="Recommended Essentials"
    />
  );
}

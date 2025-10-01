"use client";

import BlogLayout from "../components/BlogLayout";

export default function HealthyPregnancyGuide() {

  const faqs = [
    {
      q: "How much weight should I gain during pregnancy?",
      a: "Weight gain recommendations depend on your pre-pregnancy BMI: Underweight (BMI <18.5): 28-40 lbs; Normal weight (BMI 18.5-24.9): 25-35 lbs; Overweight (BMI 25-29.9): 15-25 lbs; Obese (BMI ≥30): 11-20 lbs. These are general guidelines—your provider will give personalized recommendations based on your health and pregnancy."
    },
    {
      q: "Can I continue taking my regular medications?",
      a: "Many medications are safe during pregnancy, but some require adjustment or alternative options. Never stop or change prescribed medications without consulting your provider. Provide your complete medication list (including supplements) at your first prenatal visit for review."
    },
    {
      q: "What pregnancy symptoms require immediate medical attention?",
      a: "Contact your provider immediately for: vaginal bleeding, severe abdominal pain, persistent vomiting, fever over 100.4°F, sudden severe swelling, visual disturbances, severe headache, decreased fetal movement after 28 weeks, or fluid leakage. When in doubt, it's always better to call."
    },
    {
      q: "Is it safe to have sex during pregnancy?",
      a: "For most low-risk pregnancies, sex is safe throughout pregnancy. You may need to modify positions for comfort. Avoid sex if you have placenta previa, history of preterm labor, unexplained bleeding, or your water has broken. Always consult your provider with specific concerns."
    },
    {
      q: "How can I tell the difference between normal pregnancy discomfort and something serious?",
      a: "Normal discomforts are usually mild to moderate, intermittent, and don't worsen significantly. Warning signs include severe pain, symptoms that persist or worsen, or any of the red flags mentioned above. Your intuition matters—if something feels wrong, contact your provider."
    },
    {
      q: "What vaccinations are safe during pregnancy?",
      a: "Recommended vaccines include Tdap (between 27-36 weeks) and flu shot (any trimester). COVID-19 vaccines are also recommended. Live vaccines (MMR, varicella) should be given before pregnancy or postpartum. Always discuss timing with your provider."
    },
    {
      q: "How can I manage pregnancy with a pre-existing health condition?",
      a: "Work closely with both your obstetrician and specialist to coordinate care. Some conditions may require medication adjustments, more frequent monitoring, or consultation with maternal-fetal medicine specialists. Many women with chronic conditions have healthy pregnancies with proper management."
    },
    {
      q: "What are the benefits of prenatal vitamins versus getting nutrients from food?",
      a: "Prenatal vitamins provide insurance against nutritional gaps, especially for folic acid, iron, and other nutrients that are crucial in specific amounts. However, they don't replace a healthy diet. The best approach is combining nutritious eating with prescribed supplements."
    }
  ]

  const sections = [
    {
      title: "The Journey of a Lifetime: Embracing a Healthy Pregnancy",
      content: `Pregnancy is one of the most transformative and miraculous journeys a woman can experience. It's a time of profound physical, emotional, and psychological changes as you nurture new life within you. A healthy pregnancy isn't just about avoiding complications—it's about actively creating the optimal environment for your baby's development while caring for your own wellbeing. This comprehensive guide will walk you through everything you need to know about maintaining a healthy pregnancy from conception to delivery.

      Every pregnancy is unique, just like every mother and baby. While this guide provides evidence-based information and recommendations, remember that your healthcare provider is your best resource for personalized care. What works perfectly for one woman might need adjustment for another, and that's completely normal. The goal is to empower you with knowledge while encouraging you to listen to your body and work closely with your medical team.
      
      Whether you're newly pregnant, planning conception, or supporting someone through this journey, understanding the pillars of healthy pregnancy can help you make informed decisions, reduce anxiety, and fully embrace this special time. From nutrition and exercise to emotional wellness and medical care, we'll explore how to create the healthiest possible foundation for both you and your baby.`
    },
    {
      title: "Preconception Preparation: Building the Foundation",
      content: `The journey to a healthy pregnancy often begins before conception. Preparing your body and life for pregnancy can significantly impact both your experience and your baby's health.`,
      list: [
        `Preconception Checkup: Schedule a visit with your healthcare provider 3-6 months before trying to conceive. This visit typically includes reviewing your medical history, current medications, vaccination status, and any chronic conditions. Your provider may recommend adjusting medications that aren't pregnancy-safe and addressing any health concerns that could affect pregnancy.`,

        `Genetic Carrier Screening: Consider genetic testing to identify if you and your partner carry genes for certain inherited conditions. This is particularly important if you have a family history of genetic disorders or belong to ethnic groups with higher risks for specific conditions.`,

        `Dental Health: See your dentist for a checkup and cleaning. Gum disease has been linked to preterm birth, so addressing dental issues before pregnancy is ideal. Continue regular dental care during pregnancy—dental X-rays with proper shielding and local anesthesia are generally considered safe.`,

        `Lifestyle Assessment: Evaluate your daily habits including nutrition, exercise, stress management, and substance use. This is the ideal time to make positive changes that will benefit both your fertility and future pregnancy.`,

        `Financial and Emotional Preparation: Consider the practical aspects of adding a child to your family, including insurance coverage, maternity leave policies, childcare options, and your support system. Emotional readiness is just as important as physical preparation.`
      ]
    },
    {
      title: "Essential Nutrition: Building Blocks for Baby and Mother",
      content: `Proper nutrition during pregnancy supports your baby's development while maintaining your health. The saying "eating for two" is about quality, not quantity—most women need only about 300-500 extra calories daily in the second and third trimesters.`,
      list: [
        `Folic Acid: Crucial for preventing neural tube defects. Take 400-800 mcg daily before conception and through early pregnancy. Good food sources include leafy greens, citrus fruits, beans, and fortified grains. Many providers recommend continuing throughout pregnancy.`,

        `Iron: Supports increased blood volume and prevents anemia. Pregnant women need about 27 mg daily. Iron-rich foods include lean red meat, poultry, fish, lentils, spinach, and iron-fortified cereals. Pair with vitamin C sources to enhance absorption.`,

        `Calcium: Essential for building baby's bones and teeth while protecting your bone density. Aim for 1,000 mg daily from dairy products, fortified plant milks, leafy greens, and calcium-set tofu.`,

        `Protein: Supports tissue growth for both mother and baby. Increase intake by about 25 grams daily. Good sources include lean meats, poultry, fish, eggs, dairy, legumes, nuts, and tofu.`,

        `Omega-3 Fatty Acids: Important for baby's brain and eye development. DHA is particularly crucial. Include fatty fish (like salmon and sardines), walnuts, flaxseeds, and chia seeds. If using supplements, choose those specifically formulated for pregnancy.`,

        `Hydration: Water needs increase significantly during pregnancy. Aim for 8-12 cups daily. Proper hydration helps form amniotic fluid, supports increased blood volume, prevents urinary tract infections, and reduces swelling.`,

        `Foods to Limit or Avoid: Avoid raw or undercooked meats, fish high in mercury (shark, swordfish, king mackerel), unpasteurized dairy products, raw eggs, and deli meats unless heated thoroughly. Limit caffeine to 200 mg daily (about one 12-ounce cup of coffee). Avoid alcohol completely.`
      ]
    },
    {
      title: "Visual Inspiration: Proper nutrition during pregnancy",
      content: "Proper nutrition during pregnancy",
      image: "https://i.pinimg.com/736x/4b/55/9e/4b559e100b58a158f99ddc88fd8fe78a.jpg"
    },
    {
      title: "Safe Exercise During Pregnancy: Staying Active for Two",
      content: `Regular physical activity during pregnancy offers numerous benefits including improved mood, better sleep, reduced pregnancy discomforts, and potentially easier labor. Most women can continue their pre-pregnancy exercise routines with modifications.`,
      list: [
        `Recommended Activities: Walking, swimming, stationary cycling, prenatal yoga, and low-impact aerobics are generally safe throughout pregnancy. Strength training with proper form and moderate weights is also beneficial. Aim for 150 minutes of moderate-intensity exercise weekly, spread across most days.`,

        `Exercise Modifications by Trimester: As pregnancy progresses, your center of gravity shifts and ligaments loosen. First trimester: You may need to reduce intensity if experiencing fatigue or nausea. Second trimester: Avoid exercises lying flat on your back. Third trimester: Focus on stability and comfort—you may need to reduce intensity and impact.`,

        `Kegel Exercises: These pelvic floor exercises help prevent urinary incontinence and may aid recovery postpartum. Practice contracting the muscles you use to stop urine flow, hold for 3-5 seconds, then relax. Aim for 10-15 repetitions several times daily.`,

        `Warning Signs to Stop Exercise: Contact your provider if you experience vaginal bleeding, dizziness, chest pain, headache, muscle weakness, calf pain or swelling, decreased fetal movement, contractions, or amniotic fluid leakage.`,

        `Activities to Avoid: Contact sports, activities with high fall risk (downhill skiing, horseback riding), scuba diving, hot yoga, and exercising at high altitudes unless you're acclimated. Listen to your body—if something doesn't feel right, stop.`
      ]
    },
    {
      title: "Prenatal Medical Care: Partnering with Your Healthcare Team",
      content: `Regular prenatal visits are essential for monitoring your health and your baby's development. The standard schedule is monthly until 28 weeks, every two weeks until 36 weeks, then weekly until delivery.`,
      list: [
        `First Trimester Care (Weeks 1-13): Your initial visit typically includes confirmation of pregnancy, comprehensive health history, physical exam, and initial blood tests. You'll likely have an ultrasound to confirm dating and viability. Genetic screening options are discussed.`,

        `Second Trimester Care (Weeks 14-27): Visits focus on monitoring weight gain, blood pressure, and fetal growth. The anatomy scan around 20 weeks checks baby's development. Glucose screening for gestational diabetes typically occurs around 24-28 weeks.`,

        `Third Trimester Care (Weeks 28-40+): Appointments become more frequent. Your provider will monitor baby's position, growth, and your readiness for labor. Group B strep screening occurs around 36 weeks. Discussions about birth preferences and postpartum planning intensify.`,

        `Common Prenatal Tests: These may include blood tests (blood type, Rh factor, anemia, immunity), urine tests (protein, glucose, infections), ultrasounds, and various screening tests for genetic conditions and developmental issues.`,

        `High-Risk Pregnancy Considerations: If you have pre-existing conditions like diabetes, hypertension, or autoimmune disorders, or develop pregnancy complications, you may need more frequent monitoring and specialized care. This doesn't necessarily mean anything will go wrong—it means you're receiving appropriate surveillance and support.`
      ]
    },
    {
      title: "Managing Common Pregnancy Discomforts",
      content: `While pregnancy is a natural process, it often comes with various discomforts. Most are normal, but knowing how to manage them can significantly improve your quality of life.`,
      list: [
        `Nausea and Morning Sickness: Affects up to 80% of pregnant women, typically in the first trimester. Eat small, frequent meals; avoid triggers; try ginger or vitamin B6; and keep crackers by your bed for before rising. Severe, persistent vomiting (hyperemesis gravidarum) requires medical attention.`,

        `Fatigue: Especially common in first and third trimesters. Listen to your body—rest when needed. Prioritize sleep, delegate tasks, and ensure adequate nutrition and hydration. Gentle exercise can paradoxically boost energy.`,

        `Back Pain: As your belly grows and hormones loosen ligaments, back pain often increases. Practice good posture, wear supportive shoes, sleep on your side with pillows between your knees, and consider prenatal massage or chiropractic care.`,

        `Heartburn and Indigestion: Progesterone relaxes the valve between stomach and esophagus. Eat smaller meals, avoid trigger foods, don't lie down immediately after eating, and sleep propped up. Your provider may recommend pregnancy-safe antacids.`,

        `Swelling: Mild swelling in feet and ankles is common, especially in third trimester and warm weather. Elevate feet when possible, stay hydrated, avoid standing for long periods, and wear comfortable shoes. Sudden severe swelling can indicate preeclampsia and warrants immediate medical attention.`,

        `Varicose Veins: Increased blood volume and pressure on pelvic veins can cause varicose veins in legs and vulva. Exercise regularly, elevate legs, avoid prolonged standing or sitting, and wear compression stockings if recommended.`,

        `Carpal Tunnel Syndrome: Fluid retention can compress nerves in wrists. Wear wrist splints at night, shake hands frequently, and avoid repetitive motions. Most cases resolve after delivery.`
      ]
    },
    {
      title: "Emotional Wellbeing and Mental Health",
      content: `Pregnancy involves significant emotional changes and adaptations. Taking care of your mental health is as important as physical care.`,
      list: [
        `Emotional Changes: Hormonal fluctuations can cause mood swings. Additionally, the profound life changes pregnancy represents can trigger various emotions from joy and excitement to anxiety and fear. All these feelings are normal.`,

        `Managing Stress: Practice relaxation techniques like deep breathing, meditation, or prenatal yoga. Maintain reasonable expectations—you don't need to have a "perfect" pregnancy. Delegate tasks and don't hesitate to ask for help.`,

        `Building Support Systems: Connect with other expectant parents through classes or support groups. Communicate openly with your partner about fears, hopes, and practical needs. Identify friends or family members who can provide emotional support.`,

        `Pregnancy and Existing Mental Health Conditions: If you have a history of depression, anxiety, or other mental health conditions, pregnancy can be particularly challenging. Continue treatment under medical supervision—many medications can be safely managed during pregnancy. The risks of untreated mental illness often outweigh medication risks.`,

        `Recognizing Perinatal Mood Disorders: About 1 in 7 women experience depression during pregnancy. Symptoms include persistent sadness, loss of interest in activities, changes in sleep or appetite, and difficulty concentrating. Anxiety disorders are also common. Seek help immediately if you experience these symptoms—treatment is available and effective.`,

        `Body Image: Your changing body can trigger complex feelings. Focus on what your body is accomplishing rather than how it looks. Surround yourself with positive messages about pregnant bodies. Wear clothes that make you feel comfortable and confident.`,

        `Partner Support: Partners also experience emotional changes during pregnancy. Open communication about fears, expectations, and needs benefits both partners. Attend appointments and classes together when possible.`
      ]
    },
    {
      title: "Environmental and Lifestyle Considerations",
      content: `Your daily environment and habits can impact pregnancy. Being mindful of potential exposures helps create the safest possible environment for your developing baby.`,
      list: [
        `Workplace Safety: Most jobs are safe during pregnancy, but some may require modifications. Discuss concerns with your employer and healthcare provider. Avoid exposure to chemicals, radiation, and infectious diseases. If your job involves prolonged standing or heavy lifting, request reasonable accommodations.`,

        `Household Products: Use natural cleaning products when possible. Ensure good ventilation when using any chemicals. Avoid changing cat litter due to toxoplasmosis risk. Wear gloves when gardening.`,

        `Personal Care Products: Some skincare ingredients like retinoids and high-dose salicylic acid should be avoided. Use fragrance-free products if you develop sensitivities. Discuss any concerns with your provider.`,

        `Travel Considerations: Most travel is safe until late pregnancy. Stay hydrated, move regularly on long trips, and wear seatbelts properly (lap belt under belly, across hips). Check airline policies as many restrict travel after 36 weeks.`,

        `Sleep Environment: Create a comfortable sleep space. After 20 weeks, sleep on your side—left side is ideal for blood flow but either side is fine. Use pillows for support between knees, under belly, and behind back.`,

        `Heat Exposure: Avoid hot tubs, saunas, and very hot baths, especially in first trimester when neural tube is developing. Elevated core temperature can increase certain risks.`,

        `Toxins and Pollutants: Avoid tobacco smoke (firsthand and secondhand), recreational drugs, and alcohol. Be mindful of air quality—consider air purifiers if you live in high-pollution areas.`
      ]
    },
    {
      title: "Preparing for Labor, Delivery, and Beyond",
      content: `While delivery may seem far off, preparing gradually throughout pregnancy can reduce anxiety and help you feel empowered.`,
      list: [
        `Childbirth Education: Consider classes that cover labor stages, pain management options, breathing techniques, and what to expect. Many hospitals offer tours and orientation sessions.`,

        `Birth Plan: Think about your preferences for pain management, environment, interventions, and immediate postpartum care. Remember that flexibility is key—birth can be unpredictable. Discuss your preferences with your provider.`,

        `Postpartum Preparation: Prepare for the fourth trimester by lining up support, freezing meals, setting up the nursery, and learning about newborn care. Consider your postpartum recovery needs—comfortable clothing, perineal care supplies, and breastfeeding support if planning to nurse.`,

        ` breastfeeding Preparation: If planning to breastfeed, learn about latch techniques, frequency, and potential challenges. Identify lactation resources in your community. Remember that fed is best, regardless of feeding method.`,

        `Practical Preparations: Install car seat, pack hospital bag around 36 weeks, pre-register at hospital if required, and familiarize yourself with routes to your birth location. Have important phone numbers easily accessible.`
      ]
    },
    {
      title: "Embracing Your Unique Pregnancy Journey",
      content: `Every pregnancy story is different, and comparing yours to others or to idealized versions can create unnecessary stress. Your body knows how to grow your baby, and you have the wisdom to navigate this journey with the support of your healthcare team.

      Remember that "healthy pregnancy" encompasses physical, emotional, and mental wellbeing. It's not about perfection—it's about making informed choices, listening to your body, and seeking support when needed. Some days you'll feel radiant and energetic; other days you'll feel overwhelmed and uncomfortable. All of this is part of the normal spectrum of pregnancy experience.
      
      Trust yourself. You're growing a human being—one of the most profound and complex biological processes. Your body is doing remarkable work, and you're learning to adapt to incredible changes. Be gentle with yourself, celebrate small milestones, and don't hesitate to ask questions or seek help.
      
      As you move through your pregnancy, remember that you're not just building a baby—you're building a relationship. Those kicks and movements are early conversations. Your voice, your touch, your rhythms are already becoming familiar to your little one. However your pregnancy unfolds, whatever choices you make for your care, whatever path your birth takes—you are the expert on your body and your baby.
      
      This journey is yours alone, yet you don't have to travel it alone. Surround yourself with supportive healthcare providers, loved ones who respect your choices, and resources that empower rather than alarm you. You have within you everything needed to navigate this transformative time with strength, wisdom, and love.`
    }
  ];
  
  return (
    <BlogLayout
      title="The Complete Guide to Healthy Pregnancy: Nutrition, Care & Wellbeing"
      mainImage="/images/healthypregnancy.jpg"
      description="Comprehensive guide to healthy pregnancy covering nutrition, exercise, prenatal care, managing discomforts, emotional wellbeing, and preparation for labor and delivery. Evidence-based information for each trimester."
      sections={sections}
      faqs={faqs}
      sidebarCategory="pregnancy"
      sidebarTitle="Pregnancy Health Essentials"
    />
  );
}
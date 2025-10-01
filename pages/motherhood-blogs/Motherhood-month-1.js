"use client";

import { useState } from "react";
import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth1() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (idx) => {
    setOpenFAQ(openFAQ === idx ? null : idx);
  };

  const sections = [
    {
      title: "Your First Month as a Mom: A Complete Survival Guide",
      content: `Welcome to the most beautiful, challenging, and transformative journey of your life. The first month with your newborn, often called the "fourth trimester," is a period of immense adjustment, learning, and bonding. This guide provides you with a realistic daily routine and comprehensive do's and don'ts to help you navigate these precious early weeks with confidence and grace.

Remember: there is no such thing as a perfect mother, only a real one who is learning and growing alongside her baby. This month isn't about sticking to rigid schedules or achieving perfection—it's about finding your rhythm, trusting your instincts, and embracing the beautiful chaos of new motherhood.`,
    },
    {
      title: "A Realistic Daily Routine for Your First Month",
      content: `Here’s a gentle, flexible daily routine for your first month with your newborn. It’s not a strict schedule — just a helpful guide to balance feeding, sleep, and your recovery.`,
      list: [
        `6:00 AM - 7:00 AM: First Feeding & Baby Bonding
- Baby usually wakes for the first feed.
- Change diaper if needed.
- Feed in a comfortable position with good back support.
- Keep lights low and room calm.
- Spend 10-15 minutes connecting: gentle talking, soft touches.
- Watch for sleepy cues: yawns, looking away, fussiness.`,

        `7:00 AM - 8:00 AM: Your Self-Care Time
- Put baby safely in bassinet or crib.
- Take a quick shower or wash face.
- Drink water and have a small snack.
- Change into comfortable clothes.
- Take any medications or supplements.`,

        `8:00 AM - 9:00 AM: Second Feeding & Morning Interaction
- Feed baby again.
- Open curtains for sunlight if possible.
- Gentle baby massage or tummy time on your chest.
- Talk or sing while changing diaper.`,

        `9:00 AM - 10:30 AM: Nap & Light Tasks
- Baby’s first long nap.
- Take this time to:
  - Eat a healthy breakfast.
  - Do light household tasks like laundry or dishes.
  - Rest yourself — even 20 minutes helps.`,

        `10:30 AM - 11:30 AM: Feeding & Play
- Wake baby gently if sleeping.
- Feed baby.
- Do simple activities:
  - Show black and white cards or toys.
  - Gentle singing or reading.
  - Tummy time on a safe surface.
  - Make eye contact and smile.`,

        `11:30 AM - 12:00 PM: Prepare for Lunch
- Set up a feeding station with water and snacks.
- Prepare lunch for yourself.
- Quick tidy of living space.`,

        `12:00 PM - 1:00 PM: Lunch & Feeding
- Feed baby while you eat if possible.
- Skin-to-skin contact after feeding.
- Burp baby thoroughly.`,

        `1:00 PM - 3:00 PM: Long Afternoon Nap
- Baby’s longest sleep of the day.
- Use this time to:
  - Take a proper nap.
  - Shower and feel refreshed.
  - Make important phone calls.
  - Enjoy a proper meal or snack.`,

        `3:00 PM - 4:00 PM: Feeding & Fresh Air
- Feed baby again if needed.
- Step outside for a short walk or fresh air.
- Change into clean clothes if going outdoors.`,

        `4:00 PM - 5:30 PM: Fussy Period / Cluster Feeding
- Expect more frequent feeds ("witching hour").
- Calm baby with:
  - Skin-to-skin contact.
  - Gentle rocking or swaying.
  - Soft music or white noise.
  - Babywearing if comfortable.`,

        `5:30 PM - 6:30 PM: Evening Wind-Down
- Dim lights and create a calm atmosphere.
- Optional bath (2-3 times per week).
- Gentle baby massage with safe lotion.
- Put on pajamas and fresh diaper.`,

        `6:30 PM - 7:30 PM: Last Evening Feed
- Feed baby in a calm space.
- Burp thoroughly.
- Short story or lullaby.
- Start establishing bedtime cues.`,

        `7:30 PM - 10:00 PM: Your Evening & Partner Time
- Baby in bassinet for first long sleep stretch.
- Eat dinner or relax with partner.
- Prepare for night feedings:
  - Keep water, snacks, and supplies nearby.`,

        `10:00 PM - 11:00 PM: Dream Feed
- Feed baby while mostly asleep.
- Quick diaper change if needed.
- Keep lights dim, minimize interaction.`,

        `Overnight Feedings (Every 2-4 Hours)
- Respond promptly to hunger cues.
- Return baby to bassinet after feeding.
- Keep baby safe: no co-sleeping on sofas or chairs.
- Nap when you can between feedings.`
      ],
    },
    {
      title: "Visual Inspiration: Cute Baby Pin",
      content: "Here's a lovely visual to brighten your day and give you inspiration while caring for your newborn.",
      image: "https://i.pinimg.com/736x/6d/31/50/6d31501b10e0302eab6dbb9173396a4e.jpg"
    },
    {
      title: "Essential Do's for Your First Month",
      content: "These guidelines will help you navigate the early weeks with confidence and care for both you and your baby.",
      list: [
        "DO sleep when your baby sleeps. This is the most important advice for a reason. Even 20-minute naps can significantly improve your mood and energy levels.",
        "DO accept all offers of help. Let friends and family bring meals, do laundry, or watch the baby while you shower. You don't need to be a superhero.",
        "DO stay hydrated and eat regularly. Keep a large water bottle and healthy snacks (nuts, fruit, granola bars) at your feeding station. Your body needs fuel to recover and produce milk.",
        "DO follow safe sleep guidelines every time. Always place baby on their back in a bare bassinet or crib—no loose blankets, pillows, or stuffed animals.",
        "DO trust your instincts. You know your baby better than anyone. If something feels wrong, don't hesitate to contact your healthcare provider.",
        "DO take care of your healing body. Use your peri bottle, take sitz baths, and don't push yourself physically. Recovery takes time.",
        "DO talk about your feelings. Share the highs and lows with your partner, friends, or a professional. Postpartum emotions are complex and normal.",
        "DO get outside every day if possible. Even a short walk around the block can dramatically improve your mood and help reset your perspective.",
        "DO practice skin-to-skin contact regularly. This helps regulate baby's temperature, heart rate, and breathing while strengthening your bond.",
        "DO establish a simple bedtime routine. Consistency helps babies understand day from night, even this early.",
        "DO respond to your baby's cries promptly. You cannot spoil a newborn. Responding builds trust and security.",
        "DO take pictures and videos, but also be present. The days are long but the years are short—remember to experience moments without your phone.",
        "DO communicate your needs clearly to your partner. They can't read your mind—tell them what would help you most.",
        "DO celebrate small victories. A successful feeding, a good burp, or a slightly longer nap are all worth acknowledging.",
        "DO be patient with yourself and your baby. You're both learning together. Progress isn't always linear.",
      ],
    },
    {
      title: "❌ Important Don'ts for Your First Month",
      content: "Avoiding these common pitfalls will help ensure a safer, healthier start for both you and your baby.",
      list: [
        "DON'T try to be perfect. There's no such thing as a perfect mother. Good enough is truly good enough.",
        "DON'T compare your baby or your journey to others. Every baby develops at their own pace, and every mother's experience is unique.",
        "DON'T ignore signs of postpartum depression or anxiety. If you feel overwhelming sadness, rage, or can't sleep when the baby sleeps, seek help immediately.",
        "DON'T skip your postpartum checkups. Your health matters too. These appointments are crucial for catching any complications early.",
        "DON'T try to do housework when the baby sleeps. Rest is more important than a clean house. Let the chores wait or delegate them.",
        "DON'T use sleep positioners, weighted swaddles, or crib bumpers. These products are not safe and increase SIDS risk.",
        "DON'T feel pressured to entertain visitors. Set clear boundaries about visiting times and don't feel guilty saying no.",
        "DON'T make major decisions in the first month. Your judgment may be clouded by sleep deprivation and hormonal changes.",
        "DON'T ignore your own basic needs. Showering, eating, and hydrating are not luxuries—they're necessities.",
        "DON'T try to implement strict sleep training. Newborns aren't capable of self-soothing. Respond to their needs promptly.",
        "DON'T hesitate to contact your pediatrician with concerns. It's better to ask a 'silly' question than worry unnecessarily.",
        "DON'T forget about your partner. Check in with each other daily, even if it's just a quick hug or 'how are you really?'",
        "DON'T spend too much time on parenting forums. Information overload can increase anxiety. Trust your medical providers.",
        "DON'T try to exercise beyond gentle walking without your doctor's clearance. Your body needs time to heal.",
        "DON'T neglect your nutrition. Now is not the time for restrictive dieting. Your body needs nutrients for recovery.",
      ],
    },

    {
      title: "Feeding Do's and Don'ts",
      list: [
        "DO feed on demand, typically 8–12 times in 24 hours.",
        "DO ensure a deep latch to prevent nipple pain.",
        "DO alternate which breast you start with each feeding.",
        "DO seek help from a lactation consultant if you're struggling.",
        "DON'T wait until your baby is crying to feed — watch for early hunger cues.",
        "DON'T ignore signs of mastitis (red, painful breasts with fever).",
        "DON'T supplement with formula without medical guidance unless necessary.",
        "DO follow formula preparation instructions carefully.",
        "DO hold baby semi-upright during feeds.",
        "DO burp baby frequently during and after feeding.",
        "DO use room temperature water for mixing formula when possible.",
        "DON'T microwave formula — it can create hot spots.",
        "DON'T force baby to finish a bottle if they show signs of fullness.",
        "DON'T reuse leftover formula from previous feedings.",
        "DO create a comfortable feeding station with water and snacks.",
        "DO track wet and dirty diapers to ensure adequate intake.",
        "DO maintain eye contact and talk to your baby during feeds.",
        "DON'T compare your baby's feeding patterns to others.",
        "DON'T feel guilty about your feeding method — fed is best.",
        "DON'T prop bottles or leave baby unattended during feeding."
      ]
    },
    {
      title: "Sleep Do's and Don'ts",
      content: "Establishing healthy sleep habits from the beginning sets the foundation for better sleep in the future.",
      list: [
        "DO put baby down drowsy but awake when possible",
        "DO use a consistent sleep environment for naps and nighttime",
        "DO differentiate between day and night with light and activity levels",
        "DO use white noise to help soothe and block household sounds",
        "DO follow the ABCs of safe sleep: Alone, on their Back, in a Crib",
        "DON'T bed-share, especially if you're excessively tired or have been drinking",
        "DON'T use loose blankets, pillows, or soft bedding in the sleep area",
        "DON'T let baby sleep in swings, car seats, or bouncers for extended periods",
        "DON'T keep the house completely silent during naps—normal household sounds are fine",
        "DON'T expect consistent sleep patterns—newborn sleep is naturally irregular",
      ],
    },
    {
      title: "🌡️ Health & Safety Do's and Don'ts",
      content: "Keeping your baby safe and healthy is the top priority during these vulnerable early weeks.",
      list: [
        "DO wash your hands frequently and ask visitors to do the same",
        "DO take your baby's temperature rectally for most accurate reading",
        "DO keep up with recommended well-baby checkups and vaccinations",
        "DO use a rear-facing car seat properly installed in the back seat",
        "DO support baby's head and neck whenever you lift or carry them",
        "DON'T take newborn to crowded places unnecessarily in the first month",
        "DON'T allow sick people to visit or handle the baby",
        "DON'T shake the baby for any reason—if frustrated, put them safely in crib and walk away",
        "DON'T use harsh chemicals or strong fragrances around the baby",
        "DON'T leave baby unattended on high surfaces like changing tables or beds",
      ],
    },
    {
      title: "Visual Inspiration: Health & Safety Baby Pin",
      content: "Health & Safety Do's and Don'ts",
      image: "https://i.pinimg.com/736x/04/61/9a/04619ad7854f9d77381894e0ca759a10.jpg"
    },
    {
      title: "Your Recovery Do's and Don'ts",
      content: "Taking care of yourself is not selfish—it's essential for being able to care for your baby.",
      list: [
        "DO listen to your body and rest when you need to",
        "DO eat nutritious meals and stay hydrated",
        "DO take prescribed pain medication as needed",
        "DO gentle pelvic floor exercises when cleared by your doctor",
        "DO wear comfortable, supportive clothing and nursing bras",
        "DO talk about your birth experience and process your emotions",
        "DON'T lift anything heavier than your baby without doctor's clearance",
        "DON'T ignore signs of infection (fever, increased pain, foul discharge)",
        "DON'T try to 'bounce back' to your pre-pregnancy body immediately",
        "DON'T isolate yourself—reach out to other new moms for support",
        "DON'T feel pressured to have sex until you're physically and emotionally ready",
        "DON'T neglect your mental health—postpartum depression is treatable",
      ],
    },
    {
      title: "Final Thoughts: You've Got This",
      content: `The first month of motherhood (Parenting) is a journey like no other. It's filled with moments of overwhelming love, exhausting nights, and learning experiences that will shape you as a mother. Remember that this phase is temporary—the sleepless nights will gradually ease, the feeding challenges will resolve, and you will find your footing.

Be gentle with yourself. You are learning to care for your newborn while recovering from a major physical event. There will be good days and challenging days, and both are completely normal. Trust that you are the exact right mother for your baby. You don't need to have all the answers—you just need to show up with love, one moment at a time.

Keep this guide handy, but remember that the most valuable wisdom often comes from within. Your instincts, combined with medical guidance and supportive relationships, will carry you through this incredible first month and beyond. You are doing an amazing job, even on the days when it doesn't feel like it.`,
    },
  ];

  const faqs = [
    {
      q: "How strict should I be with the daily routine?",
      a: "Think of the routine as a flexible framework, not a rigid schedule. Follow your baby's cues for feeding and sleeping while using the routine as a general guide for your day. The goal is to establish patterns, not enforce strict timelines.",
    },
    {
      q: "What if my baby doesn't follow any routine at all?",
      a: "This is completely normal in the first month! Some babies take longer to establish patterns. Focus on responding to their needs and look for natural rhythms rather than forcing a schedule. Most babies start developing more predictable patterns around 6-8 weeks.",
    },
    {
      q: "How can I get my baby to sleep longer at night?",
      a: "In the first month, most babies need to feed every 2-3 hours, including overnight. Focus on full feedings during the day, exposure to natural light, and creating a calm bedtime routine. Remember, night wakings are normal and necessary for your baby's growth and development.",
    },
    {
      q: "What's the most important do for new moms?",
      a: "Accept help and sleep when the baby sleeps. These two practices will have the biggest impact on your wellbeing and ability to care for your newborn effectively.",
    },
    {
      q: "What's the most dangerous don't for newborns?",
      a: "Never bed-share on sofas or chairs, and always follow safe sleep guidelines (baby on back, in bare crib/bassinet). These practices significantly reduce the risk of SIDS and accidental suffocation.",
    },
    {
      q: "How do I know if I'm doing too much too soon?",
      a: "Listen to your body. Increased bleeding, pain, or extreme fatigue are signs you need to slow down. Recovery from birth takes 6-8 weeks minimum—respect that timeline.",
    },
  ];

  return (
    <BlogLayout
      title="Motherhood Month 1: Essential Survival Guide for New Moms with Daily Routine, Feeding Tips & Postpartum Recovery"
      description="Welcome to the first month of your motherhood (Parenting) journey! The first 30 days with your newborn are full of love, surprises, and challenges. This guide is here to help you navigate the early days with practical advice, realistic daily routines, feeding guidance, sleep tips, and postpartum recovery recommendations. Think of this as a friendly companion, offering tips that you can actually use while caring for your baby and yourself."
      mainImage="/images/motherhood-1.jpg"
      sections={sections}
      faqs={faqs}
    >
      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          ❓ Frequently Asked Questions — First Month Guide
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg">
              <button
                className="w-full text-left px-4 py-3 font-medium text-gray-700 hover:bg-orange-50 flex justify-between items-center"
                onClick={() => toggleFAQ(idx)}
              >
                {faq.q}
                <span>{openFAQ === idx ? "−" : "+"}</span>
              </button>
              {openFAQ === idx && (
                <div className="px-4 pb-4 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </BlogLayout>
  );
}
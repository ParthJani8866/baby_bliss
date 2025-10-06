"use client";

import BlogLayout from "../components/BlogLayout";

export default function MotherhoodMonth7() {
  const faqs = [
    {
      q: "My baby isn't crawling yet. Should I be concerned?",
      a: "Not necessarily! The range for crawling is wide—typically between 6-10 months, and some babies skip traditional crawling altogether. What's important is that your baby shows interest in moving and finds ways to reach desired objects. If your baby isn't showing any attempts at mobility by 9-10 months, mention it to your pediatrician, but variations in timing are completely normal."
    },
    {
      q: "How can I encourage my baby to crawl?",
      a: "Provide plenty of supervised tummy time on a firm surface. Place interesting toys just out of reach to motivate movement. Get down on the floor and demonstrate crawling movements. Create mini-obstacle courses with pillows and cushions (with close supervision). Most importantly, be patient and celebrate small progress—each baby develops at their own pace."
    },
    {
      q: "What are the best first finger foods?",
      a: "Ideal first finger foods are soft, easy to grasp, and dissolve easily. Good options include: small pieces of ripe banana, well-cooked sweet potato or carrot sticks, avocado chunks, scrambled egg pieces, soft-cooked pasta, flaked fish without bones, or soft cheese cubes. Always ensure foods are cut into manageable sizes and avoid choking hazards like whole grapes, nuts, or hard raw vegetables."
    },
    {
      q: "How do I handle stranger anxiety?",
      a: "Respect your baby's feelings—don't force them to go to unfamiliar people. When introducing new people, have them approach slowly and avoid direct eye contact initially. Hold your baby during introductions until they feel comfortable. Prepare visitors by explaining that your baby might be wary of strangers. This phase typically peaks around 8-10 months and gradually improves."
    },
    {
      q: "How much should my 7-month-old be sleeping?",
      a: "Most 7-month-olds need 12-15 hours of sleep total, typically with 10-12 hours at night (often with 1-2 wakings) and 2-4 hours of daytime sleep across 2-3 naps. Sleep patterns can be disrupted by teething, developmental leaps, and separation anxiety. Consistent routines help, but expect some variability during this active developmental period."
    },
    {
      q: "What's the most important baby-proofing I should do?",
      a: "Priority areas include: stairways (install gates at top and bottom), electrical outlets (cover all within reach), furniture anchoring (secure bookshelves, dressers, and TVs), cabinet locks (especially in kitchen and bathrooms), and cord management (blind and curtain cords). Get down on your hands and knees to see hazards from your baby's perspective."
    },
    {
      q: "My baby seems more frustrated lately. Why?",
      a: "This is common as cognitive awareness outpaces physical capabilities. Your baby understands what they want but may lack the skills to achieve it. They might see a toy across the room but not be able to crawl efficiently to reach it. This frustration often precedes major developmental breakthroughs. Offer help when needed but also allow space for problem-solving."
    },
    {
      q: "When should I introduce a sippy cup?",
      a: "Now is a great time to introduce a sippy cup or straw cup with small amounts of water at mealtimes. Start with just a few sips to practice the skill. Don't expect them to master it immediately—it's a learning process. The goal is familiarity with cup drinking in preparation for weaning from bottles later."
    },
    {
      q: "How can I tell if my baby is ready for more textured foods?",
      a: "Signs of readiness include: managing thin purees without gagging, showing interest in what you're eating, attempting to grab food from your plate, and making chewing motions. Start with lightly mashed foods or soft lumps in purees. Always supervise closely when introducing new textures."
    },
    {
      q: "Is it normal for my baby to wake up practicing new skills?",
      a: "Yes! Many babies wake themselves up practicing crawling, sitting, or other new physical skills. This is sometimes called crawling in sleep or sleep practicing. Its a normal part of skill consolidation. Gently help them settle back to sleep without too much stimulation."
    }
  ]
  const sections = [
    {
      title: "The Great Mobility Leap: Embracing Month Seven",
      content: `Welcome to month seven, where your baby's world expands beyond the immediate space around them and into every corner of your home! This month marks one of the most dramatic transitions in your baby's first year—the emergence of independent mobility. That stationary little bundle who once stayed exactly where you placed them is now becoming an explorer, driven by insatiable curiosity and a growing sense of independence.

      The seventh month is often called the "on the move" phase, and for good reason. While some babies are already crawling proficiently, many are experimenting with various forms of locomotion—the classic hands-and-knees crawl, the army crawl (pulling themselves forward with their arms), the bottom scoot, or even the roll-and-reach method. Each baby finds their unique way to get from point A to point B, and watching this process unfold is both thrilling and slightly terrifying for parents.
      
      Alongside this physical revolution comes significant cognitive and emotional development. Your baby's memory is improving, allowing them to recognize familiar people and become wary of strangers. Their communication skills are becoming more sophisticated, with babbling that sounds increasingly conversational. And their fine motor skills are advancing to the point where they can start feeding themselves finger foods.
      
      This month requires a shift in your parenting approach—from primarily meeting needs to also setting boundaries and ensuring safety. The baby-proofing that seemed optional last month becomes absolutely essential now. But amid all these changes, you'll witness moments of pure magic: the determined look on your baby's face as they reach for a toy just out of reach, the triumphant smile when they finally achieve their goal, and the heart-melting way they still crawl back to you for comfort and reassurance.`
    },
    {
      title: "Your Journey: Finding Balance Amid the Motion",
      content: `As your baby becomes more mobile and independent, your own experience of motherhood continues to evolve in meaningful ways.`,
      list: [
        `Physical Recovery and Strength: By seven months postpartum, most mothers feel significantly recovered from childbirth. Your body has adapted to the physical demands of parenting—lifting, carrying, and bending feel more natural. However, chasing after a mobile baby introduces new physical challenges! You might find yourself spending more time on the floor, kneeling to interact with your baby at their level, and developing what parents jokingly call "the crawl squat"—that quick descent to the floor to prevent your baby from reaching something dangerous. Your core strength continues to improve, but remember to practice good body mechanics when lifting your increasingly heavy baby.`,

        `The Emotional Rollercoaster of Growing Independence: This month often brings mixed emotions. On one hand, there's immense pride and wonder as you watch your baby achieve new physical milestones. On the other hand, many mothers experience a sense of bittersweet nostalgia as their "baby" seems to be disappearing, replaced by this active, curious little person. The intense physical dependency of the early months is gradually giving way to a different kind of relationship—one that still involves plenty of cuddles but also includes encouraging independence. It's normal to feel both excited about these developments and slightly sad about leaving the baby phase behind.`,

        `Navigating Work-Life Balance: If you've returned to work, you're likely settling into a routine by now. However, the increased mobility and potential separation anxiety can make departures more challenging. Your baby might cry when you leave or become extra clingy when you return. This is developmentally normal but emotionally draining. Many working mothers find that establishing consistent goodbye rituals and maximizing quality time during mornings and evenings helps ease this transition. Remember that your baby's strong attachment to you is a sign of healthy bonding, not a problem to be solved.`,

        `Mental Load and Safety Vigilance: The mental load of parenting increases significantly this month. With mobility comes the constant need to scan environments for potential hazards. Your brain is now running background checks on every room: Are the electrical outlets covered? Is that small object within reach? Could they pull that cord? This heightened vigilance can be exhausting and contribute to anxiety. It's important to create truly safe spaces where your baby can explore freely, giving both of you a break from constant monitoring. Designate one or two thoroughly baby-proofed areas where you can relax your guard slightly.`,

        `Finding Moments for Self-Care: As your baby becomes more engaged with their environment, you might find you have slightly more opportunities for brief self-care moments. A baby who is fascinated by stacking cups might play independently for ten minutes, giving you time to drink a hot cup of tea or read a few pages of a book. These small windows become precious opportunities to recharge. The key is recognizing them and giving yourself permission to use them for your own needs rather than rushing to accomplish household tasks.`
      ]
    },
    {
      title: "Your Little Explorer: Milestones and Marvels of Month Seven",
      content: `Get ready for a month of dramatic changes! Your baby is developing new skills at an astonishing pace. Here's what you might observe.`,
      list: [
        `The Mobility Revolution: This is the month when many babies truly become mobile. Classic crawling typically emerges between 7-10 months, but there are many variations. Some babies master the traditional cross-crawl (opposite hand and knee moving together), while others develop unique styles like the "commando crawl" (lying on their belly and pulling with their arms), the "bear walk" (walking on hands and feet with straight legs), or the "bottom shuffle" (scooting along in a sitting position). Don't worry about the method—what matters is that your baby can purposefully move themselves. This new mobility represents incredible progress in coordination, strength, and spatial awareness.`,

        `Fine Motor Skill Refinement: Your baby's hand skills are becoming increasingly sophisticated. They're transitioning from the palmar grasp (using the whole hand) toward the developing pincer grasp (using thumb and forefinger). While the true pincer grasp typically emerges around 8-9 months, you'll see the preparation happening now. They can rake small objects toward themselves, transfer items smoothly from hand to hand, and bang toys together with purpose. This growing dexterity makes self-feeding with finger foods possible and opens up new possibilities for play.`,

        `Language Development Acceleration: Your baby's babbling becomes more complex and conversational this month. You'll hear longer strings of sounds, more varied consonants, and changes in intonation that mimic real speech patterns. While "ma-ma" and "da-da" may not yet refer specifically to parents, these sounds are becoming more frequent and intentional. Your baby is starting to understand that sounds have meaning and that conversations involve turn-taking. Respond to their babbles as if they're telling you something important—this reinforcement is crucial for language development.`,

        `Social-Emotional Intelligence: Month seven often brings the emergence of "stranger anxiety"—wariness or distress around unfamiliar people. This represents a cognitive milestone: your baby can now distinguish between familiar caregivers and strangers, and they have formed strong attachments to their primary caregivers. While this can be challenging socially, it's actually a positive sign of healthy emotional development. Your baby is learning that you are their safe base from which to explore the world. You might also notice the beginnings of "separation anxiety" when you leave the room.`,

        `Cognitive Leaps: Your baby's understanding of object permanence—the concept that things exist even when out of sight—is strengthening. This is why games like peek-a-boo become endlessly fascinating. They're beginning to understand that when you disappear behind your hands, you still exist and will reappear. This cognitive development also means they may become upset when you leave the room because they now understand that you've gone somewhere rather than simply ceasing to exist.`,

        `Physical Growth and Teething: Most babies have doubled their birth weight by seven months and are working on tripling it by their first birthday. Teething continues, with many babies having their first teeth (usually the bottom central incisors) and working on the next set. The increased physical activity means your baby is burning more calories and may show increased appetite. Their sleep patterns might be disrupted by both teething discomfort and the excitement of practicing new skills, even in their sleep!`
      ]
    },
    {
      title: "Visual Inspiration: Milestones and development",
      content: "Milestones and development",
      image: "https://i.pinimg.com/736x/c9/9c/da/c99cda3f3eed912d89e8b1462b84cdc9.jpg"
    },
    {
      title: "Nutrition and Feeding: The Finger Food Frontier",
      content: `As your baby's skills and independence grow, so do their feeding capabilities. Month seven marks an exciting expansion in their culinary experiences.`,
      subsections: [
        {
          subtitle: "Milk Feeds: The Nutritional Foundation",
          list: [
            `Breastfed babies typically nurse 6-8 times in 24 hours, though the pattern may become more variable. Some babies become more efficient nursers, completing feeds quickly, while others may become more distracted and nurse in shorter, more frequent sessions.`,
            `Formula-fed babies usually take 24-32 ounces daily, spread across 4-5 feeds. The amount per feeding may increase as their stomach capacity grows.`,
            `Continue offering milk feeds before solids to ensure your baby gets the necessary nutrition. Breast milk or formula should remain the primary source of nutrition until one year.`,
            `Night feedings may naturally decrease as some babies begin sleeping longer stretches, but many seven-month-olds still need 1-2 night feeds, especially if they're very active during the day or going through growth spurts.`
          ]
        },
        {
          subtitle: "Solids Expansion: Texture and Variety",
          list: [
            `Aim for 2-3 solid meals per day, offered about an hour after milk feeds. The timing helps ensure your baby is hungry enough to be interested in solids but not so hungry that they become frustrated.`,
            `Texture Progression: If you started with smooth purees, now is the time to introduce thicker textures. Try mashed foods with small soft lumps, grated foods, or soft-cooked vegetables cut into manageable pieces. This helps your baby learn to move food around in their mouth and practice the chewing motion, even before they have many teeth.`,
            `Finger Food Introduction: Offer soft, graspable finger foods that dissolve easily or are soft enough to gum. Good options include: small pieces of ripe banana, well-cooked pasta, small chunks of avocado, flaked soft-cooked fish, scrambled egg pieces, or soft-cooked vegetable sticks. Always supervise closely during finger food meals.`,
            `Allergen Introduction: Continue introducing common allergens one at a time, waiting 3-5 days between new foods. By seven months, many babies have tried several potential allergens like peanut, egg, dairy, and soy. If there's no reaction, continue offering these foods regularly to maintain tolerance.`,
            `Self-Feeding Skills: Embrace the mess! Let your baby practice self-feeding, even if it means more food ends up on the floor and in their hair than in their mouth. This messy exploration is crucial for developing fine motor skills and establishing healthy eating habits.`
          ]
        }
      ]
    },
    {
      title: "Heartfelt Stories: Real Mothers, Real Journeys",
      content: `Sometimes the most valuable wisdom comes from other mothers navigating the same stage. Here are some heartfelt stories from the seventh month.`,
      subsections: [
        {
          subtitle: "The Day Everything Changed",
          content: `"I'll never forget the moment my daughter truly became mobile. I had placed her on her play mat with her favorite stacking rings just out of reach. For weeks, she'd look at them, reach for them, and eventually fuss when she couldn't get them. But this particular afternoon, something clicked. She got up on her hands and knees, rocked back and forth a few times, and then—with intense determination—crawled three 'steps' to reach those rings. The look of pure triumph on her face was absolutely priceless. Then reality hit: she immediately turned and crawled toward the electrical outlet I hadn't yet covered. In that moment, I realized our lives had permanently changed. The stationary baby phase was over, and we were entering a whole new era of parenting. It was equal parts thrilling and terrifying!" — Neha, Mumbai`
        },
        {
          subtitle: "The Unexpected Clinginess",
          content: `"My son had always been a social butterfly, happily going to anyone who wanted to hold him. Then around seven months, something shifted. At a family gathering, when his favorite aunt reached for him, he buried his face in my shoulder and started crying. I was embarrassed and worried—had I done something wrong? Was he becoming overly dependent? My pediatrician reassured me that this was completely normal stranger anxiety, a sign that he had formed healthy attachments and could now distinguish between familiar and unfamiliar people. Learning this helped me reframe these moments not as problems but as opportunities to provide the security he needed to eventually feel safe exploring social relationships on his own terms." — Shalini, Hyderabad`
        },
        {
          subtitle: "The Finger Food Revolution",
          content: `"We had been doing purees for about a month with moderate success, but when I introduced soft-cooked carrot sticks and avocado chunks at seven months, something magical happened. My daughter's eyes lit up with understanding—she could feed herself! The concentration on her face as she worked to pick up each piece was incredible to watch. Yes, there was carrot in her hair, avocado on the walls, and sweet potato under the high chair, but seeing her pride and independence made every bit of cleanup worthwhile. Those messy meals taught me to let go of my need for neatness and embrace the beautiful chaos of learning." — Priya, Delhi`
        }
      ]
    },
    {
      title: "Essential Gear for Month Seven: Safety and Skill Development",
      content: `As your baby's abilities expand, so do your gear needs. Here are some essentials for supporting development and ensuring safety during this mobile phase.`,
      list: [
        `Comprehensive Baby-Proofing Supplies: This is non-negotiable now. You'll need safety gates for stairways and doorways, outlet covers for every electrical socket, corner guards for sharp furniture edges, cabinet locks for kitchen and bathroom cabinets, and anchor straps to secure top-heavy furniture to walls. Don't forget to secure cords from blinds and curtains, and move cleaning supplies and medications to high, locked cabinets.`,

        `Interactive Play Equipment: Your mobile baby needs toys that encourage movement and problem-solving. Activity cubes with different manipulative features, stacking rings or cups, simple shape sorters, and balls of various sizes all support cognitive and motor development. Push toys can be used with adult supervision once your baby starts pulling to stand.`,

        `Feeding Advancement Tools: As self-feeding begins, you'll want divided plates with suction bottoms, soft-tipped spoons that are easy for little hands to grip, silicone bibs with catch pockets, and spill-proof sippy cups or straw cups. Consider a splat mat under the high chair to make cleanup easier.`,

        `Teething Support: With more teeth likely emerging, provide a variety of teething options. Some babies prefer different textures at different times—soft silicone, firm rubber, or fabric. Chilled (not frozen) teething toys can provide comfort during particularly uncomfortable periods.`,

        `Books for Growing Minds: Interactive books become even more engaging now. Look for lift-the-flap books, touch-and-feel books with different textures, and sturdy board books with simple, bright illustrations. Reading together supports language development and provides valuable bonding time.`,

        `Comfort and Security Items: With stranger and separation anxiety emerging, many babies become attached to comfort objects like small security blankets or soft toys. These can provide reassurance during stressful moments like separations or meeting new people. Always choose items that are safe for sleep if they'll be in the crib.`,

        `Outdoor Exploration Gear: As your baby becomes more mobile, they'll enjoy time outdoors. A blanket for grass play, a sun hat for protection, and age-appropriate outdoor toys like soft balls or sand toys (with supervision) support physical development and sensory exploration.`
      ]
    },
    {
      title: "Visual Inspiration: Essential Gear for Month Seven",
      content: "Essential Gear for Month Seven",
      image: "https://i.pinimg.com/736x/c8/cf/05/c8cf0527afbb7155c03f6bde5dd57d19.jpg"
    },
    {
      title: "Embracing the Motion: Finding Joy in the Chaos",
      content: `Month seven is a whirlwind of activity, discovery, and yes—occasional chaos. The stationary baby of just a few weeks ago is now a mobile explorer, and your role is evolving from constant physical caretaker to safety manager, cheerleader, and comfort provider.

      This month requires a significant mental shift. The controlled environment you once enjoyed is gone, replaced by the need to create safe spaces for exploration while maintaining reasonable boundaries. The clean floors and tidy living rooms may become distant memories as toys spread to every corner and mealtimes leave evidence throughout your kitchen.
      
      But amid this beautiful chaos are moments of pure magic. The determined look on your baby's face as they figure out how to navigate around a pillow. The triumphant giggle when they finally reach that coveted toy. The way they crawl into your lap for a quick recharge before heading out on their next adventure. These are the moments that make the extra vigilance and constant cleanup worthwhile.
      
      As you navigate this mobile phase, remember that your baby's exploration is crucial work. Every crawl across the room, every successful grasp of a finger food, every babbled "conversation" is building neural pathways and developing essential skills. Your role is to provide the safe container for this exploration—both physically through baby-proofing and emotionally through your responsive presence.
      
      Take videos and photos, because these early mobility days are fleeting. Soon, crawling will be replaced by walking, and you'll look back fondly on these days when your baby's world was measured in square feet rather than city blocks. Most importantly, remember to step back and appreciate the incredible journey you're witnessing. You're not just watching a baby learn to crawl—you're witnessing the emergence of independence, curiosity, and the courageous spirit that will carry your child through a lifetime of exploration.`
    }
  ];

  return (
    <BlogLayout
      title="Parenting (Motherhood) Month 7 — Crawling, Stranger Anxiety & Finger Foods"
      mainImage="/images/motherhood-7.jpg"
      description="Parenting (Motherhood) Month 7 brings crawling, babbling, and the introduction of finger foods. Learn about growth milestones, feeding tips, and real mom stories in this exciting stage."
      sections={sections}
      faqs={faqs}
      sidebarCategory="motherhood"
      sidebarTitle="Baby Safety Essentials"
    />
  );
}
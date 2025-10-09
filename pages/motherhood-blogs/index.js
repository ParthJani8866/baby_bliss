"use client";

import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MotherhoodBlogs() {
  const motherhoodPosts = [
    {
      month: 1,
      title: "Month 1 — Surviving the First 30 Days",
      slug: "Motherhood-month-1",
      description: `The first month of parenting is often described as the most overwhelming yet magical period in a parent’s life. During this time, both the baby and the mother are adjusting to a completely new routine. The newborn is adapting to life outside the womb, while the mother is recovering physically and emotionally from childbirth. Sleep deprivation is common, as newborns feed every 2–3 hours, including nighttime. It’s crucial for mothers to prioritize rest whenever possible, even if it means napping while the baby naps.

Feeding is a central focus in Month 1, whether the mother chooses breastfeeding, formula feeding, or a combination of both. Breastfeeding can take time to establish, and it’s normal for both mother and baby to experience challenges in the early days. New mothers are encouraged to seek support from lactation consultants or postpartum support groups. Keeping track of feeding times, diaper changes, and baby cues can help establish a routine and provide reassurance that the baby is thriving.

Physical recovery for the mother varies depending on whether she had a vaginal birth or a cesarean section. Pain, soreness, and postpartum bleeding are common in the first few weeks. Gentle movement, hydration, and proper nutrition support healing. Emotional health is equally important; many mothers experience mood swings, anxiety, or the “baby blues” during this period. Open communication with a partner, family, or support network can help manage these feelings.

Bonding with the newborn is essential in Month 1. Skin-to-skin contact, gentle rocking, talking, and eye contact help the baby feel secure and promote attachment. Observing the baby’s cues, like rooting or fussiness, helps parents respond appropriately and build confidence in caregiving. This month also includes routine pediatric check-ups, ensuring the baby is gaining weight, feeding well, and meeting early developmental milestones.

Overall, Month 1 is about survival, adjustment, and laying the foundation for a nurturing environment. Mothers are encouraged to be kind to themselves, accept help, and focus on small wins each day. By the end of this month, many parents begin to feel a sense of rhythm, even amidst the chaos, and begin to enjoy the small joys of newborn life, like gentle coos, tiny yawns, and first smiles.`
    },
    {
      month: 2,
      title: "Month 2 — Smiles & Early Connections",
      slug: "Motherhood-month-2",
      description: `Month 2 of parenting is often filled with small victories and increasing confidence. Babies begin to show social smiles, respond to familiar voices, and start engaging more with their environment. This period is essential for bonding, as parents can begin to recognize and respond to their baby’s unique cues.

Feeding routines continue to be central, with many mothers noticing the baby’s patterns becoming more predictable. Growth spurts may occur, causing increased feeding demands, and parents should remain flexible to accommodate the baby’s needs. Proper nutrition and hydration are also important for the mother, especially if breastfeeding.

Emotional health for mothers can fluctuate, as postpartum adjustments continue. Recognizing signs of anxiety, mood swings, or fatigue is important, and parents should seek support when needed. Self-care practices, even brief moments of rest or relaxation, help maintain well-being.

Developmentally, babies start tracking objects visually, turning their heads toward voices, and cooing in response. Tummy time becomes crucial for strengthening neck and upper body muscles. Engaging in gentle play, singing, and talking to the baby supports cognitive and emotional growth.

Month 2 is also a time for practical organization. Tracking diapers, sleep patterns, and growth milestones provides reassurance and helps parents notice subtle changes. Pediatric check-ups continue to monitor development, vaccinations, and overall health.

Overall, this month helps build confidence, deepens the parent-baby bond, and sets the foundation for a structured yet flexible routine. Parents start seeing the personality of their little one, and the rewarding smiles and interactions make the challenges of early motherhood (Parenting) more manageable.`
    },
    {
      month: 3,
      title: "Month 3 — Social Smiles & Tummy Time",
      slug: "Motherhood-month-3",
      description: `Month 3 of parenting is a period where the baby becomes more interactive and parents begin to notice real personality traits. Social smiles become more frequent, and babies may respond to familiar faces and voices with increased engagement.

Feeding and sleeping continue to dominate routines. Babies may start to consolidate sleep for longer stretches, but night awakenings remain common. Mothers are encouraged to continue tracking feeding schedules and ensuring adequate rest, while also taking steps to manage their own energy levels.

Tummy time is critical in Month 3. This activity helps strengthen neck, shoulder, and arm muscles, setting the stage for future milestones such as rolling over and crawling. Parents should ensure supervised tummy time several times a day to promote motor development.

Emotional support remains important for both parents. Mood fluctuations, stress, and fatigue are normal during this stage. Maintaining connections with supportive friends, family, or parenting groups can help reduce feelings of isolation.

Babies start cooing, babbling, and exploring sounds, which encourages early communication skills. Parents can respond with vocalizations, read simple books, and engage in gentle play to enhance cognitive development.

Month 3 also introduces more predictable patterns, which can help parents feel a sense of control. Monitoring growth, attending pediatric appointments, and practicing basic caregiving routines are important. Overall, this month strengthens the parent-child connection, encourages healthy physical development, and builds confidence for the next stages of early childhood.`
    },
    {
      month: 4,
      title: "Month 4 — Strengthening Muscles & Interaction",
      slug: "Motherhood-month-4",
      description: `Month 4 of parenting marks an exciting period where babies become more active, alert, and socially engaged. Physical milestones such as rolling from tummy to back, holding heads steady, and increased hand coordination begin to emerge.

Feeding patterns may become more predictable, and many babies start developing stronger sucking reflexes and feeding efficiency. Mothers should monitor growth and ensure the baby receives adequate nutrition, whether through breastfeeding or formula.

Sleep routines can start stabilizing, but sleep regressions may occur as developmental changes arise. Parents should remain flexible, and establish comforting bedtime rituals to encourage longer rest periods for both baby and themselves.

Emotional and cognitive development are rapidly progressing. Babies show increasing curiosity, respond to facial expressions, and enjoy interactive play. Singing, reading, and gentle talking enhance language recognition and bonding.

Month 4 also involves introducing safe play objects that encourage reaching, grasping, and fine motor development. Supervised exploration fosters confidence and independence.

Parents may experience renewed confidence as they notice the baby’s emerging personality and improved responsiveness. Self-care, support from partners, and rest remain vital for sustaining energy levels.

Overall, Month 4 blends excitement with continued learning. It’s a month of growth, connection, and establishing foundational skills that will pave the way for future developmental milestones.`
    },
    {
      month: 5,
      title: "Month 5 — Rolling, Sitting & Exploring",
      slug: "Motherhood-month-5",
      description: `Month 5 of parenting is a phase of discovery and exploration. Babies gain more control over their bodies, begin rolling independently, and may start sitting with support. Their increasing mobility allows for greater interaction with their surroundings and stimulates cognitive development.

Feeding remains a central focus, with some babies showing interest in solid foods, though milk or formula remains the primary source of nutrition. Mothers should continue monitoring intake, growth, and hydration, ensuring the baby’s needs are met.

Sleep patterns may change due to increased activity and developmental leaps. Establishing consistent nap times and a soothing bedtime routine supports rest for both mother and baby.

Cognitive development flourishes in Month 5. Babies explore objects with hands and mouths, recognize familiar faces, and react to social cues. Parents can encourage learning through interactive play, talking, and introducing age-appropriate toys.

Emotional bonding deepens as babies express pleasure, frustration, and curiosity more visibly. Responding to these cues helps build trust and secure attachment.

Parents may face challenges with juggling care, rest, and personal time. Support networks, self-care routines, and shared responsibilities contribute to sustaining well-being.

Month 5 is characterized by rapid growth, exploration, and interaction. Parents witness newfound independence in their babies, along with emerging communication skills, setting the stage for future milestones such as crawling and standing.`
    },
    {
      month: 6,
      title: "Month 6 — First Solids & Responsive Play",
      slug: "Motherhood-month-6",
      description: `Month 6 of parenting is a significant milestone in a baby’s first year. Many babies are ready for their first solid foods, complementing breast milk or formula. Introducing pureed fruits, vegetables, and cereals helps babies develop taste preferences and fine motor skills as they begin self-feeding in later months.

Physical development continues with improved coordination, rolling, and beginning to sit independently. Tummy time remains important for strengthening core muscles and encouraging mobility.

Sleep patterns often stabilize, but growth spurts and teething can temporarily disrupt routines. Parents should maintain consistent bedtime rituals and provide comfort during night awakenings.

Cognitive and emotional development flourishes. Babies respond more actively to social interactions, recognize familiar faces, and demonstrate early problem-solving skills by reaching for toys or objects of interest. Parents can enhance learning through play, songs, and simple games that encourage curiosity.

Health and safety remain a priority. Baby-proofing the home, monitoring choking hazards, and maintaining hygiene are essential steps.

Month 6 emphasizes independence, curiosity, and new experiences. Parents witness major developmental leaps, celebrate first tastes, and reinforce secure attachments, laying the foundation for future exploration and learning.`
    },
    {
      month: 7,
      title: "Month 7 — Sitting Confidently & Babbling",
      slug: "Motherhood-month-7",
      description: `By Month 7 of parenting, babies often sit confidently without support and start exploring their surroundings more actively. Crawling may begin, allowing for greater mobility and interaction with objects in their environment.

Feeding continues to be diverse, with some babies experimenting with finger foods. Milk or formula remains crucial for nutrition. Parents should encourage healthy eating habits while monitoring growth and developmental milestones.

Babies start babbling, combining consonant and vowel sounds, signaling the beginning of language development. Parents can respond to these vocalizations, repeat sounds, and encourage communication to enhance language skills.

Sleep routines may experience temporary disruptions due to teething, increased activity, or separation anxiety. Maintaining soothing bedtime practices helps ensure adequate rest.

Social and emotional development advances, with babies recognizing familiar individuals, displaying joy, frustration, and curiosity. Interactive play, reading, and gentle guidance support cognitive and emotional growth.

Month 7 is a month of increased independence, exploration, and expressive communication. Parents witness exciting developmental achievements, and providing consistent support and encouragement fosters confidence and security.`
    },
    {
      month: 8,
      title: "Month 8 — Crawling, Grasping & Social Play",
      slug: "Motherhood-month-8",
      description: `Month 8 of parenting is characterized by enhanced mobility and curiosity. Babies often crawl confidently, explore surroundings, and manipulate objects with greater precision. Fine motor skills, such as picking up small items with a pincer grasp, begin to develop.

Feeding continues with solids becoming a larger part of the diet. Introducing new textures and flavors encourages healthy eating habits and sensory exploration.

Cognitive development flourishes as babies start understanding cause-and-effect relationships, recognize routines, and enjoy interactive games like peek-a-boo. Parents can foster learning through play, songs, and safe challenges that encourage problem-solving.

Emotional and social skills continue to advance. Babies show preferences for familiar people, may experience separation anxiety, and begin expressing a wider range of emotions. Responsive caregiving builds trust and secure attachment.

Sleep routines may be influenced by increased activity and teething discomfort. Consistent nap schedules and comforting bedtime rituals are beneficial.

Month 8 is a period of rapid growth, exploration, and social engagement. Parents witness remarkable physical and cognitive milestones while supporting their babies in safe, stimulating environments.`
    },
    {
      month: 9,
      title: "Month 9 — Standing, Stronger Communication & Play",
      slug: "Motherhood-month-9",
      description: `Month 9 of parenting is a time of increasing independence and communication. Babies often pull themselves up to stand, cruise along furniture, and develop stronger leg muscles in preparation for walking. Hand-eye coordination improves, enabling more precise interaction with toys and objects.

Feeding becomes more adventurous, with exploration of textures and self-feeding using fingers. Milk or formula remains essential for nutrition. Parents should encourage healthy eating and maintain safe mealtime practices.

Cognitive development includes recognition of routines, problem-solving, and imitation of adults’ actions. Language skills progress with babbling that includes repeated syllables and attempts at simple words. Parents can model language, read aloud, and encourage interaction.

Socially, babies express emotions clearly, enjoy interactive games, and may develop preferences for specific caregivers. Separation anxiety may peak, requiring reassurance and comforting routines.

Sleep may continue to fluctuate due to increased activity and developmental changes. Maintaining consistent bedtime practices helps both baby and parents rest.

Month 9 emphasizes independence, communication, and physical growth. Parents witness critical milestones that prepare the child for walking and more complex interactions.`
    },
    {
      month: 10,
      title: "Month 10 — First Words, Peek-a-Boo & Mobility",
      slug: "Motherhood-month-10",
      description: `Month 10 of parenting is filled with milestones in mobility, communication, and curiosity. Babies often take first steps while holding furniture, experiment with crawling in new directions, and explore spaces more actively. Increased coordination allows them to reach, grasp, and manipulate objects more skillfully.

Language development is evident through babbling with intonation, first meaningful words, and attempts to mimic speech sounds. Parents should encourage communication by responding to vocalizations, narrating daily activities, and reading aloud.

Feeding involves self-feeding, experimenting with different textures, and developing preferences. Milk or formula continues to be essential, and introducing balanced foods promotes nutrition and autonomy.

Cognitive skills progress with problem-solving, understanding object permanence, and participating in interactive games such as peek-a-boo. Socially, babies engage in imitation, express emotions, and show growing attachment to caregivers.

Sleep patterns may fluctuate due to excitement, teething, or physical growth. Maintaining consistent sleep routines helps both babies and parents recharge.

Month 10 is a period of independence, exploration, and expressive communication. Parents observe remarkable growth and should provide safe, supportive environments that encourage learning and confidence.`
    },
    {
      month: 11,
      title: "Month 11 — Early Walking & Playful Independence",
      slug: "Motherhood-month-11",
      description: `Month 11 of parenting is a time of significant physical, cognitive, and emotional milestones. Many babies take their first independent steps, cruise confidently along furniture, and demonstrate increased mobility and coordination. Fine motor skills are further refined, allowing them to grasp objects and explore safely.

Feeding continues with increased self-feeding and exploration of new textures. Balanced nutrition is key, and parents should offer a variety of healthy foods while continuing milk or formula.

Cognitive development includes problem-solving, recognizing patterns, and responding to instructions or gestures. Language skills expand with first words, imitation, and understanding simple commands. Parents can support learning through interactive play, reading, and verbal encouragement.

Socially, babies express independence, emotions, and preferences for familiar caregivers. Separation anxiety may diminish slightly, and attachment remains strong. Play becomes more complex and imaginative.

Sleep may be influenced by excitement, teething, or developmental milestones. Consistent sleep routines and comforting bedtime practices remain important.

Month 11 highlights independence, exploration, and emerging personality. Parents celebrate physical and cognitive achievements while continuing to foster a supportive, safe, and engaging environment.`
    },
    {
      month: 12,
      title: "Month 12 — First Birthday, Walking & Talking",
      slug: "Motherhood-month-12",
      description: `Month 12 of parenting marks the completion of the first year, a period full of remarkable growth and achievements. Babies often walk independently, expand their vocabulary with first words, and demonstrate cognitive skills such as problem-solving, recognition, and early memory recall.

Feeding becomes more advanced, with increased participation in family meals and experimentation with textures. Balanced nutrition remains essential, and parents should encourage self-feeding while monitoring for safety.

Socially, babies show attachment, empathy, and a preference for familiar people. Play becomes more interactive, imaginative, and cooperative. Emotional regulation improves gradually, and babies begin understanding simple instructions and social cues.

Sleep patterns may become more predictable, though transitions like walking and teething can affect nighttime rest. Consistent routines continue to support development.

Month 12 is a milestone month of celebration, reflection, and preparation for toddlerhood. Parents witness the culmination of a year of growth, bonding, and learning, laying the foundation for continued development, independence, and confident parenting.`
    }
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <Head>
        <title>Motherhood Blogs | Belly Buds</title>
        <meta
          name="description"
          content="Explore parenting month by month – a complete guide from newborn care to toddlerhood. Detailed month-by-month guide for the first year of motherhood (Parenting) with tips on feeding, sleeping, development, and bonding."
        />
      </Head>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <h1 className="text-3xl font-bold mb-8 text-orange-500 text-center">
          Month-by-Month Parenting Blogs
        </h1>

        {motherhoodPosts.map((blog) => (
          <div key={blog.slug} id={blog.slug} className="border rounded-lg p-4 shadow hover:shadow-lg">
            <img
              src={`/images/motherhood-${blog.month}.jpg`}
              alt={blog.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
            <h3 className="text-gray-700 whitespace-pre-line">{blog.description}</h3>
            <Link href={`/motherhood-blogs/${blog.slug}`} className="text-orange-500 font-medium mt-2 inline-block">
              Read More About : {blog.slug} →
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

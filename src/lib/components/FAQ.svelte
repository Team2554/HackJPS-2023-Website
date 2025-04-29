<script lang="ts">
    import { AccordionItem, Accordion } from 'flowbite-svelte';
    import type { faqArr } from '$lib/types/faq';

    let faq: faqArr = {
        arr: [
            {
                question: "What is a hackathon",
                answer: `A hackathon is a competition (usually taking place on a weekend) in which student programmers get together, form small teams, and compete to create the best projects they can within the given amount of time. Hackathons may offer prizes (often contributed by sponsors) for the overall best project as well as the best projects in multiple specific categories.

                        Hackathons are designed to bring young people together around a common interest in technology and further develop that interest by allowing them to enjoy themselves while gaining valuable experience. Attendees often make new friends, gain new skills, and have a great time together. Hackathons are especially valuable for those with less experience because they are introduced to peers and mentors who are enough to help them get started on their journey into STEM.`
            },
            {
                question: "Who can attend?",
                answer: "All high school and middle school students aged 13+ are welcome to attend!"
            },
            {
                question: "How do I attend in person?",
                answer: `Our in-person venue will be held on Saturday, June 14th at John P. Stevens High School (855 Grove Ave, Edison, NJ, 08820) in the cafeteria. You don't need to be there the whole time, but our opening ceremony will be held live at that location around 9. You also don't need to be an Edison student to attend. However, you must register in order to attend. Pizza will be provided for lunch free of charge. Furthermore, although the venue will be open for six hours, HackJPS will continue virtually for the remainder of the competition period.
                        
                        Attending in person would be a great opportunity to make some new friends and form a team with other participants like yourself.`
            },
            {
                question: "How much does it cost?",
                answer: "There is no fee to attend! HackJPS is a learning experience, and we don't want to make you pay for it."
            },
            {
                question: "When is it?",
                answer: "Our in-person kickoff is on Saturday, June 14th at 9 am to 3pm. Submissions are due the next day at 6:30 pm. This is a hydbird event, so you don't have to come in person to participate!"
            },
            {
                question: "Do I need coding/hackathon experience to attend?",
                answer: "Nope! You can be a complete beginner. We'll have plenty of workshops and mentors to help you get started, and you'll also be able to meet other beginners like yourself."
            },
            {
                question: "Do I need a team before I can sign up?",
                answer: "If you don't have a team before the event, don't worry! We encourage you to meet new students during or at the beginning of the event through Discord or in person if you come to the physical venue. The maximum number of hackers on a team is 4. Once you do form a team, make sure to add your team members to your submission on Devpost!"
            }
        ]
    }
</script>

<main class="bg-neutral-800 pt-10 md:px-36 px-5 pb-10 font-mono">
    <!-- Title -->
    <div class="text-4xl font-mono font-extrabold text-center text-green-200 mb-3 md:mb-0">FAQ</div>

    <!-- questions and answers -->
    <div>
        <Accordion flush>
            {#each faq.arr as obj} 
                <AccordionItem>
                    <span slot="header" class="text-green-200 text-sm md:text-md max-w-80">{obj.question}</span>
                    <p class="mb-2 text-gray-500 dark:text-neutral-400 whitespace-pre-line text-sm md:text-md">{obj.answer}</p>
                </AccordionItem>
            {/each}
        </Accordion>
    </div>

</main>
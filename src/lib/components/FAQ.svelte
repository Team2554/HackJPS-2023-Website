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
                answer: ""
            },
            {
                question: "How do I attend in person?",
                answer: ""
            },
            {
                question: "How much does it cost?",
                answer: ""
            },
            {
                question: "When is it?",
                answer: ""
            }
        ]
    }
</script>

<main class="bg-neutral-800 pt-10 px-36 pb-50 font-mono">
    <!-- Title -->
    <div class="text-4xl font-mono font-extrabold text-center text-green-200">FAQ</div>

    <!-- questions and answers -->
    <div>
        <Accordion flush>
            {#each faq.arr as obj} 
                <AccordionItem>
                    <span slot="header" class="text-green-200">{obj.question}</span>
                    <p class="mb-2 text-gray-500 dark:text-neutral-400 whitespace-pre-line">{obj.answer}</p>
                </AccordionItem>
            {/each}
        </Accordion>
    </div>

</main>
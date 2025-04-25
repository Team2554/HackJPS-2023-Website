<script>
    const currentYear = new Date().getFullYear();
</script>

<footer class="bg-neutral-800 border-t border-neutral-700 pt-8 pb-6 font-mono">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Logo Section -->
        <div class="flex justify-center mb-2">
            <img src="./images/hackJPS-logo.png" alt="HackJPS Logo" class="h-30 object-contain">
        </div>

        <!-- Simple Links -->
        <div class="flex sm:flex-row justify-center items-center gap-6 mb-8 text-center">
            <a href="https://hackjps25.devpost.com" class="text-neutral-400 hover:text-green-200 transition-colors flex items-center gap-2">
                <img src="./images/devpost-logo.png" alt="Devpost" class="h-5">
                <span>Devpost</span>
            </a>

            <a href="https://discord.gg/KCU5qG7R9m" class="text-neutral-400 hover:text-green-200 transition-colors flex items-center gap-2">
                <img src="./images/discord-logo.png" alt="Devpost" class="h-4">
                <span>Discord</span>
            </a>
            
            <a href="mailto:hackjps-team@googlegroups.com" class="text-neutral-400 hover:text-green-200 transition-colors flex items-center gap-2">
                <i class="fa-solid fa-envelope"></i>
                <span>Contact Us</span>
            </a>
        </div>

        <div class="text-center mb-8">
            <a href="https://jpsrobotics2554.org" class="text-green-300 hover:text-green-200 transition-colors">
                Maintained by JPS Robotics Team
            </a>
        </div>

        <div class="text-center text-neutral-500 text-sm border-t border-neutral-700 pt-6">
            <p>© {currentYear} HackJPS. All rights reserved.</p>
            <p class="mt-2">Organized by John P. Stevens High School Robtoics team.</p>
        </div>
    </div>
</footer>

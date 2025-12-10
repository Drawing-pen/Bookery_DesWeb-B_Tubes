<template>
    <section
    class="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center text-center text-white bg-cover bg-center overflow-hidden bg-[url('/src/assets/heroPict.jpg')]">
    <div class="absolute inset-0 bg-coklat/60"></div>
        <div class="relative z-10 px-4">
            <h1 class="text-5xl md:text-4xl lg:text-6xl font-bold font-gupter mb-3 md:mb-4">
                Welcome to Bookery
            </h1>
            <p class="text-xl md:text-2xl lg:text-2xl mb-6 font-gupter">
                Where great coffee meets great stories
            </p>
            <button
                @click="scrollToSection"
                class="font-gupter inline-block bg-krem text-coklat px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-coklat hover:text-krem hover:shadow-lg cursor-pointer transition-all duration-300"
            >
                Explore Menu
            </button>
        </div>
    </section>
        <section id="menu-section" class="...">
    </section>
</template>

<script>
export default {
    methods: {
        scrollToSection() {
            const section = document.getElementById('menu-section');
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
</script>
<template>
    <section class="py-12 md:py-16 px-4 md:px-8 bg-coklat">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div class="text-krem">
                <h2 class="font-meriweter text-2xl md:text-3xl font-bold mb-6 pb-2 border-b-2 border-krem block w-full">
                    Our Stories
                </h2>
                <p class="font-gupter mb-4 text-xl md:text-xl leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p class="font-gupter mb-6 text-xl md:text-xl leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <router-link
                    to="/about"
                    class="font-gupter inline-block text-krem font-bold duration-300 text-xl md:text-xl hover:underline"
                >
                    Read more
                </router-link>
                </div>
                <div class="order-first md:order-last">
                <img src="/src/assets/aboutUs1.jpg" alt="Our Story" class="w-full h-[250px] md:h-[350px] object-cover rounded-lg shadow-xl"/>
                </div>
            </div>
        </div>
    </section>
</template>
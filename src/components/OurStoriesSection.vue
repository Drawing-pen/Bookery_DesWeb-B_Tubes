<template>
    <section class="py-12 md:py-16 px-4 md:px-8 bg-coklat">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div class="text-krem">
                <h2 class="font-meriweter gap-2 md:gap-3 text-2xl md:text-3xl font-bold mb-6 pb-2 border-b-2 border-krem flex w-full">
                    <span class="icon-[streamline-plump--feather-pen-solid]" style="width: 30px; height: 30px; color: #EAE7DD;"></span>
                    Our Stories
                </h2>
                <p class="font-gupter mb-4 text-xl md:text-xl leading-relaxed text-justify">
                    Visitors can enjoy a wide selection of books available to borrow and read on-site, accompanied by a selection of bread and pastries made to complement your activities—whether working, studying, or simply simply escaping the hustle and bustle.
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
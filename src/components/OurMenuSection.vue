<template>
    <section class="py-12 md:py-16 px-4 md:px-8 bg-coklat">
        <div class="max-w-7xl mx-auto">
            <h2 class="font-meriweter gap-2 md:gap-3 text-2xl md:text-3xl font-bold text-krem mb-8 pb-2 border-b-2 border-krem flex items-center w-full">
                <span class="icon-[icon-park-solid--bread]" style="width: 30px; height: 30px; color: #EAE7dd;"></span>
                Our Menu
            </h2>

            <!-- Foto Menu -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 cursor-pointer">
                
                <div class="relative shadow-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    @click="goToCategory('cupcakes')">
                    <img src="/src/assets/Cupcakes.jpeg" alt="Cupcakes" class="w-full h-48 md:h-64 object-cover" />
                    <div class="absolute inset-0 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="bg-coklat/80 py-6 md:py-6 w-full flex items-center justify-center">
                            <h3 class="font-meriweter text-xl font-bold text-white text-center">Cupcake</h3>
                        </div>
                    </div>
                </div>

                <div class="relative shadow-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    @click="goToCategory('breads')">
                    <img src="/src/assets/bread.jpeg" alt="Breads" class="w-full h-48 md:h-64 object-cover" />
                    <div class="absolute inset-0 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="bg-coklat/80 py-6 md:py-6 w-full flex items-center justify-center">
                            <h3 class="font-meriweter text-xl font-bold text-white text-center">Breads</h3>
                        </div>
                    </div>
                </div>

                <div class="relative shadow-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    @click="goToCategory('pastry')">
                    <img src="/src/assets/kuasong.jpeg" alt="Pastries" class="w-full h-48 md:h-64 object-cover" />
                    <div class="absolute inset-0 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="bg-coklat/80 py-6 md:py-6 w-full flex items-center justify-center">
                            <h3 class="font-meriweter text-xl font-bold text-white text-center">Pastry</h3>
                        </div>
                    </div>
                </div>

                <div class="relative shadow-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    @click="goToCategory('cookies')">
                    <img src="/src/assets/cookie.jpeg" alt="Cookies" class="w-full h-48 md:h-64 object-cover" />
                    <div class="absolute inset-0 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="bg-coklat/80 py-6 md:py-6 w-full flex items-center justify-center">
                            <h3 class="font-meriweter text-xl font-bold text-white text-center">Cookies</h3>
                        </div>
                    </div>
                </div>

                <div class="relative shadow-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    @click="goToCategory('cakes')">
                    <img src="/src/assets/cake.jpeg" alt="Cakes" class="w-full h-48 md:h-64 object-cover" />
                    <div class="absolute inset-0 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="bg-coklat/80 py-6 md:py-6 w-full flex items-center justify-center">
                            <h3 class="font-meriweter text-xl font-bold text-white text-center">Cakes</h3>
                        </div>
                    </div>
                </div>

                <div class="relative shadow-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    @click="goToCategory('drinks')">
                    <img src="/src/assets/drinks.jpeg" alt="Drinks" class="w-full h-48 md:h-64 object-cover" />
                    <div class="absolute inset-0 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="bg-coklat/80 py-6 md:py-6 w-full flex items-center justify-center">
                            <h3 class="font-meriweter text-xl font-bold text-white text-center">Drinks</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-8">
                <router-link
                to="/menu"
                class="font-gupter inline-block text-krem font-bold duration-300 text-xl md:text-xl hover:underline"
                >
                See more
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const goToCategory = (category) => {
        router.push({ name: 'Menu', query: { category: category.toLowerCase() } });
    };
    
</script>
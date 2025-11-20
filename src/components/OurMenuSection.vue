<template>
    <section class="py-12 md:py-16 px-4 md:px-8 bg-coklat">
        <div class="max-w-7xl mx-auto">
            <h2 class="font-meriweter text-2xl md:text-3xl font-bold text-krem mb-8 pb-2 border-b-2 border-krem block w-full">
                Our Menu
            </h2>

            <!-- Foto Menu -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 cursor-pointer">
                <div
                v-for="item in menuToShow"
                :key="item.id"
                class="relative shadow-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-full h-48 md:h-64 object-cover"
                />
                <div class="absolute inset-0 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="bg-coklat/80 py-6 md:py-6 w-full flex items-center justify-center">
                            <h3 class="font-meriweter text-xl md:text-xl font-bold text-white text-center">
                                {{ item.name }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { computed } from 'vue'
    import { menus as menuData } from '../data/menuData.js'

    export default {
        setup(){
            const menuToShow = computed(() => menuData.slice(0, 6))

            return {
                menuToShow
            }
        }
    }
</script>
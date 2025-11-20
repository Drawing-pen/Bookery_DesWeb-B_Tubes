<template>
    <section class="py-12 md:py-16 px-4 md:px-8">
        <div class="max-w-7xl mx-auto">
            <h2 class="font-meriweter text-2xl md:text-3xl font-bold text-coklat mb-8 pb-2 border-b-2 border-coklat block w-full">
                Our Stores
            </h2>
            <div class="space-y-6 mt-8 max-w-full md:max-w-none w-full pl-4 md:pl-0 ">
                <div
                v-for="store in storesToShow"
                :key="store.id"
                class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-6 cursor-pointer"
                >
                <div class="flex flex-col md:flex-row gap-4 md:gap-6">
                    <div class="shrink-0">
                        <img
                            :src="store.image"
                            :alt="store.name"
                            class="w-full md:w-56 h-40 md:h-48 object-cover rounded-lg"
                        />
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                        <h3 class="font-gupter text-2xl md:text-2xl font-bold text-coklat mb-4">
                            {{ store.name }}
                        </h3>
                            <div class="space-y-2">
                                <p class="font-gupter text-black text-s md:text-base">
                                    <span class="font-semibold">Location:</span> {{ store.address }}
                                </p>
                                <p class="font-gupter text-black text-s md:text-base">
                                    <span class="font-semibold">Operating Hours:</span> {{ store.hours }}
                                </p>
                                <p class="font-gupter text-black text-s md:text-base">
                                    <span class="font-semibold">Contact:</span> {{ store.contact }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex justify-center mt-8">
                <router-link
                to="/store"
                class="font-gupter inline-block text-coklat font-bold duration-300 text-xl md:text-xl hover:underline"
                >
                See more
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    import { computed } from 'vue'
    import { stores as storeData  } from '../data/storesData.js'

    export default {
        name: 'OurStoresSection',

        setup(){
            const storesToShow = computed(() => storeData.slice(0, 2))

            return {
                storesToShow
            }
        }
    }
</script>
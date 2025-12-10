<template>
    <div class="bg-krem min-h-screen overflow-x-hidden w-screen">
        <div class="px-4 md:px-8 pt-8 pb-12">
            <h1 class="font-meriweter text-2xl md:text-3xl lg:text-4xl font-bold text-coklat flex items-center gap-2 md:gap-3">
                <span class="icon-[streamline--store-1-solid]" style="width: 30px; height: 30px; color: #514F46;"></span>
                Our Stores
                <span class="flex-1 border-b-2 border-coklat ml-2 md:ml-3"></span>
            </h1>
        </div>
        <div class="max-w-7xl mx-auto px-4 md:px-8 pb-12">

            <!-- Map-->
            <div class="mb-8 md:mb-12">
                <div class="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <iframe 
                        class="w-full h-full object-cover" 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31911.298944129183!2d116.9077936512056!3d-1.2210177032102347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1763211100308!5m2!1sen!2sid" 
                        width="600" 
                        height="450" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <!-- Find by City -->
            <div class="mb-6">
                <h2 class="font-meriweter text-2xl md:text-3xl font-bold text-coklat pb-2 border-b-2 border-coklat">
                    Find by City
                </h2>
            </div>

            <div class="space-y-6 mt-8 pl-4 md:pl-0">
                <div 
                    v-for="store in stores" 
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
        </div>
    </div>
</template>

<script setup>
    import { stores } from '../data/storesData.js';
</script>
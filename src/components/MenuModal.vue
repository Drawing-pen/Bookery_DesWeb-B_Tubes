<template>
    <div
        v-if="item"
        @click="$emit('close')"
        class="modal-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
        <div
            @click.stop
            class="modal-content bg-krem rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        >
            <button
                @click="$emit('close')"
                class="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-coklat rounded-full flex items-center justify-center hover:bg-coklat/90 transition-all shadow-lg"
            >
                <span
                    class="icon-[ic--round-close] cursor-pointer"
                    style="width: 30px; height: 30px; color: #eae7dd;"
                ></span>
            </button>

            <div class="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
                <div class="flex items-center justify-center">
                    <img
                        :src="item.image"
                        :alt="item.name"
                        class="w-full h-64 md:h-80 lg:h-96 rounded-xl shadow-lg object-cover"
                    />
                </div>

                <div class="flex flex-col justify-center space-y-3 md:space-y-4">
                    <h2 class="font-meriweter text-2xl md:text-3xl lg:text-4xl font-bold text-coklat">
                        {{ item.name }}
                    </h2>

                    <p class="font-gupter text-lg md:text-xl lg:text-2xl text-coklat font-semibold">
                        {{ item.price }}
                    </p>

                    <p class="font-gupter text-xs md:text-sm lg:text-base text-coklat leading-relaxed text-justify">
                        {{ item.description || 'No description available.' }}
                    </p>

                    <div class="flex flex-wrap gap-2 pt-2">
                        <span
                            v-for="tag in item.tags"
                            :key="tag"
                            :class="[
                                'text-white text-xs md:text-sm font-gupter font-bold px-3 md:px-5 py-1.5 md:py-2 rounded-full shadow-md',
                                getTagColor(tag)
                            ]"
                        >
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        item: Object,
        getTagColor: Function,
    });

    defineEmits(['close']);
</script>
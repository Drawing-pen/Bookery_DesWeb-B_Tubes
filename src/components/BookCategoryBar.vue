<template>
    <div>
        <!-- Desktop -->
        <div
            class="hidden md:flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 lg:mb-8"
        >
            <div class="flex gap-2 lg:gap-3 flex-wrap">
                <button
                    v-for="category in categories"
                    :key="category"
                    @click="$emit('update:selectedCategory', category)"
                    :class="[
                        'font-gupter px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border-2 transition-all duration-300 font-medium text-sm lg:text-base cursor-pointer',
                        selectedCategory === category
                            ? 'bg-coklat text-krem border-coklat'
                            : 'bg-krem border-coklat text-coklat hover:bg-coklat/10'
                    ]"
                >
                    {{ capitalize(category) }}
                </button>
            </div>

            <input
                :value="searchQuery"
                @input="$emit('update:searchQuery', $event.target.value)"
                type="text"
                placeholder="Search"
                class="font-gupter px-4 py-2 rounded-full border-2 bg-coklat text-white placeholder-white/70 border-coklat w-full md:w-56 lg:w-64 outline-none focus:ring-2 focus:ring-coklat/50 transition text-sm"
            />
        </div>

        <!-- Mobile/Tab -->
        <div class="md:hidden mb-6 w-full">
            <div class="relative w-full flex items-center justify-center min-h-[50px]">
                <button
                    v-if="totalSlides > 1"
                    @click="prevSlide"
                    class="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-coklat w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-coklat/90 transition-all"
                >
                    <span
                        class="icon-[mingcute--left-line] cursor-pointer"
                        style="width: 24px; height: 24px; color: #eae7dd;"
                    ></span>
                </button>

                <div class="w-full px-12">
                    <div class="flex justify-center gap-3 py-2 transition-all duration-500">
                        <button
                            v-for="category in visibleCategories"
                            :key="category"
                            @click="$emit('update:selectedCategory', category)"
                            :class="[
                                'font-gupter px-4 py-2 rounded-full border-2 font-medium whitespace-nowrap shrink-0 text-sm transition-all cursor-pointer',
                                selectedCategory === category
                                    ? 'bg-coklat text-krem border-coklat'
                                    : 'bg-krem border-coklat text-coklat hover:bg-coklat/10'
                            ]"
                        >
                            {{ capitalize(category) }}
                        </button>
                    </div>
                </div>

                <button
                    v-if="totalSlides > 1"
                    @click="nextSlide"
                    class="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-coklat w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-coklat/90 transition-all"
                >
                    <span
                        class="icon-[mingcute--right-line] cursor-pointer"
                        style="width: 24px; height: 24px; color: #eae7dd;"
                    ></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, onMounted, onUnmounted } from "vue";

    defineProps({
        selectedCategory: {
            type: String,
            required: true
        },
        searchQuery: {
            type: String,
            default: ""
        }
    });

    defineEmits(["update:selectedCategory", "update:searchQuery"]);

    const categories = ["all", "fiction", "non-fiction", "education"];

    // carousel logic
    const currentSlide = ref(0);
    const perPage = ref(3);

    const updatePerPage = () => {
        perPage.value = window.innerWidth < 400 ? 2 : 3;
    };

    const totalSlides = computed(() =>
        Math.ceil(categories.length / perPage.value)
    );

    const visibleCategories = computed(() => {
        const start = currentSlide.value * perPage.value;
        return categories.slice(start, start + perPage.value);
    });

    const nextSlide = () => {
        currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
    };

    const prevSlide = () => {
        currentSlide.value =
            currentSlide.value === 0 ? totalSlides.value - 1 : currentSlide.value - 1;
    };

    onMounted(() => {
        updatePerPage();
        window.addEventListener("resize", updatePerPage);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", updatePerPage);
    });

    const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
</script>

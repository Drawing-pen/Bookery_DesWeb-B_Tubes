<template>
    <div class="bg-krem min-h-screen overflow-x-hidden w-screen">
        <div class="px-4 md:px-8 pt-8 pb-12">
            <h1 class="font-meriweter text-2xl md:text-3xl lg:text-4xl font-bold text-coklat flex items-center gap-2 md:gap-3">
                <span class="icon-[icon-park-solid--bread]" style="width: 30px; height: 30px; color: #514F46;"></span>
                What We Serve
                <span class="flex-1 border-b-2 border-coklat ml-2 md:ml-3"></span>
            </h1>
        </div>

        <div class="max-w-360 mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pb-12">
            <div class="grid md:grid-cols-[minmax(180px,220px)_1fr] lg:grid-cols-[minmax(200px,260px)_1fr] gap-8 xl:gap-10">
                <MenuFilter
                    v-model:selectedFilters="selectedFilters"
                    v-model:searchQuery="searchQuery"
                />

                <div>
                    <MenuCategoryBar
                        v-model:selectedCategory="selectedCategory"
                        v-model:searchQuery="searchQuery"
                    />

                    <MenuCard
                        :categoryRef="selectedCategory"
                        :filtersRef="selectedFilters"
                        :searchRef="searchQuery"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, watch } from "vue";
    import { useRoute } from "vue-router";
    import MenuCategoryBar from "../components/MenuCategoryBar.vue";
    import MenuFilter from "../components/MenuFilter.vue";
    import MenuCard from "../components/MenuCard.vue";

    const route = useRoute();

    const selectedCategory = ref("all");
    const selectedFilters = ref([]);
    const searchQuery = ref("");
    

    onMounted(() => {
        if (route.query.category) {
            selectedCategory.value = route.query.category.toLowerCase();
        }
    });

    watch(
        () => route.query.category,
        (newCategory) => {
            if (newCategory) {
                selectedCategory.value = newCategory.toLowerCase();
            }
        }
    );
</script>
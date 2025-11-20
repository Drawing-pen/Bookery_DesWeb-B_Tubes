<template>
    <div class="flex justify-center md:justify-start">
        <div
            class="flex gap-4 sm:gap-5 md:gap-6 flex-wrap max-w-full justify-center md:justify-start"
        >
            <div
            v-for="item in filteredItems"
            :key="item.id"
            @click="openModal(item)"
            class="w-[150px] sm:w-[200px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
            <img :src="item.image" class="w-full h-40 sm:h-[180px] object-cover" />
                <div class="p-3">
                    <h3 class="font-meriweter text-sm sm:text-base font-bold text-coklat mb-1 truncate">
                        {{ item.name }}
                    </h3>
                    <p class="font-gupter text-xs sm:text-sm text-coklat font-semibold mb-2">
                        {{ item.price }}
                    </p>
                    <div class="flex flex-wrap gap-1">
                        <span
                            v-for="tag in item.tags.slice(0, 3)"
                            :key="tag"
                            :class="[
                            'text-white text-[12px] font-gupter font-bold px-2 py-0.5 rounded-full',
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
  
    <p v-if="filteredItems.length === 0" class="text-center py-12 font-gupter text-gray-500 text-base lg:text-lg">
        No items found
    </p>
  
    <MenuModal v-if="selectedItem" :item="selectedItem" :getTagColor="getTagColor" @close="selectedItem = null" />
</template>
  
<script setup>
    import { ref, computed } from "vue";
    import { menus as menuItems } from "../data/menuData.js";
    import MenuModal from "./MenuModal.vue";

    const props = defineProps({
        categoryRef: {
            type: String,
            default: "all"
        },
        filtersRef: {
            type: Array,
            default: () => []
        },
        searchRef: {
            type: String,
            default: ""
        }
    });

    // modal dan data menu
    const selectedItem = ref(null);

    const getTagColor = (tag) => {
        const map = {
        coffee: "bg-yellow-400",
        sweet: "bg-pink-400",
        hot: "bg-red-400",
        cold: "bg-blue-400",
        popular: "bg-green-500",
        healthy: "bg-emerald-500",
        };
        return map[tag.toLowerCase()] || "bg-gray-400";
    };

    const filteredItems = computed(() => {
        let items = [...menuItems];

        if (props.categoryRef && props.categoryRef !== "all") {
        items = items.filter((item) => item.category === props.categoryRef);
        }

        if (props.searchRef) {
        const q = props.searchRef.toLowerCase();
        items = items.filter(
            (item) =>
            item.name.toLowerCase().includes(q) ||
            item.description?.toLowerCase().includes(q)
        );
        }

        if (props.filtersRef && props.filtersRef.length > 0) {
        items = items.filter((item) =>
            props.filtersRef.some((f) => item.tags?.includes(f))
        );
        }

        return items;
    });

    const openModal = (item) => {
        selectedItem.value = item;
    };
</script>
  
<template>
    <div>
        <!-- Desktop -->
        <aside class="hidden md:block bg-krem p-5 lg:p-6 rounded-lg h-fit shadow-md border-2 border-coklat/50">
            <h3 class="font-meriweter text-lg lg:text-xl font-semibold text-coklat mb-4 border-b-2 border-coklat pb-2">
                Filter
            </h3>

            <div class="space-y-2">
                <div
                    v-for="filter in filters"
                    :key="filter"
                    class="flex items-center py-1"
                >
                    <input
                        type="checkbox"
                        :id="filter"
                        :value="filter"
                        v-model="selectedFilters"
                        class="mr-2 w-4 h-4 accent-coklat cursor-pointer"
                    />
                    <label
                        :for="filter"
                        class="font-gupter text-coklat text-sm lg:text-base"
                    >
                        {{ filter }}
                    </label>
                </div>
            </div>
        </aside>

        <!-- Mobile/Tab -->
        <div class="md:hidden mb-6 space-y-4">
            <input
                v-model="searchQuery"
                type="text"
                placeholder="Search"
                class="font-gupter px-4 py-3 rounded-full border-2 bg-coklat text-white placeholder-white/70 border-coklat w-full outline-none focus:ring-2 focus:ring-coklat/50 transition text-sm"
            />

            <div class="bg-krem rounded-lg shadow-md border-2 border-coklat/50 overflow-hidden">
                <button
                    @click="showMobile = !showMobile"
                    class="w-full px-4 py-3 flex justify-between items-center font-meriweter text-base font-semibold text-coklat"
                >
                    <span>Filter</span>
                    <span
                        :class="showMobile ? 'icon-[tabler--minus]' : 'icon-[tabler--plus]'"
                        class="w-[30px] h-[30px] text-coklat cursor-pointer"
                    ></span>
                </button>

                <div v-show="showMobile" class="px-4 pb-4 border-t border-gray-200 pt-3">
                    <div
                        v-for="filter in filters"
                        :key="filter"
                        class="flex items-center cursor-pointer py-1"
                    >
                        <input
                            type="checkbox"
                            :id="'mobile-' + filter"
                            :value="filter"
                            v-model="selectedFilters"
                            class="mr-2 w-4 h-4 accent-coklat cursor-pointer"
                        />
                        <label
                            :for="'mobile-' + filter"
                            class="font-gupter text-coklat cursor-pointer text-sm"
                        >
                            {{ filter }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from "vue";

    const props = defineProps({
        selectedFilters: {
            type: Array,
            default: () => []
        },
        searchQuery: {
            type: String,
            default: ""
        }
    });

    const emit = defineEmits(['update:selectedFilters', 'update:searchQuery']);

    const filters = ["Coffee", "Sweet", "Hot", "Cold", "Popular", "Healthy"];
    const showMobile = ref(false);

    const selectedFilters = computed({
        get: () => props.selectedFilters,
        set: (value) => emit('update:selectedFilters', value)
    });

    const searchQuery = computed({
        get: () => props.searchQuery,
        set: (value) => emit('update:searchQuery', value)
    });
</script>

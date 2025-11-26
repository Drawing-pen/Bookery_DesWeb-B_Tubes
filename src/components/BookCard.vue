<template>
    <div>
        <div class="flex justify-center md:justify-start">
            <div class="flex gap-4 sm:gap-5 md:gap-6 flex-wrap max-w-full justify-center md:justify-start">
                <div
                    v-for="item in filteredItems"
                    :key="item.id"
                    @click="openModal(item)"
                    class="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                    <!-- Photo and details -->
                    <div class="flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white">
                        <div
                            class="relative w-full max-w-[120px] sm:max-w-[140px] md:max-w-[170px]"
                            style="padding-top: 150%;"
                        >
                            <img
                                :src="item.image"
                                :alt="item.title"
                                class="absolute inset-0 w-full h-full object-cover shadow-md"
                            />
                        </div>
                    </div>
                    <div class="p-3 sm:p-4 text-start">
                        <h3 class="font-gupter text-xl sm:text-xl md:text-xl font-bold text-coklat mb-1 truncate">
                            {{ item.title }}
                        </h3>
                        <p class="font-gupter text-l sm:text-l text-gray-500 truncate">
                            {{ item.author }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <p
            v-if="filteredItems.length === 0"
            class="text-center py-12 font-gupter text-gray-500 text-base lg:text-lg"
        >
            No items found
        </p>

        <BookModal v-if="selectedItem" :item="selectedItem" @close="selectedItem = null" />
    </div>
</template>

<script>
    import { ref, computed } from "vue";
    import { books as booksItem } from "../data/booksData.js";
    import BookModal from "./BookModal.vue";

    export default {
        components: { BookModal },
        props: {
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
        },
        setup(props) {
            const selectedItem = ref(null);

            const filteredItems = computed(() => {
                let items = booksItem || [];

                if (props.categoryRef && props.categoryRef !== "all") {
                    items = items.filter((item) => item.category === props.categoryRef);
                }

                if (props.searchRef) {
                    const q = props.searchRef.toLowerCase();
                    items = items.filter((item) => {
                        const titleMatch = item.title.toLowerCase().includes(q);
                        const authorMatch = item.author.toLowerCase().includes(q);

                        const descriptionMatch = Array.isArray(item.description)
                            ? item.description.some(paragraph =>
                                  paragraph.toLowerCase().includes(q)
                              )
                            : item.description &&
                              item.description.toLowerCase().includes(q);

                        return titleMatch || authorMatch || descriptionMatch;
                    });
                }

                if (props.filtersRef && props.filtersRef.length > 0) {
                    items = items.filter((item) =>
                        props.filtersRef.some((f) => item.tags && item.tags.includes(f))
                    );
                }

                return items;
            });

            const openModal = (item) => {
                selectedItem.value = item;
            };

            return {
                filteredItems,
                selectedItem,
                openModal
            };
        }
    };
</script>

<template>
    <div class="bg-krem min-h-screen overflow-x-hidden w-screen">
        <div class="px-4 md:px-8 pt-8 pb-12">
            <h1 class="font-meriweter text-2xl md:text-3xl lg:text-4xl font-bold text-coklat">
                Books Catalog
            </h1>
        </div>

        <div class="max-w-360 mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pb-12">
            <div class="grid md:grid-cols-[minmax(180px,220px)_1fr] lg:grid-cols-[minmax(200px,260px)_1fr] gap-8 xl:gap-10">
                <BookFilter 
                    v-model:selectedFilters="selectedFilters" 
                    v-model:searchQuery="searchQuery"
                />
                <div>
                    <BookCategoryBar 
                        v-model:selectedCategory="selectedCategory"
                        v-model:searchQuery="searchQuery"
                    />
                    <BookCard
                        :categoryRef="selectedCategory"
                        :filtersRef="selectedFilters"
                        :searchRef="searchQuery"
                    />
                </div>
            </div>
        </div>
        <BookModal
            :item="selectedBook"
            @close="closeModal"
        />
    </div>
</template>

<script setup>
    import { ref, onMounted, watch } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import BookCategoryBar from "../components/BookCategoryBar.vue";
    import BookFilter from "../components/BookFilter.vue";
    import BookCard from "../components/BookCard.vue";
    import BookModal from "../components/BookModal.vue";
    import { books as booksData } from "../data/booksData.js";

    const route = useRoute();
    const router = useRouter();

    const selectedCategory = ref("all");
    const selectedFilters = ref([]);
    const searchQuery = ref("");
    const selectedBook = ref(null);

    const openBookFromQuery = () => {
        const bookId = route.query.id;
        if (bookId) {
            const book = booksData.find(
                b => b.id === bookId || b.id === Number(bookId)
            );
            if (book) {
                selectedBook.value = book;
            }
        }
    };

    const closeModal = () => {
        selectedBook.value = null;
        router.replace({ path: '/library', query: {} });
    };

    onMounted(() => {
        openBookFromQuery();
    });
    watch(
        () => route.query.id,
        (newBookId) => {
            if (newBookId) {
                openBookFromQuery();
            }
        },
        { immediate: true }
    );
</script>

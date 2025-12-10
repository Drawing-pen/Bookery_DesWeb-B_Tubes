<template>
    <section class="py-12 md:py-16 px-4 md:px-8 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <h2 class="font-meriweter gap-2 md:gap-3 text-coklat text-2xl md:text-3xl font-bold mb-6 pb-2 border-b-2 border-coklat flex items-center w-full text-left">
                <span class="icon-[ion--library]" style="width: 30px; height: 30px; color: #514f46;"></span>
                Our Library
            </h2>

            <!-- Carousel -->
            <div class="relative mt-8 mx-auto max-w-full">
                <button
                    @click="prevSlide"
                    aria-label="Previous"
                    class="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-coklat w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#3d3a31] transition-colors duration-300 shadow-lg cursor-pointer"
                >
                    <span
                        class="icon-[mingcute--left-line]"
                        style="width: 24px; height: 24px; color: #eae7dd;"
                    ></span>
                </button>

                <!-- Book Cards -->
                <div class="overflow-visible px-10 sm:px-12 md:px-16">
                    <div
                        class="flex justify-center gap-4 sm:gap-5 md:gap-6 transition-transform duration-500 ease-in-out max-w-full"
                    >
                        <div
                            v-for="book in booksToShow"
                            :key="book.id"
                            @click="goToBook(book.id)"
                            class="w-52 sm:w-60 md:w-72 bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition-transform shrink-0 p-4 sm:p-6 cursor-pointer"
                        >
                            <div class="flex flex-col items-center">
                                <img
                                    :src="book.image"
                                    :alt="book.title"
                                    class="w-40 h-56 sm:w-48 sm:h-64 md:w-52 md:h-72 object-cover rounded-md shadow-sm"
                                />
                                <div class="mt-3 sm:mt-4 text-center w-full px-2">
                                    <h3
                                        class="font-gupter text-xl sm:text-2xl font-bold text-coklat truncate"
                                    >
                                        {{ book.title }}
                                    </h3>
                                    <p
                                        class="font-gupter text-base sm:text-lg text-gray-500 mt-1 truncate"
                                    >
                                        {{ book.author }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            v-if="isLastSlide"
                            class="w-52 sm:w-60 md:w-72 bg-krem overflow-hidden  shrink-0 p-4 sm:p-6 flex items-center justify-center"
                        >
                            <router-link
                                to="/Library"
                                class="font-gupter inline-flex items-center justify-center bg-coklat text-krem px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-[#3d3a31] hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
                            >
                                Explore Library
                            </router-link>
                        </div>
                    </div>
                </div>

                <button
                    @click="nextSlide"
                    aria-label="Next"
                    class="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-coklat w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#3d3a31] transition-colors duration-300 shadow-lg cursor-pointer"
                >
                    <span
                        class="icon-[mingcute--right-line]"
                        style="width: 24px; height: 24px; color: #eae7dd;"
                    ></span>
                </button>
            </div>

            <!-- Carousel Dots -->
            <div class="flex justify-center gap-2 mt-6 min-h-[15px] items-center cursor-pointer">
                <button
                    v-for="(slide, index) in totalSlides"
                    :key="index"
                    @click="currentSlide = index"
                    class="rounded-full transition-all duration-300"
                    :class="currentSlide === index
                        ? 'w-3 h-3 bg-coklat -translate-y-1 scale-105'
                        : 'w-2 h-2 bg-coklat/60'"
                    :aria-label="`Go to slide ${index + 1}`"
                ></button>
            </div>
        </div>
    </section>
</template>

<script>
    import { ref, computed, onMounted, onUnmounted } from 'vue';
    import { books as booksData } from '../data/booksData.js';
    import { useRouter } from 'vue-router';

    export default {
        setup() {
            const router = useRouter();
            const currentSlide = ref(0);
            const booksPerPage = ref(3);

            const books = booksData.slice(0, 5);

            const updateBooksPerPage = () => {
                if (window.innerWidth < 768) {
                    booksPerPage.value = 1;
                } else if (window.innerWidth < 1024) {
                    booksPerPage.value = 2;
                } else {
                    booksPerPage.value = 3;
                }
                
                if (currentSlide.value >= Math.ceil(books.length / booksPerPage.value)) {
                    currentSlide.value = 0;
                }
            };

            const totalSlides = computed(() =>
                Math.ceil(books.length / booksPerPage.value)
            );

            const booksToShow = computed(() => {
                const start = currentSlide.value * booksPerPage.value;
                const end = start + booksPerPage.value;
                return books.slice(start, end);
            });

            const isLastSlide = computed(() => {
                return currentSlide.value === totalSlides.value - 1;
            });

            const nextSlide = () => {
                currentSlide.value =
                    (currentSlide.value + 1) % totalSlides.value;
            };

            const prevSlide = () => {
                currentSlide.value =
                    currentSlide.value === 0
                        ? totalSlides.value - 1
                        : currentSlide.value - 1;
            };

            const goToBook = (bookId) => {
                router.push({ path: '/Library', query: { id: bookId } });
            };

            onMounted(() => {
                updateBooksPerPage();
                window.addEventListener('resize', updateBooksPerPage);
            });

            onUnmounted(() => {
                window.removeEventListener('resize', updateBooksPerPage);
            });

            return {
                booksToShow,
                currentSlide,
                totalSlides,
                isLastSlide,
                nextSlide,
                prevSlide,
                goToBook
            };
        }
    };
</script>
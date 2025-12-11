<template>
    <div class="bg-krem min-h-screen overflow-x-hidden w-screen">
        <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 pt-8 pb-16 space-y-16 md:space-y-20">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center text-justify">
                <div class="space-y-4">
                    <h1 class="font-meriweter text-xl md:text-2xl lg:text-3xl font-bold text-coklat mb-2">
                        Rana Afifah Dzikro
                    </h1>

                    <nav class="font-gupter text-coklat font-bold">
                        <ul class="flex list-none gap-6 items-center m-0 p-0">
                            <li> 
                                11241076
                            </li>
                            <li>
                                Informatika
                            </li>
                            <li>
                                Institut Teknologi Kalimantan
                            </li>
                        </ul>
                    </nav>

                    <p class="font-gupter text-base md:text-lg text-coklat leading-relaxed">
                        Saya adalah seorang mahasiswi di Institut Teknologi Kalimantan. Saat ini sedang menempuh pendidikan di Pogram Studi Informatika. Saya berusia 19 tahun dan tahun depan ada tanggal 3 April saya akan berusia 20 tahun
                    </p>
                </div>
                <div class="order-first lg:order-last">
                    <img
                        src="/src/assets/aboutUs2.jpg"
                        alt="Our Story"
                        class="w-full h-72 md:h-96 lg:h-[450px] object-cover rounded-lg shadow-2xl"
                    />
                </div>
        </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 cursor-pointer">
                <div class="relative shadow-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <img src="/src/assets/Cupcakes.jpeg" alt="Cupcakes" class="w-full h-48 md:h-64 object-cover" />
                    <div class="absolute inset-0 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="bg-coklat/80 py-6 md:py-6 w-full flex-wrap gap-1 items-center justify-center">
                            <h3 class="font-meriweter text-2xl font-bold text-white text-center">Java Programming</h3>
                            <p class="font-gupter text-md text-white text-center">Saya mahir dalam menggunakan bahasapemrograman ini dan sudah banyak projek kuliah saya yang menggunakan bahasa ini</p>
                        </div>
                    </div>
                </div>

                <div class="relative shadow-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <img src="/src/assets/bread.jpeg" alt="Breads" class="w-full h-48 md:h-64 object-cover" />
                    <div class="absolute inset-0 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="bg-coklat/80 py-6 md:py-6 w-full flex-wrap gap-1 items-center justify-center">
                            <h3 class="font-meriweter text-2xl font-bold text-white text-center">Python</h3>
                            <p class="font-gupter text-md text-white text-center">Saya mahir dalam menggunakan bahasapemrograman ini dan sudah banyak projek kuliah saya yang menggunakan bahasa ini</p>
                        </div>
                    </div>
                </div>

                <div class="relative shadow-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <img src="/src/assets/kuasong.jpeg" alt="Pastries" class="w-full h-48 md:h-64 object-cover" />
                    <div class="absolute inset-0 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="bg-coklat/80 py-6 md:py-6 w-full flex-wrap items-center justify-center">
                            <h3 class="font-meriweter text-2xl font-bold text-white text-center">Web Designing</h3>
                            <p class="font-gupter text-md text-white text-center">Saya suka mendesain web web seperti E-commerce dan sebagainya</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
    export default {
        data() {
        return {
            isMenuOpen: true
        }
        },
        methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
        closeMenu() {
            this.isMenuOpen = true
        }
        },
        watch: {
        $route() {
            this.closeMenu()
        }
        }
    }
</script>
<template>
    <header class="bg-coklat sticky top-0 z-50 px-4 md:px-6 py-3">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center gap-2">
        <!-- Mobile + Tab setting -->
        <button 
            @click="toggleMenu" 
            class="lg:hidden text-krem p-2 cursor-pointer"
            aria-label="Toggle menu"
        >
        <span class="icon-[ci--hamburger-lg] hover:scale-110 transition-transform" style="width: 30px; height: 25px; color: #EAE7DD;"></span>
        </button>
        <!-- Logo -->
        <router-link to="/" class="flex items-center text-krem no-underline font-bold font-gupter md:text-xl">
            <div class="mr-2 flex items-center hover:scale-105 transition-transform">
            <img src="/src/assets/logoKrem.png" alt="Bookery Logo" class="h-12 md:h-14 w-auto" />
            BOOKERY
            </div>
        </router-link>
        </div>
        <!-- NavBar Desktop -->
        <nav class="hidden lg:block">
            <ul class="flex list-none gap-6 items-center m-0 p-0">
            <li>
                <router-link 
                to="/" 
                class="text-krem no-underline px-4 py-2 rounded-full transition-all font-gupter hover:font-bold hover:bg-krem hover:text-coklat font-bold"
                :class="{ 'bg-krem text-coklat! font-bold': $route.path === '/' }"
                >
                Home
                </router-link>
            </li>
            <li>
                <router-link 
                to="/menu" 
                class="text-krem no-underline px-4 py-2 rounded-full transition-all font-gupter hover:font-bold hover:bg-krem hover:text-coklat font-bold"
                :class="{ 'bg-krem text-coklat! font-bold': $route.path === '/menu' }"
                >
                Menu
                </router-link>
            </li>
            <li>
                <router-link 
                to="/library" 
                class="text-krem no-underline px-4 py-2 rounded-full transition-all font-gupter hover:font-bold hover:bg-krem hover:text-coklat font-bold"
                :class="{ 'bg-krem text-coklat! font-bold': $route.path === '/library' }"
                >
                Library
                </router-link>
            </li>
            <li>
                <router-link 
                to="/store" 
                class="text-krem no-underline px-4 py-2 rounded-full transition-all font-gupter hover:font-bold hover:bg-krem hover:text-coklat font-bold"
                :class="{ 'bg-krem text-coklat! font-bold': $route.path === '/store' }"
                >
                Store
                </router-link>
            </li>
            <li>
                <router-link 
                to="/about" 
                class="text-krem no-underline px-4 py-2 rounded-full transition-all font-gupter hover:font-bold hover:bg-krem hover:text-coklat font-bold"
                :class="{ 'bg-krem text-coklat! font-bold': $route.path === '/about' }"
                >
                About Us
                </router-link>
            </li>
            </ul>
        </nav>
        <!-- Social Icons -->
        <div class="flex gap-3">
            <span class="icon-[ic--baseline-tiktok] hover:scale-110 transition-transform" style="width: 30px; height: 30px; color: #eae7dd; cursor: pointer;"></span>
            <span class="icon-[ri--instagram-fill] hover:scale-110 transition-transform" style="width: 30px; height: 30px; color: #eae7dd; cursor: pointer;"></span>
            <span class="icon-[ri--twitter-x-line] hover:scale-110 transition-transform" style="width: 30px; height: 30px; color: #eae7dd; cursor: pointer;"></span>
        </div>
        </div>
        
        <!-- Sidebar Mobile/Tab -->
        <Transition name="sidebar">
        <div 
            v-if="isMenuOpen" 
            class="fixed inset-0 bg-black/50 z-40 lg:hidden"
            @click="closeMenu"
        >   
            <div 
            class="absolute left-0 top-0 h-full w-64 bg-krem shadow-lg"
            @click.stop
            >
            <div class="flex items-center justify-between p-4 border-b border-gray-300">
                <div class="flex items-center gap-2">
                <img src="/src/assets/logoCoklat.png" alt="Bookery Logo" class="h-10 w-auto" />
                <span class="font-bold text-coklat font-gupter">BOOKERY</span>
                </div>
                <button 
                @click="closeMenu" 
                class="text-coklat p-2 cursor-pointer"
                aria-label="Close menu"
                >
                <span class="icon-[ic--round-close] hover:scale-110 transition-transform" style="width: 30px; height: 30px; color: #514F46;"></span>
                </button>
            </div>
            <nav>
                <ul class="flex flex-col list-none m-0 p-0">
                <li>
                    <router-link 
                    to="/" 
                    class="block w-full text-coklat no-underline px-4 py-3 hover:bg-coklat hover:text-krem transition-colors font-gupter font-bold"
                    :class="{ 'bg-coklat text-krem font-bold': $route.path === '/' }"
                    @click="closeMenu"
                    >
                    Home
                    </router-link>
                </li>
                <li>
                    <router-link 
                    to="/menu" 
                    class="block text-coklat no-underline px-4 py-3 hover:bg-coklat hover:text-krem transition-colors font-gupter font-bold"
                    :class="{ 'bg-coklat text-krem font-bold': $route.path === '/menu' }"
                    @click="closeMenu"
                    >
                    Menu
                    </router-link>
                </li>
                <li>
                    <router-link 
                    to="/library" 
                    class="block text-coklat no-underline px-4 py-3 hover:bg-coklat hover:text-krem transition-colors font-gupter font-bold"
                    :class="{ 'bg-coklat text-krem font-bold': $route.path === '/library' }"
                    @click="closeMenu"
                    >
                    Library
                    </router-link>
                </li>
                <li>
                    <router-link 
                    to="/store" 
                    class="block text-coklat no-underline px-4 py-3 hover:bg-coklat hover:text-krem transition-colors font-gupter font-bold"
                    :class="{ 'bg-coklat text-krem font-bold': $route.path === '/store' }"
                    @click="closeMenu"
                    >
                    Store
                    </router-link>
                </li>
                <li>
                    <router-link 
                    to="/about" 
                    class="block text-coklat no-underline px-4 py-3 hover:bg-coklat hover:text-krem transition-colors font-gupter font-bold"
                    :class="{ 'bg-coklat text-krem font-bold': $route.path === '/about' }"
                    @click="closeMenu"
                    >
                    About US
                    </router-link>
                </li>
                </ul>
            </nav>
            </div>
        </div>
        </Transition>
    </header>
</template>

<script>
    export default {
        data() {
        return {
            isMenuOpen: false
        }
        },
        methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
        closeMenu() {
            this.isMenuOpen = false
        }
        },
        watch: {
        $route() {
            this.closeMenu()
        }
        }
    }
</script>
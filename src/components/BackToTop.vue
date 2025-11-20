<template>
<button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-5 right-5 bg-coklat text-white rounded-full w-12 h-12 text-2xl flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#444]"
    >
    <span class="icon-[mingcute--up-fill]" style="width: 30px; height: 30px; color: #eae7dd;"></span>
    </button>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue";

    const isVisible = ref(false);

    const handleScroll = () => {
        isVisible.value = window.scrollY > 50;
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });
</script>
<template>
    <transition name="modal">
        <div
            v-if="item"
            @click="$emit('close')"
            class="modal-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
            <div
                @click.stop
                class="modal-content bg-krem rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
                <button
                    @click="$emit('close')"
                    class="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-coklat rounded-full flex items-center justify-center hover:bg-coklat/90 transition-all shadow-lg"
                >
                    <span
                        class="icon-[ic--round-close] cursor-pointer"
                        style="width: 30px; height: 30px; color: #eae7dd;"
                    ></span>
                </button>

                <div class="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
                    <div class="flex items-center justify-center">
                        <div class="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px] mx-auto">
                            <img
                                :src="item.image"
                                :alt="item.title"
                                class="w-full h-auto rounded-xl shadow-lg object-contain"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col justify-center space-y-3 md:space-y-4">
                        <h2 class="font-meriweter text-2xl md:text-3xl lg:text-4xl font-bold text-coklat">
                            {{ item.title }}
                        </h2>

                        <p class="font-gupter text-lg md:text-xl lg:text-2xl text-coklat font-semibold">
                            {{ item.author }}
                        </p>
                        <div
                            v-if="Array.isArray(item.description)"
                            class="font-gupter text-xs md:text-sm lg:text-base text-coklat leading-relaxed space-y-2"
                        >
                            <p
                                v-for="(paragraph, index) in item.description"
                                :key="index"
                            >
                                {{ paragraph }}
                            </p>
                        </div>

                        <p
                            v-else
                            class="font-gupter text-xs md:text-sm lg:text-base text-coklat leading-relaxed"
                        >
                            {{
                                item.description ||
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            }}
                        </p>

                        <div class="flex flex-wrap gap-2 pt-2">
                            <span
                                v-for="tag in item.tags"
                                :key="tag"
                                :class="[
                                    'text-white text-xs md:text-sm font-gupter font-bold px-3 md:px-5 py-1.5 md:py-2 rounded-full shadow-md',
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
    </transition>
</template>

<script setup>
    defineProps({
        item: Object
    });

    defineEmits(["close"]);

    const getTagColor = (tag) => {
        switch (tag.toLowerCase()) {
            case "inspirable":
                return "bg-[#006D77]";
            case "historical":
                return "bg-[#FF9500]";
            case "romance":
                return "bg-[#FF4081]";
            case "family":
                return "bg-[#32CD32]";
            case "slice-of-life":
                return "bg-[#FFD700]";
            case "adventure":
                return "bg-[#FF5E57]";
            case "fantasy":
                return "bg-[#B620E0]";
            case "magical":
                return "bg-[#00E5FF]";
            case "self-help":
                return "bg-[#39FF14]";
            case "technology":
                return "bg-[#FF7F50]";
            case "mystery":
                return "bg-[#04293A]";
            case "self help":
                return "bg-[#046307]";
            case "productivity":
                return "bg-[#8B0076]";
            case "philosophy":
                return "bg-[#2E1A47]";
            case "psychology":
                return "bg-[#C23B22]";
            case "woman":
                return "bg-[#E63946]";
            case "digital marketing":
                return "bg-[#00C4A7]";
            case "ai":
                return "bg-[#00B7FF]";
            case "computer science":
                return "bg-[#0074D9]";
            case "mathematics":
                return "bg-[#009DE0]";
            case "data science":
                return "bg-[#32E875]";
            case "deep learning":
                return "bg-[#FF9F1C]";
            case "database":
                return "bg-[#00E676]";
            case "big data":
                return "bg-[#FFCB2B]";
            case "adult":
                return "bg-[#9C27B0]";
            default:
                return "bg-gray-400";
        }
    };
</script>

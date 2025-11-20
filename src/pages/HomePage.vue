<template>
    <div class="bg-krem overflow-x-hidden w-screen">
        <HeroSection />
        <OurStoriesSection />
        <OurLibrarySection />
        <OurMenuSection />    
        <OurStoresSection />
    </div>
</template>
  
<script>
    import HeroSection from '../components/HeroSection.vue';
    import OurStoriesSection from '../components/OurStoriesSection.vue';
    import OurLibrarySection from '../components/OurLibrarySection.vue';
    import OurMenuSection from '../components/OurMenuSection.vue';
    import OurStoresSection from '../components/OurStoresSection.vue';
  
export default {
    components: {
        HeroSection,
        OurStoriesSection,
        OurLibrarySection,
        OurMenuSection,
        OurStoresSection
    },
  }
</script>
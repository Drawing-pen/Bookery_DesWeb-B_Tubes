<template>
  <footer class="bg-coklat text-krem py-12 px-6 font-gupter">
    <div class="max-w-7xl mx-auto flex flex-col gap-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        <!-- Logo + Sosmed -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div class="flex flex-col sm:flex-row items-center md:items-start gap-8 md:gap-25 sm:gap-10">
            <!-- Logo -->
            <div class="flex items-center justify-center sm:justify-start">
              <img
                src="/src/assets/logoKrem.png"
                alt="Bookery Logo"
                class="h-16 w-auto mr-0 sm:mr-3"
              />
              <span class="text-3xl font-bold">BOOKERY</span>
            </div>
            <!-- Social Icons -->
            <div class="flex flex-row sm:flex-col items-center justify-center gap-5 mt-4 sm:mt-0">
              <a
                href="mailto:info@bookery.com"
                aria-label="Email"
                class="hover:scale-110 transition-transform"
              >
                <span
                  class="icon-[clarity--email-solid]"
                  style="width: 28px; height: 28px; color: #eae7dd;"
                ></span>
              </a>
              <a
                href="tel:+1234567890"
                aria-label="WhatsApp"
                class="hover:scale-110 transition-transform"
              >
                <span
                  class="icon-[ri--whatsapp-fill]"
                  style="width: 28px; height: 28px; color: #eae7dd;"
                ></span>
              </a>
            </div>
          </div>
        </div>

        <!-- About -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h3 class="text-xl font-bold text-white">About</h3>
          <ul class="space-y-2 text-lg font-normal">
            <li>
              <router-link to="/about" class="hover:text-white transition-colors">
                About us
              </router-link>
            </li>
            <li>
              <router-link to="/location" class="hover:text-white transition-colors">
                Location
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h3 class="text-xl font-bold text-white">Support</h3>
          <ul class="space-y-2 text-lg font-normal">
            <li>
              <router-link to="/privacy" class="hover:text-white transition-colors">
                Privacy Policy
              </router-link>
            </li>
            <li>
              <router-link to="/terms" class="hover:text-white transition-colors">
                Terms
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
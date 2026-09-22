<script setup lang="ts">
import { WhatsAppIcon } from "vue3-simple-icons"

import { whatsappUrl } from "@/utils/whatsapp"

const href = whatsappUrl()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-full bg-[#25d366] py-3 pr-5 pl-4 font-sans text-sm font-bold text-white no-underline shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:right-10 sm:bottom-10"
    aria-label="Pesan lewat WhatsApp"
  >
    <WhatsAppIcon class="size-6" />
    <span>Pesan via WhatsApp</span>
  </a>
</template>

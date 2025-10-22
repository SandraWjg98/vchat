<template>
  <div class="flex items-center justify-between h-screen">
    <div class="w-[300px] bg-gray-200 h-full border-r border-gray-300">
      <ConversationList />
    </div>
    <div class="h-full flex-1"><RouterView /></div>
  </div>
</template>

<script setup>
import ConversationList from "./components/ConversationList.vue";
</script>

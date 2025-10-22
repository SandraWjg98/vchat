<template>
  <div class="conversation-list">
    <div
      class="item border-gray-300 border-t curser-pointer bg-white hover:bg-gray-200 p-2"
      v-for="item in items"
      :key="item.id"
    >
      <a href="#">
        <div
          class="flex justify-between items-center text-sm leading-5 text-gray-500"
        >
          <span>{{ item.selectedModel }}</span>
          <span>{{ item.updatedAt }}</span>
        </div>
        <h2 class="font-semibold leading-6 text-gray-900 truncate">
          {{ item.title }}
        </h2>
      </a>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    id: 1,
    selectedModel: "Conversation 1",
    title: "Hello1",
    updatedAt: "10:00 AM",
  },
  {
    id: 1,
    selectedModel: "Conversation 2",
    title: "Hello2",
    updatedAt: "10:00 AM",
  },
  {
    id: 1,
    selectedModel: "Conversation 3",
    title:
      "Hello3q arwawr awrsegfawrae  ewarfawr Request Autofill.setAddresses faile",
    updatedAt: "10:00 AM",
  },
];
</script>

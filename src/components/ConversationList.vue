<template>
  <div class="conversation-list">
    <div
      class="item border-gray-300 border-t cursor-pointer bg-white hover:bg-gray-200 p-2"
      v-for="item in props.conversationHistory"
      :key="item.id"
    >
      <a @click.prevent="goToConversation(item.id)">
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
import { useRouter } from "vue-router";

let router = useRouter();
let props = defineProps({
  conversationHistory: {
    type: Array,
    required: true,
  },
});
const goToConversation = (id) => {
  router.push({ path: `/conversation/${id}` });
};
</script>

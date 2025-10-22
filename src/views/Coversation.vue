<template>
  <div class="h-full w-full">
    <div
      class="h-[10%] bg-gray-200 border-b border-gray-300 flex items-center px-3 justify-between"
      v-if="conversation"
    >
      <h3 class="font-semibold text-gray-900">{{ conversation.title }}</h3>
      <span class="text-sm text-gray-500">{{ conversation.updatedAt }}</span>
    </div>
    <div class="w-[90%] mx-auto h-[75%] overflow-y-auto pt-2">
      <!-- <MessageList :messages="filteredMessages" ref="messageListRef" /> -->
      <MessageList :messages="filteredMessages" />
    </div>
    <div class="w-[90%] mx-auto h-[15%] flex items-center">
      <MessageInput
        @create="sendNewMessage"
        v-model="inputValue"
        :disabled="false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import MessageList from "../components/MessageList.vue";
import MessageInput from "../components/MessageInput.vue";
import { messages, conversations } from "../testData.js";
import { useRoute } from "vue-router";

let inputValue = ref("");
const route = useRoute();
let conversationId = ref(parseInt(route.params.id));

const filterMessagesByConversation = (id) => {
  return messages.filter((message) => message.conversationId === id);
};
const filterConversationById = (id) => {
  return conversations.find((conv) => conv.id === id);
};
const conversation = ref(filterConversationById(conversationId.value));
const filteredMessages = ref(
  filterMessagesByConversation(conversationId.value)
);
watch(
  () => route.params.id,
  (newId) => {
    conversationId.value = parseInt(newId);
    filteredMessages.value = filterMessagesByConversation(conversationId.value);
    conversation.value = filterConversationById(conversationId.value);
  }
);
const sendNewMessage = async (question, imagePath) => {
  console.log("Sending new message:", question, imagePath);

  // if (question) {
  //   let copiedImagePath: string | undefined
  //   if (imagePath) {
  //     try {
  //       copiedImagePath = await window.electronAPI.copyImageToUserDir(imagePath)
  //       console.log('copiedImagePath', copiedImagePath)
  //     } catch (error) {
  //       console.error('Failed to copy image:', error)
  //     }
  //   }
  //   const date = new Date().toISOString()
  //   await messageStore.createMessage({
  // 		content: question,
  // 		conversationId: conversationId.value,
  // 		createdAt: date,
  //     updatedAt: date,
  // 		type: 'question',
  //     ...(copiedImagePath && { imagePath: copiedImagePath })
  //   })
  //   inputValue.value = ''
  //   creatingInitialMessage()
  // }
};
</script>

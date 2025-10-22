<template>
  <div class="w-[90%] mx-auto h-full">
    <div class="flex items-center h-[85%]">
      <ProviderSelect :items="providers" v-model="currentProvider" />
    </div>
    <div class="flex items-center h-[15%]">
      <MessageInput
        @create="createConversation"
        :disabled="currentProvider === ''"
      />
    </div>
  </div>
</template>

<script setup>
import ProviderSelect from "../components/ProviderSelect.vue";
import MessageInput from "../components/MessageInput.vue";
import { providers } from "../testData";
import { computed, ref } from "vue";

const currentProvider = ref("");
const modelInfo = computed(() => {
  const [providerId, selectedModel] = currentProvider.value.split("/");
  return {
    providerId: parseInt(providerId),
    selectedModel,
  };
});
const createConversation = async (question, imagePath) => {
  console.log("Creating conversation with:", question, imagePath);
  console.log("modelInfo:", modelInfo.value);
  // const { providerId, selectedModel } = modelInfo.value;
  // const currentDate = new Date().toISOString();
  // let copiedImagePath;
  // if (imagePath) {
  //   try {
  //     copiedImagePath = await window.electronAPI.copyImageToUserDir(imagePath);
  //     console.log("copiedImagePath", copiedImagePath);
  //   } catch (error) {
  //     console.error("Failed to copy image:", error);
  //   }
  // }
  // const conversationId = await conversationStore.createConversation({
  //   title: question,
  //   providerId,
  //   selectedModel,
  //   createdAt: currentDate,
  //   updatedAt: currentDate,
  // });
  // const newMessageId = await db.messages.add({
  //   content: question,
  //   conversationId,
  //   createdAt: currentDate,
  //   updatedAt: currentDate,
  //   type: "question",
  //   ...(copiedImagePath && { imagePath: copiedImagePath }),
  // });
  // conversationStore.selectedId = conversationId;
  // router.push(`/conversation/${conversationId}?init=${newMessageId}`);
};
</script>

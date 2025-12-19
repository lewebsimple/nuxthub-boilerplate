<script setup lang="ts">
const upload = useUpload("/api/upload");

async function onFileSelect(event: Event) {
  const target = event.target as HTMLInputElement;
  const uploadedFiles = await upload(target);
  // Files uploaded successfully
  console.log("Uploaded:", uploadedFiles);
}
</script>

<template>
  <input
    accept="image/jpeg, image/png, image/webp"
    type="file"
    name="files"
    multiple
    @change="onFileSelect"
  >
</template>

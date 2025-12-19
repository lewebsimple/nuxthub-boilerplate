import { blob } from "hub:blob";

export default eventHandler(async (event) => {
  // Make sure to check if the user can upload files before calling this function
  return blob.handleUpload(event, {
    formKey: "files",
    multiple: true,
    ensure: {
      maxSize: "16MB",
      types: ["image/jpeg", "image/png", "image/webp"],
    },
    put: {
      addRandomSuffix: true,
      prefix: "images",
    },
  });
});

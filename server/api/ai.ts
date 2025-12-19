import { generateText } from "ai";

export default defineEventHandler(async () => {
  const model = workersai("@cf/meta/llama-3.1-8b-instruct", { safePrompt: true });

  const message = await generateText({
    /** @ts-expect-error - AI SDK v6 breaking change */
    model,
    prompt: "Write a humorous Hello World greeting.",
  });
  return { message };
});

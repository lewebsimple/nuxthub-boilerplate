import { generateText } from "ai";
import { createWorkersAI } from "workers-ai-provider";

export default defineEventHandler(async (event) => {
  const { cloudflare } = event.context;
  const workersai = createWorkersAI({ binding: cloudflare.env.AI });
  const model = workersai("@cf/meta/llama-3.1-8b-instruct", { safePrompt: true });
  const message = await generateText({
    /** @ts-expect-error - AI SDK v6 breaking change ? */
    model,
    prompt: "Write a humorous Hello World greeting.",
  });
  return { message };
});

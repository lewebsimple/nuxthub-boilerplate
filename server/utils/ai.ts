import { createWorkersAI } from "workers-ai-provider";

let workersai: ReturnType<typeof createWorkersAI> | null = null;
export function getWorkersAI() {
  if (workersai) return workersai;
  workersai = createWorkersAI({ binding: "AI" });
  return workersai;
}

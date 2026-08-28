import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function context(role: "editor" | "reviewer" | "publisher" | "admin"): TrpcContext {
  return { user: { id: 7, openId: "staff", name: "Staff", email: "staff@example.com", loginMethod: "manus", role, createdAt: new Date(), updatedAt: new Date(), lastSignedIn: new Date() }, req: {} as TrpcContext["req"], res: {} as TrpcContext["res"] };
}

describe("cms permission boundaries", () => {
  it("does not allow an editor to publish", async () => {
    const caller = appRouter.createCaller(context("editor"));
    await expect(caller.cms.publish({ pageId: 1 })).rejects.toThrow("Publishing permission required");
  });

  it("does not allow a reviewer to publish", async () => {
    const caller = appRouter.createCaller(context("reviewer"));
    await expect(caller.cms.publish({ pageId: 1 })).rejects.toThrow("Publishing permission required");
  });
});

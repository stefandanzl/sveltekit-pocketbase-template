import { pbError } from "$lib/pocketbase.svelte.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
  if (locals.user) {
    redirect(307, "/app");
  }
};

export const actions = {
  default: async ({ locals, request }) => {
    const form = Object.fromEntries(await request.formData()) as {
      username: string;
      password: string;
    };

    try {
      await locals.pb.collection("users").authWithPassword(form.username, form.password);
    } catch (e) {
      pbError(e);
    }
  },
};

import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null
  }),

  getters: {
    user: (state) => state.authUser
  },

  actions: {
    // get user
    async getUser() {
      const data = await axios.get("profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      this.authUser = data.data.data;
    }
  }
});

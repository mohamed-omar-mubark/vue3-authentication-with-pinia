import { defineStore } from "pinia";
import axios from "axios";
import Cookies from "js-cookie";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null
  }),

  getters: {
    user: (state) => state.authUser
  },

  actions: {
    // handle login
    async handleLogin(userData) {
      const response = await axios.post("login", userData);

      // set token to cookie with expiration date of 1 month
      Cookies.set("token", response.data.data.token, { expires: 30, path: "/" });

      // redirect to home page
      this.$router.push({ name: "Home" });
    },

    // get user
    async getUser() {
      const data = await axios.get("profile", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      });

      // set authUser
      this.authUser = data.data.data;
    },

    // handle logout
    async handleLogout() {
      await axios.get("logout", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      });

      // remove token from cookie
      Cookies.remove("token");

      // set authUser to null
      this.authUser = null;
    }
  }
});

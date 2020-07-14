<template>
  <div id="app">
    <nav-bar />
    <aside-menu :menu="menu" >
    </aside-menu>
    <router-view />
  </div>
</template>

<!--<span v-for="label in forms">{{ label.title }}</span>-->

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar";
import AsideMenu from "@/components/AsideMenu";
import FooterBar from "@/components/FooterBar";

export default {
  name: "home",
  components: {
    FooterBar,
    AsideMenu,
    NavBar
  },
  data() {
    return {
      forms: [],
    }
  },
  created() {
    this.getForms();
    axios
      .get("/user")
      .then(r => {
        this.$store.commit("user", r.data.data);
      })
      .catch(err => {
        this.$buefy.toast.open({
          message: `Error: ${err.message}`,
          type: "is-danger"
        });
      });
  },
  methods: {
    getForms() {
      this.isLoading = true;
      axios
        .get("/reports/forms")
        .then(r => {
          this.isLoading = false;
          if (r.data && r.data.data) {
            this.forms = r.data.data;
          }
        })
        .catch(err => {
          this.isLoading = false;
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger",
            queue: false
          });
        });
    },
  },
  computed: {
    menu() {
      return [
        // this.forms
        "General",
        [
          {
            to: "/",
            icon: "view-dashboard",
            label: "Browse Reports"
          },
        ],
        "Admin",
        [
          {
            to: "/reports/forms/index",
            label: "Forms",
            icon: "database"
          },
          {
            to: "/reports/role/index",
            label: "Roles",
            icon: "database"
          },

        ]
      ];
    }
  },

};
</script>

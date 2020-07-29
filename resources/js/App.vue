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
      modules: [],
      modulespath: [],
    }
  },
  created() {
    this.getModules();
    // this.getModulespath();
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
    getModules() {
      // this.isLoading = true;
      axios
        .get("modules")
        .then(r => {
          // this.isLoading = false;
          // if (r.data && r.data.data) {
            this.modules = r.data.data;
            // console.log(this.modules)
          // }
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

    getModulespath() {
      // this.isLoading = true;
      axios
        .get("getmodulepath")
        .then(r => {
          // this.isLoading = false;
          // if (r.data && r.data.data) {
          this.modules = r.data.data;
          // console.log(this.modules)
          // }
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
      return this.modules
      // return [
      //   'General',
      //   [
      //     {
      //       to: '/',
      //       icon: 'desktop-mac',
      //       label: 'Dashboard'
      //     },
      //     {
      //       label: 'Submenus',
      //       subLabel: 'Submenus Example',
      //       icon: 'view-list',
      //       menu: [
      //         {
      //           label: 'Submenus 2',
      //           menu2: [
      //             { label2: "Item" }
      //             ]
      //         }
      //       ]
      //     },
      //   ],
      // ]
    }
  },
};
</script>

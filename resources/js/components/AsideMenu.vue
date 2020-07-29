<template>
  <aside
      v-show="isAsideVisible"
      class="aside is-placed-left is-expanded">
    <aside-tools :is-main-menu="true">
      <span slot="label">
        <b>Admin</b> One
      </span>
    </aside-tools>

    <div class="menu is-menu-main">
      <template v-for="(menuGroup, index) in menu" >
        <p class="menu-label" v-if="typeof menuGroup === 'string'" :key="index">{{ menuGroup }}</p>
        <aside-menu-list
            v-else
            :key="index"
            @menu-click="menuClick"
            :menu="menuGroup"/>
      </template>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'
import AsideTools from '@/components/AsideTools'
import BrowseReports from "@/views/Reports/BrowseReports.vue";

export default {
  name: 'AsideMenu',
  components: { AsideTools,BrowseReports },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState([
      'isAsideVisible'
    ])
  },
  data() {
    return {
      isScrollable: true,
      maxHeight: 200,
      menus: [],
      selectedForm: null,
      forms: [],
      formData: {},
      company: [],
      isActive: true,
      selected: '',
      m3: [],
      modulepath: [],
    }
  },

  created() {
    this.getCompanies();
  },
  methods: {
    menuClick (item) {
      //
    },
    getCompanies() {
      this.isLoading = true;
      axios
        .get("/company")
        .then(r => {
          this.isLoading = false;
          if (r.data && r.data.data) {
            this.company = r.data.data;
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

}
</script>
<style>

</style>

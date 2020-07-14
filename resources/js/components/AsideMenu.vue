<template>
  <aside
      v-show="isAsideVisible"
      class="aside is-placed-left is-expanded">
    <aside-tools :is-main-menu="true">
      <span slot="label">
        <b>Admin</b> One
      </span>
    </aside-tools>

    <browse-reports username='matt'></browse-reports>

<!--    <div>-->
<!--      <b-field>-->
<!--        <b-select v-model="selected" placeholder="Select a company" expanded rounded>-->
<!--          <option-->
<!--            v-for="option in company"-->
<!--            :value="option.id"-->
<!--            :key="option.id"-->
<!--            :data-url="option.code"-->
<!--            v-bind:value="{ code: option.code }">-->
<!--            {{option.name + ' - ' + option.code}}-->
<!--          </option>-->
<!--        </b-select>-->
<!--      </b-field>-->
<!--    </div>-->

<!--    <h1>Value:-->
<!--      {{ selected.code }}-->
<!--    </h1>-->

<!--    <b-menu>-->
<!--      <b-menu-list label="Menu" >-->
<!--        <li v-for="label in forms">-->
<!--          <div>-->
<!--            <a class="router-link-active has-icon">-->
<!--              <span class="menu-item-label labeltitle">{{label.title}}</span>-->
<!--            </a>-->
<!--          </div>-->
<!--        </li>-->
<!--      </b-menu-list>-->
<!--    </b-menu>-->

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
    }
  },

  created() {
    this.getCompanies();
    this.getForms();
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

}
</script>
<style>
  .labeltitle{
    padding: 0px 1rem;
  }
</style>

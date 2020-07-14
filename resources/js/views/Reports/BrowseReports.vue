<template>
  <div>
    <section class="section is-main-section">

      <div id='browse-report'>
        {{username}}
      </div>

      <div class="company" >
        <b-field>
          <b-select v-model="selected" placeholder="Select a company"  rounded>
            <option
              v-for="option in company"
              :value="option.id"
              :key="option.id"
              :data-url="option.code"
              v-bind:value="{ code: option.code }">
              {{option.name + ' - ' + option.code}}
            </option>
          </b-select>
        </b-field>
      </div>

      <div id='reportcode'>
        {{selected.code}}
      </div>

      <b-menu class="">
        <b-menu-list >
          <b-menu-item icon="settings" :active="isActive" expanded>
            <template slot="label" slot-scope="props">
              M3 Prd
              <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
            </template>
            <li v-for="label in m3">
              <div>
                <a class="router-link-active has-icon">
                  <span class="menu-item-label labeltitle">{{label.title}}</span>
                </a>
              </div>
            </li>
          </b-menu-item>

          <b-menu-item class="prod" icon="settings">
            <template slot="label" slot-scope="props">
              Prod
              <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
            </template>
            <li v-for="label in prod">
              <div>
                <a class="router-link-active has-icon">
                  <span class="menu-item-label labeltitle">{{label.title}}</span>
                </a>
              </div>
            </li>
          </b-menu-item>
        </b-menu-list>
      </b-menu>
    </section>
  </div>

</template>

<script>
    export default {
        name: "BrowseReports",
      data() {
        return {
          m3: [],
          prod: [],
          company: [],
          selected: '',
          isActive: false
        };
      },
      created() {
        this.getM3();
        this.getProd();
        this.getCompanies();
      },
      props: ['selected.code', 'username'],
      methods: {
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
        getM3() {
          this.isLoading = true;
          axios
            .get("/reports/forms/m3")
            .then(r => {
              this.isLoading = false;
              if (r.data && r.data.data) {
                this.m3 = r.data.data;
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
        getProd() {
          this.isLoading = true;
          axios
            .get("/reports/forms/prod")
            .then(r => {
              this.isLoading = false;
              if (r.data && r.data.data) {
                this.prod = r.data.data;
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
      }

    }

</script>

<style scoped>
.company{
  padding: 1em;
}
.menu-list a.is-active {
  background-color: #2868f7;
  color: white;
}
</style>

<template>

  <div>
    <title-bar :title-stack="['Admin', 'Reports', 'Manage Forms']" />
    <hero-bar>Browse Reports</hero-bar>
    <section class="section is-main-section">


<!--      <b-collapse  class="card" animation="slide" :open.sync="isReportOpen">-->
<!--        <div slot="trigger" slot-scope="props" class="card-header" role="button">-->
<!--          <p class="card-header-title">Reports</p>-->
<!--          <a class="card-header-icon">-->
<!--            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>-->
<!--          </a>-->
<!--        </div>-->
<!--        <div class="card-content" >-->
<!--          <div class="content" >-->
<!--            <b-loading  :is-full-page="isFullPage" :active.sync="isReportLoading" ></b-loading>-->

<!--        <div class="company" >-->
<!--          <b-field label="Company">-->
<!--            <b-select :loading="isCodeLoading" v-model="selected" placeholder="Select a company"  rounded>-->
<!--              <option-->
<!--                v-for="option in company"-->
<!--                :value="option.id"-->
<!--                :key="option.id"-->
<!--                :data-url="option.code"-->
<!--                v-bind:value="{ code: option.code }">-->
<!--                {{option.name + ' - ' + option.code}}-->
<!--              </option>-->
<!--            </b-select>-->
<!--          </b-field>-->
<!--        </div>-->

<!--            <b-menu class="" >-->
<!--              <b-menu-list >-->
<!--                <b-menu-item icon="settings" :active="isActive" expanded >-->
<!--                  <template slot="label" slot-scope="props">-->
<!--                    M3 Prd-->
<!--                    <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>-->
<!--                  </template>-->
<!--                  <li v-for="label in m3" >-->
<!--                    <div>-->
<!--                      <a class="router-link-active has-icon">-->
<!--                        <span  @click="getReport(label)"  class="menu-item-label ">{{label.title}}</span>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                  </li>-->
<!--                </b-menu-item>-->

<!--                <b-menu-item class="prod" icon="settings">-->
<!--                  <template slot="label" slot-scope="props">-->
<!--                    Prod-->
<!--                    <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>-->
<!--                  </template>-->
<!--                  <li v-for="label in prod">-->
<!--                    <div>-->
<!--                      <a class="router-link-active has-icon">-->
<!--                        <span @click="fetchMessages(label)" class="menu-item-label ">{{label.title}}</span>-->
<!--                      </a>-->
<!--                    </div>-->
<!--                  </li>-->
<!--                </b-menu-item>-->
<!--              </b-menu-list>-->
<!--            </b-menu>-->
<!--          </div>-->
<!--        </div>-->
<!--      </b-collapse>-->

<!--      <h1>{{selected.code}}</h1>-->

      <b-field label="Select Report">
        <b-autocomplete
          :keep-first="true"
          :open-on-focus="true"
          :data="forms"
          field="title"
          @select="option => selectedForm = option"
        ></b-autocomplete>
      </b-field>

      <b-collapse  class="card" animation="slide" :open.sync="isOpen" v-if="selectedForm != null" >
        <div slot="trigger" slot-scope="props" class="card-header" role="button">
            <p class="card-header-title">Filters</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
          </a>
        </div>

        <div class="card-content">
          <div class="content">

            <form @submit.prevent="submit">
                <b-field
                  v-for="(field, i) in selectedForm.fields"
                  :key="i"
                  :label="field.label"
                  horizontal
                >

                <b-input v-model="formData[field.alias]" v-if="field.type == 'text'"  required />
                <b-select
                  v-model="formData[field.alias]"
                  v-else-if="field.type == 'select'"
                  required
                >
                  <option
                    v-for="option in field.options"
                    :value="option.value"
                    :key="option.value"
                  >{{ option.text }}</option>
                </b-select>
                <b-datepicker
                  v-model="formData[field.alias]"
                  v-else-if="field.type == 'date'"
                  placeholder
                  icon="calendar-today"
                  trap-focus
                  editable
                  required
                  :date-formatter="date => date.getFullYear() + '' + appendLeadingZeroes(date.getMonth() + 1) + '' + appendLeadingZeroes(date.getDate())"
                ></b-datepicker>
              </b-field>
              <b-field horizontal>
                <b-button type="is-primary" :loading="isLoading" native-type="submit">Submit</b-button>
              </b-field>
            </form>
          </div>
        </div>
      </b-collapse>
      <div class="export" v-if="exportbutton">
        <b-dropdown aria-role="list">
          <b-button class="button is-info" :loading="isLoadingPDFCSV" slot="trigger" slot-scope="{ active }">
            <span>Export</span>
            <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
          </b-button>

          <b-dropdown-item tag="button" aria-role="listitem" @click="pdf" :disabled="onPDF !== 'true'">PDF</b-dropdown-item>
          <b-dropdown-item tag="button" aria-role="listitem" @click="csv" :disabled="onCSV !== 'true'">EXCEL</b-dropdown-item>
        </b-dropdown>
      </div>
      <div ref="content" id="report" class="report" v-if="report != null" v-html="report" ></div>
    </section>
  </div>

</template>
<script>
import map from "lodash/map";
import CardComponent from "@/components/CardComponent";
import ModalBox from "@/components/ModalBox";
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
import CardToolbar from "@/components/CardToolbar";
import ModalTrashBox from "@/components/ModalTrashBox";
import Tiles from "@/components/Tiles";
import moment from 'moment';
import clone from "lodash/clone";

export default {
  name: "ReportsFormsIndex",
  components: {
    ModalTrashBox,
    CardToolbar,
    HeroBar,
    TitleBar,
    ModalBox,
    Tiles,
    CardComponent,
  },
  data() {
    return {
      isModalActive: false,
      trashObject: null,
      forms: [],
      isLoading: false,
      isLoadingPDFCSV: false,
      paginated: false,
      perPage: 10,
      selectedForm: null,
      formData: {},
      report: null,
      isOpen: true,
      isReportOpen: true,
      exportbutton: null,
      company: [],
      isScrollable: true,
      maxHeight: 200,
      m3: [],
      prod: [],
      selected: '',
      isActive: false,
      selectedReport: '',
      isReportLoading: false,
      isCodeLoading: false,
      isFullPage: false,
      onPDF: false,
      onCSV: false,
      checkUserAccess: [],
    };
  },
  watch: {
    selectedForm() {
      this.formData = {}
      this.report = null;
      this.isOpen = true;
      this.exportbutton = null;
    },
    $route(to, from) {
      // react to route changes...
      if(to !== from){ location.reload();
      }
    }
  },
  computed: {},
  created() {
    this.getCompanies();
    this.getM3();
    this.getProd();
    this.getForms();
  },
  props: {
    id: {
      default: null
    },
  },
  methods: {
    pdf() {
      this.isLoadingPDFCSV = true;
      let p_head_division = this.formData["p_head_division"];
      let p_branch = this.formData["p_branch"];
      let p_head_branch = this.formData["p_head_branch"];
      let p_company = this.formData["p_company"];
      let p_division = this.formData["p_division"];
      let p_head_cono = this.formData["p_head_cono"];
      let p_df = this.formData["p_df"];
      let p_dt = this.formData["p_dt"];
      let p_customer_code = this.formData["p_customer_code"];
      let extURL = `p_df=${this.format_date(p_df)}&p_dt=${this.format_date(p_dt)}&p_branch=${p_branch}&p_company=${p_company}&p_division=${p_division}&p_head_cono=${p_head_cono}&p_head_division=${p_head_division}&p_head_branch=${p_head_branch}&p_customer_code=${p_customer_code}`;
      axios
        .get(`/reports/forms/${this.selectedForm.id}/exportpdf?${extURL}`, {responseType: 'arraybuffer'})
        .then(r => {
          let blob = new Blob([r.data], {type: 'application/pdf'})
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = this.selectedForm.title + '.pdf'
          link.click()
        })
        .catch(err => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger",
            queue: false
          });
        })
        .finally(r => {
          this.isLoadingPDFCSV = false;
        });
    },
    csv(){
      this.isLoadingPDFCSV = true;
      let p_head_division = this.formData["p_head_division"];
      let p_branch = this.formData["p_branch"];
      let p_head_branch = this.formData["p_head_branch"];
      let p_company = this.formData["p_company"];
      let p_division = this.formData["p_division"];
      let p_head_cono = this.formData["p_head_cono"];
      let p_df = this.formData["p_df"];
      let p_dt = this.formData["p_dt"];
      let p_customer_code = this.formData["p_customer_code"];
      let extURL = `p_df=${this.format_date(p_df)}&p_dt=${this.format_date(p_dt)}&p_branch=${p_branch}&p_company=${p_company}&p_division=${p_division}&p_head_cono=${p_head_cono}&p_head_division=${p_head_division}&p_head_branch=${p_head_branch}&p_customer_code=${p_customer_code}`;
      axios
        .get(`/reports/forms/${this.selectedForm.id}/exportcsv?${extURL}`, {responseType: 'arraybuffer'})
        .then(r => {
          console.log(r.data);
          let blob = new Blob([r.data], {type: 'text/csv'})
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = this.selectedForm.title + '.csv'
          link.click()
        })
        .catch(err => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger",
            queue: false
          });
        })
        .finally(r => {
          this.isLoadingPDFCSV = false;
        });
    },
    appendLeadingZeroes(n) {
      if (n <= 9) {
        return "0" + n;
      }
      return n;
    },
    format_date(value){
        if (value) {
          return moment(String(value)).format('YYYYMMDD')
        }
      },
    submit() {
      this.isLoading = true;
      this.report = null;
      let p_head_division = this.formData["p_head_division"];
      let p_branch = this.formData["p_branch"];
      let p_head_branch = this.formData["p_head_branch"];
      let p_company = this.formData["p_company"];
      let p_division = this.formData["p_division"];
      let p_head_cono = this.formData["p_head_cono"];
      let p_df = this.formData["p_df"];
      let p_dt = this.formData["p_dt"];
      let p_customer_code = this.formData["p_customer_code"];
      let extURL = `p_df=${this.format_date(p_df)}&p_dt=${this.format_date(p_dt)}&p_branch=${p_branch}&p_company=${p_company}&p_division=${p_division}&p_head_cono=${p_head_cono}&p_head_division=${p_head_division}&p_head_branch=${p_head_branch}&p_customer_code=${p_customer_code}`;
      axios
        .post(`/reports/forms/${this.selectedForm.id}/generate?${extURL}`, null)
        .then(r => {
          if (r.data && r.data.data) {
            this.report = r.data.data;
            this.isOpen = false;
            this.exportbutton = true;
            this.vpdf = null;
          }
        })
        .catch(err => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger",
            queue: false
          });
        })
        .finally(r => {
          this.isLoading = false;
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
            // console.log(Object.keys(Object.assign({}, this.forms)))
            // console.log(this.forms);
            this.fetchMessages(this.forms);
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
    getCompanies() {
      this.isCodeLoading = true;
      axios
        .get("/company")
        .then(r => {
          this.isCodeLoading = false;
          if (r.data && r.data.data) {
            this.company = r.data.data;
          }
        })
        .catch(err => {
          this.isCodeLoading = false;
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger",
            queue: false
          });
        });
    },
    getM3() {
      this.isReportLoading = true;
      axios
        .get("/reports/forms/m3")
        .then(r => {
          this.isReportLoading = false;
          if (r.data && r.data.data) {
            this.m3 = r.data.data;
          }
        })
        .catch(err => {
          this.isReportLoading = false;
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger",
            queue: false
          });
        });
    },
    getProd() {
      this.isReportLoading = true;
      axios
        .get("/reports/forms/prod")
        .then(r => {
          this.isReportLoading = false;
          if (r.data && r.data.data) {
            this.prod = r.data.data;

          }
        })
        .catch(err => {
          this.isReportLoading = false;
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger",
            queue: false
          });
        });
    },
    fetchMessages(form){
      this.selectedForm = form[this.$route.query.form]
    },
    getUserAccess(){
      axios
        .get("/access")
        .then(r => {
          if (r.data && r.data.data) {
            this.checkUserAccess = r.data.data
            let i;
            // let route;
            for (i = 0; i < this.checkUserAccess.length; i++) {
              if (this.checkUserAccess[i] === 'App\\Http\\Controllers\\Reports\\ReportsFormsController@exportpdf') {
                this.onPDF = 'true';
                console.log('PDF');
              } else if (this.checkUserAccess[i] === 'App\\Http\\Controllers\\Reports\\ReportsFormsController@exportcsv') {
                this.onCSV = 'true';
                console.log('CSV');
              }
            }

          }
        })
        .catch(err => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger"
          });
        });
    },


  }
};
</script>
<style scoped>
  .report {
    padding: 1rem;
    background-color: #fff;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    text-align: center;
    overflow-x: auto;
  }
  .export{
    text-align: right;
    padding: 1rem;
  }
  .company{
    padding: 0 0 1em 0;
  }
</style>

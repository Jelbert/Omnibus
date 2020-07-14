<template>
  <div>
    <title-bar :title-stack="['Admin', 'Reports', 'Manage Forms']" />
    <hero-bar>
      Manage Forms
      <router-link to="/reports/forms/new" class="button" slot="right"
        >New Form</router-link
      >
    </hero-bar>
    <section class="section is-main-section">
      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Forms"
        icon="database"
      >
        <card-toolbar>
          <button
            slot="right"
            type="button"
            class="button is-danger is-small has-checked-rows-number"
            @click="trashModal(null)"
            :disabled="!checkedRows.length"
          >
            <b-icon icon="trash-can" custom-size="default" />
            <span>Delete</span>
            <span v-show="!!checkedRows.length"
              >({{ checkedRows.length }})</span
            >
          </button>
        </card-toolbar>
        <modal-trash-box
          :is-active="isModalActive"
          :trash-subject="trashSubject"
          @confirm="trashConfirm"
          @cancel="trashCancel"
        />

        <b-table
          :checked-rows.sync="checkedRows"
          :checkable="true"
          :loading="isLoading"
          :paginated="paginated"
          :per-page="perPage"
          :striped="true"
          :hoverable="true"
          default-sort="name"
          :data="forms"
        >
          <template slot-scope="props">
            <b-table-column label="Title" field="title" sortable>{{
              props.row.title
            }}</b-table-column>
            <b-table-column label="Created">
              <small
                class="has-text-grey is-abbr-like"
                :title="props.row.created"
                >{{ props.row.created }}</small
              >
            </b-table-column>
            <b-table-column custom-key="actions" class="is-actions-cell">
              <div class="buttons is-right">
                <router-link
                  :to="{
                    name: 'reports.forms.edit',
                    params: { id: props.row.id }
                  }"
                  class="button is-small is-primary"
                >
                  <b-icon icon="pencil" size="is-small" />
                </router-link>
                <button
                  class="button is-small is-danger"
                  type="button"
                  @click.prevent="trashModal(props.row)"
                >
                  <b-icon icon="delete" size="is-small" />
                </button>
              </div>
            </b-table-column>
          </template>

          <section class="section" slot="empty">
            <div class="content has-text-grey has-text-centered">
              <template v-if="isLoading">
                <p>
                  <b-icon icon="dots-horizontal" size="is-large" />
                </p>
                <p>Fetching data...</p>
              </template>
              <template v-else>
                <p>
                  <b-icon icon="emoticon-sad" size="is-large" />
                </p>
                <p>Nothing's here&hellip;</p>
              </template>
            </div>
          </section>
        </b-table>
      </card-component>
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

export default {
  name: "ReportsFormsIndex",
  components: {
    ModalTrashBox,
    CardToolbar,
    HeroBar,
    TitleBar,
    ModalBox,
    CardComponent
  },
  data() {
    return {
      isModalActive: false,
      trashObject: null,
      forms: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: []
    };
  },
  computed: {
    trashSubject() {
      if (this.trashObject) {
        return this.trashObject.name;
      }

      if (this.checkedRows.length) {
        return `${this.checkedRows.length} entries`;
      }

      return null;
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.isLoading = true;
      axios
        .get("/reports/forms")
        .then(r => {
          this.isLoading = false;
          if (r.data && r.data.data) {
            if (r.data.data.length > this.perPage) {
              this.paginated = true;
            }
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
    trashModal(trashObject = null) {
      if (trashObject || this.checkedRows.length) {
        this.trashObject = trashObject;
        this.isModalActive = true;
      }
    },
    trashConfirm() {
      let url;
      let method;
      let data = null;

      this.isModalActive = false;

      if (this.trashObject) {
        method = "delete";
        url = `/reports/forms/${this.trashObject.id}/destroy`;
      } else if (this.checkedRows.length) {
        method = "post";
        url = "/reports/forms/destroy";
        data = {
          ids: map(this.checkedRows, row => row.id)
        };
      }

      axios({
        method,
        url,
        data
      })
        .then(r => {
          this.getData();

          this.trashObject = null;
          this.checkedRows = [];

          this.$buefy.snackbar.open({
            message: `Deleted`,
            queue: false
          });
        })
        .catch(err => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger",
            queue: false
          });
        });
    },
    trashCancel() {
      this.isModalActive = false;
    }
  }
};
</script>

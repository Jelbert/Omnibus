<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link slot="right" to="/reports/category/index" class="button"
        >Category</router-link
      >
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <card-component
          :title="formCardTitle"
          icon="account-edit"
          class="tile is-child"
        >
          <form @submit.prevent="submit">
            <template v-if="id">
              <b-field label="ID" horizontal>
                <b-input :value="id" custom-class="is-static" readonly />
              </b-field>
              <hr />
            </template>
            <b-field label="Title" horizontal>
              <b-input v-model="category.name" required />
            </b-field>

            <hr />
            <b-field horizontal>
              <b-button
                type="is-primary"
                :loading="isLoading"
                native-type="submit"
                >Submit</b-button
              >
            </b-field>
          </form>
        </card-component>
      </tiles>
    </section>
  </div>
</template>

<script>
import clone from "lodash/clone";
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
import Tiles from "@/components/Tiles";
import CardComponent from "@/components/CardComponent";
import Notification from "@/components/Notification";
import draggable from "vuedraggable";

export default {
  name: "ReportsFormsForm",
  components: {
    CardComponent,
    Tiles,
    HeroBar,
    TitleBar,
    Notification,
    draggable
  },
  props: {
    id: {
      default: null,
    },
  },
  data() {
    return {
      isLoading: false,
      item: null,
      category: this.getClearFormObject(),
      createdReadable: null,
    };
  },
  computed: {
    titleStack() {
      let lastCrumb;

      if (this.isProfileExists) {
        lastCrumb = this.category.name;
      } else {
        lastCrumb = "New Category";
      }

      return ["Admin", "Reports", lastCrumb];
    },
    heroTitle() {
      if (this.isProfileExists) {
        return this.category.name;
      } else {
        return "Create Category";
      }
    },
    formCardTitle() {
      if (this.isProfileExists) {
        return "Edit Category";
      } else {
        return "New Category";
      }
    },
    isProfileExists() {
      return !! this.item;
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getClearFormObject() {
      return {
        id: null,
        name: null,
      };
    },
    getData() {
      if (this.id) {
        axios
          .get(`/reports/category/${this.id}`)
          .then(r => {
            this.category = r.data.data;
            this.item = clone(r.data.data);

            // this.category.created_date = new Date(r.data.data.created_mm_dd_yyyy);
          })
          .catch(e => {
            this.item = null;

            this.$buefy.toast.open({
              message: `Error: ${e.message}`,
              type: "is-danger",
              queue: false
            });
          });
      }
    },
    input(v) {
      // this.createdReadable = moment(v).format('MMM D, Y').toString()
    },
    onChange(event) {
      let data = event.target.value;
      console.log(data);
    },
    submit() {
      let method = "post";
      let url = "/reports/category/store";

      if (this.id) {
        method = "patch";
        url = `/reports/category/${this.id}`;
      }


      this.isLoading = true;
      axios({
        method,
        url,
        data: this.category
      })
        .then(r => {
          this.isLoading = false;

          if (!this.id && r.data.data.id) {
            this.$router.push({
              name: "reports.category.edit",
              params: { id: r.data.data.id }
            });

            this.$buefy.snackbar.open({
              message: "Created",
              queue: false
            });
          } else {
            this.item = r.data.data;

            this.$buefy.snackbar.open({
              message: "Updated",
              queue: false
            });
          }
        })
        .catch(e => {
          this.isLoading = false;

          this.$buefy.toast.open({
            message: `Error: ${e.message}`,
            type: "is-danger",
            queue: false
          });
        });
    },

  },
  watch: {
    id(newValue) {
      this.form = this.getClearFormObject();
      this.item = null;

      if (newValue) {
        this.getData();
      }
    }
  }
};
</script>

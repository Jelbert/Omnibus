<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link slot="right" to="/reports/role/index" class="button"
      >Roles</router-link
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
            <b-field label="Name" horizontal>
              <b-input v-model="role.title" required />
            </b-field>
            <hr />
            <b-field label="Operation" horizontal>
              <b-input v-model="role.operation" required />
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
      name: "ReportRoleForm",
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
        default: null
      }
    },
    data() {
      return {
        isLoading: false,
        role: this.getClearFormObject(),
        createdReadable: null
      };
    },
    computed: {
      titleStack() {
        let lastCrumb;

        if (this.isProfileExists) {
          lastCrumb = this.role.title;
        } else {
          lastCrumb = "New Form";
        }

        return ["Admin", "Reports", lastCrumb];
      },
      heroTitle() {
        if (this.isProfileExists) {
          return this.role.title;
        } else {
          return "Create Form";
        }
      },
      formCardTitle() {
        if (this.isProfileExists) {
          return "Edit Form";
        } else {
          return "New Form";
        }
      },
      isProfileExists() {
        return ;
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getClearFormObject() {
        return {
          id: null,
          title: null,
          operation: null,
        };
      },
      getData() {
        if (this.id) {
          axios
            .get(`/reports/role/${this.id}`)
            .then(r => {
              this.role = r.data.data;

              // this.form.created_date = new Date(r.data.data.created_mm_dd_yyyy);
            })
            .catch(e => {

              this.$buefy.toast.open({
                message: `Error: ${e.message}`,
                type: "is-danger",
                queue: false
              });
            });
        }
      },
      input(v) {
        //this.createdReadable = moment(v).format('MMM D, Y').toString()
      },
      onChange(event) {
        let data = event.target.value;
        console.log(data);
      },
      submit() {
        this.isLoading = true;
        let method = "post";
        let url = "/reports/role/store";

        if (this.id) {
          method = "patch";
          url = `/reports/role/${this.id}`;
        }

        axios({
          method,
          url,
          data: this.role
        })
          .then(r => {
            this.isLoading = false;

            if (!this.id && r.data.data.id) {
              this.$router.push({
                title: "reprots.role.edit",
                params: { id: r.data.data.id }
              });

              this.$buefy.snackbar.open({
                message: "Created",
                queue: false
              });
            } else {

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
      }
    },
    watch: {
      id(newValue) {
        this.role = this.getClearFormObject();

        if (newValue) {
          this.getData();
        }
      }
    }
  };
</script>

<style scoped>

</style>

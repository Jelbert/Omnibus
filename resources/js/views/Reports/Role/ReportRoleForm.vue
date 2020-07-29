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
              <b-input v-model="role.name" required />
            </b-field>
            <hr />

<!--            <strong>{{ roleroute['label'] }}</strong>-->

<!--            <b-field-->
<!--              v-for="(field, i) in roleroute"-->
<!--              :key="i"-->
<!--              :label="field"-->
<!--              horizontal-->
<!--            />-->


            <b-field label="Description" horizontal>
              <b-input v-model="role.description" required />
            </b-field>
          <hr />

            <div class="columns">
              <div class="column" >
                <div style="margin: .5rem; text-align: start">
                <b-field label="REPORT ACCESS" horizontal >
                </b-field>
                </div>
              </div>

                <div class="column" >
                  <div v-for="(route, i) in roleArray['actions']" :key="i" >
                    <b-field v-if="route['controller_action'] === 'index'" :label="route['controller_action']" horizontal>
<!--                       <b-checkbox v-model="role.role_access" :value="route['controller']" />-->
                      <input  v-model="role.role_access"  type="checkbox" :value="route['controller']" />

                    </b-field>
                  </div>
                  <div v-for="(route, i) in roleArray['actions']" :key="i" >
                    <b-field v-if="route['controller_action'] === 'store'" :label="route['controller_action']" horizontal>
                      <!--                       <b-checkbox v-model="role.role_access" :value="route['controller']" />-->
                      <input  v-model="role.role_access"  type="checkbox" :value="route['controller']" />
                    </b-field>
                  </div>
                </div>
                <div class="column">
                  <div v-for="(route, i) in roleArray['actions']" :key="i" >
                    <b-field v-if="route['controller_action'] === 'update'" :label="route['controller_action']" horizontal>
                      <!-- <b-checkbox  @click="addField()" v-model="role.role_access" :value="role.role_access" />-->
                      <input  v-model="role.role_access"  type="checkbox" :value="route['controller']"/>
                    </b-field>
                  </div>
                  <div v-for="(route, i) in roleArray['actions']" :key="i" >
                    <b-field v-if="route['controller_action'] === 'destroy'" :label="route['controller_action']" horizontal>
                      <!-- <b-checkbox  @click="addField()" v-model="role.role_access" :value="role.role_access" />-->
                      <input  v-model="role.role_access"  type="checkbox" :value="route['controller']"/>
                    </b-field>
                  </div>
                </div>

              <div class="column">
                <div v-for="(route, i) in roleArray['actions']" :key="i">
                  <b-field v-if="route['controller_action'] === 'exportpdf'" :label="route['controller_action']" horizontal>
                    <!-- <b-checkbox  @click="addField()" v-model="role.role_access" :value="role.role_access" />-->
                    <input  v-model="role.role_access"  type="checkbox" :value="route['controller']"/>
                  </b-field>
                </div>
                <div v-for="(route, i) in roleArray['actions']" :key="i">
                  <b-field v-if="route['controller_action'] === 'exportcsv'" :label="route['controller_action']" horizontal>
                    <!-- <b-checkbox  @click="addField()" v-model="role.role_access" :value="role.role_access" />-->
                    <input  v-model="role.role_access"  type="checkbox" :value="route['controller']"/>
                  </b-field>
                </div>
              </div>

            </div>

<!--            <div v-for="(route, i) in roleArray['actions']" :key="route['controller']"  >-->
<!--              <div class="column is-one-third">-->
<!--                <b-field :label="route['controller_action']" horizontal>-->
<!--                  &lt;!&ndash; <b-checkbox  @click="addField()" v-model="role.role_access" :value="role.role_access" />&ndash;&gt;-->
<!--                  <input v-model="role.role_access[i]" type="checkbox" :value="route['controller']"/>-->
<!--                </b-field>-->
<!--              </div>-->
<!--            </div>-->
<!--            </div>-->

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
        roleAccessData: [],
        createdReadable: null,
        forms: [],
        // role_access: [],
        item: null,
        // form: this.getClearFormObject(),
        roleArray: [],
        // checkbox: false,
        checkUserAccess: [],
      };
    },
    computed: {
      titleStack() {
        let lastCrumb;

        if (this.isProfileExists) {
          lastCrumb = this.role.name;
        } else {
          lastCrumb = "New Role";
        }

        return ["Admin", "Role", lastCrumb];
      },
      heroTitle() {
        if (this.isProfileExists) {
          return this.role.name;
        } else {
          return "Create Role";
        }
      },
      formCardTitle() {
        if (this.isProfileExists) {
          return "Edit Role";
        } else {
          return "New Role";
        }
      },
      isProfileExists() {
        return !! this.item;
      }
    },
    created() {
      this.getRoleAccess();
      this.getData();
      // this.getUserAccess();
    },
    methods: {
      getRoleAccess(){
        axios
        .get('roleroute')
          .then(r => {
              this.roleArray = r.data.ReportsFormsController
              // console.log(this.roleArray)
          })
          .catch(err => {
            this.$buefy.toast.open({
              message: `Error: ${err.message}`,
              type: "is-danger",
              queue: false
            });
          });
      },
      getClearFormObject() {
        return {
          id: null,
          name: null,
          description: null,
          role_access: [],
        };
      },

      getData() {
        if (this.id) {
          axios
            .get(`/reports/role/${this.id}`)
            .then(r => {
              this.role = r.data.data;
              this.roleAccessData = r.data.roleAccess;
              this.item = clone(r.data.data);

              // this.form.created_date = new Date(r.data.data.created_mm_dd_yyyy);
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
                title: "reports.role.edit",
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
      }
    },
    watch: {
      id(newValue) {
        this.role = this.getClearFormObject();
        this.item = null;

        if (newValue) {
          this.getData();
        }
      }
    }
  };
</script>

<style scoped>

</style>

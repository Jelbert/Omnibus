<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link slot="right" to="/reports/forms/index" class="button"
        >Forms</router-link
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
              <b-input v-model="form.title" required />
            </b-field>
            <b-field label="Pentaho Filename" horizontal>
              <b-input v-model="form.pentaho_id" required />
            </b-field>
            <b-field label="Category" horizontal>
            <div class="block" >
              <b-radio v-model="form.category"
                       name="category"
                       value="prod"
                       @change="onChange($event)"
                       native-value="prod">
                Prod
              </b-radio>
              <b-radio v-model="form.category"
                       name="category"
                       value="m3"
                       @change="onChange($event)"
                       native-value="m3">
                M3 Prd
              </b-radio>
            </div>
            </b-field>
            <b-field label="Fields" horizontal>
              <div>
                <draggable v-model="form.fields" draggable=".field">
                  <b-collapse
                    v-for="(field, i) in form.fields"
                    :key="i"
                    class="card field"
                    animation="slide"
                    style="margin-bottom: 1.5rem"
                  >
                    <div
                      slot="trigger"
                      slot-scope="props"
                      class="card-header"
                      role="button"
                    >
                      <p class="card-header-title">
                        {{ field.label || "Field" }}
                      </p>
                      <a class="card-header-icon">
                        <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                      </a>
                    </div>
                    <div class="card-content">
                      <div class="content">
                        <b-field
                          label="Label"
                          horizontal
                          style="margin-bottom: 1.5rem"
                        >
                          <b-input v-model="field.label" required />
                        </b-field>
                        <b-field
                          label="Alias"
                          horizontal
                          style="margin-bottom: 1.5rem"
                        >
                          <b-input v-model="field.alias" required />
                        </b-field>
                        <b-field
                          label="Type"
                          horizontal
                          style="margin-bottom: 1.5rem"
                        >
                          <b-select v-model="field.type" required>
                            <option value="text">Text</option>
                            <option value="date">Date</option>
                            <option value="select">Select</option>
                          </b-select>
                        </b-field>
                        <b-field
                          v-if="field.type == 'select'"
                          label="Options"
                          horizontal
                          style="margin-bottom: 1.5rem"
                        >
                          <div>
                            <draggable
                              v-model="field.options"
                              draggable=".option"
                            >
                              <b-field
                                v-for="(option, j) in field.options"
                                :key="j"
                                class="option"
                                style="margin-bottom: .5rem"
                                grouped
                              >
                                <b-input
                                  v-model="option.value"
                                  placeholder="Value"
                                  expanded
                                />
                                <b-input
                                  v-model="option.text"
                                  placeholder="Text"
                                  expanded
                                />
                                <b-button
                                  type="is-danger"
                                  icon-right="delete"
                                  @click="field.options.splice(j, 1)"
                                />
                              </b-field>
                            </draggable>
                            <b-button
                              @click="
                                field.options.push({ value: null, text: null })
                              "
                              >Add option</b-button
                            >
                          </div>
                        </b-field>
                      </div>
                    </div>
                    <footer class="card-footer">
                      <a
                        class="card-footer-item"
                        @click="form.fields.splice(i, 1)"
                        >Delete</a>
                    </footer>
                  </b-collapse>
                </draggable>
                <b-button @click="addField()">Add field</b-button>
              </div>
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
      default: null
    }
  },
  data() {
    return {
      isLoading: false,
      item: null,
      form: this.getClearFormObject(),
      createdReadable: null
    };
  },
  computed: {
    titleStack() {
      let lastCrumb;

      if (this.isProfileExists) {
        lastCrumb = this.form.title;
      } else {
        lastCrumb = "New Form";
      }

      return ["Admin", "Reports", lastCrumb];
    },
    heroTitle() {
      if (this.isProfileExists) {
        return this.form.title;
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
      return !! this.item;
    }
  },
  created() {
    this.getData();
  },
  methods: {
    addField() {
      this.form.fields.push({
        label: null,
        alias: null,
        type: null,
        options: []
      });
    },
    getClearFormObject() {
      return {
        id: null,
        title: null,
        category: null,
        pentaho_id: null,
        fields: []
      };
    },
    getData() {
      if (this.id) {
        axios
          .get(`/reports/forms/${this.id}`)
          .then(r => {
            this.form = r.data.data;
            this.item = clone(r.data.data);

            this.form.created_date = new Date(r.data.data.created_mm_dd_yyyy);
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
      let url = "/reports/forms/store";

      if (this.id) {
        method = "patch";
        url = `/reports/forms/${this.id}`;
      }

      axios({
        method,
        url,
        data: this.form
      })
        .then(r => {
          this.isLoading = false;

          if (!this.id && r.data.data.id) {
            this.$router.push({
              name: "reprots.forms.edit",
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
      this.form = this.getClearFormObject();
      this.item = null;

      if (newValue) {
        this.getData();
      }
    }
  }
};
</script>

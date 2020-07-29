import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    //Category
    {
      path: "/reports/category/index",
      name: "reports.category.index",
      component: () => import("./views/Reports/Category/CategoryIndex.vue")
    },
    {
      path: "/reports/category/new",
      name: "reports.category.new",
      component: () => import("./views/Reports/Category/CategoryForm.vue")
    },
    {
      path: "/reports/category/:id",
      name: "reports.category.edit",
      component: () => import("./views/Reports/Category/CategoryForm.vue"),
      props: true
    },
    //Roles
    {
      path: "/reports/role/index",
      name: "reports.role.index",
      component: () => import("./views/Reports/Role/ReportRoleIndex.vue")
    },
    {
      path: "/reports/role/new",
      name: "reports.role.new",
      component: () => import("./views/Reports/Role/ReportRoleForm.vue")
    },
    {
      path: "/reports/role/:id",
      name: "reports.role.edit",
      component: () => import("./views/Reports/Role/ReportRoleForm.vue"),
      props: true
    },
    // Reports
    {
      path: "/",
      name: "reports.index",
      component: () => import("./views/Reports/ReportsIndex.vue")
    },
    {
      path: "/browse",
      name: "reports.browse",
      component: () => import("./views/Reports/BrowseReports.vue")
    },
    {
      path: "/reports/forms/index",
      name: "reports.forms.index",
      component: () => import("./views/Reports/Forms/ReportsFormsIndex.vue")
    },
    {
      path: "/reports/forms/new",
      name: "reports.forms.new",
      component: () => import("./views/Reports/Forms/ReportsFormsForm.vue")
    },
    {
      path: "/reports/forms/:id",
      name: "reports.forms.edit",
      component: () => import("./views/Reports/Forms/ReportsFormsForm.vue"),
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});


import Dashboard from "./Dashboard.vue";
import Orders from "./Orders.vue";

Vue.use(Router);
export default new Router({
	 routes: [
	 {
	 path: "/",
	 redirect: '/dashboard'
	 },
	 {
	 path: "/dashboard",	
	 component: Dashboard
	 },
	{
	 path: "/orders",
	 component: Orders
	 }],
	 linkActiveClass: 'is-active' /* change to Bulma's active nav link */
});

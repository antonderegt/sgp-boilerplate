import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, R as validate_store, T as component_subscribe, a as space, e as element, t as text, q as create_component, h as claim_space, c as claim_element, b as children, f as claim_text, g as detach_dev, r as claim_component, j as attr_dev, l as add_location, U as listen_dev, m as insert_dev, o as append_dev, V as set_input_value, u as mount_component, B as set_data_dev, x as transition_in, y as transition_out, z as destroy_component, W as run_all } from './index.6595a006.js';
import { a as stores$1 } from './app.db21a333.js';
import { T as Toast } from './Toast.6f0ca98f.js';

/* src/routes/index.svelte generated by Svelte v3.16.7 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let figure;
	let img;
	let img_src_value;
	let t3;
	let figcaption;
	let t4;
	let t5;
	let button0;
	let t6;
	let t7;
	let p0;
	let t8;
	let t9;
	let button1;
	let t10;
	let t11;
	let p1;
	let t12;
	let t13;
	let button2;
	let t14;
	let t15;
	let p2;
	let t16;
	let t17;
	let button3;
	let t18;
	let t19;
	let p3;
	let t20;
	let t21;
	let input;
	let t22;
	let button4;
	let t23;
	let t24;
	let t25;
	let p4;
	let strong;
	let t26;
	let current;
	let dispose;
	const toast = new Toast({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Great success!");
			t2 = space();
			figure = element("figure");
			img = element("img");
			t3 = space();
			figcaption = element("figcaption");
			t4 = text("HIGH FIVE!");
			t5 = space();
			button0 = element("button");
			t6 = text("Show session data");
			t7 = space();
			p0 = element("p");
			t8 = text(/*sess*/ ctx[0]);
			t9 = space();
			button1 = element("button");
			t10 = text("Click here to load Product 3");
			t11 = space();
			p1 = element("p");
			t12 = text(/*loadedProduct*/ ctx[2]);
			t13 = space();
			button2 = element("button");
			t14 = text("Click here to sign up user");
			t15 = space();
			p2 = element("p");
			t16 = text(/*userSignUp*/ ctx[3]);
			t17 = space();
			button3 = element("button");
			t18 = text("Click here to sign in user");
			t19 = space();
			p3 = element("p");
			t20 = text(/*userSignIn*/ ctx[5]);
			t21 = space();
			input = element("input");
			t22 = space();
			button4 = element("button");
			t23 = text("Message");
			t24 = space();
			create_component(toast.$$.fragment);
			t25 = space();
			p4 = element("p");
			strong = element("strong");
			t26 = text("Try editing this file (src/routes/index.svelte) to test live reloading.");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Great success!");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			figure = claim_element(nodes, "FIGURE", { class: true });
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { alt: true, src: true, class: true });
			t3 = claim_space(figure_nodes);
			figcaption = claim_element(figure_nodes, "FIGCAPTION", {});
			var figcaption_nodes = children(figcaption);
			t4 = claim_text(figcaption_nodes, "HIGH FIVE!");
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			button0 = claim_element(nodes, "BUTTON", {});
			var button0_nodes = children(button0);
			t6 = claim_text(button0_nodes, "Show session data");
			button0_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			p0 = claim_element(nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t8 = claim_text(p0_nodes, /*sess*/ ctx[0]);
			p0_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			button1 = claim_element(nodes, "BUTTON", {});
			var button1_nodes = children(button1);
			t10 = claim_text(button1_nodes, "Click here to load Product 3");
			button1_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			p1 = claim_element(nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t12 = claim_text(p1_nodes, /*loadedProduct*/ ctx[2]);
			p1_nodes.forEach(detach_dev);
			t13 = claim_space(nodes);
			button2 = claim_element(nodes, "BUTTON", {});
			var button2_nodes = children(button2);
			t14 = claim_text(button2_nodes, "Click here to sign up user");
			button2_nodes.forEach(detach_dev);
			t15 = claim_space(nodes);
			p2 = claim_element(nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t16 = claim_text(p2_nodes, /*userSignUp*/ ctx[3]);
			p2_nodes.forEach(detach_dev);
			t17 = claim_space(nodes);
			button3 = claim_element(nodes, "BUTTON", {});
			var button3_nodes = children(button3);
			t18 = claim_text(button3_nodes, "Click here to sign in user");
			button3_nodes.forEach(detach_dev);
			t19 = claim_space(nodes);
			p3 = claim_element(nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t20 = claim_text(p3_nodes, /*userSignIn*/ ctx[5]);
			p3_nodes.forEach(detach_dev);
			t21 = claim_space(nodes);
			input = claim_element(nodes, "INPUT", { type: true });
			t22 = claim_space(nodes);
			button4 = claim_element(nodes, "BUTTON", {});
			var button4_nodes = children(button4);
			t23 = claim_text(button4_nodes, "Message");
			button4_nodes.forEach(detach_dev);
			t24 = claim_space(nodes);
			claim_component(toast.$$.fragment, nodes);
			t25 = claim_space(nodes);
			p4 = claim_element(nodes, "P", { class: true });
			var p4_nodes = children(p4);
			strong = claim_element(p4_nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t26 = claim_text(strong_nodes, "Try editing this file (src/routes/index.svelte) to test live reloading.");
			strong_nodes.forEach(detach_dev);
			p4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "svelte-1kk9opm");
			add_location(h1, file, 107, 0, 1979);
			attr_dev(img, "alt", "Borat");
			if (img.src !== (img_src_value = "great-success.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1kk9opm");
			add_location(img, file, 110, 1, 2014);
			add_location(figcaption, file, 111, 1, 2057);
			attr_dev(figure, "class", "svelte-1kk9opm");
			add_location(figure, file, 109, 0, 2004);
			add_location(button0, file, 114, 0, 2104);
			attr_dev(p0, "class", "svelte-1kk9opm");
			add_location(p0, file, 115, 0, 2161);
			add_location(button1, file, 116, 0, 2175);
			attr_dev(p1, "class", "svelte-1kk9opm");
			add_location(p1, file, 117, 0, 2244);
			add_location(button2, file, 118, 0, 2267);
			attr_dev(p2, "class", "svelte-1kk9opm");
			add_location(p2, file, 119, 0, 2333);
			add_location(button3, file, 120, 0, 2353);
			attr_dev(p3, "class", "svelte-1kk9opm");
			add_location(p3, file, 121, 0, 2419);
			attr_dev(input, "type", "text");
			add_location(input, file, 123, 0, 2440);
			add_location(button4, file, 124, 0, 2479);
			add_location(strong, file, 128, 3, 2560);
			attr_dev(p4, "class", "svelte-1kk9opm");
			add_location(p4, file, 128, 0, 2557);

			dispose = [
				listen_dev(button0, "click", /*getSession*/ ctx[6], false, false, false),
				listen_dev(button1, "click", /*loadProduct*/ ctx[7], false, false, false),
				listen_dev(button2, "click", /*signUpUser*/ ctx[8], false, false, false),
				listen_dev(button3, "click", /*signInUser*/ ctx[9], false, false, false),
				listen_dev(input, "input", /*input_input_handler*/ ctx[11]),
				listen_dev(button4, "click", /*click_handler*/ ctx[12], false, false, false)
			];
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, figure, anchor);
			append_dev(figure, img);
			append_dev(figure, t3);
			append_dev(figure, figcaption);
			append_dev(figcaption, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, button0, anchor);
			append_dev(button0, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, button1, anchor);
			append_dev(button1, t10);
			insert_dev(target, t11, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t12);
			insert_dev(target, t13, anchor);
			insert_dev(target, button2, anchor);
			append_dev(button2, t14);
			insert_dev(target, t15, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t16);
			insert_dev(target, t17, anchor);
			insert_dev(target, button3, anchor);
			append_dev(button3, t18);
			insert_dev(target, t19, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, t20);
			insert_dev(target, t21, anchor);
			insert_dev(target, input, anchor);
			set_input_value(input, /*msg*/ ctx[1]);
			insert_dev(target, t22, anchor);
			insert_dev(target, button4, anchor);
			append_dev(button4, t23);
			insert_dev(target, t24, anchor);
			mount_component(toast, target, anchor);
			insert_dev(target, t25, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, strong);
			append_dev(strong, t26);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*sess*/ 1) set_data_dev(t8, /*sess*/ ctx[0]);
			if (!current || dirty & /*loadedProduct*/ 4) set_data_dev(t12, /*loadedProduct*/ ctx[2]);
			if (!current || dirty & /*userSignUp*/ 8) set_data_dev(t16, /*userSignUp*/ ctx[3]);

			if (dirty & /*msg*/ 2 && input.value !== /*msg*/ ctx[1]) {
				set_input_value(input, /*msg*/ ctx[1]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(toast.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(toast.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(figure);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(button1);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(button2);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t17);
			if (detaching) detach_dev(button3);
			if (detaching) detach_dev(t19);
			if (detaching) detach_dev(p3);
			if (detaching) detach_dev(t21);
			if (detaching) detach_dev(input);
			if (detaching) detach_dev(t22);
			if (detaching) detach_dev(button4);
			if (detaching) detach_dev(t24);
			destroy_component(toast, detaching);
			if (detaching) detach_dev(t25);
			if (detaching) detach_dev(p4);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function preload(page, session) {
	console.log(`session data: ${session.user}`);
	if (!session.user) return this.redirect(302, "login");
}

function instance($$self, $$props, $$invalidate) {
	let $session;
	const { session } = stores$1();
	validate_store(session, "session");
	component_subscribe($$self, session, value => $$invalidate(10, $session = value));
	let sess = "empty";
	let msg = "test msg";
	let loadedProduct = "Unclicked";
	let userSignUp = "no user signed up";
	let userSignIn = "no user signed in";

	function getSession() {
		$$invalidate(0, sess = $session.user);
	}

	async function loadProduct() {
		const res = await fetch(`http://localhost:8080/api/Product 3`);
		const data = await res.json();

		if (res.status === 200) {
			console.log(data.Name);
		} else {
			console.log("not 200");
		}

		$$invalidate(2, loadedProduct = `${data.Name}, ${data.Desc}`);
	}

	async function signUpUser() {
		const newUser = { Name: "anton", Password: "password" };

		const settings = {
			method: "POST",
			body: JSON.stringify(newUser)
		};

		const res = await fetch(`http://localhost:8080/api/signup`, settings);
		const data = await res.json();

		if (res.ok) {
			console.log("res.ok: ", data.Name);
			$$invalidate(3, userSignUp = `${data.Name}`);
		} else {
			console.log("res not okay: ", data.Error);
			$$invalidate(3, userSignUp = `${data.Error}`);
			window.pushToast(data.Error);
		}
	}

	async function signInUser() {
		const res = await fetch(`http://localhost:8080/api/Product 3`);
		const data = await res.json();

		if (res.status === 200) {
			console.log(data.Name);
		} else {
			console.log("not 200");
		}

		$$invalidate(2, loadedProduct = `${data.Name}, ${data.Desc}`);
	}

	function input_input_handler() {
		msg = this.value;
		$$invalidate(1, msg);
	}

	const click_handler = () => {
		window.pushToast(msg);
	};

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("sess" in $$props) $$invalidate(0, sess = $$props.sess);
		if ("msg" in $$props) $$invalidate(1, msg = $$props.msg);
		if ("loadedProduct" in $$props) $$invalidate(2, loadedProduct = $$props.loadedProduct);
		if ("userSignUp" in $$props) $$invalidate(3, userSignUp = $$props.userSignUp);
		if ("userSignIn" in $$props) $$invalidate(5, userSignIn = $$props.userSignIn);
		if ("$session" in $$props) session.set($session = $$props.$session);
	};

	return [
		sess,
		msg,
		loadedProduct,
		userSignUp,
		session,
		userSignIn,
		getSession,
		loadProduct,
		signUpUser,
		signInUser,
		$session,
		input_input_handler,
		click_handler
	];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTA0MzYwOTYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZChwYWdlLCBzZXNzaW9uKSB7XG5cdFx0Y29uc29sZS5sb2coYHNlc3Npb24gZGF0YTogJHtzZXNzaW9uLnVzZXJ9YCk7XG5cdFx0aWYgKCFzZXNzaW9uLnVzZXIpIHJldHVybiB0aGlzLnJlZGlyZWN0KDMwMiwgJ2xvZ2luJyk7XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgc3RvcmVzIH0gZnJvbSAnQHNhcHBlci9hcHAnO1xuY29uc3QgeyBzZXNzaW9uIH0gPSBzdG9yZXMoKTtcbmxldCBzZXNzID0gXCJlbXB0eVwiXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2FzdC5zdmVsdGUnXG5sZXQgbXNnID0gJ3Rlc3QgbXNnJztcblxubGV0IGxvYWRlZFByb2R1Y3QgPSBcIlVuY2xpY2tlZFwiXG5sZXQgdXNlclNpZ25VcCA9IFwibm8gdXNlciBzaWduZWQgdXBcIlxubGV0IHVzZXJTaWduSW4gPSBcIm5vIHVzZXIgc2lnbmVkIGluXCJcblxuZnVuY3Rpb24gZ2V0U2Vzc2lvbigpIHtcblx0c2VzcyA9ICRzZXNzaW9uLnVzZXJcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZFByb2R1Y3QoKSB7XG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL1Byb2R1Y3QgM2ApO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblx0XG5cdGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcblx0XHRjb25zb2xlLmxvZyhkYXRhLk5hbWUpXG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coJ25vdCAyMDAnKTtcblx0fVxuXHRsb2FkZWRQcm9kdWN0ID0gYCR7ZGF0YS5OYW1lfSwgJHtkYXRhLkRlc2N9YFxufVxuXG5hc3luYyBmdW5jdGlvbiBzaWduVXBVc2VyKCkge1xuXHRjb25zdCBuZXdVc2VyID0ge1xuXHRcdE5hbWU6ICdhbnRvbicsXG5cdFx0UGFzc3dvcmQ6ICdwYXNzd29yZCdcblx0fVxuXHRjb25zdCBzZXR0aW5ncyA9IHtcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShuZXdVc2VyKVxuXHR9XG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3NpZ251cGAsIHNldHRpbmdzKTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFxuXHRpZiAocmVzLm9rKSB7XG5cdFx0Y29uc29sZS5sb2coJ3Jlcy5vazogJywgZGF0YS5OYW1lKTtcblx0XHR1c2VyU2lnblVwID0gYCR7ZGF0YS5OYW1lfWBcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmxvZygncmVzIG5vdCBva2F5OiAnLCBkYXRhLkVycm9yKTtcblx0XHR1c2VyU2lnblVwID0gYCR7ZGF0YS5FcnJvcn1gXG5cdFx0d2luZG93LnB1c2hUb2FzdChkYXRhLkVycm9yKVxuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNpZ25JblVzZXIoKSB7XG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL1Byb2R1Y3QgM2ApO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblx0XG5cdGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcblx0XHRjb25zb2xlLmxvZyhkYXRhLk5hbWUpXG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coJ25vdCAyMDAnKTtcblx0fVxuXHRsb2FkZWRQcm9kdWN0ID0gYCR7ZGF0YS5OYW1lfSwgJHtkYXRhLkRlc2N9YFxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0aDEsIGZpZ3VyZSwgcCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0aDEge1xuXHRcdGZvbnQtc2l6ZTogMi44ZW07XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdH1cblxuXHRmaWd1cmUge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0cCB7XG5cdFx0bWFyZ2luOiAxZW0gYXV0bztcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdH1cblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U2FwcGVyIHByb2plY3QgdGVtcGxhdGU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPkdyZWF0IHN1Y2Nlc3MhPC9oMT5cblxuPGZpZ3VyZT5cblx0PGltZyBhbHQ9J0JvcmF0JyBzcmM9J2dyZWF0LXN1Y2Nlc3MucG5nJz5cblx0PGZpZ2NhcHRpb24+SElHSCBGSVZFITwvZmlnY2FwdGlvbj5cbjwvZmlndXJlPlxuXG48YnV0dG9uIG9uOmNsaWNrPXtnZXRTZXNzaW9ufT5TaG93IHNlc3Npb24gZGF0YTwvYnV0dG9uPlxuPHA+e3Nlc3N9PC9wPlxuPGJ1dHRvbiBvbjpjbGljaz17bG9hZFByb2R1Y3R9PkNsaWNrIGhlcmUgdG8gbG9hZCBQcm9kdWN0IDM8L2J1dHRvbj5cbjxwPntsb2FkZWRQcm9kdWN0fTwvcD5cbjxidXR0b24gb246Y2xpY2s9e3NpZ25VcFVzZXJ9PkNsaWNrIGhlcmUgdG8gc2lnbiB1cCB1c2VyPC9idXR0b24+XG48cD57dXNlclNpZ25VcH08L3A+XG48YnV0dG9uIG9uOmNsaWNrPXtzaWduSW5Vc2VyfT5DbGljayBoZXJlIHRvIHNpZ24gaW4gdXNlcjwvYnV0dG9uPlxuPHA+e3VzZXJTaWduSW59PC9wPlxuXG48aW5wdXQgdHlwZT1cInRleHRcIiBiaW5kOnZhbHVlPXttc2d9IC8+XG48YnV0dG9uIG9uOmNsaWNrPXsoKSA9PiB7d2luZG93LnB1c2hUb2FzdChtc2cpfX0+TWVzc2FnZTwvYnV0dG9uPlxuXG48VG9hc3QgLz5cblxuPHA+PHN0cm9uZz5UcnkgZWRpdGluZyB0aGlzIGZpbGUgKHNyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlKSB0byB0ZXN0IGxpdmUgcmVsb2FkaW5nLjwvc3Ryb25nPjwvcD5cbiJdLCJuYW1lcyI6WyJzdG9yZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FxSEksR0FBYTs7Ozs7OzZCQUViLEdBQVU7Ozs7Ozs2QkFFVixHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBSlYsR0FBYTs7Ozs7Ozs7Ozs2Q0FFYixHQUFVOzs7Ozs7Ozs7OzZDQUVWLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBUEksR0FBVTtpREFFVixHQUFXO2dEQUVYLEdBQVU7Z0RBRVYsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkFIeEIsR0FBYTs4RUFFYixHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXRIRyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU87Q0FDcEMsT0FBTyxDQUFDLEdBQUcsa0JBQWtCLE9BQU8sQ0FBQyxJQUFJO01BQ3BDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTzs7Ozs7U0FEOUMsT0FBTyxLQUFLQSxRQUFNOzs7S0FDdEIsSUFBSSxHQUFHLE9BQU87S0FFZCxHQUFHLEdBQUcsVUFBVTtLQUVoQixhQUFhLEdBQUcsV0FBVztLQUMzQixVQUFVLEdBQUcsbUJBQW1CO0tBQ2hDLFVBQVUsR0FBRyxtQkFBbUI7O1VBRTNCLFVBQVU7a0JBQ2xCLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSTs7O2dCQUdOLFdBQVc7UUFDbkIsR0FBRyxTQUFTLEtBQUs7UUFDakIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJOztNQUV2QixHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7R0FDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTs7R0FFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTOzs7a0JBRXRCLGFBQWEsTUFBTSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJOzs7Z0JBRzVCLFVBQVU7UUFDbEIsT0FBTyxLQUNaLElBQUksRUFBRSxPQUFPLEVBQ2IsUUFBUSxFQUFFLFVBQVU7O1FBRWYsUUFBUTtHQUNiLE1BQU0sRUFBRSxNQUFNO0dBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7O1FBRXZCLEdBQUcsU0FBUyxLQUFLLHFDQUFxQyxRQUFRO1FBQzlELElBQUksU0FBUyxHQUFHLENBQUMsSUFBSTs7TUFFdkIsR0FBRyxDQUFDLEVBQUU7R0FDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSTttQkFDakMsVUFBVSxNQUFNLElBQUksQ0FBQyxJQUFJOztHQUV6QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO21CQUN4QyxVQUFVLE1BQU0sSUFBSSxDQUFDLEtBQUs7R0FDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSzs7OztnQkFJZCxVQUFVO1FBQ2xCLEdBQUcsU0FBUyxLQUFLO1FBQ2pCLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSTs7TUFFdkIsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHO0dBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7O0dBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUzs7O2tCQUV0QixhQUFhLE1BQU0sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSTs7Ozs7Ozs7O0VBa0VsQixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
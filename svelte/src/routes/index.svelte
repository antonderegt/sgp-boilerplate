<script context="module">
	export function preload(page, session) {
		console.log(`session data: ${session.user}`);
		if (!session.user) return this.redirect(302, 'login');
	}
</script>

<script>
import { stores } from '@sapper/app';
const { session } = stores();
let sess = "empty"
import Toast from '../components/Toast.svelte'
let msg = 'test msg';

let loadedProduct = "Unclicked"
let userSignUp = "no user signed up"
let userSignIn = "no user signed in"

function getSession() {
	sess = $session.user
}

async function loadProduct() {
	const res = await fetch(`http://localhost:8080/api/Product 3`);
	const data = await res.json();
	
	if (res.status === 200) {
		console.log(data.Name)
	} else {
		console.log('not 200');
	}
	loadedProduct = `${data.Name}, ${data.Desc}`
}

async function signUpUser() {
	const newUser = {
		Name: 'anton',
		Password: 'password'
	}
	const settings = {
		method: 'POST',
		body: JSON.stringify(newUser)
	}
	const res = await fetch(`http://localhost:8080/api/signup`, settings);
	const data = await res.json();
	
	if (res.ok) {
		console.log('res.ok: ', data.Name);
		userSignUp = `${data.Name}`
	} else {
		console.log('res not okay: ', data.Error);
		userSignUp = `${data.Error}`
		window.pushToast(data.Error)
	}
}

async function signInUser() {
	const res = await fetch(`http://localhost:8080/api/Product 3`);
	const data = await res.json();
	
	if (res.status === 200) {
		console.log(data.Name)
	} else {
		console.log('not 200');
	}
	loadedProduct = `${data.Name}, ${data.Desc}`
}
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt='Borat' src='great-success.png'>
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<button on:click={getSession}>Show session data</button>
<p>{sess}</p>
<button on:click={loadProduct}>Click here to load Product 3</button>
<p>{loadedProduct}</p>
<button on:click={signUpUser}>Click here to sign up user</button>
<p>{userSignUp}</p>
<button on:click={signInUser}>Click here to sign in user</button>
<p>{userSignIn}</p>

<input type="text" bind:value={msg} />
<button on:click={() => {window.pushToast(msg)}}>Message</button>

<Toast />

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>

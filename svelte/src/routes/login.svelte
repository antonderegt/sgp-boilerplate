<script>
import { stores } from '@sapper/app';
import Toast from '../components/Toast.svelte'
const { session } = stores();
let msg = 'test msg';


let username = ""
let password = ""

async function login() {
	console.log(`Session before login: `);
	console.log($session);
	
    console.log(`Hi ${username}`);

    const user = {
		username,
		password,
	}
	const settings = {
		method: 'POST',
		body: JSON.stringify(user)
	}
	const res = await fetch(`http://localhost:8080/api/login`, settings);
	
	if (res.ok) {
        console.log('res.ok: ', res.statusText);
		window.pushToast(`${username} logged in successfully!`)
		session.set({ user: true })
		// $session.user = true;
		// return this.redirect(302, '/')
	} else {
		console.log('res not okay: ', res.statusText);
		window.pushToast(res.statusText)
	}

    username = password = ""
}
</script>

<style>
/* form styling */
</style>

<form action="">
<label for="username">Username: </label>
<input type="text" placeholder={username} bind:value={username}>
<label for="password">Password: </label>
<input type="password" bind:value={password}>
<button on:click|preventDefault={login}>Login</button>
</form>

<Toast />
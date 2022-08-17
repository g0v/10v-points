<script>
import 'tachyons/css/tachyons.css'
let count = 0
function inc () {
    count += 1
}
</script>
<svelte:head>
  <title>Welcome</title>
</svelte:head>

<div class="mw8 center mt4 pa3 ba bw1">
<h1>Welcome to SvelteKit {count}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={inc}>++</button>

<ul>
    <li><a href="/partner/one">one</a></li>
    <li><a href="/partner/two">two</a></li>
    <li><a href="/partner/three">three</a></li>
    <li><a href="/partner/four">four</a></li>
</ul>
</div>
<script lang="ts">
    import {globalState} from './globalState.svelte';
</script>

<h2>Input area</h2>
<p>
    Enter your text here <input type="text" bind:value={globalState.text}/>
</p>
<p>
    &#128073 text from globalState: <code>{globalState.text}</code>
</p>
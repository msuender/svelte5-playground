<script lang="ts">
    import { myText } from "./createFromClass.svelte";
</script>

<h2>Input area</h2>
<p>
    Enter your text here <input type="text" bind:value={myText.text}/>
</p>
<p>
    &#128073 text from globalState: <code>{myText.text}</code>
</p>
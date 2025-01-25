<script lang="ts">
    import { getContext } from "svelte";

    let textvalue: {text: string} = getContext('myText');
</script>  

<h2>Input area</h2>
<p>
    Enter your text here <input type="text" bind:value={textvalue.text}/>
</p>
<p>
    &#128073 text from context: <code>{textvalue.text}</code>
</p>
<script>
    import { getContext } from "svelte";

    const textvalue = getContext('myText');

    $inspect(textvalue);

</script>

<h2>Input area</h2>
<p>
    Enter your text here <input type="text" bind:value={textvalue.text}/>
</p>
<p>
    fetchedFromContext: {textvalue.text}
</p>
<script>
    import { getContext } from "svelte";

    let outputText = getContext('myText'); 
</script>

<h2>Output area</h2>
<p>
    Your text from the context is: <code>{outputText.text} </code>
</p>
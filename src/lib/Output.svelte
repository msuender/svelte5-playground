<script>
    import { getContext } from "svelte";

    let outputText = getContext('myText');

    $inspect(outputText);
     
</script>

<h2>Output area</h2>
<p>
    Your text is {outputText.text} 
</p>
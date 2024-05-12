<script>
import {setContext } from "svelte";
import { createTextState } from "./lib/textStoreContext.svelte";

import Input from "./lib/Input.svelte";
import Output from "./lib/Output.svelte";

const myText = createTextState();

setContext('myText', myText);


</script>

<main>
  <Input/>
  <Output/>
</main>

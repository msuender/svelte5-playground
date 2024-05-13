<script>
import {setContext } from "svelte";
import { createTextState } from "./lib/textStoreContext.svelte";

import Input from "./lib/Input.svelte";
import Output from "./lib/Output.svelte";

//the magic happens HERE
//we are passing the state into the context
const myText = createTextState();
setContext('myText', myText);


</script>

<main>
  <Input/>
  <Output/>
</main>

<script>

//OPTION 1
import { setContext } from "svelte";
import { createTextState } from "./lib/Option1/textStoreContext.svelte";

import Input1 from "./lib/Option1/Input1.svelte";
import Output1 from "./lib/Option1/Output1.svelte";

//the magic happens HERE
//we are passing the state into the context
const myTextState = createTextState();
setContext('myText', myTextState);

//OPTION 2

import Input2 from "./lib/Option2/Input2.svelte";
import Output2 from "./lib/Option2/Output2.svelte";

</script>

<main>
  <h1>States in Svelte5</h1>

  <h2>Option 1: Passing a state into context</h2>
  <Input1/>
  <Output1/>

  <hr>

  <h2>Option 2: Use a global state</h2>
  <Input2/>
  <Output2/>

</main>

<script lang="ts">

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


//OPTION 3

import Input3 from "./lib/Option3/Input3.svelte";
import Output3 from "./lib/Option3/Output3.svelte";

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

  <hr>

  <h2>Option 3: Use a Class with state inside</h2>
  <Input3/>
  <Output3/>

</main>

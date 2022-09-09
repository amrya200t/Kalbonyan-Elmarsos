// const a: string = "Amr";
// console.log(a);

import { desc, run, task, sh } from "https://deno.land/x/drake@v1.6.0/mod.ts";

desc("Minimal Drake task");
task("hello", [], async function () {
  console.log("Hello World!");
  await sh("deno run  --allow-env deno.ts");
});

run();

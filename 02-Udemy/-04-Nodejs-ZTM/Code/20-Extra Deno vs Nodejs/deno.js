const food = Deno.args[0];

const parent = Deno.args[1];

if (food === "love" && parent === "ryan") {
  console.log("🦕... Deno is born!");
} else {
  console.log("🥚... this egg needs some love");
}

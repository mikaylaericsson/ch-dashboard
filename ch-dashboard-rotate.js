<script>
console.log("Hello world!");
gsap.registerPlugin();

const timeline = gsap.timeline({ repeat: -1 }); // Infinite loop

timeline
  .to(".panel-a", { x: "100%", duration: 1 }, "+=5") // Move block1 to the right after 5s
  .to(".panel-b", { x: "0%", duration: 1 }, "-=1") // Bring block2 into view as block1 moves out
  .to(".panel-b", { x: "100%", duration: 1 }, "+=5") // Move block2 to the right after 5s
  .to(".panel-a", { x: "0%", duration: 1 }, "-=1"); // Bring block1 back into view
</script>

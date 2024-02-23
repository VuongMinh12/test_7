<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <hello-world />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "CopyHomeView",
  components: {
    HelloWorld,
  },
};
</script>

<template lang="pug">
  .View
    Header.View__heaader
    main.View__main
      slot
    Footer.View__footer
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: "Site",
  components: { Header, Footer }
}

</script>
<style lang="scss">
:root {
  --background-color: white;
  --text-color: #2D2D2D;
  --slate: #2c3e50;
  --link-color: #0061FF;
  --dark-gray: #cfcfcf;
  --light-gray: #f9f9f9;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #2D2D2D;
    --text-color: white;
    --slate: white;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body,  #app {
  height: 100%;
}

body {
  color: var(--text-color);
  background-color: var(--background-color);
  font-family: 'Lato', sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
}


.View__main {
  flex: 1;
  width: 100%;
  max-width: 1140px;
  padding: 0 2rem;
  margin: 0 auto;
}

.View--Photos main {
  max-width: none;
  width: 100%;
  padding: 0;
}

.spacer {
  flex: 1;
}

.Button {
  color: var(--text-color);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  border: 1px solid var(--dark-gray);
  transition: 0.1s linear all;
}

.Button i.mdi {
  margin-right: 0.5rem;
}

.Button:hover {
  background-color: var(--light-gray);
  transition: 0.1s linear all;
}
</style>

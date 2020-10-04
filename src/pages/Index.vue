<template lang="pug">
  SiteLayout.View--Index
    .Home__picture
      img.Home__image(src='../assets/me.jpg' alt='Photo of Cristian Baldi')
    .Home__bio
      .Home__subtitle Hello! I am a
      .Home__title(style='color:#27ae60') DevOps Engineer
      .Home__title(style='color:#274eae') Web Developer
      .Home__subtitle
        | with a passion for&nbsp;
        span(style='color:#ae2727;font-weight: bold;') open source
        |  and&nbsp;
        span(style='color:#ae2795;font-weight: bold;') photography
      .Home__buttons
        a.Button(href='/cv.pdf' target="_blank")
          i.mdi.mdi-account
          |  Resume
        a.Button(href='https://github.com/crisbal' target="_blank")
          i.mdi.mdi-github
          |  GitHub
        a.Button(href='https://www.linkedin.com/in/crisbal/' target="_blank")
          i.mdi.mdi-linkedin
          |  LinkedIn
        a.Button(:href="'mailto:' + $static.metadata.contactEmail")
          i.mdi.mdi-at
          |  Email
</template>

<static-query>
query {
  metadata {
    contactEmail
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Cristian Baldi',
    titleTemplate: '%s'
  },
};
</script>

<style lang="scss">
.View--Index {
  main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}

.Home__title {
  font-size: 5rem;
  font-weight: 700;
  white-space: nowrap;
}

.Home__subtitle {
  font-size: 2rem;
  font-weight: normal;
  a {
    color: var(--text-color);
    text-decoration: none;
    border-bottom: 3px solid var(--link-color);
  }
}

.Home__picture {
  margin-right: 2rem;
}

.Home__image {
  max-width: 100%;
  height: 20rem;
  border-radius: 1rem;
}

.Home__buttons {
  margin-top: 1rem;

  .Button {
    margin-right: 0.5rem;
  }
}
</style>

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
        .Home__buttons-container
          g-link.Button(to='/resume')
            i.mdi.mdi-account
            |  Resume
        .Home__buttons-container
          a.Button(href='https://github.com/crisbal' target="_blank")
            i.mdi.mdi-github
            |  GitHub
        .Home__buttons-container
          a.Button(href='https://www.linkedin.com/in/crisbal/' target="_blank")
            i.mdi.mdi-linkedin
            |  LinkedIn
        .Home__buttons-container
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
    titleTemplate: '%s',
    meta: [
      { name: "description", content: "DevOps Engineer and Web Developer with a passion for Open Source and Photography." }
    ]
  },
};
</script>

<style lang="scss">
@import "@/style/mixins.scss";

.View--Index {
  main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @include respond-below(sm) {
      flex-direction: column;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/style/mixins.scss";
.Home__title {
  font-size: 5rem;
  font-weight: 700;
  white-space: nowrap;

  @include respond-below(sm) {
    font-size: 2.25rem;
    white-space: normal;
  }
}

.Home__subtitle {
  font-size: 2rem;
  font-weight: normal;
  a {
    color: var(--text-color);
    text-decoration: none;
    border-bottom: 3px solid var(--link-color);
  }

  @include respond-below(sm) {
    font-size: 1.5rem;
  }
}

.Home__picture {
  margin-right: 2rem;

  @include respond-below(sm) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}

.Home__image {
  display: block;
  max-width: 100%;
  height: 20rem;
  border-radius: 1rem;

  @include respond-below(sm) {
    width: 70%;
    height: auto;
    margin: 0 auto;
  }
}

.Home__buttons {
  margin-top: 1rem;

  @include respond-below(sm) {
    display: flex;
    flex-wrap: wrap;
  }

  &-container {
    display: inline-block;
    @include respond-below(sm) {
      flex-basis: 50%;

      &:nth-of-type(even) .Button {
        margin-right: 0;
      }
    }
  }

  .Button {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    @include respond-below(sm) {
      display: block;
      text-align: center;
      padding: 0.5rem 0.75rem;
    }
  }
}
</style>

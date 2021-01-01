<template lang="pug">
SiteLayout.View--Resume
  .Resume
    header.Resume__header
      div
        h2.Resume__name {{ resume.meta.name }}
        div.Resume__contact
          a(v-for="link in resume.meta.links" :href="link.href") {{ link.text }}
        h3.Resume__claim  {{ resume.meta.claim }}
    .Resume__sections
      template(v-for="section in resume.sections")
        Section(
          :title="section.title"
          :titleColor="section.titleColor"
          :style="{ flex: `1 0 ${section.width || '100%'}` }"
          :extra="section.extra"
        )
          template(v-if="section.type=='entries'" v-for="entry in section.entries")
            Entry(
              :place="entry.place"
              :date="entry.date"
              :title="entry.title"
              :details="entry.details"
            )
          template(v-if="section.type=='items'")
            .Items(
              :class=`section.extra`
            )
              ul
                li.Item(v-for="item in section.items")
                  span.Item__title {{ item.title }}&nbsp;
                  template(v-if="section.extra && section.extra.includes('compact')")
                    span.Item__text {{ item.text }}&nbsp;
                    span.Item__description {{ item.description }}
                  template(v-else)
                    template(v-if="item.description")
                      span.Item__description {{ item.description }}
                      br
                    span.Item__text {{ item.text }}
  .Download
    a(href="/Cristian Baldi - Resume.pdf" target="_blank").Button
      i.mdi.mdi-download
      | Download as PDF
</template>

<script>
import Section from "@/components/resume/Section";
import Entry from "@/components/resume/Entry";
import resume from "@/assets/resume.yaml";

export default {
  components: { Section, Entry },
  data() {
    return {
      resume
    }
  },
  metaInfo: {
    title: "Resume",
    meta: [
      {
        name: "description",
        content: "My experience, education and skills.",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;1,300&display=swap",
      },
    ],
  },
};
</script>


<style lang="scss">
@import "@/style/mixins.scss";

.View--Resume {
  .Header {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .Footer {
    box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  @include respond-below(sm) {
    .Header, .Footer {
      box-shadow: none;
    }
  }

  main {
    max-width: none;
    width: 100%;
    padding: 1rem;
    background-color: #f8f8fb;

    @include respond-below(sm) {
      padding: 0rem;
    }
  }

  @media print {
    .Header, .Footer, .Download {
      display: none;
    }

    main {
      padding: 0;
      background-color: white;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "@/style/mixins.scss";

.Download {
  max-width: 1140px;
  margin: 1rem auto;
  text-align: right;

  .Button {
    border: 0;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  }

  @include respond-below(sm) {
    text-align: center;
  }
}

.Resume {
  max-width: 1140px;
  margin: 0 auto;
  padding: 1.5em 2em;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.2;

  @include respond-below(sm) {
    padding: 0.75em 1em;
    font-size: 1rem;
  }

  @media print {
    min-height: 100vh;
    box-shadow: 0;
    padding: 2rem;
    font-size: 11pt;

    .Section {
      margin-bottom: 0.5em !important;
    }
  }

  &__header {
    text-align: center;
    div {
      display: inline-block;
      text-align: left;
    }

    @include respond-below(sm) {
      display: none;
      text-align: left;
    }
  }

  &__name {
    display: inline-block;
    font-size: 2.8em;
    font-weight: 400;
    color: var(--slate);
    line-height: 0.8;
    @include respond-below(sm) {
      margin-right: 1rem;
      font-size: 2em;
    }
  }

  &__claim {
    font-size: 1.4em;
    font-weight: 400;
    color: #868686;
    margin-left: 0.3rem;

    @include respond-below(sm) {
      font-size: 1.2em;
      margin-left: 0rem;
    }
  }

  &__contact {
    text-align: left;
    display: inline-block;
    margin-left: 0.75rem;
    a {
      display: block;
    }

    @include respond-below(sm) {
      display: block;
      margin-left: 0;
      a {
        display: block;
      }
    }
  }

  &__sections {
    display: flex;
    flex-wrap: wrap;

    @include respond-below(sm) {
      display: block;
    }
  }

  .Section {
    margin-bottom: 1.2em;
  }

  .Entry {
    margin-bottom: 0.5em;
    @include respond-below(sm) {
      margin-bottom: 1em;
    }
  }
}

.Items {
  &.breath {
    line-height: 1.25;
  }

  &.margin-bottom {
    ul {
      li {
        margin-bottom: 0.5rem;
      }
    }
  }

  &.no-bullet {
    ul {
      li::before {
        content: "";
      }

      .Item__text {
        display: inline-block;
        padding-left: 0.3rem;
      }
    }
  }

  ul {
    list-style-position: inside;
    list-style-type: none;

    li::before {
      content: "• ";
    }
  }
}

.Item {
  &__title {
    font-weight: 400;
  }

  &__description {
    color: #868686;
    font-size: 0.8em;
  }

  &__text {
    font-size: 0.9em;
  }
}
</style>
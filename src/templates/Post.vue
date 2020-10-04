<template lang="pug">
SiteLayout.View--Post
  .Post
    .Post__date On {{ $page.post.date }}
    .Post__title {{ $page.post.title }}
    .Post__content(v-html="$page.post.content")
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    id
    title
    date (format: "DD MMMM YYYY")
    path
    content
  }
}
</page-query>

<style lang="scss" scoped>
@import "@/style.scss";

.Post__content {
    font-size: 1.3rem;
    margin: 1rem 0;

    & /deep/ * {
        margin-bottom: 1rem;
    }

    & /deep/ a {
        color: var(--link-color);
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    & /deep/ h1, h2, h3, h4, h5, h6 {
        margin-bottom: 0.25rem !important;
    }

    & /deep/ img, video {
        display: block;
        margin: 0 auto;
        max-width: 100%;
    }

    & /deep/ figure {
        text-align: center;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        border: 1px solid #cfcfcf;
    }

    & /deep/ figure figcaption {
        margin-top: 0.25rem;
        font-style: italic;
    }

    & /deep/ hr {
        margin: 1rem 0;
    }

    & /deep/ blockquote {
        padding: 1rem;
        background-color: #f9f9f9;

        p {
            margin-bottom: 0;
        }
    }

    & /deep/ code {
        display: inline-block;
        background-color: #f9f9f9;
        padding: 0 0.2rem;
    }

    & /deep/ pre {
        code {
            display: block;
            padding: 0.75rem;
            overflow-x: auto;
        }
    }
}
</style>
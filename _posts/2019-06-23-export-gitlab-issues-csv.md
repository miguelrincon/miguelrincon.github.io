---
layout: post
page-title: Export GitLab Issues to CSV
title: Node script to export GitLab issues to CSV
subtitle: A Poorman's issue export for Community Edition users
---

I used the RSS feed feature in GitLab to get issues using the RSS feed.

Below is a Poorman's exporter for folks using GitLab's Community Edition.

Requires:
- [https://www.npmjs.com/package/rss-parser](https://www.npmjs.com/package/rss-parser)
- [https://www.npmjs.com/package/export-to-csv](https://www.npmjs.com/package/export-to-csv)

<script src="https://gitlab.com/snippets/1868740.js"></script>

Note: GitLab Starter and higher has a [real export feature](https://docs.gitlab.com/ee/user/project/issues/csv_export.html).

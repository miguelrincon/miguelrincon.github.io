---
layout: post
title: Implement "Continuous Documentation"
subtitle: Manually creating project documentation? Try this recipe.
share-img: "/img/posts/pandoc/front-end-article-transform.png"
---

Any software project worth building requires **good documentation**. Involve the whole team should be involved in the effort!
<!--more-->

![Go from this to this](/img/posts/pandoc/front-end-article-transform.png)
Go from `this` to *this*
{:class="text-center"}

## CD as in "Continuous Documentation"

Communicating and documenting different aspects of the project should be done by the whole team (not just a project manager or developers!). Information should get documented during the project execution, from its goals, to the way it was built, and all the way to its results.

Documentation should be a continuous process. Good documentation cannot be an afterthought, and much a like quality, it should be [built-in](https://www.scaledagileframework.com/built-in-quality/) the process of software creation.

As not all projects are done in collaboration with tech savvy clients, so we cannot ask them to check out our project code and read thorough it to understand it. In addition, as we do not always want to have our project documentation public, so creating a static documentation website is not always practical.

If we want to follow Continuous Delivery principles, our documentation should be *always ready* for delivery.

## Requirements for documentation

I wanted to provide our customers with up to date documentation in a format they could consume and archive (and e-mail to their bosses), so our requirements our Continuous Documentation efforts are:

- Docs should kept up to date by **any team member** (not only developers) easily.
- They should be **versioned** along with our code, so we can maintain a single source of truth about the project.
- Documents should be formatted as in **Word or PDF**, so that managers and other members of the customer’s team could consume and share it easily.
- Updates to the documentation should require **minimum manual work** from our part, to maintain our documents.
- We should **always be ready** to provide our document to anyone who asks for it.

## Solution using Pandoc

I designed a solution, which can eventually be automated in a delivery pipeline. So our team:

- Created **markdown files** (`.md`) which held the documentation introduction for each part of the project. (If you haven’t used *markdown*, I strongly recommend you try it to write documents. In fact, the page you are reading now has been written in markdown. )
- Created a template for documentation, it can contain the header and footer of the company or customer, as well as text and heading styles. Microsoft Word provides a template functionality by creating **`.dot` files**, more [information here](https://support.office.com/en-gb/article/save-a-word-document-as-a-template-cb17846d-ecec-49d4-82ea-a6f5e3e8b9ae).
- Renamed and re-organized our existing markdown files, so they follow a specific order (more on that later).
- **Automated the process** in our CI tool, so, potentially a new artifact (our .docx file) can be created with every commit or release.
- When delivering to customer, we would still tweak the file to make it presentable, for example, fixing spacing issues or centering images.

I used [Pandoc](https://pandoc.org/), an extremely versatile open-source command to create a manage documents in different formats from a CLI. It is compatible with Linux and Windows, so it was possible for different members of the team to see the final document as they updated documentation.

![Continuous Documentation](/img/posts/pandoc/process.png)

To automate the process, we added it to our CI pipeline, so we installed Pandoc in our runner. For example, in your `gitlab-ci.yml` you can have:
```
...
doc:
  script:
  - pandoc --reference-doc=template/template.dotx -o generated/ documentation_$(date +%F_%H-%M-%S).docx -f markdown -t docx *.md
...
```
This command tells Pandoc which files are to be added to the documents, and in which format to input and output them. I also have a file name scheme to store new versions of the generated file (we use dates to easily keep track of the files changes).

**Note:** The naming of the files becomes important. To keep the final Word document sections in a specific order, we name our files `001_intro.md`, `002_next_section.md` and so on...

## Outcome: A beautiful document

I cannot publish the documentation of our customer’s project as it is private, but I can show the outcome on [one of my own published articles](/2018-02-15-frontend-frameworks-comparison/). This is the generated result:

![Generated Word Document File](/img/posts/pandoc/front-end-article.png)

These two pages show how images are supported:

![Generated Word Document Images](/img/posts/pandoc/front-end-article-images.png)

Some tips:
- Keep the paths to our images relative inside your git project.
- Code samples such as (```) do not automatically style as in markdown.
- Images are not center by default, so this is a manual step.

*Disclaimer: The MCON logo is trademarks or registered trademarks of MCON.*

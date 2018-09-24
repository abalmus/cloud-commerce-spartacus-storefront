[![Build Status](https://travis-ci.com/SAP/cloud-commerce-spartacus-storefront-project.svg?token=yywzsFgC8dWSfJQxPGHs&branch=develop)](https://travis-ci.com/SAP/cloud-commerce-spartacus-storefront-project)

# What is Spartacus?

Spartacus is a lean, angular-based JavaScript storefront for SAP Commerce Cloud. Spartacus talks to SAP Commerce Cloud exclusively through the Commerce REST API.

## Extendable

The Spartacus storefront is easy to extend & upgrade. It is packaged as a library that you can include in your storefront, which allows you to add to/remove/modify the out-the-box storefront features with your own. Newer versions of Spartacus can be used by changing the version of the library you’re using.

## Progressive

Spartacus is on a journey to be fully compliant with the Progressive Web Application (PWA) checklist. We aim to add support for all major features of a PWA-enabled storefront, to offer the best possible customer experience regardless of device or location.

## Open Source

Spartacus is open source. It will be continually developed by the SAP Commerce Cloud team, but we are very keen to welcome contributors and to foster an inclusive, active development community for Spartacus.

## Technology

Read the [documentation](docs/README.md) to learn more about the technology and architecture of the Spartacus storefront, and see [SAP Customer Experience](https://cx.sap.com/en/products/commerce) for more information about SAP Commerce Cloud.

## Storefront features

Spartacus provides core storefront features such as:

- home page
- search
- categories
- product details
- cart page
- adding to cart
- checkout
- order history

# Setup and Installation

To get up and running with Spartacus, the simplest approach is to build the application from ready-made libraries. You can also clone and build from source.

The Spartacus repository includes a mock server that can be used as well as the Commerce APIs provided by a SAP Commerce Cloud instance.

For more information, see the [Getting Started](docs/setupandinstallation.md) documentation.

# Customizing and Extending Spartacus

To maintain our promise of upgradability, the design pattern for Spartacus is for non-core features to be built as feature libraries that add to or change the provided functionality.

Spartacus comes with an application shell (storefrontapp) that contains core resources that are needed to load the rest of the web app. These core resources are provided through libraries, such as the `storefrontlib` and `storefrontstylelib`. You then build new feature libraries that contain any custom functionality and pages. It is recommended to keep the shell app as a container for libraries and to avoid developing features directly in the shell app.

Content for Spartacus pages is fetched from the SAP Commerce Cloud CMS (Content Management System), such as logos, links, banners and static pages. We recommend that new content-driven features follow the same pattern to enable a Content Managers to modify page content through the CMS tools.

For a full explanation and guidelines, see [Extending and Customizing Spartacus](docs/extendingandcustomizing.md) and [Spartacus Architecture](docs/architecture).

# Contributions

Team Spartacus is excited to incorporate ideas, requests, and especially code contributions. Here are a few ways to learn more and start prepping your first pull-request:

- Read [](CONTRIBUTING.md) for an overview of our contribution policies.
- Read the documentation in [Community](docs), especially the [Code of Conduct](doc) and the [GitHub Workflow](doc) documents.
- Join our general communication channel on [Slack](https://join.slack.com/t/spartacus-storefront/shared_invite/enQtNDM1OTI3OTMwNjU5LTRiNTFkMDJlZjRmYTBlY2QzZTM3YWNlYzJkYmEwZDY2MjM0MmIyYzdhYmQwZDMwZjg2YTAwOGFjNDBhZDYyNzE)

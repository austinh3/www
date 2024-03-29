# Requirements:

- Ruby
- Bundle
- Gems
- Node
- npm

## Jekyll:

    cd sites
    mkdir www
    cd www
    bundle init
    bundle add jekyll
    bundle exec jekyll new --force --skip-bundle .
    bundle install
    gem install webrick

## Edit Gemfile:

- remove: "~> 4.2.0" after gem "jekyll"
- add: gem "webrick"

### Test:

    bundle exec jekyll serve

## Theme:

### Edit Gemfile:

- Comment out the line:  gem "minima"
- Add: gem "bulma-clean-theme"
- ensure plugins are correct:

```
 - group :jekyll_plugins do
   gem "jekyll-feed"
   gem "jekyll-seo-tag"
 end
```

### Edit  _config.yml

- Add: theme: bulma-clean-theme
- Add under plugins:  - jekyll-seo-tag

### Install bulma-clean-theme

    gem install bulma-clean-theme

Gemfile.lock needs to be regenerated

    rm Gemfile.lock
    bundle update

While edit locally, use:

    bundle exec jekyll serve --livereload

Change extensions from .markdown to .md
Edit index.md to include:

```
---
layout: page
title: Home
permalink: /
---

# Hello World!
```

Confirm:

    bundle exec jekyll serve --livereload

### Firebase

    firebase init hosting:github

#### Edit Personal Access Token

1. Log into Github,
2. in your profile, select _Settings_,
3. in the left sidebar, select _Developer settings_,
4. select _Personal Access Tokens_, select the token you just created,
5. ensure _Workflow_ is ticked.
6. Save settings.

#### Manual Deploy

    firebase deploy --only hosting

### Github Actions

Work in progress. Possible solution: Standard Firebase and Jekyll marketplace actions blended together.

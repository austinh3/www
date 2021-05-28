## Requirements:
*  Ruby 
*  Bundle 
*  Gems 
*  Node 
*  npm 

    
## Jekyll:

'''
cd sites 
mkdir www
cd www
bundle init
bundle add jekyll
bundle exec jekyll new \-\-force \-\-skip-bundle \.
bundle install
gem install webrick
'''

## Edit Gemfile: 
* remove: "~> 4.2.0" after gem "jekyll"
* add: gem "webrick"

#### Test: 

'''
bundle exec jekyll serve
'''
    
## Theme:

### Edit Gemfile:
* Comment out the line:  gem "minima"
* Add: gem "bulma-clean-theme"
* ensure plugins are correct: 

'''liquid
- group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
end
'''

### Edit  _config.yml

* Add: theme: bulma-clean-theme
* Add under plugins:  - jekyll-seo-tag 

### Install bulma-clean-theme

'''ruby
gem install bulma-clean-theme
'''

Gemfile.lock needs to be regenerated

'''
rm Gemfile.lock
bundle update
'''

While edit locally, use: 

'''
bundle exec jekyll serve --livereload
'''

Change extensions from .markdown to .md
Edit index.md to include: 

'''liquid
---
layout: page
title: Home
permalink: /
---
'''

'''markdown
# Hello World!
'''

Confirm:
'''
bundle exec jekyll serve --livereload
'''
### Firebase

'''
firebase init hosting:github
'''

#### Edit Personal Access Token

1. Log into Github, 
2. in your profile, select *Settings*, 
3. in the left sidebar, select *Developer settings*,
4. select *Personal Access Tokens*, select the token you just created,
5. ensure *Workflow* is ticked.
6. Save settings.

#### Manual Deploy

'''
firebase deploy --only hosting
'''

### Github Actions
Work in progress. 

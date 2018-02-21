## Set up 

#### Install Hugo
Mac:

* Install brew. Follow instruction <a href="https://brew.sh/">here.</a>
* Install hugo with brew using the command - `brew install hugo`

Windows:

* Install <a href="https://chocolatey.org/">chocolately</a>
* Install hugo with chocolately using the command - `choco install hugo -confirm`

#### Run the app
* Create a workspace folder to store your apps:
    * `cd ~/`
    * `mkdir workspace`
    * `cd workspace`
* Clone the automox docs into your workspace `git@github.com:jessicadanaowens/automox-doc-theme.git`
* `cd automox-doc-theme`
* Make sure the automox-doc-theme is in the themes directory 
* Run the app `hugo serve`
* Go to http://localhost:1313 in your browser to see the app running


#### Run the App in draft mode
By default, content files are created in draft mode, as indicated by a boolean in the front matter. If a content file is in draft mode, you will not be able to see it unless your run:
`hugo serve -D`

#### Run the App without draft mode
`hugo serve`

## Content Creation
#### Create a new doc 
* `hugo new docs/doc_name.md`
* `hugo serve`
* go to http://localhost:1313/docs/doc_name to see it in the browser

#### Create a related doc
* ex `hugo new related_documents/agent_installation/advanced_installation_options.md`
* `hugo serve`
* go to http://localhost:1313/related_documents/agent_installation/advanced_installation_options/ to see it in the browser

#### Create a single page (for example: FAQ)
* `hugo new page_name.md`
* `hugo serve`
* go to http://localhost:1313/docs/page_name to see it in the browser

#### Publish your content
* set draft mode to false

## Page Layouts
There are two types of layouts - List and Single.

## List
The homepage has a list layout that displays each doc item in the content/docs directory.

You can customize the title, description, icon, and weight of each doc by editing its front matter.

To change the order of the docs, change the weight number declared in the front matter.

Example front matter:
```
title: "Agent Installation"
description: "Short Description of what you can expect to find within these docs."
date: 2018-02-08T16:03:49-07:00
iconClass: 'icon-installation'
draft: false
weight: 1
```

## Single
The doc pages, related documents, and single pages have a single layout.

#### Add content to the default single layout
All content should be written in markdown in the content file.

The content will be rendered within the layout.

You can use shortcodes, located in the layouts/shortcodes directory, to help format your markdown.

#### Prevent the sidenav from having a fixed position on page scroll
Set the boolean in the front matter of the content file to false. It defaults to true.
```
fixedSidebar: false
```
#### Add related documents section to sidenav
add related documents to the front matter

Example:
```
relatedDocuments:
    - title: Deploying the Agent to Devices in Bulk
      url: '/related_documents/agent_installation/deploying_the_agent_to_devices_in_bulk'
    - title: Advanced Installation Options
      url: '/related_documents/agent_installation/advanced_installation_options'
    - title: Installation Best Practices
      url: '/related_documents/agent_installation/installation_best_practices'
```

#### Add navigation item to sidenav
Add menu title to the front matter

Example:
```
menu: 
    mainmenu: 
        name: Agent Installation
```
#### Deploy App
* Delete the public directory
* Run `hugo` - this will recreate the public directory with all of your assets
* `git push origin master`



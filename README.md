#Running the app
### Set up the app
* Brew install hugo
* Make sure that automox-doc-theme is in the themes directory

## Run the App in draft mode
Draft mode is declared by a boolean in the front matter of the content file.

`hugo serve -D`

### Run the App without draft mode
`hugo serve`

# Content Creation
### Create new doc 
`hugo new docs/doc_name.md`
* configure the front matter accordingly

# Homepage Configuration
The homepage will automatically display each doc that has a content file within the content/docs directory.

You can customize the title, description, and icon for each doc in the front matter of it's content file.
```
title: "Agent Installation"
description: "Short Description of what you can expect to find within these docs."
iconClass: 'icon-installation'
```

# Sidenav Configuration
### Prevent sidenav from being fixed on scroll
* Add a boolean to the front matter.  It default to true otherwise.
```
fixedSidebar: false
```
### Add related documents section to sidenav
* configure related documents within the content page specific front matter
* example configuration
```
relatedDocuments:
    - title: Deploying the Agent to Devices in Bulk
      url: '/related_documents/agent_installation/deploying_the_agent_to_devices_in_bulk'
    - title: Advanced Installation Options
      url: '/related_documents/agent_installation/advanced_installation_options'
    - title: Installation Best Practices
      url: '/related_documents/agent_installation/installation_best_practices'
```

### Add navigation item to sidenav
* configure navigation title with content page specific front matter
* example configuration
```
menu: 
    mainmenu: 
        name: Agent Installation

```



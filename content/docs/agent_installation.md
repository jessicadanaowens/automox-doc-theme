---
title: "Agent Installation"
description: "Short Description of what you can expect to find within these docs."
date: 2018-02-08T16:03:49-07:00
iconClass: 'icon-installation'
draft: false
weight: 1

menu: 
    mainmenu: 
        name: Agent Installation
relatedDocuments:
    - title: Deploying the Agent to Devices in Bulk
      url: '/related_documents/agent_installation/deploying_the_agent_to_devices_in_bulk'
    - title: Advanced Installation Options
      url: '/related_documents/agent_installation/advanced_installation_options'
    - title: Installation Best Practices
      url: '/related_documents/agent_installation/installation_best_practices'

---


## Overview
***
Before you can use the Automox console to manage devices in your organization, you need to install the Automox agent. This small-sized application runs in the background on each device. With this agent, your systems are kept up-to-date with all critical patches.

You can install the agent through an onboarding wizard, which uses unique identifiers to detect the devices that belong to your organization. Once the agent is installed, you can set up an initial policy and schedule.With the first system completely setup, hardware and software inventory of your system is visible from the Devices tab. You can continue adding devices right from the Dashboard.

The following topics are described here:

## Installing the Automox Agent
***
You can use the onboarding wizard to install the agent. The installation steps depend on the operating system of the device you are installing to.

{{< prerequisites title="prerequisites" color="yellow" >}}
*   You have an Automox account.
*   You can access the Automox console
{{< /prerequisites >}}

{{< note title="note" color="blue" >}}
During installation, a unique identifier or access key will be provided to the agent. This identifier will be used to identify all the devices that belong in your organization. It is also referred to as the organization key.
{{< /note >}}

### Downloading and installing the agent using the Installer method
{{< subsection >}}
You can use this method to install the agent on a Windows or MacOS device.

1. From the console, click the Onboarding tab on the left.
2. Click **Get Started**
3. Click the Windows or MacOS icon, depending on your device.
{{< img_modal >}}
 ![install step 3](/img/install-step3-min.png)
{{< /img_modal >}}
4. Click **Get Started**
 ![install step 3](/img/install-step4-min.png)
5. Copy the unique access key.
  1. Click the Installer icon and click **Next Step**. The installer file is automatically downloaded to your device.
6. Copy the unique access key.
{{< /subsection >}}

## Deploying the Agent in Bulk
***
You can deploy the Automox agent to a large number of devices at once. There are different methods available to do remote, bulk deployment of the agent using scripts for the various tools for each of the supported operating systems.

### OS Deployment Scripts
{{< subsection >}}
You can use scripts to deploy to devices for each of the supported operating systems. Your organization key (unique access key) must be added to a specified section of the script, before running the scripts.

{{< note title="note" color="blue" >}}
**Administrative privileges required.** The deployment tool or target device must have administrative privileges in order to successfully deploy and install the Automox Agent.
{{< /note >}}

{{< /subsection >}}

### OS Deployment Scripts
{{< subsection >}}
Follow these steps to copy the curl command.

1. From the **Dashboard** overview, click **Add Additional Endpoints.** The Get Started dialog appears, where you will see your organization key or unique access key. You will need this key for the script.
{{< /subsection >}}

### Editing the Run Command for MacOS Bulk Deployment
{{< subsection >}}
The agent installer command needs to be edited in the following manner. You need to add 

{{< code >}}
`<div> this is an inline code block yadadadadadadadadadad check it out </div>`
{{< /code >}}

{{< code >}}
```html
<div>
The agent installer command needs to be edited in the following manner. You need to add
</div>

<p>test test test</p> 
<p>test test test</p>
```
{{< /code >}}


to the deployment command

{{< /subsection >}}

### Downloading and installing the agent using the Installer method
{{< subsection >}}

{{< note title="note" color="blue" >}}
During installation, a unique identifier or access key will be provided to the agent. This identifier will be used to identify all the devices that belong in your organization. It is also referred to as the organization key.
{{< /note >}}

{{< /subsection >}}


### Example Table 

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

### Example Bulleted List

{{< bullets >}}
* Item 1
* Item 2
* Item 3
* Item 4
{{< /bullets >}}







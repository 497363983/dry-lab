---
author: qww
link: https://github.com/497363983
---

# Directory structure

The directory structure is shown in the following.

To contribute to the documents, you just need to edit the markdown files in the folder ```docs/document``` for english version or the folder ```zh-cn/document``` for chinese version. About how to edit the documents, please refer to [How to edit documents](/document/contributing/[1]Introduction/[2]How-to-edit-documents).

To contribute to the source code, you can refer to the document of [vitepress](https://vitepress.vuejs.org/guide/what-is-vitepress).

```shell
├─.github
│  └─workflows
├─docs
│  ├─.vitepress
│  │  ├─config #vitepress config
│  │  ├─plugins #custom vitepress plugin
│  │  └─theme #website structure
│  │      ├─components #vue components
│  │      └─style #scss files
│  ├─document
│  │  ├─contributing #contributing documents
│  │  ├─hardware #hardware documents
│  │  ├─introduction #introduction
│  │  ├─model #model documents
│  │  └─wiki #wiki documents
│  ├─public #static resources, for example jpg,png,svg files
│  ├─scripts #scripts about document manipulation
│  └─zh-cn #chinese version Document
│      └─...
└─scripts
```

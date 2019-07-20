# Notes for integrating with azure

## My subscriptions

{

    "cloudName": "AzureCloud",
    "id": "5e4ee368-5cf1-44b3-9393-63ac6577536c",
    "isDefault": false,
    "name": "Visual Studio Enterprise",
    "state": "Enabled",
    "tenantId": "72f988bf-86f1-41af-91ab-2d7cd011db47",
    "user": {
      "name": "brgebhar@microsoft.com",
      "type": "user"
    }
  },

## Azure Blob

Approach

* Need to create a path to put blob there.
* Figure out node file path stuff.
  * mkdir -p /Users/bryan/code/personal/waittimes/disney_out/`date +%F`
  * >/Users/bryan/code/personal/waittimes/disney_out/`date +%F`/`date +%F-%T`.csv 2>>/tmp/disney_stderr.log
  * Create container
    * year
      * date
        * csv for every 5 minutes

### Links

[How to create a blob in Azure Storage using the client library for Node.js v2 | Microsoft Docs](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-nodejs)

[Azure-Samples/azure-storage-js-v10-quickstart: Azure Storage v10 SDK for JavaScript Quickstart](https://github.com/Azure-Samples/azure-storage-js-v10-quickstart)

[Azure-Samples/storage-blob-node-getting-started: The getting started sample demonstrates how to perform common tasks using the Azure Blob Service in node.js including uploading a blob, CRUD operations, listing, as well as blob snapshot creation.](https://github.com/Azure-Samples/storage-blob-node-getting-started)

[Azure storage account overview | Microsoft Docs](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview)

[Azure Quickstart - Create a blob in object storage with the Azure portal | Microsoft Docs](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal)

[Create a storage account - Azure Storage | Microsoft Docs](https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account?tabs=azure-portal)

Tool to download: [Azure Storage Explorer – cloud storage management | Microsoft Azure](https://azure.microsoft.com/en-us/features/storage-explorer/)

[Upload, download, list, and delete blobs using Azure Storage v10 SDK for JavaScript | Microsoft Docs](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-nodejs-v10)

[How to create nested folders within Azure Blob container](https://fsou1.github.io/Nested_folders_with_azure_blob_storage/)

## Azure Node

[Get started with the Azure modules for Node.js | Microsoft Docs](https://docs.microsoft.com/en-us/azure/javascript/node-sdk-azure-get-started?view=azure-node-latest)

## Serverless

* waittimes is perfect for a serverless approach
    * But the themeparks library does have state, would that work?
* [Azure Functions with Visual Studio Code](https://code.visualstudio.com/tutorials/functions-extension/getting-started)
* how to monitor it?

## Azure

[Sign in with the Azure CLI | Microsoft Docs](https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli?view=azure-cli-latest)

## Links to sort

* [How to create nested folders within Azure Blob container](https://fsou1.github.io/Nested_folders_with_azure_blob_storage/)
* [How to create a sub container in azure storage location - Stack Overflow](https://stackoverflow.com/questions/3183857/how-to-create-a-sub-container-in-azure-storage-location)
* [Create sub-folders inside container in azure storage – Customer Feedback for Microsoft Azure](https://feedback.azure.com/forums/217298-storage/suggestions/33063280-create-sub-folders-inside-container-in-azure-stora)
* [azure-docs/storage-container-naming-rules-include.md at master · MicrosoftDocs/azure-docs](https://github.com/MicrosoftDocs/azure-docs/blob/master/includes/storage-container-naming-rules-include.md)

* [Introduction to Blob storage - Object storage in Azure | Microsoft Docs](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)
* [Azure-Samples/storage-blob-node-getting-started: The getting started sample demonstrates how to perform common tasks using the Azure Blob Service in node.js including uploading a blob, CRUD operations, listing, as well as blob snapshot creation.](https://github.com/Azure-Samples/storage-blob-node-getting-started)
* [Azure/azure-sdk-for-js: An isomorphic javascript sdk for Azure services](https://github.com/Azure/azure-sdk-for-js)
* [BlockBlobURL class | Microsoft Docs](https://docs.microsoft.com/en-us/javascript/api/%40azure/storage-blob/blockbloburl?view=azure-node-preview#upload-aborter--httprequestbody--number--iblockblobuploadoptions-)
* [Upload, download, list, and delete blobs using Azure Storage v10 SDK for JavaScript | Microsoft Docs](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-nodejs-v10)
* [Azure-Samples/azure-storage-js-v10-quickstart: Azure Storage v10 SDK for JavaScript Quickstart](https://github.com/Azure-Samples/azure-storage-js-v10-quickstart)
* [How to create a blob in Azure Storage using the client library for Node.js v2 | Microsoft Docs](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-nodejs)
* [Azure/azure-storage-node: Microsoft Azure Storage SDK for Node.js](https://github.com/Azure/azure-storage-node)

* [Get started with the Azure modules for Node.js | Microsoft Docs](https://docs.microsoft.com/en-us/azure/javascript/node-sdk-azure-get-started?view=azure-node-latest)
* [Azure](https://account.azure.com/Subscriptions/Statement?subscriptionId=8569b41e-05da-479d-a105-481507dbec2e)
* [Azure Quickstart - Create a blob in object storage with the Azure portal | Microsoft Docs](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal)
* [Create a storage account - Azure Storage | Microsoft Docs](https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account?tabs=azure-portal)
* [waittimesstorage - Access keys - Microsoft Azure](https://ms.portal.azure.com/#@microsoft.onmicrosoft.com/resource/subscriptions/5e4ee368-5cf1-44b3-9393-63ac6577536c/resourceGroups/waittimes/providers/Microsoft.Storage/storageAccounts/waittimesstorage/keys)

Fix code sync someday
* [Code Settings Sync Customizable Sync](http://shanalikhan.github.io/2017/02/19/Option-to-ignore-settings-folders-code-settings-sync.html)

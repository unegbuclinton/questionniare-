# Business Improvement Academy
Initial configuration to run the functions locally.


## Local configuration
Add file local.settings.json at the root level of API folder with the content below:

```
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet",
    "SqlConnectionString": "User ID=cikjtjnpajeerr;Password=727f9befa0ce8ff7669d45a54df93b1abfbbfb3639c7ac05bf99c0b671325fa9;Host=ec2-3-217-251-77.compute-1.amazonaws.com;Port=5432;Database=dcpfufk3t1s438;Pooling=true;SSL Mode=Require;TrustServerCertificate=True;"
  }
}

```
## Install these extensions to VSCode: Azure Functions and c#.
Press F5 to run .Net build.
![image](https://user-images.githubusercontent.com/122078390/214037832-066447ed-6154-41c7-ab9a-4ab0d4248159.png)

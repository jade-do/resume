1. Run **PowerShell Core** (pwsh.exe) and **change directory to the project directory** of your assistant/skill.
2. Run the following command:

    ```shell
    .\Deployment\Scripts\deploy.ps1
    ```

    ### What do these parameters mean?

    Parameter | Description | Required
    --------- | ----------- | --------
    `name` | **Unique** name for your bot. By default this name will be used as the base name for all your Azure Resources and must be unique across Azure so ensure you prefix with something unique and **not** *MyAssistant* | **Yes**
    `location` | The region for your Azure Resources. By default, this will be the location for all your Azure Resources | **Yes**
    `appPassword` | The password for the [Azure Active Directory App](https://ms.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview) that will be used by your bot. It must be at least 16 characters long, contain at least 1 special character, and contain at least 1 numeric character. If using an existing app, this must be the existing password. | **Yes**
    `luisAuthoringKey` | The authoring key for your LUIS account. It can be found at https://www.luis.ai/user/settings,  https://eu.luis.ai/user/settings, or https://au.luis.ai/user/settings | **Yes**
    `luisAuthoringRegion` | The authoring region of your LUIC account. It can be found at https://www.luis.ai/user/settings,  https://eu.luis.ai/user/settings, or https://au.luis.ai/user/settings | **Yes**

You can find more detailed deployment steps including customization in the [Virtual Assistant and Skill Template deployment](/docs/tutorials/assistantandskilldeploymentsteps.md) page.

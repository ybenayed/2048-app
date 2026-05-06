import * as pulumi from "@pulumi/pulumi";
import * as azure_native from "@pulumi/azure-native";

// Récupérer un Resource Group existant
const resourceGroup = azure_native.resources.ResourceGroup.get(
    "rg-yasminebenayed208-at-gmail-com",
    "/subscriptions/be04e777-42ad-46b3-b592-efc468e08696/resourceGroups/rg-yasminebenayed208-at-gmail-com"
);

// Nom de l’environnement (stack Pulumi)
const environment = pulumi.getStack();
// Création du Static Web App
const staticSite = new azure_native.web.StaticSite("staticSite", {
    branch: "master",
    name: pulumi.interpolate`stapp-2048-${environment}`,
    repositoryUrl: "https://github.com/placeholder/placeholder",
    location: "westeurope",
    resourceGroupName: resourceGroup.name,
    sku: {
        name: "Free",  
        tier: "Free",
    },
});

const listStaticSitesSecretsOutput = azure_native.web.listStaticSitesOutput({
    resourceGroupName: resourceGroup.name,
    staticSiteName: staticSite.name
});

// Export
export const resourceGroupName = resourceGroup.name;
export const staticSiteName = staticSite.name;
export const deploymentToken = pulumi.secret(listStaticSitesSecretsOutput.apply(secrets => secrets?.properties?.apiKey));
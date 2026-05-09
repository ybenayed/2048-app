### Infrastructure as Code (IaC)

L'IaC consiste à décrire et gérer l'infrastructure cloud via du code, au lieu de configurer manuellement les ressources :

-  le même code produit le même environnement, quel que soit le contexte (dev, préprod, prod).
-  l'infrastructure est versionnable comme du code applicatif (Git).
-  chaque modification est trackée et auditable.

### Pulumi

Pulumi permet de décrire l'infrastructure en utilisant des langages classiques (TypeScript, Python) .

- **Pulumi.yaml** : fichier de définition du projet.
- **Pulumi.\<stack\>.yaml** : valeurs de configuration propres à chaque stack (dev, préprod, prod...).
- **index.ts** : programme principal décrivant les ressources à provisionner.
- **`pulumi up`** : prévisualiser et appliquer les changements d'infrastructure.

### Azure Static Web App

- Tags : ajout du tag sur la ressource Azure.
- Secrets : le deployment token  est marqué secret → valeur chiffrée dans l'état Pulumi.
- `listStaticSiteSecretsOutput` : méthode utilisée pour récupérer le token de déploiement.

## 2. Problèmes rencontrés

### Problème de création du Resource Group

Au démarrage, le provisionnement échouait lors de la création du resource group Azure.
- Cause probable: mauvaise souscription Azure sélectionnée ou droits insuffisants.

Le TP demande de mettre repositoryUrl en chaîne vide lors de la création de la StaticSite. Cependant, avec un repository vide, le déploiement de l'application ne fonctionne pas : Azure ne sait pas quoi déployer sans source de code liée.

### Gestion des secrets / chiffrement

La partie chiffrement du deployment token était plus délicate :

- Il fallait utiliser `pulumi.secret()` pour envelopper la valeur récupérée, afin qu'elle soit chiffrée dans le fichier d'état.
- La valeur n'est visible qu'avec `pulumi stack output --show-secrets`, ce qui évite toute fuite accidentelle.

---

## 3. Remarques & réflexions

**L'IaC est importante** : l'infrastructure est traitée avec le même niveau de rigueur que le code applicatif — revues de code, historique Git, tests, automatisation.

**Le code est le même quel que soit l'environnement** : on change uniquement les valeurs de configuration (stack). Cela garantit la cohérence entre dev, préprod et prod et réduit les erreurs humaines.

**Pipeline CI/CD** : l'IaC s'intègre naturellement dans un pipeline — on automatise à la fois le déploiement de l'application et le provisionnement de l'infrastructure cloud.

---

> **Voici l'essence du TP :**
>
> - L'infra as code est importante
> - Le code est le même quel que soit l'environnement
> - Pipeline : déploiement, provisionnement infra cloud
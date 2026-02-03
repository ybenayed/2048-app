# Gestion des dépendances avec pnpm

- Les dépendances du projet ont été installées à l’aide de la commande pnpm install. 
- Après la suppression du répertoire node_modules (rm -rf node_modules), une nouvelle installation a été réalisée. 
- Celle-ci s’est avérée plus rapide, car pnpm utilise un store global dans lequel les dépendances sont stockées une seule fois puis réutilisées via des liens,     évitant ainsi les re-téléchargements inutiles.
-  Par ailleurs, pnpm permet d’exécuter directement les dépendances installées grâce à la commande pnpm <nom_du_package>.

# Vérification du typage statique avec vue-tsc (Nuxt)

- Vue-tsc est l’outil officiel de Vue 3 pour la vérification statique des types TypeScript. 
- Après avoir vérifié son installation, l’analyse a été lancée à l’aide de la commande vue-tsc --noEmit. 
- Une erreur volontaire introduite sur une prop d’un composant Vue a permis de confirmer que l’IDE ainsi que la commande détectaient correctement l’erreur. 
- Dans un projet Nuxt, le fichier tsconfig.json par défaut repose sur des références TypeScript, qui ne sont pas prises en charge par vue-tsc, empêchant ainsi la détection des erreurs. En étendant directement la configuration .nuxt/tsconfig.app.json, vue-tsc peut analyser les fichiers .vue et remonter correctement les erreurs de typage.
# Analyse statique avec ESLint
- ESLint est utilisé comme outil d’analyse statique pour détecter les erreurs dans les fichiers JavaScript, TypeScript et Vue sans exécuter le code.
- L’outil est installé dans le projet avec les plugins Vue et TypeScript, et configuré via le fichier eslint.config.js.
- L’analyse a été exécutée avec la commande pnpm eslint ./app --ext .ts,.vue.
- Une erreur volontaire (variable non utilisée dans Board.vue) a permis de vérifier qu’ESLint remonte correctement les erreurs.
- L’erreur est détectée à la fois par l’IDE et par la CLI, confirmant le bon fonctionnement de l’outil.
## Construction du "package" à déployer
-Vite est un build tool moderne qui compile le code source Vue.js en fichiers optimisés (JavaScript, CSS, HTML) prêts pour la production, avec un serveur de développement rapide utilisant les ES modules natifs.

-La commande pnpm vite build crée un bundle optimisé (minifié et compressé) dans le répertoire configuré (publish dans notre cas), qui est l'artefact à déployer en production.

-Les répertoires de build doivent être ignorés par Git (ajoutés au .gitignore) car ils sont générés automatiquement et ne doivent pas être versionnnés dans le contrôle de source.

-pnpm vite preview permet de tester le bundle final localement avant déploiement, garantissant que l'application fonctionne correctement en mode production avec les optimisations appliquées.
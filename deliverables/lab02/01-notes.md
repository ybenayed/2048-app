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
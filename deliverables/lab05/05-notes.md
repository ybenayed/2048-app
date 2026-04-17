Etapes :

1. PREPARATION DU PROJET

J’ai synchronisé le dépôt : git pull upstream main
Création de la branche : git checkout -b lab05

2. CONFIGURATION VERCEL
Création du compte Vercel
Récupération :
- VERCEL_TOKEN
- VERCEL_ORG_ID
- VERCEL_PROJECT_ID

Installation CLI :
pnpm add -g vercel   vercel login

3. CONFIGURATION CI/CD
Ajout des secrets GitHub :
- VERCEL_TOKEN
- VERCEL_ORG_ID
- VERCEL_PROJECT_ID

4. DEPLOIEMENT PRODUCTION
Déploiement manuel via workflow_dispatch 
Commande qui permet ca :
vercel --prod --token=$VERCEL_TOKEN --yes

5. DEPLOIEMENT PREVIEW
Déclenché lors d’une Pull Request
Commande qui permet ca  :
vercel deploy --token=$VERCEL_TOKEN --yes

6. TEST PREVIEW
Création branche : git checkout -b test-preview

Modification : dans Header.vue : Score -> My Score

Push : git push origin test-preview

Ouverture Pull Request : on obtient URL différente du premier

7. BLUE GREEN DEPLOYMENT
Promotion preview vers production via Vercel (graphique ) : Promote to Production

Résultat :
- changement de Url
- Production mise à jour
- Ancienne version remplacée


PROBLEMES RENCONTRES

1. exit code 127
Cause : pnpm/vercel non disponibles dans CI
Solution : installation node + pnpm + vercel CLI
2. git non-fast-forward
Solution : git pull --rebase


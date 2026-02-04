#!/bin/bash

# Installer les dépendances du projet
pnpm install

# Supprimer le répertoire node_modules
rm -rf node_modules

# Réinstaller les dépendances
pnpm install

# Vérifier si vue-tsc est installé
pnpm list vue-tsc

# Si vue-tsc n'est pas installé, l'installer en tant que dépendance de développement
pnpm add -D vue-tsc

# Exécuter la vérification de type avec vue-tsc sans émettre de fichiers
pnpm vue-tsc --noEmit


#installer l'eslint si pas encore fait
pnpm eslint 

# Exécuter les tests avec vitest
echo "=========================================="
echo "Exécution des tests unitaires avec vitest"
echo "=========================================="
pnpm exec vitest run

# Construire le package avec Vite dans dist/
echo "=========================================="
echo "Construction avec vite build (dist/)"
echo "=========================================="
pnpm exec vite build

# Construire le package avec Vite dans publish/
echo "=========================================="
echo "Construction avec vite build (publish/)"
echo "=========================================="
pnpm exec vite build --outDir publish

# Vérifier que le package est bien créé
echo "=========================================="
echo "Vérification du package dans publish/"
echo "=========================================="
ls -lh publish/

echo ""
echo "=========================================="
echo "Pipeline terminé avec succès!"
echo "=========================================="
echo ""
echo "Pour tester l'application localement:"
echo "  cd /home/manal/2048-app"
echo "  pnpm exec vite preview"
echo ""
echo "L'application sera disponible sur http://localhost:4173/"






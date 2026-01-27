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




# Exécuter les tests avec vitest
echo "=========================================="
echo "Exécution des tests unitaires avec vitest"
echo "=========================================="
pnpm exec vitest run



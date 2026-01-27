#!/bin/bash

# Se placer dans le répertoire parent
cd "$(dirname "$0")/.."

# Installer les dépendances du projet
pnpm install

# Supprimer le répertoire node_modules
rm -rf node_modules

# Réinstaller les dépendances
pnpm install

# Exécuter les tests avec vitest
echo "=========================================="
echo "Exécution des tests unitaires avec vitest"
echo "=========================================="
pnpm exec vitest run
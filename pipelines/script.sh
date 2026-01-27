#!/bin/bash

# Installer les dépendances du projet
pnpm install

# Supprimer le répertoire node_modules
rm -rf node_modules

# Réinstaller les dépendances
pnpm install
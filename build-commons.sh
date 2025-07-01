#!/bin/bash

# Schnelles Build-Script für commons Library

# Basis-Verzeichnis
BASE_DIR=$(dirname "$(pwd)")
COMMONS_REPO_DIR="$BASE_DIR/commons"

# Prüfen ob commons Repository existiert
if [ ! -d "$COMMONS_REPO_DIR" ]; then
    echo "Commons Repository nicht gefunden!"
    echo "Führe zuerst './setup-commons-repo.sh' aus."
    exit 1
fi

# Library bauen
echo "Baue commons Library..."
ng build commons

if [ $? -ne 0 ]; then
    echo "Build fehlgeschlagen!"
    exit 1
fi

# Build-Artefakte kopieren
echo "Kopiere Build-Artefakte..."
rsync -av --delete \
    --exclude='.git' \
    --exclude='.gitignore' \
    dist/commons/ "$COMMONS_REPO_DIR/"

# README wiederherstellen
if [ -f "statemachine/README-commons.md" ]; then
    cp statemachine/README-commons.md "$COMMONS_REPO_DIR/README.md"
fi

echo "Fertig! Änderungen sind in: $COMMONS_REPO_DIR"
echo "Wechsle mit 'cd $COMMONS_REPO_DIR' zum Repository."
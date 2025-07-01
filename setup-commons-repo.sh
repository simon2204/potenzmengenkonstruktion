#!/bin/bash

# Script zum Einrichten und Synchronisieren des commons Repository

# Farben für Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Basis-Verzeichnis (ein Ebene über dem aktuellen Projekt)
BASE_DIR=$(dirname "$(pwd)")
COMMONS_REPO_DIR="$BASE_DIR/commons"
CURRENT_DIR=$(pwd)

echo -e "${YELLOW}Commons Repository Setup${NC}"
echo "================================"

# Prüfen ob commons Repository bereits existiert
if [ ! -d "$COMMONS_REPO_DIR" ]; then
    echo -e "${YELLOW}Commons Repository nicht gefunden.${NC}"
    echo "Klone Repository nach: $COMMONS_REPO_DIR"
    
    cd "$BASE_DIR"
    git clone git@git.w-hs.de:pi-lab/thi/commons.git commons
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Fehler beim Klonen des Repository!${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}Repository erfolgreich geklont!${NC}"
else
    echo -e "${GREEN}Commons Repository bereits vorhanden: $COMMONS_REPO_DIR${NC}"
    
    # Pull latest changes
    cd "$COMMONS_REPO_DIR"
    echo "Hole neueste Änderungen..."
    git pull origin main
fi

# Zurück zum Projektverzeichnis
cd "$CURRENT_DIR"

# Library bauen
echo -e "\n${YELLOW}Baue commons Library...${NC}"
ng build commons

if [ $? -ne 0 ]; then
    echo -e "${RED}Build fehlgeschlagen!${NC}"
    exit 1
fi

echo -e "${GREEN}Build erfolgreich!${NC}"

# Build-Artefakte kopieren
echo -e "\n${YELLOW}Kopiere Build-Artefakte nach commons Repository...${NC}"

# Alle Dateien aus dist/commons nach commons repo kopieren
# (außer .git Verzeichnis)
rsync -av --delete \
    --exclude='.git' \
    --exclude='.gitignore' \
    dist/commons/ "$COMMONS_REPO_DIR/"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}Dateien erfolgreich kopiert!${NC}"
else
    echo -e "${RED}Fehler beim Kopieren der Dateien!${NC}"
    exit 1
fi

# README wiederherstellen falls vorhanden
if [ -f "statemachine/README-commons.md" ]; then
    cp statemachine/README-commons.md "$COMMONS_REPO_DIR/README.md"
    echo "README.md wiederhergestellt"
fi

# Status im commons Repository anzeigen
cd "$COMMONS_REPO_DIR"
echo -e "\n${YELLOW}Git Status im commons Repository:${NC}"
git status --short

# Optional: Änderungen committen und pushen
echo -e "\n${YELLOW}Möchten Sie die Änderungen committen und pushen? (y/n)${NC}"
read -r response

if [[ "$response" == "y" ]]; then
    git add -A
    
    echo "Commit-Nachricht eingeben:"
    read -r commit_message
    
    git commit -m "$commit_message"
    
    echo -e "${YELLOW}Pushe zu GitLab...${NC}"
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}Erfolgreich gepusht!${NC}"
    else
        echo -e "${RED}Push fehlgeschlagen!${NC}"
    fi
fi

# Zurück zum Projektverzeichnis
cd "$CURRENT_DIR"

echo -e "\n${GREEN}Fertig!${NC}"
echo "Commons Repository: $COMMONS_REPO_DIR"
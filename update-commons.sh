#!/bin/bash

# Script zum Aktualisieren und Veröffentlichen der commons Library

echo "Building commons library..."
ng build commons

if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

echo "Build successful!"

# In dist/commons wechseln
cd dist/commons

# Git Status prüfen
if [[ $(git status --porcelain) ]]; then
    echo "Changes detected, preparing commit..."
    
    # Alle Änderungen hinzufügen
    git add .
    
    # Commit message vom User abfragen
    echo "Enter commit message:"
    read commit_message
    
    git commit -m "$commit_message"
    
    # Pushen
    echo "Pushing to GitLab..."
    git push origin main
    
    echo "Commons library updated successfully!"
    
    # Zurück zum Hauptverzeichnis
    cd ../..
    
    # Library im aktuellen Projekt aktualisieren
    echo "Updating commons in current project..."
    npm uninstall commons
    npm install git+ssh://git@git.w-hs.de:pi-lab/thi/commons.git
    
else
    echo "No changes to commit"
fi

echo "Done!"
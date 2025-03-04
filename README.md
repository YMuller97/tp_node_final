# TP Final nodeJS

## Guide de déploiement 

### 1. Création de l'environnement

Ce projet nécessite l'installation de nodejs et node package manager (npm), ainsi que de docker.

Sur linux : 

Commencer par mettre à jour le gestionnaire de paquets

```
apt update && apt upgrade -y
```

Ensuite installer node et docker

```
apt install nodejs  
```

```
apt install docker.io
```

Sur Windows, télécharger les exécutables depuis une source officielle.



### 2. Lancer la base de données

Pour lancer la base de données, taper la commande suivante à la racine du projet : 

```
docker compose up
```



### 3. Lancer l'application node 

Pour lancer l'application node, taper la commande suivante à la racine du projet : 

```
npm run app
```

 

On peut ensuite tester les requêtes via un utilitaire comme Postman ou ThunderClient sur l'url suivante : 

http://localhost:3001/<route demandée>
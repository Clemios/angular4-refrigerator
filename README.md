# Refrigerator

## TO DO
/!\ Penser à un moyen (regex, liste d'ENUM...) afin d'éviter les multiples d'ingrédients /!\
- [BACK] Refacto le microservice incredient pour obtenir recipe et l'affiner
- [BACK] Faire la fonction qui supprime les ingredients (en qte) d'une recipe
- [FRONT] Buttons pour modifier la qte d'un ingredient
- [FRONT] Faire la vue de modification d'une recette
- [FRONT/BACK] Concevoir agendas (plannings hebdomadaires, liste de recettes associés à un repas)
- [FRONT/BACK] Concevoir lists (liste de courses, gestion de plusieur listes)


## Features
- Gestionnaire de frigo
- Banque de recettes
- Generateur/Gestionnaire de liste de courses

## Configuration de la base MySQL

* Configuration MySQL:

`host` localhost
`port` 8889

* SQL pour générer la base, les tables et quelques donées:

```sql
CREATE DATABASE IF NOT EXISTS `kitchen` DEFAULT CHARACTER SET utf8;
USE `kitchen`;
DROP TABLE IF EXISTS `ingredients`;
CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unit` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `ingredients` VALUES (1,'Tomate',300,'g'),(2,'Sel',100,'g');
DROP TABLE IF EXISTS `recipes`;
CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` text,
  `image` mediumtext NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `recipes` VALUES (1,'Tomates au sel','Prenez des tomates fraiches, parsemez les de sel marin et savourez !');

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `users` VALUES (1,'clem_ios@hotmail.com','Clemios','wordrave'),(2,'oliv.murat@gmail.com','Oliv','azerty');
```

* Créer les utilsateurs (vous pouvez facultativement configurer des permissions):

- Il y a un utilisateur par table
- Son nom et mot de passe sont identiques et correspondent aux noms des tables



### Démarrer le projet
Pour que le projet fonctionne, il faut démarrer les microservices NodeJS

```bash
node authenticator/index.js & node user/index.js & node ingredient/index.js & node recipe/index.js & npm start
```

```bash
cd Refrigerator/
```
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `npm start` -- démarre l'app angular
```bash
cd Refrigerator/anthenticator/
```
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `npm start` -- démarre le serveur d'authentification
```bash
cd Refrigerator/user/
```
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `npm start` -- démarre l'API user
```bash
cd Refrigerator/ingredient/
```
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `npm start` -- démarre l'API ingredient


### Updating dependencies
Angular and Material releases are more frequent. Since the switchover to semver, it is now safe(r) to rapidly update your own code from one minor release to another, i.e. 4.2.2 to 4.4.3.
* `npm run update:check` -- displays a list of available safe (minor) and risky (major) updates
* `npm run update:run` -- updates package.json and run npm install in safe mode
* `npm run update:all` -- updates package.json and run npm install in risky mode
> Note: No matter which mode you run, always pay attention to CLI messages about incompatibilities. i.e. There may be a new TypeScript version like `2.5.3`, but Angular CLI may request a version range of `>=2.1.0 <2.4.0`. In that case heed the warning and execute `npm install typescript@'>=2.1.0 <2.4.0'` to rollback the update to that particular package.

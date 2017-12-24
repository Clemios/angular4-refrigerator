# Refrigerator

## Features
- Gestionnaire de frigo
- Banque de recettes
- Generateur/Gestionnaire de liste de courses

## Configuration de la base MySQL

* Configuration MySQL:

`host` localhost
`port` 8889

Il faut créer un utilisateur `contact`au password `contact`.

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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` text,
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

### Démarrer le projet
Pour que le projet fonctionne, il faut en plus de la DB, démarrer quelques microservices (et donc plusieurs terminaux) :
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
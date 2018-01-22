# Refrigerator

## Présentation
- Projet d'etudes du cour d'Angular du M2 Ingesup
- Le projet s'articule autour d'un fonctionnement en microservices
- Chaque partie possède dons son API en nodeJS

## Explications techniques

J'ai ecris mon code de manière scémantique le plus possible. J'ai intégré une gestion basique des erreurs et de la validation des inputs. En démarrant les microsercives un à un (voir plus bas) il enverront des logs dans leur terminal respectif. Pour le déloiement j'ai écris des stripts customs dans package.json
Faute de temps l'utilisation de la BDD n'est pas complètement optimisée, et j'enviseageais d'uniformiser le code le plus possible afin de développer des "shared_components", idem pour les methodes métiers redondantes.

## Problèmes rencontrés

- Lier les objets Ingredient du frigo avec ceux des recettes (il me manque une belle regepx pour comparer les ingredientNames saisis ou une architecture de base de donnée plus avancée avec des clefs externes et joitures)
- Mieux gérer les images (si l'image est trop volumineuse le serveur peut renvoyer une erreur 413: Payload To Large si son "post_max_size" n'est pas siffusant)

## Dépendances
- Material : Fournit des compsants HTML et des classes CSS
- Covalent : Rajout quelques methodes à cerains components de Material (comme la fontion filter() pour les tables paginées par exempe)
- Noty : Javascript Notifications library

## Configuration du serveur qui détiens la BDSS

- Utilisation de WAMP/MAMP conseillée

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

DROP TABLE IF EXISTS `listings`;
CREATE TABLE `listings` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `ingredients` text NOT NULL,
  `main` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `listings` (`id`, `name`, `ingredients`, `main`) VALUES
(1, 'Une liste', '[{\"name\":\"tomate\",\"quantity\":3,\"unit\":\"g\"},{\"name\":\"sel\",\"quantity\":30,\"unit\":\"g\"}]', 'FALSE'),
(2, 'Liste principale', '[{\"name\":\"tomate\",\"quantity\":3,\"unit\":\"g\"},{\"name\":\"sel\",\"quantity\":30,\"unit\":\"g\"}]', 'TRUE');

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

- Il y a un utilisateur par table (ingredients, recipes, listings, schedules, users)
- Son nom et mot de passe sont identiques et correspondent aux noms des tables


### Démarrer le projet
Rendez vous dans le repertoire du projet :
```bash
cd Refrigerator/
```
Pour que le projet fonctionne, il faut installer et démarrer chacun des microservices

* Installation multiple (experimental):
```bash
cd authenticator && npm install & cd .. && cd user && npm install & cd .. && cd ingredient && npm install & cd .. && cd recipe && npm install & cd .. && cd listing && npm install
```

* Lancement via une seule commande (à la racine du projet)
```bash
npm start
```

* Installation et lancement manuels :
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
```bash
cd Refrigerator/recipe/
```
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `npm start` -- démarre l'API recipe
```bash
cd Refrigerator/listing/
```
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `npm start` -- démarre l'API listing
```bash
cd Refrigerator/schedules/
```
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `npm start` -- démarre l'API schedules


### Updating dependencies
Angular and Material releases are more frequent. Since the switchover to semver, it is now safe(r) to rapidly update your own code from one minor release to another, i.e. 4.2.2 to 4.4.3.
* `npm run update:check` -- displays a list of available safe (minor) and risky (major) updates
* `npm run update:run` -- updates package.json and run npm install in safe mode
* `npm run update:all` -- updates package.json and run npm install in risky mode
> Note: No matter which mode you run, always pay attention to CLI messages about incompatibilities. i.e. There may be a new TypeScript version like `2.5.3`, but Angular CLI may request a version range of `>=2.1.0 <2.4.0`. In that case heed the warning and execute `npm install typescript@'>=2.1.0 <2.4.0'` to rollback the update to that particular package.

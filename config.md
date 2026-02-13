# Marche à Suivre 

###   Extraire le .rar dans un dossier
Lance @Godfather sur Telegram 
Run /newbot pour créer un bot et suis ce qu'il te dit.
Tu vas générer un token "HTTP API" que tu ajouteras au script avant le 1er lancement

###   Telecharge le .msi de Node.JS (https://nodejs.org/fr/download) 
Fais attention que la case "add to path" soit cochée
Et installe les autres dépendances nécessaires 
(chocolatey/python/npm..) en cochant la dernière case.

###   Verifie que tout est bien installé dans ton cmd: 
`node -v`
`npm -v`
###   Ca va t'afficher les versions que tu as:
"v24.13.1"
"11.10.0"

###   Va dans le dossier du script: 
###   (ou clic droit > ouvrir dans un terminal)
`cd "C:\Users\coren\Downloads\script_du_bot" `
### Telecharge les différentes API de Telegram:
`npm install node-telegram-bot-api`
###   Lance la commande indiquée pour màj npm:
`npm install -g npm@11.10.0`
###   Rentre ton token généré par @GodFather dans les parenthèses de const token (dans le script)
`const token = 'Token généré par GodFather ici';` (l.4)
###   Lance le bot avec son nom exact (que tu peux changer)
`node DesktopTelPerso.js`
###   Le bot est lancé (msg de la cmd confirme)
Bot démarré...
###   Dans la cmd après que tu aies envoyé le premier message via ton bot, il y aura un ChatId = 11111111 de généré
Modifie alors la ligne "let ChatId = null;" (l.9) en remplacant null par le nombre donné.
###   Ce faisant, tu relies directement ton bot à ton identifiant tg, ca rajoute de la sécurité.

# Erreur possible 

> error: [polling_error] {"code":"ETELEGRAM","message":"ETELEGRAM: 404 Not Found"};
Cette erreur se lance si tu n'as pas ajouté l'API dans const token="";
Fais ctrl + c pour arrêter le bot.

####  Une fois configuré, tu n'as plus besoin de relancer le script pour utiliser le bot.
####  Je ferai la traduction en anglais plus tard.
####  Il s'agit de l'installation sous windows, les commandes peuvent varier suivant l'os.

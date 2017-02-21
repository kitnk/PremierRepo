https://www.christopheducamp.com/2013/12/16/github-pour-nuls-partie-1/

J'ai trouvé ce lien très intéressant et complet pour une première approche.

Voici les étapes liées à la création d'un nouveau commit dans le terminal : 

1. Une fois le répertoire voulu sélectionné, saisir git init afin de signaler à l'ordinateur qu'on reconnait ce répertoire comme un dépôt local Git.

2. Créer un fichier au format .md : touch nomdemonfichier.md

3. Pour signaler à Git que ce fichier est là (pour le moment il apparait comme "untracked") on tape : git add nomdemonfichier.md

4. Une fois reconnu par git, on peut enfin faire notre commit en y ajoutant à l'aide du marqueur m un message descriptif de l'action en cours: git commit -m "Ajout nomdemonfichier.md"

Voilà la liste d'actions pour un commit local.


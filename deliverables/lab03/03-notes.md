-Dans cette question on veut automatiser l’exécution du script lab2.sh à l’aide de GitHub Actions ,afin de vérifier que le Lab 2 pouvait être lancé dans un environnement CI sans intervention manuelle.     

-L'execution d'une première version du workflow a échoué ,L’erreur indiquait que certaines commandes utilisées dans le script n’étaient pas reconnues, ce qui signifiait que l’environnement d’exécution n’était pas correctement configuré.  "Error: Unable to locate executable file: pnpm"

-On a compris donc que le problème ne venait pas du script lui-même, mais de l’environnement GitHub Actions. Contrairement à un environnement local, GitHub Actions ne fournit pas automatiquement Node.js ni pnpm. 

-Cette étape souligne l’importance de la configuration explicite de l’environnement dans un pipeline CI, afin de garantir la reproductibilité et la fiabilité de l’exécution des scripts indépendamment du poste de développement.
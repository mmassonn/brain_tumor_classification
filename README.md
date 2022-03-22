# Classsification de différents types de tumeurs cérébrales

Veuillez trouver ci-dessus :

- Le fichier "brain_tumor_classification_Xception_TL.ipynb" qui met en place un modèle de réseau neuronal convolutif.

- Les fichiers "app.py", "base.html", "index.html", "main.css", "main.js" permettant le déployement de notre modèle.


### Contexte

Une tumeur cérébrale est une masse ou une croissance de cellules anormales dans le cerveau. Il existe de nombreux types de tumeurs cérébrales. Certaines sont non cancéreuses (bénignes) mais d'autres sont cancéreuses (malignes). Les options de traitement des tumeurs cérébrales dépendent du type de tumeur cérébrale dont vous souffrez, ainsi que de sa taille et de son emplacement.

L'objectif de ce projet est mettre en place classificateur d'images IRM permettant de différencier différents types de tumeurs cérébrales. Il s'inscrit dans une démarche d'aide médicale au diagnostique mais n'ayant pas été validé par des experts, il ne doit pas être utilisé à des fins médicales.

### Base de données

J'utilise un jeu de données provenant de Sartaj Bhuvaji, Ankita Kadam, Prajakta Bhumkar, Sameer Dedge, and Swati Kanchan, “Brain Tumor Classification (MRI).” Kaggle, 2020, doi: 10.34740/KAGGLE/DSV/1183165, où il y a 4 types de prédictions possibles.

1) **Tumeur gliome** : Le gliome est un type de tumeur qui se produit dans le cerveau et la moelle épinière. Les gliomes commencent dans les cellules de soutien gluantes (cellules gliales) qui entourent les cellules nerveuses et les aident à fonctionner.

2) **Tumeur meningiomatique** : le méningiome est une tumeur qui provient des méninges. Ces derniers sont les membranes qui entourent le cerveau et la moelle épinière. Bien qu'il ne s'agisse pas techniquement d'une tumeur cérébrale, elle est incluse dans cette catégorie car elle peut comprimer le cerveau, les nerfs et les vaisseaux adjacents. Le méningiome est le type de tumeur le plus courant qui se forme dans la tête.

3) **Tumeur pituitaire** : Les tumeurs hypophysaires sont des excroissances anormales qui se développent dans votre glande pituitaire. Certaines tumeurs hypophysaires entraînent une trop grande quantité d'hormones qui régulent des fonctions importantes de votre corps. Certaines tumeurs hypophysaires peuvent amener votre glande pituitaire à produire des niveaux inférieurs d'hormones.

4) **Absence de tumeur** : pas de tumeur


### Choix de la métrique

Je choisi l'exactitude comme métrique d'évaluation. Cette dernière indique le pourcentage de prédictions correctement réalisées. C’est un très bon indicateur global parce très simple à comprendre. 

### Choix du modèle

Les réseaux de neurones convolutifs (en anglais Convolutional neural networks), aussi connus sous le nom de CNNs, sont un type spécifique de réseaux de neurones qui sont généralement composés des couches suivantes : convolutifs, pooling et pleinement connectée. Ils sont trés utilisés dans le domaine du traitement de l'images.

Cependant la faible quantité de données ne permet pas l'entraînement du modèle à partir de zéro. C'est pourquoi j'utilise le transfer learning. Cette méthode vise à transférer les connaissances apprisent par un modèle pré-entraînésur un grand jeu de données, à une tache similaire. Il peut être vu comme la capacité d’un système à reconnaître et appliquer des connaissances et des compétences, apprises à partir de tâches antérieures, sur de nouvelles tâches ou domaines partageant des similitudes.

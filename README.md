# Classsification de tumeurs cérébrales

Veuillez trouver ci-dessus :

- Le fichier "brain_tumor_classification_Xception_TL.ipynb" qui met en place un modèle de réseau neuronal convolutif.

- Les fichiers "app.py", "base.html", "index.html", "main.css", "main.js" permettant le déployement de notre modèle.


### Contexte

Une tumeur cérébrale est une masse ou une croissance de cellules anormales dans le cerveau. Il existe de nombreux types de tumeurs cérébrales. Certaines sont non cancéreuses (bénignes) mais d'autres sont cancéreuses (malignes). Les options de traitement des tumeurs cérébrales dépendent du type de tumeur cérébrale dont un patient souffre, ainsi que de sa taille et de sa localisation.

L'objectif de ce projet est mettre en place un classificateur d'images IRM permettant de différencier des types de tumeurs cérébrales variés. Il s'inscrit dans une démarche d'aide médicale au diagnostique mais n'ayant pas été validé par des experts, il ne doit pas être utilisé à des fins médicales.

### Base de données (3264 patients)

J'utilise un jeu de données provenant de Sartaj Bhuvaji, Ankita Kadam, Prajakta Bhumkar, Sameer Dedge, and Swati Kanchan, “Brain Tumor Classification (MRI).” Kaggle, 2020, doi: 10.34740/KAGGLE/DSV/1183165, où il y a 4 types de prédictions possibles.

1) **Tumeur gliome** : Le gliome est un type de tumeur qui se développe dans le cerveau et la moelle épinière. Les gliomes se forment dans les cellules de soutien gluantes (cellules gliales) qui entourent les cellules nerveuses et les aident à fonctionner.

2) **Tumeur méningiomateuse** : le méningiome est une tumeur qui provient des méninges. Ces derniers sont les membranes qui entourent le cerveau et la moelle épinière. Bien qu'il ne s'agisse techniquement pas d'une tumeur cérébrale, elle est incluse dans cette catégorie car elle peut comprimer le cerveau, les nerfs et les vaisseaux adjacents. Le méningiome est le type de tumeur le plus courant qui se forme dans la boîte crânienne.

3) **Tumeur pituitaire** : Les tumeurs hypophysaires sont des excroissances anormales qui se développent dans la glande pituitaire. Certaines tumeurs hypophysaires entraînent une production trop importante d'hormones qui régulent des fonctions importantes du corps. Certaines tumeurs hypophysaires peuvent amener la glande pituitaire à produire des quantités d'hormones inférieures à la normale.

4) **Absence de tumeur** : pas de tumeur


### Choix de la métrique

Je choisis l'exactitude comme métrique d'évaluation. Cette dernière indique le pourcentage de prédictions correctes. C’est un très bon indicateur global par sa simplicité de compréhension.

### Choix du modèle

Les réseaux de neurones convolutifs (en anglais convolutional neural networks), aussi connus sous le nom de CNNs, sont un type spécifique de réseaux de neurones qui sont généralement composés des couches suivantes : convolutifs, pooling et pleinement connectées. Ils sont trés utilisés dans le domaine du traitement de l'images.

Cependant la faible quantité de données ne permet pas l'entraînement du modèle à partir de zéro. C'est pourquoi j'utilise le transfer learning. Cette méthode vise à transférer les connaissances apprises par un modèle pré-entraîné sur un grand jeu de données, vers une tâche similaire. Il peut être vu comme la capacité d’un système à reconnaître et appliquer des connaissances et compétences, apprises à partir de tâches antérieures, sur de nouvelles tâches ou domaines partageant des similitudes.

# Classsification de différents types de tumeurs cérébrales

L'objectif de ce projet est le développement d'un outils de classification d'images IRM de patients ayant une tumeur cérébrale. Ce projet s'inscrit dans une démarche d'aide médicale au diagnostique mais n'ayant pas été validé, il ne doit pas être utilisé à des fins médicales. 

Vous pouvez trouver ci-dessus différents fichiers. 

Le fichier "brain_tumor_classification_Xception_TL.ipynb" met en place un modèle de réseau neuronal convolutif.
Les fichiers "app.py", "base.html", "index.html", "main.css", "main.js" permettent le déployement fe notre modèle de réseau neuronal convolutif.


### Contexte

Une tumeur au cerveau est une masse ou une croissance de cellules anormales dans votre cerveau.

Il existe de nombreux types de tumeurs cérébrales. Certaines tumeurs cérébrales sont non cancéreuses (bénignes) et certaines tumeurs cérébrales sont cancéreuses (malignes). Les tumeurs cérébrales peuvent commencer dans le cerveau (tumeurs cérébrales primaires), ou le cancer peut commencer dans d'autres parties du corps et se propager au cerveau sous forme de tumeurs cérébrales secondaires (métastatiques).

La vitesse à laquelle une tumeur cérébrale se développe peut varier considérablement. Le taux de croissance ainsi que l'emplacement d'une tumeur au cerveau déterminent comment cela affectera le fonctionnement de votre système nerveux.

Les options de traitement des tumeurs cérébrales dépendent du type de tumeur cérébrale dont vous souffrez, ainsi que de sa taille et de son emplacement.

Afin de faciliter la prise en charge du patient, j'ai développé un outil permettant de classer les tumeurs cérébrales en fonction du type de tumeur.

**Types**

Il y a 3 types de tumeurs dans ce jeu de données:

-**Tumeur gliome** : Le gliome est un type de tumeur qui se produit dans le cerveau et la moelle épinière. Les gliomes commencent dans les cellules de soutien gluantes (cellules gliales) qui entourent les cellules nerveuses et les aident à fonctionner. Trois types de cellules gliales peuvent produire des tumeurs. Les gliomes sont classés selon le type de cellule gliale impliquée dans la tumeur, ainsi que les caractéristiques génétiques de la tumeur, ce qui peut aider à prédire le comportement de la tumeur au fil du temps et les traitements les plus susceptibles de fonctionner.

-**Tumeur meningiomatique** : le méningiome est une tumeur qui provient des méninges - les membranes qui entourent le cerveau et la moelle épinière. Bien qu'il ne s'agisse pas techniquement d'une tumeur cérébrale, elle est incluse dans cette catégorie car elle peut comprimer ou comprimer le cerveau, les nerfs et les vaisseaux adjacents. Le méningiome est le type de tumeur le plus courant qui se forme dans la tête.

La plupart des méningiomes se développent très lentement, souvent pendant de nombreuses années sans provoquer de symptômes. Mais parfois, leurs effets sur les tissus cérébraux, les nerfs ou les vaisseaux voisins peuvent entraîner une invalidité grave.

Les méningiomes surviennent plus fréquemment chez les femmes et sont souvent découverts à un âge plus avancé, mais ils peuvent survenir à tout âge.
Étant donné que la plupart des méningiomes se développent lentement, souvent sans signes ni symptômes significatifs, ils ne nécessitent pas toujours un traitement immédiat et peuvent être surveillés au fil du temps.

-**Tumeur pituitaire** : Les tumeurs hypophysaires sont des excroissances anormales qui se développent dans votre glande pituitaire. Certaines tumeurs hypophysaires entraînent une trop grande quantité d'hormones qui régulent des fonctions importantes de votre corps. Certaines tumeurs hypophysaires peuvent amener votre glande pituitaire à produire des niveaux inférieurs d'hormones.

La plupart des tumeurs hypophysaires sont des excroissances non cancéreuses (bénignes) (adénomes). Les adénomes restent dans votre glande pituitaire ou dans les tissus environnants et ne se propagent pas à d'autres parties de votre corps.

Il existe différentes options pour traiter les tumeurs hypophysaires, notamment l'ablation de la tumeur, le contrôle de sa croissance et la gestion de vos niveaux d'hormones avec des médicaments. Votre médecin peut recommander l'observation - ou une approche «attendre et voir».

-**Absence de tumeur** : pas de tumeur

### Base de données (License : CC BY-NC-SA 4.0)

Sartaj Bhuvaji, Ankita Kadam, Prajakta Bhumkar, Sameer Dedge, and Swati Kanchan, “Brain Tumor Classification (MRI).” Kaggle, 2020, doi: 10.34740/KAGGLE/DSV/1183165.

### Métrique

Ici, je choisi l'exactitude comme métrique d'évaluation. Cette dernière permet indique le pourcentage de bonnes prédictions. C’est un très bon indicateur global parce très simple à comprendre. 

### Modèle

Les réseaux de neurones convolutifs (en anglais Convolutional neural networks), aussi connus sous le nom de CNNs, sont un type spécifique de réseaux de neurones qui sont généralement composés des couches suivantes : convolutifs, pooling et pleinement connectée. Ils sont trés utilisés dans le domaine du traitement de l'images.

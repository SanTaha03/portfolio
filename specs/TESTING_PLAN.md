# Plan d'Intégration des Tests Unitaires

Ce document détaille la stratégie pour intégrer les tests unitaires dans le projet Portfolio (Next.js 16 + React 19 + Three.js + GSAP).

## 1. Choix de la Stack Technique

Pour un projet Next.js avec des composants React, la stack standard et la plus robuste est :
*   **Jest** : Framework de test JavaScript complet.
*   **React Testing Library (RTL)** : Bibliothèque pour tester les composants React en simulant les interactions utilisateur.
*   **Jest Environment JSDOM** : Environnement de test simulant un navigateur (nécessaire pour les tests React/DOM).
*   **ts-node** : Pour exécuter les fichiers de configuration TypeScript.

## 2. Analyse et Défis Spécifiques

### Composants 3D (`@react-three/fiber`)
Le projet utilise Three.js (dossier `src/components/three`). JSDOM ne supporte pas WebGL.
*   **Solution** : Il est impératif de mocker (`jest.mock`) les composants `@react-three/fiber` et `@react-three/drei` pour éviter que les tests ne plantent lors du rendu des scènes 3D (`Canvas`). Nous vérifierons simplement que le composant est appelé, sans tester le rendu WebGL réel.

### Animations (`gsap`)
Le projet utilise GSAP. Les animations peuvent ralentir les tests ou causer des comportements asynchrones inattendus.
*   **Solution** : Mocker GSAP pour qu'il n'exécute pas réellement les animations pendant les tests, ou s'assurer qu'elles se terminent immédiatement.

### Next.js 16 & React 19
React 19 et Next.js introduisent des composants Server Components (RSC) par défaut.
*   **Solution** : Les pages (`page.tsx`) sont souvent asynchrones (RSC). Testing Library gère bien les composants clients, mais tester un RSC nécessite une configuration spécifique ou simplement de mocker les composants enfants pour tester l'assemblage de la page.

## 3. Plan d'Action (Étapes d'Implémentation)

### Étape 1 : Installation des dépendances
Installer les paquets nécessaires en `devDependencies` :
```bash
npm install --save-dev jest @testing-library/react @testing-library/dom @testing-library/jest-dom jest-environment-jsdom ts-node @types/jest
```
*Note : Pour Next.js, nous aurons peut-être besoin d'ajouter une configuration spécifique dans `jest.config.ts` pour gérer le compilateur SWC/Babel de Next.js.*

### Étape 2 : Configuration de Jest
1.  Créer un fichier `jest.config.ts` à la racine pour configurer Next.js avec Jest (`next/jest`).
2.  Créer un fichier `jest.setup.ts` pour importer les matchers de `@testing-library/jest-dom` (ex: `toBeInTheDocument`).

### Étape 3 : Création des Mocks Globaux
Créer un dossier `__mocks__` si nécessaire ou configurer les mocks dans `jest.setup.ts` pour :
*   `ResizeObserver` (souvent manquant dans JSDOM).
*   `@react-three/fiber` (remplacer `Canvas` par une `div`).

### Étape 4 : Écriture des Tests
Nous allons créer les tests demandés :
1.  **Page d'accueil** : `src/app/__tests__/page.test.tsx` -> Vérifie que la page charge sans erreur et contient les sections principales.
2.  **Sections** : Créer des fichiers de test pour chaque section (Hero, About, etc.), par exemple dans `src/components/sections/__tests__/`. Vérifier que le contenu textuel critique est présent.

### Étape 5 : Intégration CI/CD (GitHub Actions)
1.  Ajouter le script `"test": "jest"` et `"test:ci": "jest --ci"` dans `package.json`.
2.  Modifier le workflow GitHub Actions pour exécuter les tests avant le build Docker.

---

## 4. Exemple de configuration CI (GitHub Actions)

Dans `.github/workflows/main.yml` (ou équivalent) :

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        run: npm ci
      - name: Run Unit Tests
        run: npm run test:ci
```

## 5. Prochaines actions pour vous (Assistant)

Si vous validez ce plan, je peux procéder à :
1.  Lancer l'installation des dépendances.
2.  Créer les fichiers de configuration (`jest.config.ts`, `jest.setup.ts`).
3.  Écrire le premier test pour la page d'accueil et la section Hero.
4.  Mettre à jour le workflow GitHub Actions.

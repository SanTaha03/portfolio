# Guide de Déploiement VPS (Docker)

Ce guide explique comment déployer votre portfolio sur un VPS (Virtual Private Server) en utilisant Docker.

## Prérequis

1.  Un VPS (Ubuntu 20.04/22.04 recommandé) avec accès SSH.
2.  Docker et Docker Compose installés sur le VPS.
3.  Git installé sur le VPS (optionnel, si vous clonez le repo).

## Méthode 1 : Déploiement via Git (Recommandé)

### 1. Connexion au VPS
Connectez-vous à votre serveur via SSH :
```bash
ssh user@votre-ip-vps
```

### 2. Installer Docker (si ce n'est pas déjà fait)
```bash
# Mettre à jour les paquets
sudo apt update
sudo apt install -y ca-certificates curl gnupg

# Ajouter la clé GPG officielle de Docker
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Ajouter le dépôt Docker
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Installer Docker Engine
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 3. Récupérer le projet
Clonez votre dépôt Git sur le serveur :
```bash
git clone https://github.com/votre-username/portfolio-taha.git
cd portfolio-taha/portfolio
```
*(Assurez-vous d'être dans le dossier contenant le `Dockerfile` et `docker-compose.yml`)*

### 4. Lancer l'application
Construisez et lancez le conteneur en arrière-plan :
```bash
sudo docker compose up -d --build
```

Votre site est maintenant accessible sur `http://votre-ip-vps:3000`.

---

## Méthode 2 : Transfert manuel (sans Git)

Si vous ne voulez pas utiliser Git sur le serveur, vous pouvez copier les fichiers nécessaires depuis votre machine locale.

### 1. Copier les fichiers
Depuis votre machine locale (dans le dossier `portfolio`) :
```bash
scp -r . user@votre-ip-vps:~/portfolio
```

### 2. Lancer Docker
Connectez-vous au VPS et lancez :
```bash
ssh user@votre-ip-vps
cd portfolio
sudo docker compose up -d --build
```

---

## Bonus : Configuration Production (Nginx + HTTPS)

Pour un site professionnel, il est recommandé d'utiliser un Reverse Proxy (Nginx) et un certificat SSL (Let's Encrypt).

### 1. Installer Nginx
```bash
sudo apt install -y nginx
```

### 2. Configurer Nginx
Créez un fichier de configuration :
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Collez ceci (remplacez `votre-domaine.com` par votre vrai domaine) :
```nginx
server {
    listen 80;
    server_name votre-domaine.com www.votre-domaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activez le site :
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 3. Activer HTTPS (Certbot)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d votre-domaine.com -d www.votre-domaine.com
```

Votre portfolio est maintenant sécurisé et accessible via `https://votre-domaine.com`.

# Deploy naar VPS

## Vereisten
- VPS met Docker en Docker Compose geïnstalleerd
- Git geïnstalleerd
- Port 3000 open (of gebruik een reverse proxy zoals Nginx/Caddy)

## Stappen

### 1. Clone de repository op je VPS
```bash
ssh user@je-vps-ip
cd /opt  # of een andere directory naar keuze
git clone https://github.com/SirSaxion/ra-demo-payload.git
cd ra-demo-payload
```

### 2. Update de environment variabelen in docker-compose.prod.yml
Bewerk `docker-compose.prod.yml` en pas `NEXT_PUBLIC_SERVER_URL` aan naar je VPS IP/domein.

### 3. Zet database permissions
```bash
chmod 666 ra-demo-payload.db
```

### 4. Start de applicatie
```bash
docker compose -f docker-compose.prod.yml up -d --build
```

### 4. Check de logs
```bash
docker-compose -f docker-compose.prod.yml logs -f
```

### 5. Stop de applicatie
```bash
docker-compose -f docker-compose.prod.yml down
```

## Updates deployen

```bash
cd /opt/ra-demo-payload
git pull
docker compose -f docker-compose.prod.yml up -d --build
```

## Met Nginx reverse proxy

Voeg dit toe aan je Nginx config:

```nginx
server {
    listen 80;
    server_name je-domein.nl;

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

Dan update je `NEXT_PUBLIC_SERVER_URL: "https://je-domein.nl"` in `docker-compose.prod.yml`.

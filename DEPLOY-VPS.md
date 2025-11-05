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

### 2. Maak een .env.production bestand
```bash
cat > .env.production << EOF
DATABASE_URI=file:./ra-demo-payload.db
PAYLOAD_SECRET=127578a4bd3ca59fb455680f
NEXT_PUBLIC_SERVER_URL=http://je-vps-ip:3000
NODE_ENV=production
EOF
```

### 3. Start de applicatie
```bash
docker-compose -f docker-compose.prod.yml --env-file .env.production up -d --build
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
docker-compose -f docker-compose.prod.yml --env-file .env.production up -d --build
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

Dan update je `NEXT_PUBLIC_SERVER_URL=https://je-domein.nl` in `.env.production`.

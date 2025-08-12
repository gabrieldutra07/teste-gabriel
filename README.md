# App Docker Swarm Demo

Aplicação Next.js simples para demonstrar deploy no Docker Swarm.

## 🚀 Deploy Local

```bash
# Instalar dependências
npm install

# Build da imagem
docker build -t app-docker-swarm-demo .

# Rodar com docker-compose
docker-compose up -d
```

## 🐳 Deploy no Docker Swarm

```bash
# 1. Build da imagem
docker build -t app-docker-swarm-demo .

# 2. Inicializar swarm (se não estiver ativo)
docker swarm init

# 3. Deploy do stack
docker stack deploy -c docker-stack.yml demo-stack

# 4. Verificar status
docker stack services demo-stack

# 5. Remover stack
docker stack rm demo-stack
```

## 📱 Acessar

- **Local**: http://localhost:3000
- **Swarm**: http://localhost:3000 (ou IP do servidor)

## 🛠️ Tecnologias

- Next.js 14
- TypeScript
- Tailwind CSS
- Docker
- Docker Swarm

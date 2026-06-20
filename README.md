# AMI Blog - Sistema de Gestão de Notícias e Vídeos

Um sistema completo de blog para a Associação de Mulheres Instruídas (AMI), desenvolvido com Next.js, TypeScript, TailwindCSS e PostgreSQL.

## Funcionalidades

- **Painel Administrativo**: Interface completa para gestão de conteúdo
- **Notícias**: Criação, edição e publicação de artigos
- **Vídeos**: Gestão de conteúdo em vídeo
- **Categorias**: Organização de conteúdo por categorias
- **Tags**: Sistema de etiquetas para melhor organização
- **Upload de Imagens**: Suporte para imagens de destaque
- **Busca e Filtros**: Sistema avançado de pesquisa
- **Design Responsivo**: Interface adaptável para todos os dispositivos

## Stack Tecnológico

- **Frontend**: Next.js 15 com App Router
- **Linguagem**: TypeScript
- **Estilos**: TailwindCSS com design customizado
- **Banco de Dados**: PostgreSQL com Prisma ORM
- **UI Components**: Componentes reutilizáveis com Radix UI
- **Ícones**: Lucide React

## Estrutura do Projeto

```
ami-gest/
|-- app/
|   |-- admin/           # Painel administrativo
|   |-- api/             # Endpoints da API
|   |-- page.tsx         # Página inicial
|   |-- layout.tsx       # Layout principal
|-- components/
|   |-- ui/              # Componentes UI básicos
|   |-- layout/          # Componentes de layout
|-- lib/
|   |-- prisma.ts        # Configuração do Prisma
|   |-- utils.ts         # Utilitários
|-- prisma/
|   |-- schema.prisma    # Schema do banco de dados
```

## Configuração Inicial

### 1. Variáveis de Ambiente

Crie um arquivo `.env.local` com as seguintes variáveis:

```env
DATABASE_URL="postgresql://postgres:2212@localhost:5432/ami_blog"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

### 2. Instalação das Dependências

```bash
npm install
```

### 3. Configuração do Banco de Dados

```bash
# Gerar o Prisma Client
npx prisma generate

# Rodar as migrações
npx prisma migrate dev
```

### 4. Executar o Servidor

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Endpoints da API

### Posts (Notícias)
- `GET /api/posts` - Listar todas as notícias
- `POST /api/posts` - Criar nova notícia
- `GET /api/posts/[id]` - Obter notícia específica
- `PUT /api/posts/[id]` - Atualizar notícia
- `DELETE /api/posts/[id]` - Excluir notícia

### Vídeos
- `GET /api/videos` - Listar todos os vídeos
- `POST /api/videos` - Criar novo vídeo
- `GET /api/videos/[id]` - Obter vídeo específico
- `PUT /api/videos/[id]` - Atualizar vídeo
- `DELETE /api/videos/[id]` - Excluir vídeo

### Categorias
- `GET /api/categories` - Listar todas as categorias
- `POST /api/categories` - Criar nova categoria

## Painel Administrativo

Acesse o painel administrativo em `/admin`:

- **Dashboard**: Visão geral do conteúdo
- **Notícias**: Gestão completa de artigos
- **Galeria**: Gestão de vídeos
- **Relatórios**: Estatísticas e métricas

## Design System

O projeto utiliza um design system inspirado na identidade visual da AMI:

- **Cores Primárias**: Rosa (#b20072) e variantes
- **Cores Secundárias**: Azuis e neutros
- **Tipografia**: Inter font family
- **Componentes**: Design consistente e acessível

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto é propriedade da Associação de Mulheres Instruídas (AMI).

## Deploy

A forma mais fácil de fazer deploy é usar a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

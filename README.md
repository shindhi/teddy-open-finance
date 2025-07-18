# 🚀 Teste - Aplicação React com Dashboard

Uma aplicação moderna React + TypeScript com sistema de autenticação, dashboard administrativo e gerenciamento de usuários/clientes, desenvolvida com as melhores práticas e tecnologias de ponta.

## 📋 Sobre o Projeto

Esta aplicação oferece uma interface completa para gerenciamento de dados com:

- **Sistema de Autenticação**: Login seguro com proteção de rotas
- **Dashboard Administrativo**: Painel principal com métricas e controles
- **Gestão de Clientes**: Interface para gerenciar clientes selecionados
- **API RESTful**: Integração com backend para operações CRUD

## 🛠️ Stack Tecnológica

### Core

- **React 19** - Biblioteca UI moderna com recursos avançados
- **TypeScript 5.8** - Tipagem estática para maior segurança
- **Vite 7** - Build tool ultrarrápido com HMR

### UI/UX

- **Tailwind CSS 4** - Framework CSS utilitário moderno
- **shadcn/ui** - Componentes React acessíveis e customizáveis
- **Radix UI** - Primitivos UI headless de alta qualidade
- **Lucide React** - Ícones SVG consistentes e modernos
- **Class Variance Authority** - Gerenciamento de variações de componentes

### Gerenciamento de Estado

- **Zustand** - State management leve e performático
- **TanStack Query** - Cache inteligente e sincronização de servidor
- **React Hook Form** - Formulários performáticos com validação
- **Zod** - Schema validation type-safe

### Roteamento e Navegação

- **React Router DOM 7** - Roteamento declarativo avançado
- **Rotas Protegidas** - Sistema de autenticação baseado em componentes

### HTTP e API

- **Ky** - Cliente HTTP moderno baseado em Fetch API
- **Tipagem Completa** - Request/Response tipados com TypeScript

### Qualidade de Código

- **Biome** - Linter e formatter ultrarrápido
- **Ultracite** - Regras de qualidade e acessibilidade rigorosas
- **TypeScript Strict Mode** - Configuração rigorosa de tipos

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Recursos estáticos (imagens, ícones)
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── auth-redirect.tsx
│   ├── protected-route.tsx
│   ├── header.tsx
│   ├── sidebar.tsx
│   └── pagination.tsx
├── const/              # Constantes da aplicação
├── hooks/              # Hooks customizados
│   ├── useAuth.ts
│   └── use-mobile.ts
├── http/               # Camada de comunicação HTTP
│   ├── hooks/          # React Query hooks
│   ├── services/       # Serviços de API
│   │   ├── create-user.ts
│   │   ├── get-users.ts
│   │   ├── update-user.ts
│   │   └── delete-user.ts
│   └── types/          # Tipos TypeScript para API
│       ├── user.ts
│       ├── *-request.ts
│       └── *-response.ts
├── lib/                # Utilitários e configurações
│   ├── api.ts          # Configuração do cliente HTTP
│   └── utils.ts        # Funções utilitárias
├── pages/              # Páginas da aplicação
│   ├── _layouts/       # Layouts compartilhados
│   ├── dashboard/      # Página do dashboard
│   ├── selected-customers/ # Gestão de clientes
│   └── login.tsx       # Página de login
├── stores/             # Stores Zustand
│   └── selected-users-store.ts
├── utils/              # Utilitários gerais
├── app.tsx             # Componente raiz
├── main.tsx            # Entry point
└── routes.tsx          # Configuração de rotas
```

## 🎯 Principais Funcionalidades

### 🔐 Sistema de Autenticação

- Login seguro com validação
- Proteção automática de rotas
- Redirecionamento inteligente
- Persistência de sessão

### 📊 Dashboard

- Interface administrativa completa
- Métricas e indicadores visuais
- Navegação responsiva
- Sidebar colapsável

### 👥 Gestão de Usuários/Clientes

- CRUD completo de usuários
- Seleção e gerenciamento de clientes
- Paginação otimizada
- Busca e filtragem

### 🎨 Interface Moderna

- Design system consistente
- Componentes acessíveis (WCAG 2.1)
- Responsividade total

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento com hot reload
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Linting e formatação (Biome)
npx ultracite format
npx ultracite lint
```

## 💻 Instalação e Uso

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Configuração

1. **Clone o repositório**

```bash
git clone [url-do-repositorio]
cd teste
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure variáveis de ambiente**

```bash
# Crie um arquivo .env.local
cp .env.example .env.local
```

4. **Execute em desenvolvimento**

```bash
npm run dev
```

5. **Acesse a aplicação**

```
http://localhost:5173
```

## 🏗️ Padrões e Arquitetura

### Organização de Código

- **Separation of Concerns**: Separação clara entre UI, lógica e dados
- **Component-Based**: Arquitetura baseada em componentes reutilizáveis
- **Type-First**: TypeScript em primeiro lugar para maior segurança
- **API Layer**: Camada bem estruturada para comunicação HTTP

### Convenções de Nomenclatura

- **Componentes**: PascalCase (`UserCard.tsx`)
- **Hooks**: camelCase iniciando com 'use' (`useAuth.ts`)
- **Stores**: kebab-case com sufixo (`user-store.ts`)
- **Tipos**: PascalCase (`UserRequest.ts`)

### Performance

- **Code Splitting**: Carregamento otimizado de componentes
- **React Query**: Cache inteligente de dados
- **Vite**: Build otimizado para produção
- **Tree Shaking**: Eliminação de código não utilizado

### Acessibilidade

- **WCAG 2.1**: Conformidade com padrões de acessibilidade
- **Semantic HTML**: Uso correto de elementos semânticos
- **Keyboard Navigation**: Navegação por teclado completa
- **Screen Reader**: Suporte para leitores de tela

### Qualidade de Código

- **Ultracite**: Regras rigorosas de qualidade e acessibilidade
- **Type Safety**: 100% tipado com TypeScript
- **Zero Config**: Configuração mínima e padronizada
- **AI-Friendly**: Código otimizado para colaboração com IA

## 🔧 Configurações Avançadas

### TypeScript

- Configuração estrita habilitada
- Path mapping configurado (`@/*`)
- Tipos separados por domínio

### Tailwind CSS

- Configuração v4 com plugins
- Design system customizado
- CSS Variables para temas

### Vite

- Plugins otimizados
- Alias configurados
- Build otimizado

## 📱 Responsividade

A aplicação é totalmente responsiva, adaptando-se perfeitamente a:

- 📱 **Mobile**: 320px - 768px
- 📱 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1024px+

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

**Desenvolvido com ❤️ usando as melhores práticas e tecnologias modernas**

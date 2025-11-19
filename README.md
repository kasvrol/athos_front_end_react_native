# Athos

Athos é um aplicativo móvel para conectar pessoas através de eventos esportivos. Encontre e participe de jogos, organize suas próprias equipes, campeonatos e conheça outros atletas na sua região.

## 😊 Motivação

Este repositório faz parte trabalho de conclusão de curso para o curso de Técnologo em Análise e Desenvolvimento de Sistemas

## ✨ Funcionalidades

- Autenticação de Usuário: Telas de Login e Cadastro com validação de formulário.
- Tela Inicial (Home): Apresenta eventos recomendados e um menu de acesso para as principais funcionalidades como Eventos, Equipes e Campeonatos.
- Listagem de Eventos: Uma tela dedicada para visualizar os próximos eventos, com a funcionalidade de filtrar e ordenar.
- Perfil de Usuário: Uma área para o usuário ver suas informações, acessar configurações e fazer logout do aplicativo.
- Navegação por Abas: Navegação principal utilizando abas na parte inferior da tela.
- Notificações Push: Sistema de notificações em tempo real para eventos e atualizações.
- Gerenciamento de Endereço: Busca de CEP e seleção de bairros para localização do usuário.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- React Native: Estrutura para desenvolvimento de aplicativos nativos.
- Expo: Plataforma e conjunto de ferramentas para construir e implantar aplicativos React Native.
- Expo Router: Roteamento de arquivos para navegação.
- TypeScript: Superset do JavaScript que adiciona tipagem estática.
- Tamagui: Sistema de design e componentes UI com suporte a temas.
- Zustand: Gerenciamento de estado leve.
- React Hook Form: Gerenciamento de formulários com validação.
- Zod: Biblioteca de declaração e validação de esquemas para TypeScript.
- Expo Notifications: Sistema de notificações push.
- Expo Google Fonts: Fontes personalizadas (Oswald).

## 📦 Pré-requisitos

- Node.js (v22 ou superior)
- npm ou yarn
- Expo CLI (`npm install -g expo-cli`)
- Android Studio ou Xcode (para emulador)

## 🔧 Instalação

1. Clone o repositório
```bash
git clone <seu-repositorio>
cd athos
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o projeto
```bash
npm start
```

4. Abra em um emulador ou dispositivo
```bash
# Android
npx expo run:android

# iOS
npx expo run:ios
```

## 📂 Estrutura do Projeto

athos/
├── app/
│   ├── (auth)/          # Telas de autenticação
│   ├── (tabs)/          # Navegação principal com abas
│   └── _layout.tsx      # Layout raiz
├── components/
│   ├── atoms/           # Componentes pequenos reutilizáveis
│   ├── organisms/       # Componentes complexos
│   └── tamagui-provider.tsx
├── store/               # Gerenciamento de estado (Zustand)
├── hooks/               # Custom hooks
├── middleware/          # Funções de middleware/API
├── utils/               # Utilitários e tipos
└── mock/         

## 🔐 Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto:

```bash
EXPO_PUBLIC_API_URL=seu-url-api
EXPO_PUBLIC_NOTIFICATIONS_KEY=sua-chave-notificacoes
```


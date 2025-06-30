# Athos
Athos é um aplicativo móvel para conectar pessoas através de eventos esportivos. Encontre e participe de jogos, organize suas próprias equipes, campeonatos e conheça outros atletas na sua região.

## 😊 Motivação
Este repositório faz parte trabalho de conclusão de curso para o curso de Técnologo em Análise e Desenvolvimento de Sistemas 

## ✨ Funcionalidades
Com base na estrutura atual do protótipo, as seguintes funcionalidades estão presentes:

- Autenticação de Usuário: Telas de Login e Cadastro com validação de formulário.
- Tela Inicial (Home): Apresenta eventos recomendados e um menu de acesso para as principais funcionalidades como Eventos, Equipes e Campeonatos.
- Listagem de Eventos: Uma tela dedicada para visualizar os próximos eventos, com a funcionalidade de filtrar e ordenar.
- Perfil de Usuário: Uma área para o usuário ver suas informações, acessar configurações e fazer logout do aplicativo.
- Navegação por Abas: Navegação principal utilizando abas na parte inferior da tela.

## 🚀 Tecnologias Utilizadas
O projeto foi construído utilizando as seguintes tecnologias:

- React Native: Estrutura para desenvolvimento de aplicativos nativos.
- Expo: Plataforma e conjunto de ferramentas para construir e implantar aplicativos React Native.
- TypeScript: Superset do JavaScript que adiciona tipagem estática.
- React Native Paper: Biblioteca de componentes de UI baseada no Material Design.
- React Hook Form: Gerenciamento de formulários com validação.
- Zod: Biblioteca de declaração e validação de esquemas para TypeScript.

## 📦 Pré-requisitos

- Node.js:
- Git
- Expo CLI
- Aplicativo Expo Go no seu smartphone

## ▶️ Como Rodar o Projeto
Clone o repositório:
```bash
git clone https://github.com/kasvrol/athos_front_end_react_native
cd athos_front_end_react_native
```

Instale as dependências:
```bash
yarn install
```

Execute o projeto:
```bash
yarn start
```

Acesse o aplicativo:
Após executar o comando acima, um QR code será exibido no seu terminal. Abra o aplicativo Expo Go no seu celular e escaneie o QR code para iniciar o aplicativo. Você também pode optar por executá-lo em um simulador de iOS ou Android.

## 📂 Estrutura de Arquivos
O projeto utiliza uma estrutura de pastas organizada para facilitar a manutenção e escalabilidade.
```bash
├── app/                  # Diretório principal da aplicação (todas as rotas e telas)
│   ├── (tabs)/           # Grupo de rotas para a navegação por abas
│   │   ├── _layout.tsx   # Layout e configuração das abas
│   │   ├── home.tsx      # Tela principal
│   │   └── ...           # Outras telas das abas
│   ├── components/       # Componentes React reutilizáveis
│   ├── constants/        # Constantes, como cores e estilos
│   ├── pages/            # Telas que não fazem parte da navegação principal (ex: login)
│   ├── utils/            # Funções utilitárias, hooks e esquemas de validação
│   └── _layout.tsx       # Layout raiz da aplicação
├── assets/               # Arquivos estáticos como imagens e fontes
├── node_modules/         # Dependências do projeto
└── package.json          # Definições e scripts do projeto
```
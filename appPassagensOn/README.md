# ✈️ App Passagens (entrando em fase de desenvolvimento)

Aplicativo planejado com React Native focado na visualização de promoções de voos, autenticação de usuários e reserva de passagens.

## 🚀 Tecnologias utilizadas

- React Native CLI
- Firebase Authentication
- Firebase Realtime Database / Firestore
- Firebase Storage (upload de imagem)
- Modal, Carousel, Realtime Updates

## 📱 Funcionalidades

- ✅ Autenticação com e-mail e senha (Firebase)
- 📸 Upload de imagem de perfil do usuário
- 🛫 Carrossel com promoções estáticas de voos (dados do Firebase)
- 📍 Exibição de cards com:
  - Cidade de origem e destino
  - Data da viagem
  - Valor da promoção
- 🔎 Modal com detalhes de cada voo ao clicar no botão "Ver Oferta"
- 🎫 Tela de busca por ID da oferta para consultar passagens compradas ou reservadas

## 🔧 Em desenvolvimento

- Integração total com Firebase
- CRUD das promoções via painel
- Tela de perfil com imagem do usuário
- Responsividade geral

## 🗂 Organização

- 🎨 Protótipos no Figma: https://www.figma.com/design/KOEdw3qwqvsPHJ9kzmLr94/appPassagens?node-id=0-1&t=b8CqzL8egaInsG2i-1
- 🔧 Tarefas organizadas via Trello: https://trello.com/invite/b/68437d11a6d3474c8d9f15e2/ATTI6111a4d3b56d01971ce3096fec938eb9219BF494/apppassagenson

## 📦 Instalação local

```bash
git clone https://github.com/JuniorGCY/appPassagensOn.git
cd app-passagens
npm install
npx react-native run-android

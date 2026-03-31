# CRUDApp

Aplicativo CRUD (Create, Read, Update, Delete) com backend local (`json-server`) e frontend em React Native (Expo).

## 🔍 Descrição do projeto
O objetivo deste projeto é oferecer um app móvel simples para gerenciar registros de pessoas com operações de criação, leitura, edição e exclusão. A arquitetura é dividida em backend leve com `json-server` e front-end em React Native com Expo.

## 🧩 Tecnologias utilizadas
- Backend: `json-server`, Node.js, `cloudflared`
- Frontend: Expo / React Native
- Roteamento: `@react-navigation`
- HTTP: `axios`
- Data/Hora: `date-fns`, `@react-native-community/datetimepicker`

## 🧠 Explicação da solução
1. `backend/db.json` guarda os dados em formato JSON e expõe REST endpoints automáticos.
2. a biblioteca cloudflared cria um tunnel para que a API seja acessível pelo celular.
3. `frontend/src/servers/crud.js` usa Axios para conectar com o backend e executar GET/POST/PUT/DELETE.
4. `frontend/src/screens/HomeScreen.js` carrega e exibe a lista de itens.
5. `frontend/src/screens/AddEditScreen.js` oferece formulário para inclusão/edição, com validação básica.
6. `frontend/src/components/cardPersonal.js` e `dateInput.js` encapsulam UI reutilizável de item e seleção de data.
7. `.env` contém `EXPO_PUBLIC_URL` para flexibilidade entre ambiente local e deployment.

## 🛠 Instalação
### 1) Pré-requisitos
- Node.js (versão estável)
- npm ou yarn
- Expo CLI (`npm install -g expo-cli`)
- Emulador Android/iOS ou Expo Go no dispositivo físico

### 2) Backend
1. Acesse a pasta `backend`:
   - `cd backend`
2. Instale `json-server` globalmente (caso não tenha):
   - `npm install -g json-server`
3. Execute servidor:
   - `npx json-server --watch db.json --port 3000`
4. Crie o tunnel:
   - `npx cloudflared tunnel --url http://localhost:3000`

### 3) Frontend
1. Acesse a pasta `frontend`:
   - `cd frontend`
2. Instale dependências:
   - `npm install` ou `yarn install`
3. Configure API URL em `.env`:
   - `EXPO_PUBLIC_URL=url_criada_pelo_cloudflared`

## ▶️ Execução
1. Inicie backend:
   - `cd backend`
   - `npx json-server --watch db.json --port 3000`
   - `npx cloudflared tunnel --url http://localhost:3000`
2. Inicie frontend:
   - `cd frontend`
   - `npx expo start`
3. Execute no emulador ou no Expo Go (QRCode).

## 🗂️ Estrutura de pastas
- `backend/db.json`
- `backend/package.json`
- `frontend/App.js`
- `frontend/.env`
- `frontend/src/screens/HomeScreen.js`
- `frontend/src/screens/AddEditScreen.js`
- `frontend/src/components/cardPersonal.js`
- `frontend/src/components/dateInput.js`
- `frontend/src/servers/crud.js`
- `frontend/src/styles/styles.js`

## ✅ Como o problema foi resolvido
- Dividiu-se o sistema em duas camadas: API local e interface.
- Usou `json-server` para mockar CRUD sem backend complexo.
- Usou `cloudflared` para criar um tunnel para a API.
- Usou Axios para abstrair requisições HTTP.
- Separou a lógica de UI (telas e componentes) da lógica de dados (servidor e chamadas API).
- Criação/edição em tela dedicada e leitura na tela principal com navegação de stack.

## 🎥 Demonstração
Assista à demonstração: [Vídeo do CRUDApp](https://youtube.com/shorts/mZAthq5Xnig?feature=share)

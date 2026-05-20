# 🌩️ Weather Planner App

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5-FF69B4?style=for-the-badge&logo=daisyui&logoColor=white)

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)

![OpenWeather](https://img.shields.io/badge/API-OpenWeather-orange?style=flat-square)
![React Compiler](https://img.shields.io/badge/React_Compiler-Enabled-blue?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success?style=flat-square)

</div>

---

<div align="center">

### 🌤️ Planejamento inteligente baseado no clima

Aplicação moderna de previsão climática com engine visual dinâmica, arquitetura modular e experiência imersiva.

</div>

---

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Features](#features)
- [Dynamic Visual Engine](#dynamic-visual-engine)
- [Arquitetura](#arquitetura)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Scripts](#scripts)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Boas Práticas](#boas-práticas)
- [Preview Visual](#preview-visual)
- [Roadmap](#roadmap)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Autor](#autor)

---

## Sobre o Projeto

O **ClimApp** é uma aplicação moderna de previsão do clima e planejamento visual desenvolvida com foco em:

- ✨ Experiência imersiva
- ⚡ Arquitetura modular pronta para expansão
- 🌙 Detecção automática de dia/noite
- 🌤️ Temas dinâmicos baseados no clima
- 🌧️ Sistema visual de partículas
- 🎨 Interface glassmorphism
- ⚡ Engine visual reativa
- 📅 Evolução futura para agenda inteligente integrada

O projeto utiliza dados climáticos em tempo real para transformar completamente a interface conforme:

- Condição climática
- Período do dia
- Efeitos visuais
- Partículas animadas
- Backgrounds dinâmicos
- Ícones contextuais

---

## Features

### 🌤️ Clima em tempo real

- Busca por cidade
- Dados climáticos atualizados
- Temperatura
- Sensação térmica
- Umidade
- Velocidade do vento

---

### 📅 Forecast Inteligente

- Previsão para 5 dias
- Filtro otimizado para horários estratégicos
- Cards responsivos

---

### 🎨 Sistema Visual Dinâmico

Cada condição climática altera:

- Background
- Overlay
- Glassmorphism
- Ícones
- Animações
- Partículas
- Glow
- Contraste
- Tons da interface

---

### 🌌 Modo Dia & Noite

O app detecta automaticamente:

- 🌞 Sunrise
- 🌙 Sunset

E altera o tema dinamicamente.

---

## Dynamic Visual Engine

A Sprint 7 introduziu um sistema modular completo de renderização visual climática.

### Estrutura

```bash

src/themes/

├──  weatherAnimations.ts
├──  weatherBackgrounds.ts
├──  weatherIcons.ts
├──  weatherParticles.ts
├──  weatherTheme.ts
├──  weatherTheme.types.ts
└──  weatherThemeResolver.ts

````

---

### 🌧️ Sistema de Partículas

preparado para:

- Rain
- Drizzle
- Snow
- Clouds
- Thunderstorm
- Clear

---

### ☁️ Sistema de Effects

```bash

src/components/effects/

├──  CloudsEffect.tsx
├──  RainEffect.tsx
├──  SnowEffect.tsx
└──  WeatherParticles.tsx

```

---

## Arquitetura

O projeto segue uma arquitetura modular baseada em:

- Domain Driven Frontend
- Theme Resolver Pattern
- Visual Engine Architecture
- Component Driven Design
- Typed Theme System
- Dynamic UI Composition
- Service Layer Pattern
- Modular Effects Engine

---

### Fluxo Visual

```text
Weather API
    ↓
Theme Resolver
    ↓
Visual Engine
    ↓
Animations + Effects + Particles
    ↓
Dynamic UI Rendering
```

---

## Tecnologias

### Frontend

- ⚛️ React 19
- 🔷 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 🧩 Lucide React
- 🧠 ESLint React Compiler Rules

---

### APIs

- ☁️ OpenWeather API

---

## Estrutura do Projeto

```bash

src/

├── assets/
├── components/
├── pages/
├── services/
├── themes/
├── types/
└── utils/

```

---

## Instalação

### 1️⃣ Clone o projeto

```bash

git  clone  https://github.com/seu-usuario/weather-planner-app.git

```

---

### 2️⃣ Acesse a pasta

```bash

cd weather-planner-app

```

---

### 3️⃣ Instale as dependências

```bash

npm install

```

---

### 4️⃣ Configure o ambiente

Crie um arquivo:

```bash

.env

```

---

### 5️⃣ Adicione sua API KEY

```env

VITE_OPENWEATHER_API_KEY=YOUR_API_KEY

```

---

### 6️⃣ Execute o projeto

```bash

npm run dev

```

---

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint

```

---

## Variáveis de Ambiente

| Variável                   | Descrição                |
| -------------------------- | ------------------------ |
| `VITE_OPENWEATHER_API_KEY` | Chave da API OpenWeather |

---

## Boas Práticas

### 🔥 React 19 Ready

O projeto segue os novos padrões do React Compiler:

- ✅ Sem impure render
- ✅ Sem refs durante render
- ✅ Sem setState desnecessário
- ✅ Sem Math.random() no JSX
- ✅ Componentes determinísticos
- ✅ Effects previsíveis
- ✅ Arquitetura modular

---

## Preview Visual

### ☀️ Clear Weather

- Background quente
- Glow dourado
- Ícones solares
- Gradiente animado

---

### 🌧️ Rain

- Tons frios
- Blur intenso
- Atmosfera escura
- Partículas climáticas

---

### ⛈️ Thunderstorm

- Tons violeta
- Efeito dramático
- Contraste elevado

---

## Roadmap

### ✅ Sprint 1 — Base Setup

- Estrutura inicial
- React + Vite + TS

### ✅ Sprint 2 — Weather API

- Integração OpenWeather
- Busca por cidade
- Estrutura inicial de services
- Tipagem dos dados climáticos
- Tratamento básico de erros

#### 🌎 City Alias Dictionary

Implementação de um sistema de normalização inteligente de cidades:

- Tradução automática PT → EN
- Correção de aliases comuns
- Padronização das buscas
- Melhor compatibilidade com a API

Exemplos:

```ts

Moscou      → Moscow
Genebra     → Geneva
Londres     → London
Tóquio      → Tokyo

```

---

### ✅ Sprint 3 — Forecast System

- Forecast de 5 dias
- Cards responsivos

### ✅ Sprint 4 — Theme Engine

- Sistema de temas
- Day/Night Mode

### ✅ Sprint 5 — Responsive UI

- Layout responsivo
- Melhorias visuais

### ✅ Sprint 6 — Theme Refactor

- Resolver modular
- Theme abstraction

### ✅ Sprint 7 — Dynamic Visual Engine

- Partículas
- Overlays
- Effects
- Background engine
- Visual Resolver

---

## Contribuição

Contribuições são bem-vindas.

```bash

# Fork
# Create branch
git  checkout  -b  feature/my-feature

# Commit
git  commit  -m  "feat: add new feature"

# Push
git  push  origin  feature/my-feature

```

## Licença

Este projeto está sob a licença MIT.

---

## Autor

<h3 align="center">Mauro Toshiuki Sakugawa</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/mauro-toshiuki-sakugawa-802805127/">
    <img height="28" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/maurosakugawa">
    <img height="28" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

*Projeto desenvolvido com foco em arquitetura frontend moderna, experiência visual dinâmica e escalabilidade para futuras integrações.*

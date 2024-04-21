# RecipeBook

RecipeBook je webová aplikace pro správu a sdílení receptů.

## Jak spustit aplikaci

1. **Nainstalujte závislosti:**
npm install

markdown
Copy code

2. **Spusťte server:**
npm start

markdown
Copy code

3. **Otevřete aplikaci ve vašem webovém prohlížeči:**
[http://localhost:3000](http://localhost:3000)

## Endpointy

### Seznamy receptů

- **GET /recipe-lists/**
- Popis: Získání všech seznamů receptů
- **GET /recipe-lists/:id**
- Popis: Získání seznamu receptů podle ID
- **POST /recipe-lists/**
- Popis: Vytvoření nového seznamu receptů
- **PUT /recipe-lists/:id**
- Popis: Aktualizace seznamu receptů
- **DELETE /recipe-lists/:id**
- Popis: Smazání seznamu receptů

### Recepty

- **GET /recipes/**
- Popis: Získání všech receptů
- **GET /recipes/:id**
- Popis: Získání receptu podle ID
- **POST /recipes/**
- Popis: Vytvoření nového receptu
- **PUT /recipes/:id**
- Popis: Aktualizace receptu
- **DELETE /recipes/:id**
- Popis: Smazání receptu

## Spuštění testů

Testy můžete spustit pomocí příkazu:

npm test

bash
Copy code

## Konfigurace

Pro spuštění aplikace je nutné mít nastavené prostředí v souboru `.env`. Zde je příklad konfigurace:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/recipebook
JWT_SECRET=your_jwt_secret

Copy code
Tento README soubor obsahuje základní informace o aplikaci, jak ji spustit, seznam dostupných endpointů a instrukce pro spuštění testů a konfiguraci. Můžeš ho dále rozšířit o další informace podle potřeby.

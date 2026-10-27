# CORS-demo med Express

Det här är en enkel app som visar hur en HTML-sida kan hämta kunddata från ett Express-API med hjälp av `fetch()` och CORS. API:et returnerar testdata och använder ingen databas.

## Starta appen efter nedladdning

1. Installera **Node.js** och öppna den nedladdade projektmappen i **VS Code**.
2. Öppna terminalen i VS Code och kör:
   ```bash
   npm install
   ```
3. Starta API:et:
   ```bash
   node server.js
   ```
4. Öppna `public-test/index.html` med tillägget **Live Server** i VS Code.
5. Klicka på **Hämta kunder** på webbsidan för att visa kunderna från API:et.

API:et körs på `http://localhost:3000`. Webbsidan ska öppnas via Live Server på `http://127.0.0.1:5500/public-test/index.html`, eftersom den adressen är tillåten i projektets CORS-inställning.

**Tips:** Du kan testa API:et direkt på `http://localhost:3000/api/customers`. Stoppa servern med `Ctrl + C` i terminalen.

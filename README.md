# fast-food

## O aplikaciji

Ovo je web aplikacija na kojoj se može pronaći ponuda (fiktivnog) fast food restorana. U razvoju aplikacije koristio se programski jezik JavaScript,
Node.js u backend dijelu, a u frontend dijelu React.js.

## Pokretanje

Aplikaciju možete pregledati na sljedećem linku: `https://fast-food-8a0f.onrender.com/`.

Međutim, aplikacija se može klonirati i pokrenuti na vlastitom računalu.
Evo koraka za kloniranje i pokretanje web aplikacije:

1. Kloniranje repozitorija:

   - Otvorite terminal ili komandnu liniju.
   - Navigirajte do direktorija u kojem želite smjestiti vašu aplikaciju.
   - Izvršite sljedeću naredbu: `git clone https://github.com/lovgoru/fast-food.git`

2. Dodavanje .env u backend dijelu:

   - Otvorite terminal ili komandnu liniju.
   - Navigirajte do direktorija `backend` u kloniranoj aplikaciji: `cd backend`.
   - Kreirajte datoteku imena `.env` pomoću naredbe touch .env
   - U .env datoteci definirajte varijablu MONGODB_URI s adresom za spajanje na bazu.

3. Pokretanje backend servera:

   - Otvorite terminal ili komandnu liniju.
   - Navigirajte do direktorija `backend` u kloniranoj aplikaciji: `cd backend`.
   - Instalirajte ovisnosti pokretanjem naredbe `npm install`.
   - Pokrenite backend server pomoću naredbe `nodemon app`.

4. Pokretanje frontend aplikacije:
   - Otvorite novi terminal ili komandnu liniju (bez zatvaranja terminala za backend).
   - Navigirajte do direktorija `frontend` u kloniranoj aplikaciji: `cd frontend`.
   - Instalirajte ovisnosti pokretanjem naredbe `npm install`.
   - Pokrenite frontend aplikaciju pomoću naredbe `npm start`. To će pokrenuti razvojni server i otvoriti aplikaciju u vašem web pregledniku.

Sada biste trebali imati backend server pokrenut na jednom terminalu i frontend aplikaciju pokrenutu na drugom terminalu. Ako je sve ispravno konfigurirano, možete pristupiti web aplikaciji preko URL-a koji je prikazan u konzoli ili putem `http://localhost:3000`.

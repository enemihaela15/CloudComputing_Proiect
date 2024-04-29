APLICATIE PENTRU PROGRAMARI MEDICALE

_**1.INTRODUCERE**_

Aplicatia pentru programari medicale le ofera clientilor posibilitatea de a programa consultatii si tratamente. Utilizatorii pot accesa meniul serviciilor medicale disponibile si pot face programari online. De asemenea, ei pot vizualiza programarile anterioare si informatiile aferente acestora. Toate datele au fost gestionate prin intermediul unei baze de date remote in Cloud, care are la baza tehnologia **MONGODB**. Pentru dezvoltarea backend-ului am utilizat **NextJS** in combinatie cu un server express si un API pentru operatiile CRUD realizate la nivelul bazei de date. Interfata aplicatiei a fost realizata in **React**. Aplicatia finala a fost publicata folosind platforma de Cloud **VERCEL**.

  
_**2.METODE HTTP**_

Pentru serviciile medicale disponibile pe aplicatoe:
a) GET: Get medical service: Aceasta metoda nu primeste niciun parametru si returneaza toate serviciile medicale salvate in baza de date.
b) POST: Add a medical service: Aceasta metoda cere prin intermediul corpului cererii 4 informatii: numele serviciului, specialitatea, descrierea, pretul si durata. Pe baza acestora se vor crea un nou id si un nou document, acesta din urma adaugandu-se in colectia din baza de date.
c) PUT: Update a medical service: Aceasta metoda primeste ca parametru id-ul unui serviciu care urmeaza sa fie modificat in colectia din baza de date.
d) DELETE: Delete a medical service: Aceasta metoda primeste ca parametru id-ul unui serviciu care se doreste a fi sters din colectia din baza de date.

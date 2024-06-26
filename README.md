_**APLICATIE PENTRU PROGRAMARI MEDICALE**_

_**1.INTRODUCERE**_

Aplicatia pentru programari medicale le ofera clientilor posibilitatea de a programa consultatii si tratamente. Utilizatorii pot accesa meniul serviciilor medicale disponibile si pot face programari online. De asemenea, ei pot vizualiza programarile anterioare si informatiile aferente acestora. Toate datele au fost gestionate prin intermediul unei baze de date remote in Cloud, care are la baza tehnologia **MONGODB**. Pentru dezvoltarea backend-ului am utilizat **NextJS** in combinatie cu un server express si un API pentru operatiile CRUD realizate la nivelul bazei de date. Interfata aplicatiei a fost realizata in **React**. Aplicatia finala a fost publicata folosind platforma de Cloud **VERCEL**.

**_2.MONGODB API_**

Baza de date este stocata in cloud folosing MongoDB. Prin intermediul ei, clientii pot crea sau sterge programari, aceste modificari realizandu-se si la nivelul bazei de date. Aceleasi functionalitati sunt valabile si pentru vizualizarea serviciilor medicale disponibile. Pentru a putea efectua operatiile CRUD asupra bazei de date, a fost nevoie de dezvoltarea a 2 routere, fiecare avand cele 4 metode de tip GET, POST, PUT si DELETE.

**PROGRAMARI.js**
![ss3](https://github.com/enemihaela15/CloudComputing_Proiect/assets/100297974/4ca36a62-6194-485c-a080-e13f2457e051)

**SERVICII.js**
![ss4](https://github.com/enemihaela15/CloudComputing_Proiect/assets/100297974/63ac8e95-1778-432e-b989-74e19fb5899b)

_**3.METODE HTTP**_

Pentru serviciile medicale disponibile pe aplicatie:

a) GET: Get medical service: Aceasta metoda nu primeste niciun parametru si returneaza toate serviciile medicale salvate in baza de date.

b) POST: Add a medical service: Aceasta metoda cere prin intermediul corpului cererii 4 informatii: numele serviciului, specialitatea, descrierea, pretul si durata. Pe baza acestora se vor crea un nou id si un nou document, acesta din urma adaugandu-se in colectia din baza de date.

c) PUT: Update a medical service: Aceasta metoda primeste ca parametru id-ul unui serviciu care urmeaza sa fie modificat in colectia din baza de date.

d) DELETE: Delete a medical service: Aceasta metoda primeste ca parametru id-ul unui serviciu care se doreste a fi sters din colectia din baza de date.

Pentru programari:

a) GET: Get appointment: Aceasta metoda nu primeste niciun parametru si returneaza toate programarile salvate in baza de date.

b) POST: Add a new appointment: Aceasta metoda solicita prin intermediul corpului cererii 6 informatii: serviciul pentru care se doreste o programare, nume pacient, prenume pacient, numar de telefon, data programarii si ora. Pe baza acestora se va crea un nou id si se va adauga o noua inregistrare in colectia din baza de date.

c) PUT: Update appointment: Aceasta metoda primeste ca parametru id-ul unei programari care urmeaza sa fie modificata in baza de date.

d) DELETE: Delete appointment: Aceasta metoda primeste ca parametru id-ul unei programari care urmeaza sa fie stearsa din baza de date.

![ss1](https://github.com/enemihaela15/CloudComputing_Proiect/assets/100297974/7871d50c-6cf3-44ab-8eea-5b6c6eb59155)
![ss2](https://github.com/enemihaela15/CloudComputing_Proiect/assets/100297974/1eaaf362-c426-488a-8be8-b2d02259b0cc)
![ss10](https://github.com/enemihaela15/CloudComputing_Proiect/assets/100297974/41a722ff-be55-4aef-a2ec-178ee4ab0f6b)


_**4.AUTENTIFICARE SI AUTORIZARE SERVICII UTILIZATE**_

Pentru a putea conecta si utiliza baza de date MongoDB in cloud a fost necesara crearea folderului .env care contine urmatoarele informatii: NEXT_ATLAS_URI (cheia unica a bazei de date) si NEXT_ATLAS_DATABASE (numele bazei de date).

Colectiile servicii_medicale si programari din baza de date **Project**:

![ss5](https://github.com/enemihaela15/CloudComputing_Proiect/assets/100297974/63c8079f-c1a5-49a1-8e0d-9306c1761c8d)


**_5.CAPTURI ECRAN APLICATIE_**

**-- VIZUALIZARE SERVICII MEDICALE**

![ss6](https://github.com/enemihaela15/CloudComputing_Proiect/assets/100297974/387a392f-d4f3-406f-a7b8-79e7c2d36b4c)

**-- MODIFICARE SERVICIU MEDICAL**

![ss7](https://github.com/enemihaela15/CloudComputing_Proiect/assets/100297974/f2e45e0c-0e71-4a8e-9779-18d50d9e1749)

**-- CREARE PROGRAMARE**

![ss8](https://github.com/enemihaela15/CloudComputing_Proiect/assets/100297974/173f0b11-0d2b-4961-83c8-83eb283acb29)

**-- VIZUALIZARE PROGRAMARI**

![ss9](https://github.com/enemihaela15/CloudComputing_Proiect/assets/100297974/53d69326-57d4-4ec8-add1-ef92c4d149ec)


**_6.REFERINTE_**

_Link catre aplicatie_: https://cloud-computing-proiect.vercel.app/

_Link catre prezentarea video_: https://youtu.be/-WtYI66vSjQ




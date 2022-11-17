# Sahisti

Link na deployanu aplikaciju: https://sahisti-progi.onrender.com/

Link na deployani backend: https://sahisti-lii1.onrender.com/

*VAZNO!!!* Backend padne svakih 15 minuta, treba mu 3-4 minute da se ponovno digne 

Endpointovi za backend:

https://sahisti-lii1.onrender.com/api/v1/login
- verificira korisnika
- prima json body kao npr.
```
{
    "email":"iva.ivic@gmail.com",
    "password":"ivakraljica123"
}
```
- u response body daje Bearer token za pristup svim korisnicima

https://sahisti-lii1.onrender.com/api/v1/users 
 - dohvaca sve korisnike iz baze uz odgovarajuci Bearer token



# Sahisti

/api/v1/login
- verificira korisnika
- prima json body kao npr.
```
{
    "email":"iva.ivic@gmail.com",
    "password":"ivakraljica123"
}
```
- u response body daje Bearer token za pristup svim korisnicima

/api/v1/users 
 - dohvaca sve korisnike iz baze uz odgovarajuci Bearer token



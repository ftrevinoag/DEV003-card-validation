#NAME
LEGALIFY

#DESCRIPTION
LEGALIFY fue creada para el proyecto Card-Validation de Laboratoria. Trata de una página que 
ofrece servicios legales, específicamente de Derechos de Autor en la que pretende ofrecer servicios
para que el usuario al final pueda comparlo y así realizar la validación de la tarjeta mediante el
Algoritmo de Luhn. 

#UI/UX
El objetivo principal de Legalify es atender a clientes que deseen adquirir servicios de 
Derecho de Autor. Es una firma en línea que puede atender a cualquier Mexicano sin importar
en donde se encuentre. La atención es en línea, personalizada, con precios fijos y más de 19 
años de respaldo.

#VISUALS
MOCKUP:
Propuesta de diseño principal:
![](img/mockup1.jpeg)
![](img/mockup2.jpeg)

En la primera vista:
http://localhost:3000/home:
Se le presenta al usuario la marca de Legalify y muestra servicios, opiniones, un poco de la historia de Legalify 
y termina en un footer.

En la segunda vista 
http://localhost:3000/product
Se le presenta al usuario la única opción existente como producto. Dicho producto puede acceder al 'checkout' 
mediante ambos botones que aparecen al lado de la imagen. También pretende mostrar ''detalles'', opiniones de clientes, 
que el usuario pueda dejar una opinión, servicios, y nuevamente finaliza en footer.

Tercera vista
http://localhost:3000/checkout
Si el usuario da click en los botones de la segunda vista lo llevará a 'checkout' en donde ya se recopiló la información 
del producto que se eligió. Aparecerá la imagen, el servicio, precio y al lado su 'bill' con un botón que finalmente llevará 
a la validación de la tarjeta. Nuevamente, finaliza en footer.

Cuarta vista
http://localhost:3000/
En ésta vista el usuario ingresará la información que la 'form' le pide sobre su tarjeta: número, nombre, expiración, cvv. 
El usuario al ingresar ésta información podrá saber si su tarjeta es válida al dar click al botón de 'Send'. Si es válida,
aparecerá el número enmascarado, si no es válida, aparecerá un modal que pedirá que ingrese una tarjeta válida.

Quinta vista:
http://localhost:3000/404NotFound
Ésta vista aparece cuando el usuario de click en 'About Us' y 'Contact Us' en la 'navbar'. Esto fue totalmente intecional,
dentro de ésta vista aparece un link que refiere al usuario nuevamente a 'home'.

#AUTHOR
María Fernanda Treviño Aguilar
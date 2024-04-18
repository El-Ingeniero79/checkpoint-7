<a name="top"></a>
# Manual JavaScript para equipo **Dev-pro**

## Introducción
Enhorabuena por haber llegado hasta aqui, si estas leyendo este nuevo manual es que has afianzado todos los conocimientos anteriores y estas ya en un nivel bastante avanzado, por lo que voy a explicarte un nuevo lenguaje de programación, con el que trabajamos muy frecuentemente y te va a resultar muy enriquecedor.

---
## ¿Que te vas a encontrar en este manual?:
### [¿Qué es JavaScript y que lo diferencia de cualquier otro lenguaje de programación?](#item1)
### [¿Cuáles son algunos tipos de datos JS?](#item2)
### [¿Cuáles son las tres funciones de String en JS?](#item3)
### [¿Qué es un condicional?](#item4)
### [¿Cuál es la diferencia entre una declaración de función y una expresión de función?](#item5)
### [¿Qué es la palabra clave "this" en JS?](#item6)

---
<a name="item1"></a>
### ¿Qué es JavaScript y que lo diferencia de cualquier otro lenguaje de programación?

JavaScript (JS) es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado. Es la tercera capa del pastel de las tecnologías web estándar, dos de las cuales hemos cubierto con mucho más detalle en otros manuales que anteriormente te hemos proporcionado.



![lenguajes web](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript/cake.png)


Se integra facilmente en codigos HTML (ver ejemplo siguiente:
```
<!DOCTYPE html>  
<html>  
<body>  
  
<h2>Demo JavaScript in Body</h2>  
  
<p id="demo">A Paragraph</p>  
  
<button type="button"  onclick="myFunction()">Try it</button>  
  
<script>  
function  myFunction() {  
document.getElementById("demo").innerHTML  =  "Paragraph changed.";  
}  
</script>  
  
</body>  
</html>
```
Como puedes ver, JavaScript tiene muchas ventajas, pero no todo puede ser bueno, como suelen decir una imagen vale mas que mil palabras, en la siguiente imagen te resumo ventajas e inconvenientes del uso de este lenguaje:


![ventajas e inconvenientes](https://blog.hubspot.es/hubfs/media/javascriptventajasdesventajas.png)

La mayor diferencia de este  lenguaje de programación es que su código se ejecuta directamente en los navegadores. Entrando en opciones de desarrollador y tecleándolo en la consola. 

JS también es el encargado de la existencia de herramientas como el Google Analytics, Facebook Pixel entre muchas otras.

["Subir"](#top)
---
<a name="item2"></a>
### ¿Cuáles son algunos tipos de datos JS?

Ahora que ya sabes que es JavaScript (JS) y que diferencias tiene con los otros leguajes, vamos a adentrarnos en el tipo de datos que existen en JS.

JavaScript es un lenguaje débilmente tipado y dinámico. Las variables en JavaScript no están asociadas directamente con ningún tipo de valor en particular, y a cualquier variable se le puede asignar (y reasignar) valores de todos los tipos:
```
let casa = 42; // casa ahora es un número
casa = "bar"; // casa ahora es un string
casa = true; // casa ahora es un booleano
```
Los datos primitivos son los siguientes (datos primitivos son son datos que no son un objeto y no tienen métodos):

 - **Undefined**: representa una variable que no ha sido declarada o a la cual no se le ha asignado un valor.    
 - **Boolean**: representa un valor lógico y puede tener dos valores, ya sean true o false. 
 - **Number**: permite representar y manipular valores numéricos como «33» o «-875.25». 
 - **BigIn** Los valores `BigInt` representan valores numéricos que son muy grandes para ser representados por el number. 
 - **String**: representa datos textuales (cadenas de caracteres).
 - **Symbol**: es un valor primitivo único e inmutable.
 
  Otros datos que te puedes encontrar son los siguientes:
  
 - **Null**: representa la ausencia intencional de cualquier valor, un valor nulo o «vacío».
 - **Object**: representa una colección de datos definidos y entidades más complejas.
 - **Function**: es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor Object. Son objetos con la capacidad de ser ejecutables.

Ahora que ya sabes los tipos de datos, te preguntaras ¿como voy a saber yo que tipo de dato es?, pues muy sencillo, con el operador typeof
```

let miFuncion = new Function("1+2");
let moneda = "eur";
let cantidad = 1;
let hoy = new Date();

console.log(typeof miFuncion); // function
console.log(typeof moneda); // string
console.log(typeof cantidad); // number
console.log(typeof hoy); // object
```

["Subir"](#top)

---

<a name="item3"></a>
### ¿Cuáles son las tres funciones de String en JS?

como has podido ver JavaScript ofrece numerosas funciones predefinidas y mas aun si lo que queremos trabajar con cadenas de texto. Entre las posibilidades que ofrecen estas funciones tenemos el extraer un carácter, extraer un fragmento de cadena, separar una cadena en múltiples cadenas indicando un separador, etc.

![imagen](/imagenes/string1.png)


![imagen](/imagenes/string2.png)


![imagen](/imagenes/string3.png)


["Subir"](#top)

---
<a name="item4"></a>
### ¿Qué es un condicional?
estamos ahora ya en un apartado muy interesante y muy util. los condicionales, es decir poner una condicion para que se ejecute el codigo o parte de el, y en caso de no cumplirse la condicion que no se ejecute, o ejecutar otra orden que definamos.

Los condicionales que tenemos son:

**IF**
condicional simple, es decir, si sucede una condicion se ejecuta. Ver siguiente ejemplo:
```
const  nombre  =  "Victoria"; 
if  (nombre  ==  "Victoria")  {  console.log("Hola Victoria");
}  // Hola Victoria
```
podras incluir varias condiciones o distintos operadores como mayor o menor, ver la siguiente tabla resumen con los mas usados:
![condicional](/imagenes/condicional1.png)

te sonara un poco raro estos simbolos así que te pongo varios ejemplos:
```
if  (10  >  2  &&  true  &&  "HBO"  !=  "Netflix")  { 
console.log("Entro seguro");
}  // Entro seguro
```

en el siguiente ejemplo solo se tiene que cumplir una condición

```
miStreaming  =  "HBO";
if  (miStreaming  ===  "HBO"  ||  miStreaming  ===  "Netflix")  {
console.log("Esta noche vemos una serie");
}  // Esta noche vemos una serie
```
**ELSE**
Si no se cumplen las condiciones IF se ejecuta esta condición.

```if  (10  <  9)  {
console.log("Entro seguro");
}  else  {
console.log("No entro");
}  // No entro
```
**ELSE IF**
se usa para incluir otras condiciones sino se cumplen las anteriores.
```
const  nombre  =  "Juan";  
if  (nombre  ==  "Victoria")  {  console.log("Hola Victoria");
}  else  if  (nombre  ==  "Juan")  {
console.log("Hola Juan");  
}  else  {  console.log("Hola desconocido");  
}  // Hola Juan
```
**OPERADOR TERNARIO**
Es una forma de escribir un condicional en una linea, es muy poco visual, por lo que te recomiendo no usarlo a no ser que sea imprescindible.

Se suele asignar esta expresion a una variable o constante ya que nos devuelve un valor.

te pongo un ejemplo porque sino no lo vas a entender
```
const  nombre  =  "Javi";  
const  saludo  =  nombre  ==  "María"  ?  "Hola María"  :  "Hola desconocido";
console.log(saludo);  // Hola desconocido
```
como puedes ver la estructura es: 

var o const =  a la condicion que quieres poner seguido de  ? seguido de lo que quieres ejecutar si la condicion es cierta seguido de dos puntos ( : ) y la condicion else, es decir en caso de no ser cierta la anterior.

["Subir"](#top)

---
<a name="item5"></a>

### ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

En JavaScript tenemos dos maneras principales de definir funciones, como una declaración o como una expresión.

```

// declaraciones de función

// Función con nombre
function suma1(a, b) {
  return a + b
}

// ========================

// expresiones de función

// Función anónima
var suma2 = function(a, b) {
  return a + b
}

// Función con nombre
var suma2 = function suma2(a, b) {
  return a + b
}

// Función de flecha (anónima por defecto)
var suma2 = (a, b) => {
  return a + b
}
```
Las diferencias de sintaxis son claras, las expresiones de funciones principalmente están a la DERECHA del símbolo igual, y las declaraciones no lo tienen. 

Las diferencias son:

-   Las declaraciones de funciones pueden ser ejecutadas antes de su definición.
-   Declaraciones a la derecha, expresiones a la izquierda.
-   Las expresiones son más difíciles de inspeccionar.

Gracias a que las declaraciones de funciones son ascendidas al momento de ejecución de nuestro programa, nuestra función se puede ejecutar incluso antes de su definición.
```

nuevaFuncion()

function nuevaFuncion() {
  console.log("Hola Mundo!")
}

//  Hola Mundo!
```
En cambio, esto no es posible con las expresiones de funciones, ya que no se sabe el valor que va a tener nuestra variable previamente declarada.
```

nuevaFuncion()

var nuevaFuncion = function nuevaFuncion() {
  console.log("Hola Mundo!")
}

//  TypeError: nuevaFuncion is not a function
```

La palabra reservada  `function`  se puede usar tanto al lado izquierdo como al lado derecho del signo  `=`. Lo interesante de esto es que siguen diferentes reglas dependiendo de dónde la escribimos.

Cuando la usamos al lado izquierdo, estamos creando una declaración de función y es obligatorio asignar un nombre. En cambio, si la usamos a la derecha del símbolo igual, hablamos de una expresión de función.
```
// declaración de función
function soyUnaDeclaracion() {
  // ...
}

// expresión de función
var soyUnaExpresion = function() {
  // ...
}
```
Dato Curioso: En las expresiones de funciones darle nombre a la función es opcional. En cambio para las declaraciones es obligatorio.

Tienes que tener claro que las inspecciones para corregir un error en las expresiones son mucho mas dificiles que en las declaraciones.

["Subir"](#top)

---

<a name="item6"></a>
### ¿Qué es la palabra clave "this" en JS?

Ahora te voy a explicar como una palabra tan sencilla puede ser tan dificil de entender. Es una palabra reservada en JavaScript que podemos utilizar para referirnos al contexto en el que se invoca, por lo que su valor implícito puede variar durante la ejecución del código.

El  `this`  de JavaScript es similar a lo que podríamos encontrar en otros lenguajes basados en clases como Java o C# (JavaScript en realidad es un lenguaje basado en prototipos y no tiene un concepto de "clase"): apunta al objeto que está llamando a la función (este objeto a veces se llama  _contexto_). Sin embargo, en JavaScript, las funciones internas de la referencia __`this`__ pueden vincularse a diferentes objetos dependiendo de dónde se llame a la función.

Aquí hay 5 reglas básicas para enlazar  `this`  en JavaScript:

**Regla 1**

Cuando se llama a una función en el ámbito global,  `this`  hace referencia de forma predeterminada al objeto global (`window`  en el navegador, o  `global`  en Node.js). Por ejemplo:

```javascript
function foo() {
  this.a = 2;
}

foo();
console.log(a); // 2
```

Nota: Si declaramos la función  `foo()`  en modo estricto, y luego la llamamos en el ámbito global,  `this`  será  `undefined`  y la asignación  `this.a = 2`  arrojará una excepción `Uncaught TypeError`  (error de tipo no detectado).

**Regla 2**

Veamos el siguiente ejemplo:

```javascript
function foo() {
  this.a = 2;
}

const obj = {
  foo: foo
};

obj.foo();
console.log(obj.a); // 2
```

Claramente, en el fragmento anterior, la función  `foo()`  se llama en el  _contexto_  del objeto  `obj`, por lo tanto  `this`  ahora hace referencia a  `obj`. Entonces, cuando se llama a una función con un objeto de contexto, la referencia `this`  se vincula a dicho objeto.

**Regla 3**

`.call`,  `.apply`  y  `.bind`  pueden utilizarse para enlazar explícitamente  `this`. Usar  `.bind(this)`  es algo que podemos ver en muchos componentes de React.

```javascript
const foo = function() {
  console.log(this.bar)
}

foo.call({ bar: 1 }) // 1
```

Aquí vemos algunos ejemplos rápidos de como utilizar cada uno para enlazar  `this`:

-   `.call()`:  `fn.call(thisObj, fnParam1, fnParam2)`
-   `.apply()`:  `fn.apply(thisObj, [fnParam1, fnParam2])`
-   `.bind()`:  `const newFn = fn.bind(thisObj, fnParam1, fnParam2)`

**Regla 4**

```javascript
function Point2D(x, y) {
  this.x = x;
  this.y = y;
}

const p1 = new Point2D(1, 2);
console.log(p1.x); // 1
console.log(p1.y); // 2
```

Lo que notamos aquí es que al llamar a la función  `Point2D`  utilizando la palabra clave  `new`, la referencia  `this`  se vincula al objeto  `p1`. Entonces, cuando llamamos a una función utilizando  `new`, un nuevo objeto es creado y la referencia`this`  se vincula al mismo.

Nota: A una función que llamamos utilizando la palabra clave  `new`  también la conocemos como  _función constructora._

**Regla 5**

JavaScript determina el valor de  `this`  en tiempo de ejecución, según el contexto actual. Por eso a veces  `this`  podría no estar apuntando a dónde esperamos.

Veamos este ejemplo, una clase Gato que tiene un método llamado  `hacerSonido()`, siguiendo lo que vimos en la regla anterior, utilizamos una función constructora y la palabra clave  `new`.

```javascript
const Gato = function(nombre, sonido) {
  this.nombre = nombre;
  this.sonido = sonido;
  this.hacerSonido = function() {
    console.log( this.nombre + ' decir: ' + this.sonido );
  };
}

const gatito = new Gato('Papá Gordo', 'Mrrooowww');
gatito.haceSonido(); // Papá Gordo dice: Mrrooowww
```

Ahora vamos a agregarle al gato el método  `molestar()`  para que puedan molestar a las personas repitiendo su sonido 100 veces, con un período de repetición de medio segundo.

```javascript
const Gato = function(nombre, sonido) {
  this.nombre = nombre;
  this.sonido = sonido;
  this.hacerSonido = function() {
    console.log( this.nombre + ' decir: ' + this.sonido );
  };
  this.molestar = function() {
    let contar = 0, max = 100;
    const t = setInterval(function() {
      this.hacerSonido(); // <-- esta línea falla con `this.hacerSonido no es una función` 
      count++;
      if (contar === max) {
        clearTimeout(t);
      }
    }, 500);
  };
}

const gatito = new Gato('Papá Gordo', 'Mrrooowww');
gatito.molestar();
```

Esto no funcionará porque dentro de  `setInterval`  hemos creado un nuevo contexto con alcance global, entonces  `this`  ya no apunta a nuestra instancia gatito. En el navegador,  `this`  apuntará al objeto Window, que no tiene un método  `hacerSonido()`.

Algunas formas de solucionarlo:

1. Antes de crear el nuevo contexto, asignar  `this`  a una variable local llamada  `me`, o  `self`, o cualquier nombre que elijamos, y referenciar esa variable dentro del callback.

```javascript
const Gato = function(nombre, sonido) {
  this.nombre = nombre;
  this.sonido = sonido;
  this.hacerSonido = function() {
    console.log( this.nombre + ' decir: ' + this.sonido );
  };
  this.molestar = function() {
    let contar = 0, max = 100;
    const self = this;
    const t = setInterval(function() {
      self.hacerSonido();
      contar++;
      if (contar === max) {
        clearTimeout(t);
      }
    }, 500);
  };
}

const gatito = new Gato('Papá Gordo', 'Mrrooowww');
gatito.molestar();
```

2. Con ES6 podemos evitar tener que asignar  `this`  a una variable local usando una arrow function, que automáticamente enlaza  `this`  al contexto del código donde ha sido definida.

```javascript
const Gato = function(nombre, sonido) {
  this.nombre = nombre;
  this.sonido = sonido;
  this.hacerSonido = function() {
    console.log( this.nombre + ' decir: ' + this.sonido );
  };
  this.molestar = function() {
    let contar = 0, max = 100;
    const t = setInterval(() => {
      this.hacerSonido();
      contar++;
      if (contar === max) {
        clearTimeout(t);
      }
    }, 500);
  };
}

const gatito = new Gato('Papá Gordo', 'Mrrooowww');
gatito.molestar(
```
Creo que ahora es momento de interiorizar todos estos conceptos y los puedas aplicar para poder seguir progresando en el equipo.

**Nos vemos en el siguiente manual**

["Subir"](#top)

# Liskov substitution principle

## Concepto:
Si S es un subtipo de T, instancias de T deberían poderse sustituir por instancias de S sin alterar las propiedades del programa
Es decir, al tener una jerarquía nos supone que estamos estableciendo un contrato en el padre, por lo que, garantizar que se mantiene dicho contrato en el hijo, nos permitirá que podamos sustituir al padre y la aplicación seguirá funcionando perfectamente 👌
## Cómo:
El comportamiento de de las subclases debe respetar el contrato establecido en la superclase.
## Finalidad:
Mantener correctitud funcional para poder aplicar OCP

## Ejemplo Sencillo

En este enlace tenéis el repo con todos los ejemplos que vemos en este video.

Clase Rectangle:

```
class Rectangle {

    private Integer length;      
    private Integer width;

    Rectangle(Integer length, Integer width) {  
        this.length = length;
        this.width = width;
    }

    void setLength(Integer length) {
        this.length = length;
    }

    void setWidth(Integer width) {
        this.width = width;
    }

    Integer getArea() {
        return this.length * this.width;
    }
}
```
Podemos ver cómo nuestra clase Rectangle cuenta con dos atributos width y length y, además de un constructor y los setters de cada atributo, observamos una función getArea que implementa el comportamiento necesario para calcular el área del rectángulo (así nuestro modelo de dominio es mucho más rico en comportamiento => Tell, Don’t Ask!).


Clase Square:

```
final class Square extends Rectangle {
    Square(Integer lengthAndWidth) {
        super(lengthAndWidth, lengthAndWidth);
    }

    @Override
    public void setLength(Integer length) {
      super.setLength(length);
      super.setWidth(length);
    }
    @Override
    public void setWidth(Integer width) {
      super.setLength(width);
      super.setWidth(width);
    }
}
```
Nuestro Square es un tipo de Rectangle con la restricción de que su largo y ancho son iguales, es decir, si modificamos el largo, debemos modificar el ancho y viceversa. Así, la clase Square extiende de nuestra clase Rectangle.

Vemos así en el propio constructor cómo recibe un único parámetro, pues utilizará el mismo tanto para definir el ancho como el largo en la superclase.


Test SquareShould:

```
final class SquareShould {
    @Test
    void not_respect_the_liskov_substitution_principle_breaking_the_rectangle_laws_while_modifying_its_length() {
        Integer squareLengthAndWidth = 2;
        Square square = new Square(squareLengthAndWidth);

        Integer newSquareLength = 4;
        square.setLength(newSquareLength);

        Integer expectedAreaTakingIntoAccountRectangleLaws = 8;

        assertNotEquals(expectedAreaTakingIntoAccountRectangleLaws, square.getArea());
	  }
}
```
Como vemos en el Test, cabría esperar que si Square extiende de Rectangle, mantenga el contrato establecido por éste y al modificar el tamaño del largo, su área se modifique como lo haría en el padre. Sin embargo, observamos que esto no se está cumpliendo en este caso, no se está cumpliendo el LSP  👎 .

Pese a que estemos permitiendo que compile nuestra aplicación, ya que estamos manteniendo las firmas de los métodos heredados, el propio cuerpo de esos métodos hace que se viole el correcto funcionamiento del programa.

👇👇👇

## SOLUCION
```
interface Shape {
  getArea: () => number;
}

interface Rectangle extends Shape {
  width: number;
  length: number;
}

interface Square extends Shape {
  sides: number;
}
```

## MORE INFO

https://alexnault.dev/liskov-substitution-principle-in-functional-typescript
# Interface Segregation Principle

## Concepto:
Ningún cliente debería verse forzado a depender de métodos que no usa

## Cómo:
Definir contratos de interfaces basándonos en los clientes que las usan y no en las implementaciones que pudiéramos tener (Las interfaces pertenecen a los clientes)

Evitar Header Interfaces promoviendo Role Interfaces

## Finalidad:
Alta cohesión y bajo acoplamiento estructural

## EXAMPLE

Consideremos lo que sucedería si modificara el ShapeInterfacecontrato para agregar otro:
```
interface ShapeInterface
{
    public function area();

    public function volume();
}
```

Ahora, cualquier forma que crees debe implementar el volumemétodo, pero sabes que los cuadrados son formas planas y que no tienen volúmenes, por lo que esta interfaz obligaría a la Squareclase a implementar un método que no utiliza.

Esto violaría el principio de segregación de interfaces. En su lugar, podría crear otra interfaz llamada ThreeDimensionalShapeInterfaceque tenga el volumecontrato y las formas tridimensionales puedan implementar esta interfaz:

```
interface ShapeInterface
{
    public function area();
}

interface ThreeDimensionalShapeInterface
{
    public function volume();
}

class Cuboid implements ShapeInterface, ThreeDimensionalShapeInterface
{
    public function area()
    {
        // calculate the surface area of the cuboid
    }

    public function volume()
    {
        // calculate the volume of the cuboid
    }
}

```

Este es un enfoque mucho mejor, pero hay un problema a tener en cuenta al escribir sugerencias en estas interfaces. En lugar de usar a ShapeInterfaceo a ThreeDimensionalShapeInterface, puede crear otra interfaz, tal vez ManageShapeInterface, e implementarla tanto en las formas planas como en las tridimensionales.

De esta forma, puedes tener una única API para gestionar las formas:

```
interface ManageShapeInterface
{
    public function calculate();
}

class Square implements ShapeInterface, ManageShapeInterface
{
    public function area()
    {
        // calculate the area of the square
    }

    public function calculate()
    {
        return $this->area();
    }
}

class Cuboid implements ShapeInterface, ThreeDimensionalShapeInterface, ManageShapeInterface
{
    public function area()
    {
        // calculate the surface area of the cuboid
    }

    public function volume()
    {
        // calculate the volume of the cuboid
    }

    public function calculate()
    {
        return $this->area();
    }
}
```

Ahora, en AreaCalculatorclase, puede reemplazar la llamada al area método calculate y también verificar si el objeto es una instancia de ManageShapeInterfacey no de ShapeInterface.

Eso satisface el principio de segregación de interfaces.
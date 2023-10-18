# Dependency Inversion Principle

## Concepto:
Módulos de alto nivel no deberían depender de los de bajo nivel. Ambos deberían depender de abstracciones

## Cómo:
Inyectar dependencias (parámetros recibidos en constructor)
Depender de las interfaces (contratos) de estas dependencias y no de implementaciones concretas
LSP como premisa

## Finalidad:
Facilitar la modificación y substitución de implementaciones
Mejor testabilidad de clases

## EXAMPLE

Aquí hay un ejemplo de un PasswordReminderque se conecta a una base de datos MySQL:
```
class MySQLConnection
{
    public function connect()
    {
        // handle the database connection
        return 'Database connection';
    }
}

class PasswordReminder
{
    private $dbConnection;

    public function __construct(MySQLConnection $dbConnection)
    {
        $this->dbConnection = $dbConnection;
    }
}

```
Primero, MySQLConnectiones el módulo de bajo nivel mientras que PasswordReminderes de alto nivel, pero de acuerdo con la definición de D en SOLID, que establece Depende de la abstracción, no de las concreciones . Este fragmento anterior viola este principio ya que la PasswordReminderclase se ve obligada a depender de la MySQLConnectionclase.

Más adelante, si cambiara el motor de la base de datos, también tendría que editar la PasswordReminderclase, y esto violaría el principio de apertura y cierre .

A la PasswordReminderclase no debería importarle qué base de datos utiliza su aplicación. Para abordar estos problemas, puede codificar en una interfaz, ya que los módulos de alto y bajo nivel deben depender de la abstracción:
```
interface DBConnectionInterface
{
    public function connect();
}
```
La interfaz tiene un método de conexión y la MySQLConnectionclase implementa esta interfaz. Además, en lugar de escribir directamente la MySQLConnectionclase de sugerencias en el constructor de PasswordReminder, usted escribe sugerencias DBConnectionInterfacey, sin importar el tipo de base de datos que utilice su aplicación, la PasswordReminderclase puede conectarse a la base de datos sin ningún problema y no se viola el principio de apertura y cierre. .

```
class MySQLConnection implements DBConnectionInterface
{
    public function connect()
    {
        // handle the database connection
        return 'Database connection';
    }
}

class PasswordReminder
{
    private $dbConnection;

    public function __construct(DBConnectionInterface $dbConnection)
    {
        $this->dbConnection = $dbConnection;
    }
}
```

Este código establece que tanto los módulos de alto nivel como los de bajo nivel dependen de la abstracción.
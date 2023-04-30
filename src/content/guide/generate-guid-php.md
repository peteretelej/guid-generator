title: How to Generate GUIDs in PHP
tags:
    - php
    - guid
lang: php
---

# How to Generate GUIDs in PHP

Quick guide on generating GUIDs in PHP using the `ramsey/uuid` package.

## Prerequisites
- PHP 7.2 or later
- Composer


## Installation
Install the `ramsey/uuid` package
```bash 
composer require ramsey/uuid
```

## Generating GUIDs
PHP doesn't have built-in support for generating all versions of UUIDs. The `ramsey/uuid` library provides an easy and performant way to generate UUIDs of different versions.



### UUID v1 (Time-based)
```php
require 'vendor/autoload.php';

use Ramsey\Uuid\Uuid;

$uuid1 = Uuid::uuid1();

echo "UUID v1: " . $uuid1->toString() . PHP_EOL;
```

### UUID v3 (Name-based, MD5)
```php
require 'vendor/autoload.php';

use Ramsey\Uuid\Uuid;

$namespace = Uuid::NAMESPACE_DNS;
$name = "example.com";
$uuid3 = Uuid::uuid3($namespace, $name);

echo "UUID v3: " . $uuid3->toString() . PHP_EOL;
```

### UUID v4 (Random)
```php
require 'vendor/autoload.php';

use Ramsey\Uuid\Uuid;

$uuid4 = Uuid::uuid4();

echo "UUID v4: " . $uuid4->toString() . PHP_EOL;
```

### UUID v5 (Name-based, SHA1)
```php
require 'vendor/autoload.php';

use Ramsey\Uuid\Uuid;

$namespace = Uuid::NAMESPACE_DNS;
$name = "example.com";
$uuid5 = Uuid::uuid5($namespace, $name);

echo "UUID v5: " . $uuid5->toString() . PHP_EOL;
```


## Formatting GUIDs
The ramsey/uuid library outputs UUIDs in the standard 8-4-4-12 format by default. For other formats, you can modify the string representation.

### Formatting UUID with braces
```php
$uuid4 = Uuid::uuid4();
$uuidWithBraces = sprintf('{%s}', $uuid4->toString());

echo "UUID with braces: " . $uuidWithBraces . PHP_EOL;
```

## Tips for working with GUIDs in PHP
- Use ramsey/uuid over custom implementations: The `ramsey/uuid` library is a well-tested and widely used solution for generating UUIDs in PHP, making it more reliable and performant than custom implementations.
- Prefer UUID v4 (random-based) for most use cases: UUID v4 provides a good balance of uniqueness and randomness without relying on a specific system's clock or hardware.
- Be aware of the string representation: When storing or transmitting UUIDs as strings, be mindful of the format being used to avoid potential compatibility issues.

## References
- [ramsey/uuid](https://github.com/ramsey/uuid)
- [Composer](https://getcomposer.org/)

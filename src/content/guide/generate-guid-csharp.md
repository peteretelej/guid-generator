title: How to Generate GUIDs in C#
tags:
    - csharp
    - guid
lang: csharp
---

# How to Generate GUIDs in C#

In C#, the System.Guid class is used for generating GUIDs. By default, C# generates UUID v4 (random-based) GUIDs. Here's how to create a new GUID:
```csharp
using System;

class Program
{
    static void Main()
    {
        Guid newGuid = Guid.NewGuid();
        Console.WriteLine("New GUID: " + newGuid);
    }
}
```

## Formatting GUIDs
The System.Guid struct provides various format specifiers to display GUIDs in different formats.

### Format specifiers
- `"N"`: 32 digits without hyphens (e.g., `550e8400e29b41d4a716446655440000`)
- `"D"`: 32 digits separated by hyphens (default format) (e.g., `550e8400-e29b-41d4-a716-446655440000`)
- `"B"`: 32 digits separated by hyphens, enclosed in braces (e.g., `{550e8400-e29b-41d4-a716-446655440000}`)
- `"P"`: 32 digits separated by hyphens, enclosed in parentheses (e.g., `(550e8400-e29b-41d4-a716-446655440000)`)
- `"X"`: Four hexadecimal values enclosed in braces, where the fourth value is a subset of eight hexadecimal values enclosed in braces (e.g., `{0x550e8400,0xe29b,0x41d4,{0xa7,0x16,0x44,0x66,0x55,0x44,0x00,0x00}}`)

```csharp
using System;

namespace GuidGenerator
{
    class Program
    {
        static void Main(string[] args)
        {
            Guid newGuid = Guid.NewGuid();
            Console.WriteLine("N format: " + newGuid.ToString("N"));
            Console.WriteLine("D format: " + newGuid.ToString("D"));
            Console.WriteLine("B format: " + newGuid.ToString("B"));
            Console.WriteLine("P format: " + newGuid.ToString("P"));
            Console.WriteLine("X format: " + newGuid.ToString("X"));
        }
    }
}
```

## Tips for working with GUIDs in C#
- Always use the built-in System.Guid struct for generating GUIDs to ensure proper implementation and uniqueness.
- Be cautious when using GUIDs for security-sensitive purposes, as the random-based UUID v4 might not be suitable for cryptographic security.
- Prefer using the default `"D"` format when displaying GUIDs, as it is the most commonly used and widely recognized format.
- When comparing GUIDs, use the `Guid.Equals()` method or the `==` operator instead of comparing their string representations.
- For performance-critical scenarios, consider using a more efficient GUID generation approach, such as sequential GUIDs, to reduce the risk of fragmentation in databases.

## Generating Custom GUIDs
C# does not natively support generating other UUID versions like UUID v1 (time-based) or UUID v5 (name-based, SHA-1). For these, you can use third-party libraries like System.IdentityModel.Tokens.Jwt for UUID v5.

For more advanced use cases or custom formats, consider using external libraries available through NuGet, such as Uuid.NET or Fugro.UUIDGenerator.

This guide covered the basics of generating and formatting GUIDs in C# using the built-in `System.Guid` class. While C# natively supports UUID v4, you can explore external libraries for additional UUID versions and functionality.

## References
- [System.Guid Struct](https://docs.microsoft.com/en-us/dotnet/api/system.guid?view=net-5.0)
- [Guid.ToString Method](https://docs.microsoft.com/en-us/dotnet/api/system.guid.tostring?view=net-5.0#System_Guid_ToString_System_String_)
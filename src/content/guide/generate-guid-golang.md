title: How to Generate GUIDs with Go
tags:
    - golang
    - guid
lang: golang
---

# How to Generate GUIDs in Golang

The `github.com/google/uuid` package is an easy to use and performant package for generating GUIDs in Go.

## Prerequisites
- Go 1.16+

1. Install the `github.com/google/uuid` package
```bash
go get -u github.com/google/uuid
```
2. Use the relevant package functions for the desired GUID format


### Generating UUID v1 (Time-based)
```go
package main

import (
	"fmt"
	"github.com/google/uuid"
)

func main() {
	uuidV1, err := uuid.NewUUID()
	if err != nil {
		fmt.Println("Error generating UUID v1:", err)
		return
	}
	fmt.Println("UUID v1:", uuidV1)
}
```

### UUID v3 (Name-based, MD5)
```go
package main

import (
	"fmt"
	"github.com/google/uuid"
)

func main() {
	namespace := uuid.NameSpaceDNS
	name := "example.com"
	uuidV3 := uuid.NewMD5(namespace, []byte(name))
	fmt.Println("UUID v3:", uuidV3)
}
```

### UUID v4 (Random)
```go
package main

import (
	"fmt"
	"github.com/google/uuid"
)

func main() {
	uuidV4, err := uuid.NewRandom()
	if err != nil {
		fmt.Println("Error generating UUID v4:", err)
		return
	}
	fmt.Println("UUID v4:", uuidV4)
}
```

### UUID v5 (Name-based, SHA-1)
```go
package main

import (
	"fmt"
	"github.com/google/uuid"
)

func main() {
    // Use the predefined DNS namespace for UUID v5 generation
	namespace := uuid.NameSpaceDNS
    
    // Set the input name to be hashed with the namespace
	name := "example.com"
    
    // Generate a UUID v5 using the namespace and name, based on SHA-1 hashing
    uuidV5 := uuid.NewSHA1(namespace, []byte(name))
	fmt.Println("UUID v5:", uuidV5)
}
```

## Additional operations

### UUID Validation
```go
package main

import (
	"fmt"
	"github.com/google/uuid"
)

func main() {
	uuidToValidate := "00000000-0000-0000-0000-000000000000"
	_, err := uuid.Parse(uuidToValidate)
	if err != nil {
		fmt.Println("Invalid UUID:", uuidToValidate)
		return
	}
	fmt.Println("Valid UUID:", uuidToValidate)
}
```


### Customizing UUIDs
```go
package main

import (
	"fmt"
	"github.com/google/uuid"
)

func main() {
	uuidV4, err := uuid.NewRandom()
	if err != nil {
		fmt.Println("Error generating UUID v4:", err)
		return
	}
	fmt.Println("UUID v4:", uuidV4)

	// Custom UUID v4 with prefix and suffix
	uuidV4Custom := uuidV4.String()[:4] + "-" + uuidV4.String()[4:8] + "-" + uuidV4.String()[8:12] + "-" + uuidV4.String()[12:16] + "-" + uuidV4.String()[16:]
	fmt.Println("UUID v4 Custom:", uuidV4Custom)
}
```

### Formatting GUIDs
The github.com/google/uuid library automatically formats UUIDs as strings using the standard 8-4-4-12 format (e.g., 550e8400-e29b-41d4-a716-446655440000). However, if you want to format UUIDs differently, you can use the following example:

```go
package main

import (
	"fmt"
	"github.com/google/uuid"
)

func main() {
	uuidV4, err := uuid.NewRandom()
	if err != nil {
		fmt.Println("Error generating UUID v4:", err)
		return
	}

	// Remove dashes from the UUID
	plainUUID := uuidV4.String()
	plainUUID = strings.ReplaceAll(plainUUID, "-", "")

	fmt.Println("Formatted UUID:", plainUUID)
}
```

## Tips for working with GUIDs in Go
- Use well-tested libraries like github.com/google/uuid for generating GUIDs to ensure proper implementation and uniqueness.
- Prefer using UUID v4 (random-based) for most use cases, as it provides a good balance between uniqueness and simplicity.
- Be cautious when using UUIDs for security-sensitive purposes, as the random-based UUID v4 might not be suitable for cryptographic security.
- For performance-critical scenarios, consider using a more efficient GUID generation approach, such as time-based UUIDs (v1), to reduce the risk of fragmentation in databases.

## References
- [github.com/google/uuid GoDoc](https://pkg.go.dev/github.com/google/uuid)
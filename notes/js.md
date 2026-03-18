## HOISTING
- The order of hoisting is:
	1. `function` declarations
	2. `var` declarations
	3. `let`/`const`/`class` declarations (in TDZ ~ Accessible Before Definition?).

### 📊 Summary Table

| Declaration Type | Hoisted? | Accessible Before Definition? | Value Before Definition |
|------------------|----------|-------------------------------|-------------------------|
| Function         | Yes      | ✅ Yes                        | Full function available |
| `var`            | Yes      | ✅ Yes                        | `undefined`             |
| `let` / `const`  | Yes      | ❌ No (TDZ)                   | ReferenceError          |
| Class            | Yes      | ❌ No (TDZ)                   | ReferenceError          |
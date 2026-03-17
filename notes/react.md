## Discrete Event
- A discrete input is a type of event where the result of one event can affect the behavior of the next, like clicks or presses. Multiple discrete events cannot be batched or throttled without affecting program behavior.
- A practical example where this matters is a counter. If the user increments a counter multiple times in quick succession, we must process each one individually so that the final count is correct

---

## setState() with same value might still trigger re-render.#

- If the new value you provide is identical to the current state, as determined by an Object.is comparison, React will skip re-rendering the component and its children. This is an optimization. Although in some cases React may still need to call your component before skipping the children, it shouldn’t affect your code.

- Once an update is scheduled, the full clearing of the dirty lanes flags is only done after at least 2 rounds of re-rendering.
- React re-renders if it feels necessary, we should not assume that performance tricks always work.

---

## Rendering process

- Trigger -> Render -> Commit

	- Triggering a render:
		- The component’s initial render, or state updates with setState.
		- A state update is put in a queue and scheduled to be processed by the React Scheduler.
	- Rendering:
		- React calls the component and works on the state update.
		- React reconciles and marks it as “dirty” for commit phase.
		- Create new DOM node internally.
	- Committing to the DOM:
		- Apply actual DOM manipulation.
		- Runs effects (useEffect, useLayoutEffect).
- Internally, React uses a tree-like data structure called fiber tree to represent the component hierarchy and track updates.
- Every time there is a state update, React will construct a new fiber tree and compare against the old tree internally.

- How React walks the fiber tree. Notice that each node is stepped twice. The rule is simple:
	1. Traverse downwards.
	2. In each fiber node, React checks
		1. If there’s a child, move to the child.
		2. If there’s no child, step again the current node. Then,
			1. If there’s a sibling, move to the sibling.
			2. If there’s no sibling, move up to its parent.

### 🔄 React Lifecycle Phases
- **Trigger phase**: A render is scheduled (initial mount or state update).
- **Render phase**:
  - React traverses the **fiber tree**.
  - Each component is called → this is when `console.log("X is rendered")` executes.
  - React reconciles changes and builds a new fiber tree (virtual representation).
  - No DOM updates or effects run yet.
- **Commit phase**:
  - React applies DOM mutations.
  - Then it flushes effects (`useEffect`, `useLayoutEffect`).
  - This happens in a **separate traversal** of the fiber tree.

### 📚 Traversal Algorithm
- React uses a **depth-first traversal** of the fiber tree.
- Each node is “stepped twice”:
  - **Render phase**: `beginWork()` (call component) → `completeWork()` (prepare DOM node).
  - **Commit phase**: Walk again, this time flushing effects.

### ⚡ Order of Execution
- **Render phase order**:
  - Parent renders first → then child → then siblings.
  - Example logs:
    ```
    Parent is rendered
    Child is rendered
    ParentSibling is rendered
    ```
- **Commit phase order**:
  - Child effects run **before** parent effects (because traversal goes depth-first).
  - Example logs:
    ```
    Child committed effect
    Parent committed effect
    ParentSibling committed effect
    ```

### ✅ Key Takeaway
- **Render phase**: Parent → Child → Sibling.
- **Commit phase (effects)**: Child → Parent → Sibling.
- This explains why `useEffect` in children fires before the parent’s `useEffect`.

In short: **components render top-down, but effects commit bottom-up** due to React’s fiber tree traversal. This distinction is crucial for avoiding subtle bugs when multiple `useEffect` hooks interact across parent-child hierarchies.
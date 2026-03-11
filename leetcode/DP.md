# 🧠 Dynamic Programming Cheat Sheet

## 1️⃣ When to think about DP

Look for these signals:

```
count ways
minimum / maximum
longest / shortest
best score
can we reach / possible
```

Examples:

* how many ways to reach target
* minimum coins
* longest subsequence
* maximum profit

If the problem can be split into **smaller identical subproblems**, DP is likely.

---

# 2️⃣ The DP Recipe (interview framework)

Use this 5-step template.

```
1. Define state
2. Write recurrence
3. Define base case
4. Choose top-down or bottom-up
5. Optimize space if possible
```

Example:

```
dp[i] = ways to reach sum i
```

---

# 3️⃣ Common DP State Patterns

### 1. Prefix DP

```
dp[i]
```

Meaning:

```
answer using first i elements
```

Examples:

* climbing stairs
* house robber
* maximum subarray

---

### 2. Grid DP

```
dp[i][j]
```

Meaning:

```
answer for cell (i,j)
```

Examples:

* unique paths
* minimum path sum
* maximal square

Transition example:

```
dp[i][j] = dp[i-1][j] + dp[i][j-1]
```

---

### 3. Subsequence / Sequence DP

```
dp[i]
```

Examples:

* LIS
* longest increasing subsequence
* maximum subarray

Example recurrence:

```
dp[i] = max(dp[j] + 1) where j < i
```

---

### 4. Knapsack Pattern

```
dp[i][w]
```

Meaning:

```
using first i items with weight w
```

Examples:

* coin change
* subset sum
* partition equal subset

Transition:

```
dp[i][w] =
  max(
    dp[i-1][w],             // skip item
    dp[i-1][w-weight] + v   // take item
  )
```

---

### 5. Interval DP

```
dp[l][r]
```

Meaning:

```
answer for range [l,r]
```

Examples:

* burst balloons
* palindrome partitioning
* matrix chain multiplication

---

# 4️⃣ Top-Down vs Bottom-Up

### Top-Down (memoization)

Write recursion first.

```javascript
const dfs = (state) => {
  if (memo[state]) return memo[state]

  memo[state] = ...
  return memo[state]
}
```

Good when:

* recursion is natural
* states are sparse

---

### Bottom-Up (tabulation)

Fill DP table iteratively.

```javascript
for (state in order) {
  dp[state] = ...
}
```

Good when:

* states are dense
* faster in practice

---

# 5️⃣ Loop Order Trick

Loop order often determines **permutation vs combination**.

### Permutations (order matters)

Example: **Combination Sum IV**

```
for target
   for num
```

```
dp[i] += dp[i-num]
```

---

### Combinations (order doesn't matter)

Example: **Coin Change**

```
for num
   for target
```

```
dp[i] += dp[i-num]
```

---

# 6️⃣ Space Optimization

Often you only need previous states.

Example:

```
dp[i] depends on dp[i-1]
```

Use variables instead:

```javascript
let prev = 1
let curr = 1
```

Example problems:

* Fibonacci
* climbing stairs

---

# 7️⃣ Complexity Estimation

```
Time = number_of_states × transitions_per_state
```

Example:

```
states = target
transitions = nums.length
```

```
O(target × nums)
```

---

# 8️⃣ Base Case Rule

Always define **smallest solvable problem**.

Examples:

```
dp[0] = 1
dp[1] = 1
dp[0][0] = 0
```

---

# 9️⃣ Most Important Interview DP Problems

Practice these first:

1. Climbing Stairs
2. Coin Change
3. House Robber
4. Longest Increasing Subsequence
5. Longest Common Subsequence
6. Knapsack
7. Unique Paths
8. Combination Sum IV

These cover **~80% of DP patterns**.

---

# 🔟 Universal DP Template

Use this mental template:

```javascript
const dp = new Array(n + 1).fill(0)

dp[base] = baseValue

for (state in order) {
  for (choice of state) {
    dp[state] = combine(dp[state], dp[previous_state])
  }
}

return dp[target]
```

---

💡 **One powerful DP insight**

Almost every DP problem is just:

```
Current answer =
combine answers from smaller problems
```

---

If you'd like, I can also show a **visual DP map of the 15 most common LeetCode DP problems** that makes recognizing patterns almost instant.

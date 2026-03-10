## MISC

Animations feel right when:

- They feel natural.
- They have a purpose.
- They are made with taste.

## EASING

- `ease-out`:
  - Great for user-initiated interactions like opening a dropdown or a modal as the acceleration at the beginning gives the user a feeling of responsiveness.
  - Apply this easing for most **elements that have an enter and exit** animation.
	- Work great for enter animations on marketing pages,
	- Use it for intro animations

```
A trick to make your UI even more responsive with the help of ease-out is to add a subtle scale down effect when a button is pressed. A scale of 0.97 on the :active pseudo-class with a 150ms transition should do the job.
```

- `ease-in-out`:
	- Starts slowly, speeds up and then slows down towards the end, like the acceleration and deceleration of a car.
	- Can use it for **elements that are already** on the screen and need to move to a new position, or morph into a new shape.
	- The Dynamic Island would be a good use case for `ease-in-out`

- `ease-in`:
	-  Opposite of `ease-out`, it starts slowly and ends fast.
	-  Simply not made for UI animations

- `linear`:
	- Moves at a constant speed -> robotic, unnatural
	- For constant animations like a marquee.
	- Or interactive elements where you need to visualize the passage of time, like “a hold to delete” interaction
	- 3D coin rotation animation ¯\_(ツ)_/¯

- `ease`:
	- Similar curve to `ease-in-out`, but it starts faster and ends slower than an `ease-in-out` curve.
	- Use mostly for hover effects that transition color, background-color, opacity, and so on.
	- These smaller, more gentle animations often work best with `ease`


## SPRINGS
- `ease-in` ≈ low stiffness, moderate damping (slow start).
- `ease-out` ≈ high stiffness, high damping (fast start, smooth stop).
- `ease-in-out` ≈ balanced stiffness/damping (smooth acceleration/deceleration).
- `elastic/bounce` easings ≈ low damping, moderate stiffness (oscillations).
- Duration and Bounce:
	- Defination:
		- Duration: sets the total time the animation should take.
		- Bounce: controls how much the animation overshoots and oscillates before settling.
	- Simple Analogy:
		- Duration = how long until the ball lands in the basket.
		- Bounce = how much the ball rattles around before it stays put.
		- If you increase bounce, the ball jiggles more, but it still lands in the basket at the same time.
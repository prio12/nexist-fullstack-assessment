# Nexist Market — Fullstack Support Engineer Assessment

A cart interface built with Next.js, TypeScript, and Redux Toolkit.

**Repo:**  
https://github.com/prio12/nexist-fullstack-assessment.git

**Live Demo:**  
https://nexist-fullstack-assessment.vercel.app/

**Loom Walkthrough:**  
https://www.loom.com/share/09733191ff1746ccb80f38d670568310

---

## Getting Started

```bash
git clone https://github.com/prio12/nexist-fullstack-assessment.git
cd nexist-cart
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## What This Is

A client reported two problems:

> "When I refresh the page, my selected items disappear. Also, I don't understand how to use the feature properly."

This project is my response to that — a clean, minimal product listing and cart interface that solves both problems directly.

---

## Problems Solved

### 1. Cart data disappearing on refresh

The root cause was that cart state only lived in memory. As soon as the page reloaded, Redux re-initialized with an empty state.

I solved this by connecting the Redux cart slice directly to `localStorage`. Every time the cart changes, the updated state is written to localStorage immediately. When the app boots, it reads that saved data before rendering anything. The user never sees an empty cart after a refresh.

No external persistence library was used — the logic is two small functions in `store/cartSlice.ts`: `loadFromStorage` and `saveToStorage`. Keeping it simple and transparent.

### 2. Duplicate items being added

Prevented at two layers:

- **UI layer:** Once an item is in the cart, its button is disabled and labeled "Added". An "In Cart" badge appears on the card. The user has no way to trigger the action again.
- **State layer:** The `addToCart` reducer checks if the item already exists before pushing. If it does, it returns early. So even if someone bypasses the UI, the state won't duplicate.

---

## Features

- Product listing with responsive grid layout
- Add to cart with fill animation and label feedback
- Remove individual items or clear entire cart
- Cart slide-in panel from the right
- Item count badge with bounce animation on update
- Total price calculated automatically
- State persisted to localStorage on every change
- Empty cart state with icon and messaging

---

## UX Improvements

**1. Visual feedback on add-to-cart**  
The button animates with an orange fill on click, and the label transitions through "Add to Cart" → "Adding..." → "Added". The user always knows the action was registered.

**2. In Cart badge on product cards**  
Once an item is added, the card shows an "In Cart" badge. This means the user never has to open the cart just to check what they've already selected.

**3. Empty cart state**  
Instead of rendering nothing when the cart is empty, there's a clear message, an icon, and a "Continue Browsing" button. Removes confusion for first-time users.

**4. Hover states and micro-interactions**  
Buttons, cards, and the close icon all have deliberate hover transitions. The navbar cart badge bounces when the count changes. These small details make the interface feel responsive and alive.

---

## Testing Notes

I tested the application manually as a real user would. Two issues I identified during testing:

**Issue 1: No quantity control**  
A user who wants multiple units of the same product has no way to increase the quantity. The cart currently allows one unit per item, which is a real limitation for everyday shopping scenarios — for example, wanting to add 3 bars of chocolate or 2 bottles of olive oil. This is a direct result of the duplicate prevention requirement in the spec. In a production version, the natural next step would be replacing duplicate prevention with a quantity increment/decrement control per cart item.

**Issue 2: No confirmation before clearing cart**  
The "Clear entire cart" button removes all items instantly with no warning or undo option. A user who clicks it by accident loses their entire selection with no way to recover it. A simple confirmation dialog — "Are you sure you want to clear your cart?" — would prevent this. This wasn't added to keep the scope focused, but it's something I'd flag immediately in a real client project.

---

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Redux Toolkit
- localStorage (manual persistence)

---

## Project Structure

```
nexist-cart/
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
├── store/
│   ├── cartSlice.ts
│   ├── store.ts
│   └── provider.tsx
├── components/
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   └── Cart.tsx
└── lib/
    └── products.ts
```

---

## Author

Maksudur Rahman Prio

[linkedin.com/in/mrp-dev](https://linkedin.com/in/mrp-dev)  
[mrp-dev.netlify.app](https://mrp-dev.netlify.app)

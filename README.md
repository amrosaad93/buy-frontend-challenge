# Shopping Cart Live Coding Challenge

**Duration:** 75 minutes  
**Focus:** React, TypeScript, State Management, Testing

---

## 🎯 Overview

Build a mini shopping cart feature with authentication-aware behavior. This challenge mirrors patterns used in our production e-commerce platform.

---

## 📋 Challenge Requirements

### Step 1: Fetch & Display Products

**Task:**

- Create a `ProductList` component in `components/ProductList.tsx`
- Fetch products using the provided `fetchProducts()` from `lib/mockApi.ts`
- Display products showing: name, brand, price, and image
- Handle loading and error states properly
- Use TypeScript types from `lib/types.ts`

---

### Step 2: Cart State with react-use-sub

**Task:**

- Create a cart store in `lib/cartStore.ts` using `react-use-sub`
- Store structure:
  ```typescript
  type CartState = {
    items: CartItem[];
  };
  ```
- Implement these functions:
  - `addToCart(product: Product)` - adds product or increments quantity
  - `removeFromCart(productId: string)` - removes item from cart
  - Export the store hook: `useCartSub`

**Example Pattern:**

```typescript
import { createStore } from "react-use-sub";
import { CartItem, Product } from "./types";

type CartState = {
  items: CartItem[];
};

export const [useCartSub, CartStore] = createStore<CartState>({
  items: [],
});

export const addToCart = (product: Product) => {
  // Your implementation here
};
```

**Bonus:**

- Use `persistore` to persist cart to localStorage

---

### Step 3: Cart Summary Component

**Task:**

- Create a `CartSummary` component in `components/CartSummary.tsx`
- Display:
  - Number of items
  - Total price
- Wire up "Add to Cart" buttons in your ProductList
- Subscribe to cart state using `useCartSub`

**Example:**

```typescript
import { useCartSub } from "../lib/cartStore";

export const CartSummary = () => {
  const items = useCartSub((state) => state.items);
  const intl = useIntl();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <p>{intl.formatMessage({ id: "cart.items" }, { count: totalItems })}</p>
    </div>
  );
};
```

---

### Step 4: Auth-Aware Behavior

**Task:**

- Create an auth store in `lib/authStore.ts` (similar pattern to cart store)
- Auth state:
  ```typescript
  type AuthState = {
    user: User; // User type is in lib/types.ts
  };
  ```
- Implement:
  - `login()` - sets a mock user (not guest)
  - `logout()` - sets user to null
- Modify your ProductList:
  - If `user === null` or `user.isGuest === true`:
    - Disable "Add to Cart" buttons
    - Show message: "Please log in to add items to cart"
  - If user is logged in: normal behavior
- Add login/logout buttons somewhere in your UI

---

### Step 5: Testing

**Task:**
Write **one test** in `__tests__/cart.test.tsx`:

**Test Scenario:**  
"When user is logged in and clicks 'Add to cart', the cart summary updates to show 1 item"

**Example Structure:**

```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IntlProvider } from "react-intl";
import translations from "../translations/en.json";

describe("Shopping Cart", () => {
  it("updates cart summary when logged-in user adds item", async () => {
    // Your test here
  });
});
```

---

## 📁 Project Structure

```
shopping-cart-challenge/
├── components/          # Your React components go here
├── lib/
│   ├── types.ts        # Type definitions (provided)
│   ├── mockApi.ts      # Mock API functions (provided)
│   ├── cartStore.ts    # TODO: Create cart store
│   └── authStore.ts    # TODO: Create auth store
├── pages/
│   ├── _app.tsx        # App wrapper with IntlProvider (provided)
│   └── index.tsx       # Home page - start here
├── styles/
│   └── globals.css     # Global styles with utility classes
├── translations/
│   └── en.json         # Translation strings (provided)
└── __tests__/          # Your tests go here
```

---

## 🔑 Key Concepts

### react-use-sub Pattern

We use `react-use-sub` instead of React Context for global state:

```typescript
import { createStore } from "react-use-sub";

type MyState = { count: number };

export const [useSub, Store] = createStore<MyState>({ count: 0 });

// In components:
const count = useSub((state) => state.count);

// To update:
Store.set({ count: 5 });
```

---

## 💡 Tips

- **Don't worry about styling** - Focus on functionality and code structure
- **Ask questions** - We want to see how you think and communicate
- **Think out loud** - Explain your decisions as you code
- **It's okay to not finish** - We care more about approach than completion
- **Use TypeScript properly** - Avoid `any`, use proper types
- **Keep it simple** - Don't over-engineer

---

## 📚 Resources

- [react-use-sub docs](https://github.com/fdc-viktor-luft/react-use-sub)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

Good luck!

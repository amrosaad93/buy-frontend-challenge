"use client";
import Head from "next/head";

/**
 * Home page - Starting point for the challenge
 *
 * TODO: Implement the following:
 * 1. Create a ProductList component that fetches and displays products
 * 2. Create a CartSummary component that shows cart state
 * 3. Implement cart state management using react-use-sub
 * 4. Add auth state management
 * 5. Make "Add to Cart" buttons auth-aware
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Shopping Cart Challenge</title>
        <meta name="description" content="Live coding challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container">
        <h1>Shopping Cart Challenge</h1>
        <p>Start building here! Check the README.md for instructions.</p>

        {/* TODO: Add your components here */}
      </main>
    </>
  );
}

import Link from "next/link";

export default function MealsPage() {
  return (
    <div>
      <h1>Meals Page</h1>
      <p>Welcome to the meals page!</p>

      <p>
        <Link href="/meals/meal-1">Go to Meal Detail Page</Link>
      </p>
    </div>
  );
}

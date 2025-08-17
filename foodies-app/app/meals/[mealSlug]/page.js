export default function MealDetailsPage({ params }) {
  const { mealSlug } = params;

  return (
    <div>
      <h1>Meal Details Page</h1>
      <p>Details for meal: {mealSlug}</p>
    </div>
  );
}

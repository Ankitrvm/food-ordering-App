import classes from "./AvailableMeals.module.css";
import MealItem from "./MealsItem/MealsItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Aloo Tikki Burger 🟢",
    description: "Finest potato and veggies",
    price: 135,
  },
  {
    id: "m2",
    name: "Pepsi",
    description: "A soft drink!",
    price: 60,
  },
  {
    id: "m3",
    name: "chicken-Spicy Burger 🔴",
    description: "American, raw, meaty",
    price: 169,
  },
  {
    id: "m4",
    name: "Veg-Burger 🟢",
    description: "Healthy...and green...",
    price: 108,
  },
  {
    id: "m5",
    name: "Fries 🟢",
    description: "Made with potatos",
    price: 69,
  },
  {
    id: "m6",
    name: "Veg-Pizza 🟢",
    description: "Made with love",
    price: 205,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meals) => (
    <MealItem
      key={meals.id}
      id={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

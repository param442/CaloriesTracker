import GridComponents from "./gridComponents";
import NutritionCard from "./NutritionCard";
const NutritionLog = () => {
  return (
    <GridComponents title="Nutrition">
      <NutritionCard
        label="Calories"
        value="2000"
        goal="2500"
        type="Nutrition"
      />

      <NutritionCard label="Proteins" value="100" goal="200" type="Nutrition" />
      <NutritionCard label="Carbs" value="250" goal="300" type="Nutrition" />
      <NutritionCard label="Fats" value="70" goal="80" type="Nutrition" />
    </GridComponents>
  );
};

export default NutritionLog;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

function SelectedFood(props) {
  let { theme } = props;
  const location = useLocation();
  // console.log(location.state);
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);

  document.title = `Mr.Chef ${food.strMeal ? "- " + food.strMeal : ""}`;

  const fetchItem = async () => {
    setLoading(true);
    let item = [];
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${location.state.id}`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(location.state.id);
    // console.log(json.meals[0]);
    item.push(json.meals[0]);
    setFood(item[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <div
            className={`card-body d-flex justify-content-center text-${
              theme === "dark" ? "light" : "dark"
            }`}
            style={{ marginTop: "1rem" }}
          >
            <h1 className="card-title">{food.strMeal}</h1>
          </div>
          <div
            className={`card-body d-flex justify-content-center text-${
              theme === "dark" ? "light" : "dark"
            }`}
            style={{ marginBottom: "1rem" }}
          >
            <p className="card-text">
              ({food.strArea} {food.strCategory})
            </p>
          </div>
          <div className="d-flex justify-content-center my-2">
            <div
              className={`card bg-${theme} border border-${
                theme === "dark" ? "light" : "dark"
              }`}
              style={{ width: "50rem" }}
            >
              <img
                src={food.strMealThumb}
                className="card-img-top"
                alt={food.strMeal}
              />
              <div className="row d-flex justify-content-center">
                <div className="col-md-6 my-2">
                  <ul className="list-group list-group-flush border border-dark my-2">
                    <li
                      className={`list-group-item border bg-${
                        theme === "dark" ? "light" : "dark"
                      } border border-${
                        theme === "dark" ? "light" : "dark"
                      }  text-${theme}`}
                    >
                      Ingredients Required
                    </li>
                    {food.strIngredient1 !== null && food.strIngredient1 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient1} : {food.strMeasure1}
                      </li>
                    )}
                    {food.strIngredient2 !== null && food.strIngredient2 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient2} : {food.strMeasure2}
                      </li>
                    )}
                    {food.strIngredient3 !== null && food.strIngredient3 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient3} : {food.strMeasure3}
                      </li>
                    )}
                    {food.strIngredient4 !== null && food.strIngredient4 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient4} : {food.strMeasure4}
                      </li>
                    )}
                    {food.strIngredient5 !== null && food.strIngredient5 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient5} : {food.strMeasure5}
                      </li>
                    )}
                    {food.strIngredient6 !== null && food.strIngredient6 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient6} : {food.strMeasure6}
                      </li>
                    )}
                    {food.strIngredient7 !== null && food.strIngredient7 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient7} : {food.strMeasure7}
                      </li>
                    )}
                    {food.strIngredient8 !== null && food.strIngredient8 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient8} : {food.strMeasure8}
                      </li>
                    )}
                    {food.strIngredient9 !== null && food.strIngredient9 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient9} : {food.strMeasure9}
                      </li>
                    )}
                    {food.strIngredient10 !== null && food.strIngredient10 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient10} : {food.strMeasure10}
                      </li>
                    )}
                    {food.strIngredient11 !== null && food.strIngredient11 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient11} : {food.strMeasure11}
                      </li>
                    )}
                    {food.strIngredient12 !== null && food.strIngredient12 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient12} : {food.strMeasure12}
                      </li>
                    )}
                    {food.strIngredient13 !== null && food.strIngredient13 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient13} : {food.strMeasure13}
                      </li>
                    )}
                    {food.strIngredient14 !== null && food.strIngredient14 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient14} : {food.strMeasure14}
                      </li>
                    )}
                    {food.strIngredient15 !== null && food.strIngredient15 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient15} : {food.strMeasure15}
                      </li>
                    )}
                    {food.strIngredient16 !== null && food.strIngredient16 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient16} : {food.strMeasure16}
                      </li>
                    )}
                    {food.strIngredient17 !== null && food.strIngredient17 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient17} : {food.strMeasure17}
                      </li>
                    )}
                    {food.strIngredient18 !== null && food.strIngredient18 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient18} : {food.strMeasure18}
                      </li>
                    )}
                    {food.strIngredient19 !== null && food.strIngredient19 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient19} : {food.strMeasure19}
                      </li>
                    )}
                    {food.strIngredient20 !== null && food.strIngredient20 !=='' && (
                      <li
                        className={`list-group-item bg-${theme} border border-${
                          theme === "dark" ? "light" : "dark"
                        }  text-${theme === "dark" ? "light" : "dark"}`}
                      >
                        {food.strIngredient20} : {food.strMeasure20}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <h4
                  className={`card-title text-${
                    theme === "dark" ? "light" : "dark"
                  }`}
                >
                  Recipe
                </h4>
                <p
                  className={`card-text text-${
                    theme === "dark" ? "light" : "dark"
                  }`}
                >
                  {food.strInstructions}
                </p>
              </div>
              <a
                href={food.strYoutube}
                target="_blank"
                rel="noreferrer"
                className={`btn btn-${
                  theme === "dark" ? "light" : "dark"
                } my-2 mx-2`}
              >
                Watch Video
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SelectedFood;

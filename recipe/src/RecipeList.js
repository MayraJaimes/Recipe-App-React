import React, {Component} from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
static defaultProps = {
  recipes: [ 
    {
      title: "Spaghetti",
      instructions: "Lorem ipsum dolor sit amet, paulo euripidis ut pro. Errem assentior at qui, cum in commodo gloriatur definitionem. Pro sale brute summo id, quis alienum erroribus ex vel. Vel modus homero interpretaris an, eu soluta possit per. Mel modus graece accumsan ei, id mei graece commodo. Cum at case eruditi.",
      ingredients: ["one", "two", "three", "four"],
      img: "spaghetti.jpg"

    },
    {
      title: "MilkShake",
      instructions: "Lorem ipsum dolor sit amet, paulo euripidis ut pro. Errem assentior at qui, cum in commodo gloriatur definitionem. Pro sale brute summo id, quis alienum erroribus ex vel. Vel modus homero interpretaris an, eu soluta possit per. Mel modus graece accumsan ei, id mei graece commodo. Cum at case eruditi.",
      ingredients: ["one", "two", "three", "four"],
      img: "milkshake.jpg"

    },
    {
      title: "Avocado Toast",
      instructions: "Lorem ipsum dolor sit amet, paulo euripidis ut pro. Errem assentior at qui, cum in commodo gloriatur definitionem. Pro sale brute summo id, quis alienum erroribus ex vel. Vel modus homero interpretaris an, eu soluta possit per. Mel modus graece accumsan ei, id mei graece commodo. Cum at case eruditi.",
      ingredients: ["one", "two", "three", "four"],
      img: "toast.jpg"
    }
  ]
}

  render () {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ))

    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )

  }
}

export default RecipeList;
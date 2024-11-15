import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FavoritesRoute extends Route {
  @service recipeData;
  @service store;

  async model() {
    await this.recipeData.loadRecipes();
    return this.recipeData.getFavorites().map((favoriteId) => {
      return this.store.peekRecord('recipe', favoriteId);
    });
  }
}

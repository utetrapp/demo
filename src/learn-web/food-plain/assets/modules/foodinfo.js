export class FoodInfo {
  #resultNode;

  constructor(qsResults) {
    this.#resultNode = document.querySelector(qsResults);
  }
  //search
  search(query) {
    //remove all previous results
    while (this.#resultNode.firstChild)
      this.#resultNode.removeChild(this.#resultNode.firstChild);
    fetch(
      `https://de.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${query}&sort_by=unique_scans_n&fields=product_name_de,nutriscore_grade,image_front_small_url&json=true`
    )
      .then((response) => response.json())
      .then((results) => this.#showResults(results.products ?? []));
  }

  //show results
  #showResults(list) {
    for (const item of list) {
      this.#resultNode.appendChild(
        this.#renderItem(
          item.image_front_small_url ?? "",
          item.product_name_de ?? "",
          item.nutriscore_grade ?? ""
        )
      );
    }
  }

  /**
   * Create HTML code for one food item
   * 
   * @param {string} imgUrl
   * @param {string} title
   * @param {string} subtitle
   *
   * create something like
     <article class="tile is-parent box is-4">
      <figure class="image is-64x64" style="overflow: hidden">
        <img
          src="https://images.openfoodfacts.org/images/products/807/680/208/5738/front_de.3372.200.jpg"
          alt=""
        />
      </figure>
      <p class="title">Penne Rigate N°73</p>
      <p class="subtitle">a</p>
    </article>
   */
  #renderItem(imgUrl, title, subtitle) {
    const article = this.#createElementWithClass(
      "article",
      "tile is-parent box is-4"
    );
    const figure = this.#createElementWithClass("figure", "image is-64x64");
    figure.setAttribute("style", "overflow: hidden;");
    const img = document.createElement("img");
    img.setAttribute("src", imgUrl);
    img.setAttribute("alt", "");
    const pTitle = this.#createElementWithClass("p", "title");
    pTitle.textContent = title;
    const pSubtitle = this.#createElementWithClass("p", "subtitle");
    pSubtitle.textContent = subtitle;
    figure.appendChild(img);
    article.appendChild(figure);
    article.appendChild(pTitle);
    article.appendChild(pSubtitle);
    return article;
  }

  /**
   * Helper method to create html elements and set the class attribute
   *
   * @param {string} elementName - e.g. article or h1
   * @param {string} classValue - value for the class attribute
   * @returns
   */
  #createElementWithClass(elementName, classValue) {
    const element = document.createElement(elementName);
    element.setAttribute("class", classValue);
    return element;
  }
}

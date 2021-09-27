import { apiService } from "./apiService";
import { createMarkup } from "./fetchAndMarkup";
// import { states } from "./getStates";
import { refs } from "./getRefs";
import { showError } from "./pnotify";
// import { resetPage } from "./searchEvent";

refs.selectCountry.addEventListener("change", changeCountryHandler);

function changeCountryHandler(e) {
  const country = e.target.value;
  const keyWord = refs.inputForm.value.trim();

  if (country.length > 2) {
    e.target.blur();
    return;
  }

  if (keyWord) {
    apiService
      .fetchByEventAndCountry(keyWord, country)
      .then(createMarkup)
      .catch(showError);
    e.target.blur();
    return;
  }

  apiService.fetchByCountry(country).then(createMarkup).catch(showError);
  e.target.blur();

  // fetchEvent(states.query, states.page, this.value)
  //   .then((states.country = this.value))
  //   .then(createMarkup)
  //   .catch(showError);
  // resetPage();
}

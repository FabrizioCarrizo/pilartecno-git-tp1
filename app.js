const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    for (const country of countries) {
        if (country.iso3 === isoCode) {
          return country;
        }
      }
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    for (const country of countries) {
        if (country.iso3 === isoCode) {
          return country.translations[language];
        }
      }
      
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){

    let countriesOfSubregion = [];
    for (const country of countries) {
        if (country.subregion === subregion) {
            countriesOfSubregion.push(" " + country.name);
        }
    }

    let subregionResponse = `These are all the countries in ${subregion}:` + countriesOfSubregion.toString() +".";

    return subregionResponse;


}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();
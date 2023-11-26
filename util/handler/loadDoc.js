/**
 * This is the service class, which fetches the html code.
 * @param {String} page -page which should be loaded
 * @param {Element} parent 
 */

export async function loadDoc(page, parent = "#game") {
  const response = await fetch(page);

  const html = await response.text();
  $(parent).html(html);
}

export function loadVictoryScene() {
  $("#scene").empty();
  $("#scene").append(loadDoc("../../components/VictoryScreen.html"));
}

export function getScenePath(level) {
  return `../../level/${level}/index.html`;
}
import { loadDoc, getScenePath } from "./loadDoc.js";

/**
 * This function get the file path and loads the HTML code for the scene.
 * @param {Level} level 
 */
export default async function loadLevel(level) {
  const scenePath = getScenePath(level);
  await loadDoc(scenePath);
};




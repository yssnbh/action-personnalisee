import * as core from "@actions/core";

try {
  const nom = core.getInput("nom");
  const langue = core.getInput("langue");

  let message;

  switch (langue.toLowerCase()) {
    case "en":
      message = `Hello, ${nom}!`;
      break;
    case "es":
      message = `Hola, ${nom}!`;
      break;
    case "fr":
    default:
      message = `Bonjour, ${nom} !`;
  }

  core.info(message);
} catch (error) {
  core.setFailed(error.message);
}

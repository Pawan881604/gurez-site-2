const { url_formet } = require("./url_formet");

exports.generateUniqueUrl = async (slug, model, name) => {
  let url = await url_formet(slug);
  // Initial URL assignment
  // let url = slug;
  // Dynamic property name syntax fix
  let is_exist = await model.findOne({ [name]: url });

  let counter = 1;

  // Loop to find a unique URL
  while (is_exist) {
    // Update URL with counter
    url = `${slug}-${counter}`;
    // Check if the new URL exists
    is_exist = await model.findOne({ [name]: url });
    counter++;
  }

  // Return the unique URL
  return url;
};

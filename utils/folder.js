const path = require("path");

/* 
  const content = `
`;
*/

module.exports = (type, directory, props) => {
  const capitalizeName =
    props.name.charAt(0).toUpperCase() + props.name.slice(1);

  const folders = {
    composable: {
      dirname: "composables",
      content: `export const use${capitalizeName} = () => {
}\n`,
      type: props.lang,
    },
    component: {
      dirname: "components",
      content: `<script lang="${props.lang}">
</script>

<template>
  <div>
    <h2>${props.name} Component</h2>
  </div>
</template>
`,
      type: "vue",
    },
    plugin: {
      dirname: "plugins",
      content: `
      const ${props.name} = {
        install(app, options) {
          // configure the app
        }
      }
      export ${props.name}
      `,
      type: props.lang,
    },
    page: {
      dirname: "views",
      content: `<script lang="${props.lang}">
</script>

<template>
  <div>
    <h2>${props.name} Page</h2>
  </div>
</template>
`,
      type: "vue",
    },
    layout: {
      dirname: "layouts",
      content: `<template>
  <div>
    <h2>${props.name} Layout</h2>
  </div>
</template>
`,
      type: "vue",
    },
  };
  return {
    folderDir: path.join(directory, folders[type].dirname),
    content: folders[type].content,
    fileType: folders[type].type,
  };
};

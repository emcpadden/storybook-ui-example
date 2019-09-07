# StorybookUiExample

Steps:

1. Create application: NOTE: 8.3 Angular has issues with Storybook, which is why I used 8.2
```
npx -p @angular/cli@8.2 ng new storybook-ui-example
```  

2. Create a new Angular Library that will hold re-useable components
```
ng g lib my-control-library -p ui
```

3. init StorybookJS for this project
```
npx @storybook/cli init
```

4. Build the control library:
```
ng build my-control-library
```

5. Try to run storybook.  You will get an error: Can't resolve all parameters for AppComponent: (?, ?, [object Object]).
```
npm run storybook
```

6. To resolve the error above, add the following line to the .tsconfig file in the root of the project.
```
"emitDecoratorMetadata": true,
```

7. Create story for basic MyComponentLibrary reference the component and module directly 

8. Modify the webpack config in the .storybook folder to get storybook auto refresh when the component library code is modified.  Below is the webpack config:
```
const path = require("path");

module.exports = function({ config }) {
  config.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000
  };

  return config;
};
```
NOTE: in order for this to work, you will need to be building the component library in watch mode while the storybook is running.  To build in watch mode, do the following:
```
ng build my-control-library --watch
```
Then run:
```
npm run storybook
```
I found it could take some time before the watching starts to work.  BUt then it just starts working, not sure why.

9. Move the templates and styles in the component library to their own files.  

10. Add Angular Material to the project and to the control
```
ng add @angular/material
```
Also add the following peer dependencies in the my-control-library package.json file
```
"@angular/animations": "~8.2.0",
"@angular/cdk": "~8.1.4",
"@angular/material": "^8.1.4"
```

11. Add several of the StorybookJS Add ons:
```
    "@storybook/addon-a11y": "^5.1.11",
    "@storybook/addon-actions": "^5.1.11",
    "@storybook/addon-backgrounds": "^5.1.11",
    "@storybook/addon-console": "^1.2.1",
    "@storybook/addon-cssresources": "^5.1.11",
    "@storybook/addon-knobs": "^5.1.11",
    "@storybook/addon-links": "^5.1.11",
    "@storybook/addon-notes": "^5.1.11",
    "@storybook/addon-storysource": "^5.1.11",
    "@storybook/addon-viewport": "^5.1.11",
```
```
npm install @storybook/addon-a11y, @storybook/addon-actions, @storybook/addon-backgrounds, @storybook/addon-console,  @storybook/addon-cssresources, @storybook/addon-knobs, @storybook/addon-links, @storybook/addon-notes, @storybook/addon-storysource, @storybook/addon-viewport --save-dev 

npm install @storybook/addon-a11y --save-dev
npm install @storybook/addon-actions --save-dev
npm install @storybook/addon-backgrounds --save-dev
npm install @storybook/addon-console --save-dev
npm install @storybook/addon-cssresources --save-dev
npm install @storybook/addon-knobs --save-dev
npm install @storybook/addon-links --save-dev
npm install @storybook/addon-notes --save-dev
npm install @storybook/addon-storysource --save-dev
npm install @storybook/addon-viewport --save-dev
```
And add them to the addons.js:
```
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-notes/register';
import '@storybook/addon-viewport/register';
import '@storybook/addon-console';
import '@storybook/addon-knobs/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-cssresources/register';
import '@storybook/addon-backgrounds/register';
import '@storybook/addon-storysource/register';
```
Note: to make storysource addon work, I needed to add the following to the webpack.config.js:
```
  config.module.rules.push({
    test: /\.stories\.ts?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript'
        }
      }
    ],
    enforce: 'pre',
    include: [path.resolve(__dirname, '../src')],
  });
```

12. add npm scripts to build and package the my-control-library
```
"build-lib": "ng build my-control-library",
"package-lib": "cd ./dist/my-control-library && npm pack"
```
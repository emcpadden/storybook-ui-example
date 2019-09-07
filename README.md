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

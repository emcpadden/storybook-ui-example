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

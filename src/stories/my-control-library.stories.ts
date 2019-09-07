import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";
import { withA11y } from "@storybook/addon-a11y";
//You may need to import other things from knobs
//like object, number, string etc
import { withKnobs, text } from "@storybook/addon-knobs";
import { withCssResources } from "@storybook/addon-cssresources";
import { withConsole, setConsoleOptions } from '@storybook/addon-console';


import { MyControlLibraryModule } from '../../projects/my-control-library/src/lib/my-control-library.module';
import { MyControlLibraryComponent } from '../../projects/my-control-library/src/lib/my-control-library.component';

import markdown from './notes/my.notes.md';

// const panelExclude = setConsoleOptions({}).panelExclude;
// setConsoleOptions({
//   panelExclude: [...panelExclude, /deprecated/],
// });
setConsoleOptions({  // this needs to be here for the console to appear, you can add options
});


storiesOf('My Control Library', module)
.addDecorator(withA11y) //Accessibility
.addDecorator(withKnobs) //Prop manipulation
.addDecorator(withCssResources) //CSS selection
.addParameters({
  cssresources: [
    {
      id: `bluetheme`,
      code: `<style>body { background-color: lightblue; }</style>`,
      picked: false
    }
  ],
  backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ],
})
.addDecorator(
    moduleMetadata({
      imports: [
        MyControlLibraryModule
      ]
    })
  )
  .add("empty", () => ({
    component: MyControlLibraryComponent,
    props: {}
  }))
  .add("with title", () => ({
    component: MyControlLibraryComponent,
    props: {
      title: "Hello card!!!"
    }
  }))
  .add("with title and subtitle", () => ({
    component: MyControlLibraryComponent,
    props: {
      title: "Hello card!",
      subtitle: "Well hello there 👋"
    }
  }))
  .add(
    "with notes",
    withNotes("Just a few notes about this story...")(() => ({
      component: MyControlLibraryComponent,
      props: {}
    }),
  ),
  {
    notes: {markdown: markdown},
  })
  .add("with action", () => ({
    component: MyControlLibraryComponent,
    props: {
      title: text("Title", "A card...", "General"),
      subtitle: "Waiting to be clicked-on",
      btnClicked: action("👊 Button was clicked")
    }
  }),
  {
    notes: 'A very simple example of addon notes',
  });

    // let's nest a story into our main `Card` stories
storiesOf("My Control Library/nested", module).add("special case", () => ({
  component: MyControlLibraryComponent,
  props: {
    //content: "I'm a control in a nested story!"
  }
}));

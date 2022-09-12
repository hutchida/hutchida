import React from "react";

import {
  Section,
  EventsAccordion,
  Slide,
  RichText,
  Tumbleweed,
  SketchBox,
  Splash
} from 'knit-hutchida/lib'


let Components: any = {};
Components["SectionRecord"] = Section;
Components["EventsAccordionRecord"] = EventsAccordion;
Components["SlideRecord"] = Slide;
Components["RichTextRecord"] = RichText;
Components["TumbleWeedRecord"] = Tumbleweed;
Components["SketchboxRecord"] = SketchBox;
Components["SplashRecord"] = Splash;

/**
 * Component mapper for generic pages.
 */
const PageComponentMapper = ({
  components,
}: {
  components: any;
}): JSX.Element => {
  // If you print the components list here to the browser console and you see a component
  // in the array without any data, it will be because the query is non-existent
  // If the page gives you a 404 it may well be because a query is incorrect
  console.log('components', components)
  return (
    <>
      {components?.map((component: any, index: number) => {
        let cmsComponentName = component.__typename
        let componentOutput;
        if (cmsComponentName) {
          const CurrentBlock = Components[cmsComponentName];
          if (!CurrentBlock) {
            console.log(CurrentBlock, cmsComponentName, component.__typename);
          }
          componentOutput = (
            <CurrentBlock
              {...component}
              key={`components-${cmsComponentName}-${index}`}
            />)
          return componentOutput;
        }
      })}
    </>
  );
};

export default PageComponentMapper;

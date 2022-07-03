import React from "react";
// import { IComponents } from "../../types/IComponents";
// import dynamic from "next/dynamic";
import {
  Section,
  EventsAccordion,
  Slide
} from 'knit-hutchida/lib'


let Components: any = {};
Components["Section"] = Section;
Components["EventsAccordion"] = EventsAccordion;
Components["Slide"] = Slide;

const componentsMap = {
  section: "Section",
  eventsAccordion: "EventsAccordion",
  slide: "Slide",
};

/**
 * Component mapper for generic pages.
 */
const PageComponentMapper = ({
  components,
}: {
  components: any;
}): JSX.Element => {
  console.log('components', components)
  // If you print the components list here to the browser console and you see a component
  // in the array without any data, it will be because the query is non-existent
  // If the page gives you a 404 it may well be because a query is incorrect
  return (
    <>
      {components?.map((component: any, index: number) => {
        console.log('component.component', component.component)
        const componentName =
          (componentsMap as any)[component.component];
        let componentOutput;
        console.log('componentName', componentName)
        if (componentName) {
          const CurrentBlock = Components[componentName];
          if (!CurrentBlock) {
            console.log(CurrentBlock, componentName, component.__typename);
          }
          componentOutput = (
            <CurrentBlock
              {...component}
              key={`components-${componentName}-${index}`}
            />)
          return componentOutput;
        }
      })}
    </>
  );
};

export default PageComponentMapper;

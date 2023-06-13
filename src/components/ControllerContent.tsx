import CodeArea from "./CodeArea"
import controller from "./codeExamples/controller"
import reactNativeController from "./codeExamples/reactNativeController"
import generic from "../data/generic"
import TabGroup from "./TabGroup"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import controllerTs from "./codeExamples/controllerTs"
import UseControllerMethods from "./UseControllerMethods"
import apidata from "../data/api"

export default function ControllerContent({ api }: { api: typeof apidata }) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          Controller:{" "}
          <span className={typographyStyles.typeText}>Component</span>
        </h2>
      </code>

      {api.Controller.description}

      <h2 className={typographyStyles.subTitle}>Props</h2>

      <p>
        The following table contains information about the arguments for{" "}
        <code>Controller</code>.
      </p>

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>{generic.name}</th>
              <th>{generic.type}</th>
              <th>{generic.required}</th>
              <th>{generic.description}</th>
            </tr>
          </thead>
          {api.Controller.table}
        </table>
      </div>

      <UseControllerMethods isController />

      <h2 id="example" className={typographyStyles.subTitle}>
        Examples
      </h2>

      <TabGroup buttonLabels={["Web", "React Native"]}>
        <CodeArea
          rawData={controller}
          url="https://codesandbox.io/s/react-hook-form-v7-controller-5h1q5"
          tsRawData={controllerTs}
          tsUrl="https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw"
        />
        <CodeArea
          rawData={reactNativeController}
          isExpo
          url="https://snack.expo.io/@bluebill1049/react-hook-form-v7---controller"
        />
      </TabGroup>

      <h2 className={typographyStyles.subTitle}>Video</h2>
      <p>
        The following video showcases what's inside Controller and how its been
        built.
      </p>

      <iframe
        width="100%"
        height="528"
        title="react hook form controller build"
        src="https://www.youtube.com/embed/N2UNk_UCVyA"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {api.Controller.tips}
    </>
  )
}

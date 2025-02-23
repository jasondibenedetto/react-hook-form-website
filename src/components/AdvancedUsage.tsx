import * as React from "react"
import {
  SubHeading,
  HeadingWithTopMargin,
  QuestionTitle,
  Note,
} from "../styles/typography"
import Link from "../styles/link"
import CodeArea from "./CodeArea"
import SideMenu from "./SideMenu"
import track from "./utils/track"
import { Container, Wrapper } from "../styles/containers"
import accessibleCodeBase from "./codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "./codeExamples/accessibleCodeFinal"
import { step1, step2, step3 } from "./codeExamples/formWizard"
import smartForm from "./codeExamples/smartForm"
import { CodeHeading } from "./ApiPage"
import form from "./codeExamples/form"
import input from "./codeExamples/input"
import Footer from "./Footer"
import fieldArray from "./codeExamples/fieldArray"
import copyClipBoard from "./utils/copyClipBoard"
import { CopyButton, InstallCode } from "./GetStarted"
import schemaValidation from "./codeExamples/schemaValidation"
import connectForm from "./codeExamples/connectForm"
import { Link as PageLink } from "gatsby"
import formContextPerformance from "./codeExamples/formContextPerformance"
import StarRepo from "./StarRepo"

const { useRef } = React

const links = [
  "Accessibility",
  "Wizard Form",
  "Smart Form Component",
  "Field Arrays",
  "Schema Validation",
  "Connect Form",
  "FormContext Performance",
]

function Advanced() {
  const pageContentRef = useRef({
    Accessibility: null,
    WizardForm: null,
    SmartFormComponent: null,
    FieldArrays: null,
    SchemaValidation: null,
    ConnectForm: null,
    FormContextPerformance: null,
  })

  const goToSection = name => {
    const url = window.location.href
    const hashIndex = url.indexOf("#")
    const filterName = name.replace(/ /g, "")

    if (hashIndex < 0) {
      history.pushState({}, null, `${url}#${filterName}`)
    } else {
      history.pushState({}, null, `${url.substr(0, hashIndex)}#${filterName}`)
    }

    track({
      category: "Link",
      label: filterName,
      action: `Click - Go to ${filterName} section`,
    })

    if (pageContentRef.current[filterName]) {
      pageContentRef.current[filterName].scrollIntoView({ behavior: "smooth" })
    }
  }

  React.useEffect(() => {
    if (location.hash)
      setTimeout(() => goToSection(location.hash.substr(1)), 10)
  }, [])

  return (
    <Container>
      <HeadingWithTopMargin id="main">Advanced</HeadingWithTopMargin>
      <SubHeading>
        Build complex and accessible forms with React Hook Form.
      </SubHeading>

      <Wrapper>
        <SideMenu isStatic links={links} goToSection={goToSection} />

        <main>
          <QuestionTitle
            ref={ref => (pageContentRef.current.Accessibility = ref)}
          >
            Accessibility (A11y)
          </QuestionTitle>
          <p>
            React Hook Form have support on native form validation, which let
            the borrow validate inputs with your rules, however, as most of us
            would have to build forms in a custom design and layout and it's our
            responsibility to make sure our forms are accessible (A11y).
          </p>

          <p>
            The following code example works as intended for validation, however
            it can be improved for accessibility.
          </p>

          <CodeArea rawData={accessibleCodeBase} />

          <p>
            The following code example is improved version by leveraging{" "}
            <a
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
              target="_blank"
            >
              ARIA
            </a>
            .
          </p>
          <CodeArea rawData={accessibleCodeFinal} />

          <p>
            After the improvement, the screen reader will say:{" "}
            <i>“Name, edit, invalid entry, This is required.”</i>
          </p>

          <hr />

          <QuestionTitle ref={ref => (pageContentRef.current.WizardForm = ref)}>
            Wizard Form / Funnel
          </QuestionTitle>
          <p>
            It's pretty common to collect user information through different
            pages and sections. We recommend to use state management library to
            store user input through different pages/section. In this example,
            we are going to use{" "}
            <Link
              href="https://github.com/bluebill1049/little-state-machine"
              target="_blank"
            >
              little state machine
            </Link>{" "}
            as our state management library (you can replace it with{" "}
            <Link href="https://github.com/reduxjs/redux" target="_blank">
              redux
            </Link>
            , if you are more familiar).
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>Step 1</Note>: set up your routes and store.
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 2</Note>: create your pages and make them collecting
            data, submit to store and push to the next page of your form.
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 3</Note>: make your final submission with all your data
            in store or display the result data.
          </p>
          <CodeArea
            rawData={step3}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            Follow the above pattern you should be able to build a wizard
            form/funnel to collect user input data from multiple pages.
          </p>

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.SmartFormComponent = ref)}
          >
            Smart Form Component
          </QuestionTitle>

          <p>
            This idea is that you can easily compose your form with inputs. we
            going to create a <code>Form</code> component to automatically
            collecting form data. In fact, this is part of what we implemented
            forms at work.
          </p>

          <CodeArea
            rawData={smartForm}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p style={{ textAlign: "center" }}>♦</p>

          <p>Let's have a look what's in each of those components.</p>

          <CodeHeading>
            <h2>Form</h2>
          </CodeHeading>

          <p>
            <code>Form</code> component's responsibility is to inject all{" "}
            <code>react-hook-form</code> methods into the child component.
          </p>

          <CodeArea
            rawData={form}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <CodeHeading>
            <h2>Input / Select</h2>
          </CodeHeading>

          <p>
            Those input components' responsibility is to registering them into{" "}
            <code>react-hook-form</code>.
          </p>
          <CodeArea
            rawData={input}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p>
            With <code>Form</code> component inject <code>react-hook-form</code>
            's <code>props</code> into the child component, you can easily
            create and compose forms in your app.
          </p>

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.FieldArrays = ref)}
          >
            Field Arrays
          </QuestionTitle>

          <p>
            This is one of cool features about React Hook Form, instead import
            components like other libraries to achieve the functionality. You
            can leverage your existing HTML markup. The key is within the{" "}
            <code>name</code> attribute. In React Hook Form, the{" "}
            <code>name</code> attribute represent the data structure.
          </p>

          <p>
            The following example demonstrate how you can create Field Array by
            just manipulating the input <code>name</code> attribute.
          </p>

          <CodeArea
            rawData={fieldArray}
            url="https://codesandbox.io/s/6j1760jkjk"
          />

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.SchemaValidation = ref)}
          >
            Schema Validation
          </QuestionTitle>

          <p>
            React Hook Form supports schema-based form validation with{" "}
            <a href="https://github.com/jquense/yup" target="_blank">
              Yup
            </a>
            , you can pass your <code>validationSchema</code> to{" "}
            <a href="/api#useForm">useForm</a> as an optional config, React Hook
            Form will validate your input data against the schema and return you
            with <a href="/api#errors">errors</a> or valid result.
          </p>

          <p>
            <Note>Step 1:</Note> install <code>Yup</code> into your project.
          </p>

          <InstallCode>
            npm install yup
            <CopyButton
              onClick={() => {
                track({
                  category: "Button",
                  label: "Copy",
                  action: "Click - copy installation",
                })
                copyClipBoard("npm install yup")
                alert("Code copied into your clipboard.")
              }}
            >
              Copy
            </CopyButton>
          </InstallCode>

          <p>
            <Note>Step 2:</Note> prepare your schema for validation and register
            inputs with React Hook Form.
          </p>

          <CodeArea
            rawData={schemaValidation}
            url="https://codesandbox.io/s/928po918qr"
          />

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.ConnectForm = ref)}
          >
            Connect Form
          </QuestionTitle>

          <p>
            When we building forms, there are times when our input lives inside
            of deep nested components tree, and that's when{" "}
            <a href="/api#FormContext">FormContext</a> comes in handy. However,
            we can further improve the DX by creating a <code>ConnectForm</code>{" "}
            component and leveraging React's{" "}
            <a href="https://reactjs.org/docs/render-props.html">renderProps</a>
            . The benefit of such component is you can connect your input with
            React Hook Form anywhere.
          </p>

          <CodeArea rawData={connectForm} />

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.FormContextPerformance = ref)}
          >
            FormContext Performance
          </QuestionTitle>

          <p>
            React Hook Form's{" "}
            <PageLink to="/api/#FormContext">FormContext</PageLink> is build
            upon{" "}
            <a
              href="https://reactjs.org/docs/context.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              React's Context
            </a>{" "}
            API, it solve the problem where pass data through the component tree
            without having to pass props down manually at every level. This also
            causing the component tree to trigger re-render when React Hook Form
            trigger a state update, but we still can optimise our App if
            requires and example blow.
          </p>

          <CodeArea rawData={formContextPerformance} />

          <hr />

          <StarRepo />

          <Footer />
        </main>
      </Wrapper>
    </Container>
  )
}

export default Advanced

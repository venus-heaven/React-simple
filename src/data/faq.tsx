import * as React from "react"
import { Note } from "../styles/typography"
import { Table, TableWrapper } from "../components/ApiPage"
import colors from "../styles/colors"

export default {
  title: {
    en: "FAQs",
    kr: "자주 묻는 질문",
    jp: "よくある質問",
    zh: "常见问题",
  },
  header: {
    en: {
      title: "FAQs",
      description: "frequently asked question.",
    },
    kr: {
      title: "자주 묻는 질문",
      description: "자주 묻는 질문",
    },
    jp: {
      title: "よくある質問",
      description: "frequently asked question.",
    },
    zh: {
      title: "常见问题",
      description: "经常问的问题。",
    },
  },
  questions: {
    en: [
      {
        title: "Performance of React Hook Form",
        description: (
          <p>
            Performance is one of the primary goals for building this custom
            hook. React Hook Form relies on uncontrolled component, hence the
            reason why the register function occurs at the ref. This approach
            will reduce the amount of re-rendering occurring due to user typing
            or value changing. Components mount to the page is much quicker as
            well because they are not controlled. For mounting speed, I have
            completed a quick comparison test which you can refer to by{" "}
            <a
              href="https://github.com/bluebill1049/react-hook-form-performance-compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              this repo link
            </a>
            .
          </p>
        ),
      },
      {
        title: "How to create an accessible input error and message?",
        description: (
          <p>
            React Hook Form is based on{" "}
            <a
              href="https://reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Uncontrolled Component
            </a>
            , which gives you the ability to build an accessible custom form
            easily.
          </p>
        ),
      },
      {
        title: "Does it work with Class Components?",
        description: (
          <>
            <p>
              No, not out of box. but you can build a wrapper around it and use
              in your Class Component.
            </p>

            <blockquote>
              You can’t use Hooks inside of a class component, but you can
              definitely mix classes and function components with Hooks in a
              single tree. Whether a component is a class or a function that
              uses Hooks is an implementation detail of that component. In the
              longer term, we expect Hooks to be the primary way people write
              React components.
            </blockquote>
          </>
        ),
      },
      {
        title: "How to reset the form?",
        description: (
          <>
            <p>There are two methods to clear the form.</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  This method does the same thing as clicking a form's reset
                  button, and only clears
                  <code>input/select/checkbox</code> values.
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook Form's <code>reset</code> method will reset all
                  fields value, and also will clear all <code>errors</code>{" "}
                  within the form.
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "How to initialize form values?",
        description: (
          <p>
            React Hook Form relies on uncontrolled component. With an
            uncontrolled component, you can specify a <code>defaultValue</code>{" "}
            or <code>defaultChecked</code> to an individual field. However, the
            hook itself does provide an easier way to initialise all input
            values too. Example below:
          </p>
        ),
      },
      {
        title: "How to share ref usage?",
        description: (
          <p>
            React Hook Form needs <code>ref</code> to collect the input value,
            however, you may want to use <code>ref</code> for other purposes
            (eg. scroll into the view). The following example will show you how.
          </p>
        ),
      },
      {
        title: "What if you don't have access to ref?",
        description: (
          <>
            <p>
              You can actually <code>register</code> an input without a{" "}
              <code>ref</code>. In fact, you can manually <code>setValue</code>,{" "}
              <code>setError</code> and <code>triggerValidation</code>.
            </p>

            <p>
              <Note>Note:</Note> Because <code>ref</code> has not been
              registered, React Hook Form won't be able to register event
              listeners to the inputs. This means you will have to manually
              update value and error.
            </p>
          </>
        ),
      },
      {
        title: "Browser Support?",
        description: (
          <>
            <p>React Hook Form support all major browsers.</p>

            <p>
              For legacy IE11 support, you can import react-hook-form IE 11
              version.
            </p>
          </>
        ),
      },
      {
        title: "Why is first keystroke is not working?",
        description: (
          <>
            <p>
              Double check if you are using <code>value</code> instead of{" "}
              <code>defaultValue</code>.
            </p>

            <p>
              React Hook Form is built based on uncontrolled input, which means
              you don't need to change input <code>value</code> via{" "}
              <code>state</code> by <code>onChange</code>. Hence you don't need{" "}
              <code>value</code> at all, in fact, you only need{" "}
              <code>defaultValue</code> for initial input value.
            </p>
          </>
        ),
      },
      {
        title: "Testing failed due to MutationObserver?",
        description: (
          <p>
            If you have difficulty during testing and the issue was caused by{" "}
            <code>MutationObserver</code>. Make sure you install{" "}
            <code>mutationobserver</code> and import this package in your test{" "}
            <a
              href="https://jestjs.io/docs/en/configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              setup.js file
            </a>
            .
          </p>
        ),
      },
      {
        title: "React Hook Form, Formik or Redux Form?",
        description: (
          <>
            <p>
              First of all, all libs try to solve the same problem which is
              making form building experience easy and great. However, there are
              some fundamental differences between the three, react-hook-form is
              built with uncontrolled input in mind and tries to provide your
              form with best performance and least re-render if possible. On top
              of that, react-hook-form is built by React Hook and used as hook,
              which means there is no Component for you to import. Here are some
              of the detail differences:
            </p>

            <TableWrapper>
              <Table>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${colors.lightPink}` }}>
                    <th width={200} />
                    <th>
                      <p>React Hook Form</p>
                    </th>
                    <th>
                      <p>Formik</p>
                    </th>
                    <th>
                      <p>Redux Form</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Component</b>
                    </td>
                    <td>
                      <a>
                        <a
                          href="https://reactjs.org/docs/uncontrolled-components.html"
                          target="_blank"
                        >
                          uncontrolled
                        </a>
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Rendering</b>
                    </td>
                    <td>minimum re-render</td>
                    <td>
                      re-render according to local state changes which means as
                      you type in the input.
                    </td>
                    <td>
                      re-render according to state management lib (Redux)
                      changes which means as you type in the input.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>API</b>
                    </td>
                    <td>Hooks</td>
                    <td>Component (RenderProps, Form, Field) + Hooks</td>
                    <td>Component (RenderProps, Form, Field)</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Package Size</b>
                    </td>
                    <td>
                      Small
                      <br />
                      <code>
                        react-hook-form@3.26.2
                        <br />
                        <Note>5.3KB</Note>
                      </code>
                    </td>
                    <td>
                      Medium
                      <br />
                      <code>
                        formik@2.0.1
                        <br /><Note>14.4KB</Note>
                      </code>
                    </td>
                    <td>
                      Large
                      <br />
                      <code>
                        redux-form@8.2.6
                        <br /><Note>27KB</Note>
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Validation</b>
                    </td>
                    <td>
                      Built-in &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>
                      Build your own &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>Build your own & Plugins</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Learning curve</b>
                    </td>
                    <td>Low</td>
                    <td>Medium</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Status</b>
                    </td>
                    <td>Small Community: New lib and growing</td>
                    <td>
                      Large Community: Well established form lib in the
                      community
                    </td>
                    <td>
                      Large Community: Well established form lib in the
                      community
                    </td>
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>
          </>
        ),
      },
    ],
    kr: [
      {
        title: "React Hook Form 의 퍼포먼스",
        description: (
          <p>
            이 커스텀 훅을 만들 때 가장 먼저 고려된 목표 중 하나가
            퍼포먼스입니다. React Hook Form 은 비제어 컴포넌트를 활용하고 있기
            때문에 <code>ref</code> 에서 <code>register</code> 함수가
            실행됩니다. 이러한 접근 방식은 사용자가 타이핑하거나 값을 변경할 때
            리랜더링이 일어나는 양을 줄여줄 것입니다. 제어 컴포넌트가 아니기
            때문에 페이지에 컴포넌트가 마운트되는 속도도 훨씬 더 빠릅니다.{" "}
            마운트되는 속도에 대해 여러분이 참고하실 수 있도록 간단한 속도 비교
            테스트를{" "}
            <a
              href="https://github.com/bluebill1049/react-hook-form-performance-compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              이 저장소에
            </a>{" "}
            올려 두었습니다.
          </p>
        ),
      },
      {
        title: "접근성 있는 입력 에러와 메세지를 어떻게 만드나요?",
        description: (
          <p>
            React Hook Form 은{" "}
            <a
              href="https://ko.reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              비제어 컴포넌트
            </a>
            를 기반으로 하고 있으므로, 접근성이 높은 커스텀 폼을 쉽게 만들 수
            있습니다.
          </p>
        ),
      },
      {
        title: "클래스 컴포넌트와 사용할 수 있나요?",
        description: (
          <>
            <p>
              아니오. 사용할 수 없습니다만, 클래스 컴포넌트를 감싸는 래퍼를 만들
              수는 있습니다.
            </p>

            <blockquote>
              여러분은 클래스 컴포넌트 안에서 훅을 사용할 수 없습니다. 하지만
              확실히 클래스 컴포넌트와 훅을 사용하는 함수 컴포넌트를 같은 트리
              안에서 섞어 사용할 수 있습니다. 컴포넌트가 클래스인지, 훅을
              사용하는 함수 컴포넌트인지는 개별 컴포넌트의 세부 구현에
              불과합니다. 긴 안목으로 보아 우리는 사람들이 훅을 우선적으로
              고려하여 리액트 컴포넌트를 작성하길 기대합니다.
            </blockquote>
          </>
        ),
      },
      {
        title: "폼을 어떻게 리셋하나요?",
        description: (
          <>
            <p>폼을 초기화하는데 두 가지 방법이 있습니다.</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  이 메서드는 폼의 리셋 버튼을 누르는 것과 똑같이 동작하지만,
                  오로지 <code>input/select/checkbox</code> 값들만 초기화합니다.
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook Form 의 <code>reset</code> 메서드는 모든 필드 값을{" "}
                  리셋하며, 또한 폼 안의 모든 <code>errors</code> 를{" "}
                  초기화합니다.
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "어떻게 폼의 기본값을 설정하나요?",
        description: (
          <p>
            React Hook Form 은 비제어 컴포넌트를 활용합니다. 비제어 컴포넌트를
            사용하면 <code>defaultValue</code> 나 <code>defaultChecked</code>{" "}
            값을 개별 필드에 넣어 기본값을 설정할 수 있습니다. 하지만 훅에서
            기본적으로 손쉽게 모든 인풋의 기본값을 설정할 수 있는 방법을
            제공합니다. 아래의 예제를 보세요.
          </p>
        ),
      },
      {
        title: "ref 를 공유할 수 있나요?",
        description: (
          <p>
            React Hook Form 은 입력 값을 모으기 위해 <code>ref</code> 를 필요로
            합니다. 하지만 <code>ref</code> 를 다른 목적으로 (예: 해당 뷰로
            스크롤하기) 활용하고 싶을 수도 있습니다. 아래의 예제로 그 방법을
            확인해보세요.
          </p>
        ),
      },
      {
        title: "만약에 ref 에 접근할 수 없다면 어떻게 하죠?",
        description: (
          <>
            <p>
              사실 <code>ref</code> 없이 <code>register</code> 를 할 수
              있습니다. 수동으로 <code>setValue</code>, <code>setError</code>{" "}
              그리고 <code>triggerValidation</code> 를 사용하면 됩니다.
            </p>

            <p>
              <Note>참고:</Note> <code>ref</code> 가 등록되지 않았기 때문에,
              React Hook Form 은 인풋에 이벤트 리스너를 등록할 수 없을 겁니다.
              따라서 인풋 값과 에러를 수동으로 업데이트 해 주어야 합니다.
            </p>
          </>
        ),
      },
      {
        title: "브라우저 호환성은 어떤가요?",
        description: (
          <>
            <p>React Hook Form 은 모든 메이저 브라우저를 지원합니다.</p>

            <p>
              오래된 IE11 를 지원하려면, react-hook-form IE11 버전을 불러와서
              사용할 수 있습니다.
            </p>
          </>
        ),
      },
      {
        title: "왜 첫 번째 키 입력이 동작하지 않을까요?",
        description: (
          <>
            <p>
              <code>value</code> 대신에 <code>defaultValue</code> 를 사용하고
              있는지 다시 확인해주세요.
            </p>

            <p>
              React Hook Form 은 비제어 컴포넌트를 활용하기 때문에{" "}
              <code>onChange</code> 를 사용하여 <code>state</code> 를 바꾸고, 그
              값을 인풋의 <code>value</code> 에 반영해줄 필요가 없습니다. 따라서{" "}
              <code>value</code> 자체가 필요 없습니다. 사실 초기 값을 지정하고자
              할 때 <code>defaultValue</code> 만 넣어주면 됩니다.
            </p>
          </>
        ),
      },
      {
        title: "MutationObserver 때문에 테스트가 실패하는데요?",
        description: (
          <p>
            만약에 테스트하는데 어려움을 겪고 계시다면{" "}
            <code>MutationObserver</code> 때문입니다.{" "}
            <code>mutationobserver-shim</code> 패키지를 설치하고{" "}
            <a
              href="https://jestjs.io/docs/en/configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              setup.js 파일
            </a>
            에서 불러오세요.
          </p>
        ),
      },
      {
        title: "React Hook Form, Formik or Redux Form?",
        description: (
          <>
            <p>
              First of all, all libs try to solve the same problem which is
              making form building experience easy and great. However, there are
              some fundamental differences between the three, react-hook-form is
              built with uncontrolled input in mind and tries to provide your
              form with best performance and least re-render if possible. On top
              of that, react-hook-form is built by React Hook and used as hook,
              which means there is no Component for you to import. Here are some
              of the detail differences:
            </p>

            <TableWrapper>
              <Table>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${colors.lightPink}` }}>
                    <th width={200} />
                    <th>
                      <p>React Hook Form</p>
                    </th>
                    <th>
                      <p>Formik</p>
                    </th>
                    <th>
                      <p>Redux Form</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Component</b>
                    </td>
                    <td>
                      <a>
                        <a
                          href="https://reactjs.org/docs/uncontrolled-components.html"
                          target="_blank"
                        >
                          uncontrolled
                        </a>
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Rendering</b>
                    </td>
                    <td>minimum re-render</td>
                    <td>
                      re-render according to local state changes which means as
                      you type in the input.
                    </td>
                    <td>
                      re-render according to state management lib (Redux)
                      changes which means as you type in the input.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>API</b>
                    </td>
                    <td>Hooks</td>
                    <td>Component (RenderProps, Form, Field) + Hooks</td>
                    <td>Component (RenderProps, Form, Field)</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Package Size</b>
                    </td>
                    <td>
                      Small
                      <br />
                      <code>
                        react-hook-form@3.26.2
                        <br />
                        <Note></Note><Note>5.3KB</Note>
                      </code>
                    </td>
                    <td>
                      Medium
                      <br />
                      <code>
                        formik@2.0.1
                        <br /><Note>14.4KB</Note>
                      </code>
                    </td>
                    <td>
                      Large
                      <br />
                      <code>
                        redux-form@8.2.6
                        <br /><Note>27KB</Note>
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Validation</b>
                    </td>
                    <td>
                      Built-in &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>
                      Build your own &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>Build your own & Plugins</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Learning curve</b>
                    </td>
                    <td>Low</td>
                    <td>Medium</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Status</b>
                    </td>
                    <td>Small Community: New lib and growing</td>
                    <td>
                      Large Community: Well established form lib in the
                      community
                    </td>
                    <td>
                      Large Community: Well established form lib in the
                      community
                    </td>
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>
          </>
        ),
      },
    ],
    jp: [
      {
        title: "Performance of React Hook Form",
        description: (
          <p>
            Performance is one of the primary goals for building this custom
            hook. React Hook Form relies on uncontrolled component, hence the
            reason why the register function occurs at the ref. This approach
            will reduce the amount of re-rendering occurring due to user typing
            or value changing. Components mount to the page is much quicker as
            well because they are not controlled. For mounting speed, I have
            completed a quick comparison test which you can refer to by{" "}
            <a
              href="https://github.com/bluebill1049/react-hook-form-performance-compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              this repo link
            </a>
            .
          </p>
        ),
      },
      {
        title: "How to create an accessible input error and message?",
        description: (
          <p>
            React Hook Form is based on{" "}
            <a
              href="https://reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Uncontrolled Component
            </a>
            , which gives you the ability to build an accessible custom form
            easily.
          </p>
        ),
      },
      {
        title: "Does it work with Class Components?",
        description: (
          <>
            <p>
              No, not out of box. but you can build a wrapper around it and use
              in your Class Component.
            </p>

            <blockquote>
              You can’t use Hooks inside of a class component, but you can
              definitely mix classes and function components with Hooks in a
              single tree. Whether a component is a class or a function that
              uses Hooks is an implementation detail of that component. In the
              longer term, we expect Hooks to be the primary way people write
              React components.
            </blockquote>
          </>
        ),
      },
      {
        title: "How to reset the form?",
        description: (
          <>
            <p>There are two methods to clear the form.</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  This method does the same thing as clicking a form's reset
                  button, and only clears
                  <code>input/select/checkbox</code> values.
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook Form's <code>reset</code> method will reset all
                  fields value, and also will clear all <code>errors</code>{" "}
                  within the form.
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "How to initialize form values?",
        description: (
          <p>
            React Hook Form relies on uncontrolled component. With an
            uncontrolled component, you can specify a <code>defaultValue</code>{" "}
            or <code>defaultChecked</code> to an individual field. However, the
            hook itself does provide an easier way to initialise all input
            values too. Example below:
          </p>
        ),
      },
      {
        title: "How to share ref usage?",
        description: (
          <p>
            React Hook Form needs <code>ref</code> to collect the input value,
            however, you may want to use <code>ref</code> for other purposes
            (eg. scroll into the view). The following example will show you how.
          </p>
        ),
      },
      {
        title: "What if you don't have access to ref?",
        description: (
          <>
            <p>
              You can actually <code>register</code> an input without a{" "}
              <code>ref</code>. In fact, you can manually <code>setValue</code>,{" "}
              <code>setError</code> and <code>triggerValidation</code>.
            </p>

            <p>
              <Note>Note:</Note> Because <code>ref</code> has not been
              registered, React Hook Form won't be able to register event
              listeners to the inputs. This means you will have to manually
              update value and error.
            </p>
          </>
        ),
      },
      {
        title: "Browser Support?",
        description: (
          <>
            <p>React Hook Form support all major browsers.</p>

            <p>
              For legacy IE11 support, you can import react-hook-form IE 11
              version.
            </p>
          </>
        ),
      },
      {
        title: "Why is first keystroke is not working?",
        description: (
          <>
            <p>
              Double check if you are using <code>value</code> instead of{" "}
              <code>defaultValue</code>.
            </p>

            <p>
              React Hook Form is built based on uncontrolled input, which means
              you don't need to change input <code>value</code> via{" "}
              <code>state</code> by <code>onChange</code>. Hence you don't need{" "}
              <code>value</code> at all, in fact, you only need{" "}
              <code>defaultValue</code> for initial input value.
            </p>
          </>
        ),
      },
      {
        title: "Testing failed due to MutationObserver?",
        description: (
          <p>
            If you have difficulty during testing and the issue was caused by{" "}
            <code>MutationObserver</code>. Make sure you install{" "}
            <code>mutationobserver</code> and import this package in your test{" "}
            <a
              href="https://jestjs.io/docs/en/configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              setup.js file
            </a>
            .
          </p>
        ),
      },
      {
        title: "React Hook Form, Formik or Redux Form?",
        description: (
          <>
            <p>
              First of all, all libs try to solve the same problem which is
              making form building experience easy and great. However, there are
              some fundamental differences between the three, react-hook-form is
              built with uncontrolled input in mind and tries to provide your
              form with best performance and least re-render if possible. On top
              of that, react-hook-form is built by React Hook and used as hook,
              which means there is no Component for you to import. Here are some
              of the detail differences:
            </p>

            <TableWrapper>
              <Table>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${colors.lightPink}` }}>
                    <th width={200} />
                    <th>
                      <p>React Hook Form</p>
                    </th>
                    <th>
                      <p>Formik</p>
                    </th>
                    <th>
                      <p>Redux Form</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Component</b>
                    </td>
                    <td>
                      <a>
                        <a
                          href="https://reactjs.org/docs/uncontrolled-components.html"
                          target="_blank"
                        >
                          uncontrolled
                        </a>
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Rendering</b>
                    </td>
                    <td>minimum re-render</td>
                    <td>
                      re-render according to local state changes which means as
                      you type in the input.
                    </td>
                    <td>
                      re-render according to state management lib (Redux)
                      changes which means as you type in the input.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>API</b>
                    </td>
                    <td>Hooks</td>
                    <td>Component (RenderProps, Form, Field) + Hooks</td>
                    <td>Component (RenderProps, Form, Field)</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Package Size</b>
                    </td>
                    <td>
                      Small
                      <br />
                      <code>
                        react-hook-form@3.26.2
                        <br />
                        <Note></Note><Note>5.3KB</Note>
                      </code>
                    </td>
                    <td>
                      Medium
                      <br />
                      <code>
                        formik@2.0.1
                        <br /><Note>14.4KB</Note>
                      </code>
                    </td>
                    <td>
                      Large
                      <br />
                      <code>
                        redux-form@8.2.6
                        <br /><Note>27KB</Note>
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Validation</b>
                    </td>
                    <td>
                      Built-in &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>
                      Build your own &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>Build your own & Plugins</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Learning curve</b>
                    </td>
                    <td>Low</td>
                    <td>Medium</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Status</b>
                    </td>
                    <td>Small Community: New lib and growing</td>
                    <td>
                      Large Community: Well established form lib in the
                      community
                    </td>
                    <td>
                      Large Community: Well established form lib in the
                      community
                    </td>
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>
          </>
        ),
      },
    ],
    zh: [
      {
        title: "React Hook Form的性能",
        description: (
          <p>
            性能是构建此自定义挂钩(Hook)的主要目标之一。 React Hook
            Form依赖于不受控制的组件，因此<code>register</code>函数发生在
            <code>ref</code>的原因。
            这种方法将减少由于用户输入或值改变而发生的重新rendering数量。
            组件安装到页面也更快，因为它们不受控制。
            对于安装速度，我已经完成了一个快速比较测试，
            <a
              href="https://github.com/bluebill1049/react-hook-form-performance-compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              你可以通过这个回购链接参考
            </a>
            。
          </p>
        ),
      },
      {
        title: "如何创建一个可访问的输入错误和消息？",
        description: (
          <p>
            React Hook Form基于不受控制
            <a
              href="https://reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              (Uncontrolled Component)
            </a>
            的组件，它使您能够轻松构建可访问的自定义表单。
          </p>
        ),
      },
      {
        title: "它是否与Class类组件一起使用？",
        description: (
          <>
            <p>不, 但是你可以在它周围构建一个包装并在你的类组件中使用。</p>

            <blockquote>
              您不能在类组件内部使用钩子，但您绝对可以在单个树中将类和函数组件与钩子混合。
              组件是一个类还是一个使用Hook的函数是该组件的实现细节。
              从长远来看，我们预计钩子是人们编写React组件的主要方式。
            </blockquote>
          </>
        ),
      },
      {
        title: "如何重置表单？",
        description: (
          <>
            <p>有两种方法。</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  此方法与单击表单的重置按钮相同，并且只清除
                  <code>input/select/checkbox</code>框值。
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook
                  Form的重置方法将重置所有字段值，并且还将清除表单中的所有错误。
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "如何初始化值？",
        description: (
          <p>
            React Hook Form依赖于不受控制的组件。
            对于不受控制的组件，可以为单个字段指定默认值
            <code>defaultValue</code>或默认选中的值<code>defaultChecked</code>。
            但是，钩子本身也提供了一种更简单的方法来初始化所有输入值。
            下面的例子:
          </p>
        ),
      },
      {
        title: "如何分享参考用法?",
        description: (
          <p>
            React Hook Form需要<code>ref</code>来收集输入值，但是，您可能需要将
            <code>ref</code>用于其他目的（例如，如果您想要使用它）。
            滚动到视图中）。 以下示例将向您展示如何。
          </p>
        ),
      },
      {
        title: "如果你没有访问ref怎么办？",
        description: (
          <>
            <p>
              您实际上可以在没有<code>ref</code>的情况下注册
              <code>register</code>输入。 事实上，您可以手动设置值，设置错误
              <code>setError</code>和触发验证<code>triggerValidation</code>。
            </p>

            <p>
              <Note>注意:</Note> 由于<code>ref</code>尚未注册，因此React Hook
              Form将无法将事件侦听器注册到输入。
              这意味着您将不得不手动更新值和错误。
            </p>
          </>
        ),
      },
      {
        title: "浏览器支持?",
        description: (
          <>
            <p>React Hook Form支持所有主流浏览器。</p>

            <p>对于传统的IE11支持，您可以从IE11版本导入。</p>
          </>
        ),
      },
      {
        title: "为什么第一次按键不起作用？",
        description: (
          <>
            <p>
              仔细检查是否使用值<code>value</code>而不是默认值
              <code>defaultValue</code>。
            </p>

            <p>
              React Hook Form是基于不受控制的输入构建的，这意味着您不需要通过
              <code>onChange</code>更改输入值。
              因此，您根本不需要值，事实上，您只需要初始输入值<code>value</code>
              的默认值<code>defaultValue</code>。
            </p>
          </>
        ),
      },
      {
        title: "因MutationObserver测试失败?",
        description: (
          <p>
            如果您在测试过程中遇到困难，并且问题是由
            <code>MutationObserver</code>引起的。 确保安装
            <code>MutationObserver</code>并在测试设置中导入此包
            <a
              href="https://jestjs.io/docs/en/configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              setup.js file
            </a>
            文件。
          </p>
        ),
      },
      {
        title: "React Hook Form, Formik 或者 Redux Form?",
        description: (
          <>
            <p>
              首先，他们都在尝试解决同样的问题，使表单变的简单。
              然而，三者之间的一些根本性区别，react-hook-form是
              建立在不受控制的输入，并尝试提供您的表单
              具有最佳性能和最少重新render。react-hook-form是由React
              Hook构建并用作hook, 这意味着没有组件供您导入。
              这里有一些的细节差异:
            </p>

            <TableWrapper>
              <Table>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${colors.lightPink}` }}>
                    <th width={200} />
                    <th>
                      <p>React Hook Form</p>
                    </th>
                    <th>
                      <p>Formik</p>
                    </th>
                    <th>
                      <p>Redux Form</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Component</b>
                    </td>
                    <td>
                      <a>
                        <a
                          href="https://reactjs.org/docs/uncontrolled-components.html"
                          target="_blank"
                        >
                          uncontrolled
                        </a>
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Rendering</b>
                    </td>
                    <td>最少的re-render</td>
                    <td>您键入输入将重新启动render。</td>
                    <td>您键入输入将重新启动render。</td>
                  </tr>
                  <tr>
                    <td>
                      <b>API</b>
                    </td>
                    <td>Hooks</td>
                    <td>Component (RenderProps, Form, Field) + Hooks</td>
                    <td>Component (RenderProps, Form, Field)</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Package Size</b>
                    </td>
                    <td>
                      小
                      <br />
                      <code>react-hook-form@3.26.2<br/><Note>5.3KB</Note></code>
                    </td>
                    <td>
                      中
                      <br />
                      <code>formik@2.0.1<br/><Note>14.4KB</Note></code>
                    </td>
                    <td>
                      大
                      <br />
                      <code>redux-form@8.2.6<br/><Note>27KB</Note></code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>验证</b>
                    </td>
                    <td>
                      自带验证 &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>
                      自己建立验证 &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>Build your own & Plugins</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Learning curve</b>
                    </td>
                    <td>低</td>
                    <td>中</td>
                    <td>中</td>
                  </tr>
                  <tr>
                    <td>
                      <b>状态</b>
                    </td>
                    <td>小社区</td>
                    <td>大社区</td>
                    <td>大社区</td>
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>
          </>
        ),
      },
    ],
  },
}

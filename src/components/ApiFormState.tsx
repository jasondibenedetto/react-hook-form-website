import * as React from "react"
import {CodeSandBoxLink, LinkToSandBox} from "./CodeArea"
import { CodeHeading, Table, TableWrapper, Type } from "./ApiPage"

export default React.memo(() => {
  return (
    <>
      <CodeHeading>
        <h2>
          formState: <Type>Object</Type>
        </h2>
      </CodeHeading>
      <p>This object contain information about the form state.</p>

      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>
                <code>dirty</code>
              </td>
              <td>
                <Type>boolean</Type>
              </td>
              <td>
                Set to true after a user interacted with any of the inputs.
              </td>
            </tr>
            <tr>
              <td>
                <code>isSubmitted</code>
              </td>
              <td>
                <Type>boolean</Type>
              </td>
              <td>Set true after a user submitted the form.</td>
            </tr>
            <tr>
              <td>
                <code>touched</code>
              </td>
              <td>
                <Type>{`string[]`}</Type>
              </td>
              <td>An array of all inputs which have been interacted.</td>
            </tr>
            <tr>
              <td>
                <code>isSubmitting</code>
              </td>
              <td>
                <Type>boolean</Type>
              </td>
              <td>
                During form submitting will set to <code>true</code> and after
                submitting set to <code>false</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>submitCount</code>
              </td>
              <td>
                <Type>number</Type>
              </td>
              <td>Number of forms submit.</td>
            </tr>
            <tr>
              <td>
                <code>isValid</code>
              </td>
              <td>
                <Type>boolean</Type>
              </td>
              <td>Set true if doesn't have any error.</td>
            </tr>
            <tr>
              <td>
                <CodeSandBoxLink
                  style={{
                    position: "relative",
                    left: 0,
                  }}
                  url="https://codesandbox.io/s/7o2wrp86k6"
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
    </>
  )
})

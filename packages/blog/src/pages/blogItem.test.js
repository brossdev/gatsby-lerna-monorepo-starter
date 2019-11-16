import React from "react"
import { render } from "@testing-library/react"
import BlogItem from "./blogItem"
// You have to write data-testid
const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>
test("Displays the correct title", () => {
  const { getByTestId } = render(<Title />)
  // Assertion
  expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!")
  // --> Test will pass
})



// describe("Layout component", () => {
//   const mockProps = {
//     pathContext: {
//       data: {
//         title: "mock title",
//         content: "mock content",
//         href: "google.com",
//       },
//     },
//   }

//   it("should render", () => {
//     const wrapper = shallow(<BlogItem {...mockProps} />)

//     expect(wrapper)
//   })
// })
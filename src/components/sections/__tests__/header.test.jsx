import React from "react"
import { render } from "@testing-library/react"
import { PureHeader as Header } from "../header"
import { ThemeProvider } from "styled-components"
import theme from "../../../styles/theme"

describe(`Header`, () => {
  // Created using the query from Header.js
  const data = {
    file: {
      childImageSharp: {
        fluid: {
          src: "/static/f86dacab254d878c29343dea4ba80134/a4376/glade2.png",
          srcSet:
            "/static/f86dacab254d878c29343dea4ba80134/69781/glade2.png 250w,\n/static/f86dacab254d878c29343dea4ba80134/3fa08/glade2.png 500w,\n/static/f86dacab254d878c29343dea4ba80134/a4376/glade2.png 706w",
          aspectRatio: 1.1825795644891122,
          sizes: "(max-width: 706px) 100vw, 706px",
        },
      },
    },
  }

  const HeaderComponent = (
    <ThemeProvider theme={theme}>
      {" "}
      <Header data={data} />
    </ThemeProvider>
  )

  it(`renders siteTitle`, () => {
    const siteTitle = "Glade"
    const { getByText } = render(HeaderComponent)
    const title = getByText(siteTitle)
    expect(title).toBeInTheDocument()
  })

  it(`renders siteSubtitle`, () => {
    const siteSubtitle = "We’re here to support your vision."
    const { getByText } = render(HeaderComponent)
    const subtitle = getByText(siteSubtitle)
    expect(subtitle).toBeInTheDocument()
  })

  it(`renders CTA copy`, () => {
    const cta =
      "Sign up to receive updates and be the first to hear when we launch our microgrant program for tech-related professional development opportunities."
    const { getByText } = render(HeaderComponent)
    const ctaText = getByText(cta)
    expect(ctaText).toBeInTheDocument()
  })

  it(`renders CTA button`, () => {
    const cta = "Subscribe"
    const { getByText } = render(HeaderComponent)
    const ctaText = getByText(cta)
    expect(ctaText).toBeInTheDocument()
  })
})

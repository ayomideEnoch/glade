import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const conferences = [
  {
    name: "GladeSecurity Conf",
    description:
      "Data Security in the Academia: This is a community-first conference designed to level you up, from home!",
    url: "https://codelandconf.com/",
    dates: "August 23 - 24, 2020",
    free: true,
  },
  {
    name: "GladeEducation Conf",
    description:
      "Seamless Payment Collection for Education: GladeEducation is a Nigeria based, eclectic, Py-centric conference covering many topics. There is a diverse speaker list, and some things which will be quite different from the previous editions. GladeEducation attracts developers of various backgrounds and skill levels from Abuja and beyond.",
    url: "https://2020.pygotham.tv/",
    dates: "August 25 - 26, 2020",
    free: true,
  },
  {
    name: "GladeFinance Conf",
    description:
      "Financial Reporting - Best Practices: This Financial Reporting Faculty's webinars, videos and podcasts will cover a range of topics in IFRS, UK GAAP and policy areas.",
    url: "https://www.icaew.com/technical/financial-reporting/financial-reporting-faculty/webinars-videos-and-podcasts",
    dates: "August 27 - 28, 2020",
    free: true,
  }
]

const Mission = () => (
  <Section id="mission">
    <StyledContainer>
      <Subtitle>Upcoming Free and Low-Cost Webinar</Subtitle>
      <SectionTitle>Managing School Portals in the modern world</SectionTitle>

      <MissionIntro>
        Check out our list of upcoming webinars. If you'd like to add an
        upcoming free or low-cost webinar, please e-mail us at
        hello@glade.ng or{" "}
        <StyledLink href="https://github.com/ayomideEnoch/glade">
          submit a pull request on GitHub
        </StyledLink>
        . The webinar should have a Code of Conduct in order to be listed.
      </MissionIntro>

      <MissionGrid>
        {conferences.map(conference => (
          <FeatureItem key={conference.name}>
            <FeatureTitle>
              {conference.name} {conference.free && <FreeLabel>FREE</FreeLabel>}
            </FeatureTitle>
            {conference.dates}
            <FeatureText>
              {conference.description} <br />
              Register at:{" "}
              <StyledLink href={conference.url}>{conference.url}</StyledLink>
            </FeatureText>
          </FeatureItem>
        ))}
      </MissionGrid>
    </StyledContainer>
  </Section>
)

export default Mission

const StyledContainer = styled(Container)``

const FreeLabel = styled.span`
  font-weight: bold;
  font-size: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  background-color: ${props => props.theme.color.accent};
`
const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const MissionIntro = styled.div`
  max-width: 760px;
  margin: 0 auto;
`

const MissionGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: left;
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.primary};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

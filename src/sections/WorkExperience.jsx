import styled from "styled-components"

export default function WorkExperience() {
  return (
    <div>
      <H2>Work Experience</H2>
      <COMPANY><span className="highlighted-text-primary">GREENHONCHOS </span>  SOLUTIONS PVT LTD</COMPANY>
    </div>
  )
}

const H2 = styled.h2`
    margin-bottom: 0rem;
    padding-top: 5rem;
    padding-bottom: 2rem;
    text-align: center;
`

const COMPANY = styled.div`
    text-align: center;
    font-style: italic;
    color: ${({theme}) => theme.textColorPrimary};
`
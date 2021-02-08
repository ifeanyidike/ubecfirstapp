import styled from 'styled-components'
import { TestPaneContainer } from "./TestSubjectStyles"
import { device, colors, defaultMargin } from '../utils/definitions'

export const ResultOverviewItem = styled(TestPaneContainer)`

`

export const ResultOverviewContainer = styled.div`
    margin-top: calc(${defaultMargin} + 20px);
    display: grid;
    place-items: center;

`
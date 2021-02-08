import React from 'react'
import { MainDashboardContainer } from '../styles/MainDashboardStyles'
import OptionCard from './OptionCard'
import { colors } from "../utils/definitions"

const MainDashboard = () => {
    return (
        <MainDashboardContainer>
            <OptionCard
                iconColor={colors.sweetRed}
                iconClass='fas fa-edit'
                text='Take a test'
                href='/subjects'
            />

            <OptionCard
                iconColor={colors.sweetBlue}
                iconClass='fas fa-video'
                text='Enter a class'
            />

            <OptionCard
                iconColor={colors.lightBrown}
                iconClass='fas fa-user'
                text='View your profile'
            />
            <OptionCard
                iconColor={colors.dye}
                iconClass='fas fa-book'
                text='Read Books'
            />
            <OptionCard
                iconColor={colors.orange}
                iconClass='fas fa-photo-video'
                text='Re-watch previous classes'
            />
            <OptionCard
                iconColor={colors.orchid}
                iconClass='fas fa-history'
                text='Do revision'
            />
            <OptionCard
                iconColor={colors.gold}
                iconClass='fas fa-comments'
                text='Talk to a teacher'
            />
        </MainDashboardContainer>
    )
}

export default MainDashboard

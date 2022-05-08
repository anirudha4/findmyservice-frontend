import withGaurd from '@components/hoc'
import { Text } from '@mantine/core'
import React from 'react'

function BecomeSeller() {
    return (
        <div>
            <Text>BecomeSeller</Text>
        </div>
    )
}

export default withGaurd(BecomeSeller);
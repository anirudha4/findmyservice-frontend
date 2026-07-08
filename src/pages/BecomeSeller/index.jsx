import withGaurd from '@components/hoc'
import { Text } from '@mantine/core'
import React from 'react'

// TODO: Add pendo.track("become_seller_submitted", { seller_category, service_type, user_name, submission_outcome })
// when the Become a Seller form is implemented. Track on successful form submission.
function BecomeSeller() {
    return (
        <div>
            <Text>BecomeSeller</Text>
        </div>
    )
}

export default withGaurd(BecomeSeller);
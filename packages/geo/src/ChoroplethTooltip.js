/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { BasicTooltip } from '@nivo/core'

const ChoroplethTooltip = memo(({ feature }) => {
    return <BasicTooltip id={feature.id} color={feature.color} enableChip={true} />
})

ChoroplethTooltip.propTypes = {
    feature: PropTypes.object.isRequired,
}

export default ChoroplethTooltip
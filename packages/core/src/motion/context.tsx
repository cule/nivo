/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { createContext, PropsWithChildren, useMemo } from 'react'
import { config as presets } from 'react-spring'
import { isString } from 'lodash'

type Preset = 'default' | 'gentle' | 'wobbly' | 'stiff' | 'slow' | 'molasses'

// tslint:disable-next-line:variable-name
export const MotionConfigContext = createContext<{
    animate: boolean
    springConfig: {
        stiffness: number
        damping: number
    }
    config?: object
}>({} as any)

interface MotionConfigProviderProps {
    animate?: boolean
    stiffness?: number
    damping?: number
    config?: Preset | object
}

// tslint:disable-next-line:variable-name
export const MotionConfigProvider = ({
    children,
    animate = true,
    stiffness = 90,
    damping = 15,
    config,
}: PropsWithChildren<MotionConfigProviderProps>) => {
    const value = useMemo(() => {
        const reactSpringConfig = isString(config) ? presets[config] : config

        return {
            animate,
            springConfig: { stiffness, damping },
            config: reactSpringConfig,
        }
    }, [animate, stiffness, damping, config])

    return <MotionConfigContext.Provider value={value}>{children}</MotionConfigContext.Provider>
}
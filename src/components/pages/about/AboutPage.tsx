import React from 'react'
import history from '../../../history/history'

const AboutPage = () => {
    return (
        <div>
            AboutPage

            <button onClick={() => {history.push('/Configuration')}}>Configuration</button>
        </div>
    )
}

export { AboutPage }
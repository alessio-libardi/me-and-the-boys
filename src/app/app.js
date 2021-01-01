import React, { Fragment } from 'react'

import { Footer } from './components/layout/footer'
import { Header } from './components/layout/header'
import { Main } from './components/layout/main'


export const App = () => {
    return (
        <Fragment>
            <Header>
                <h1 className="font-serif text-5xl">Me and the Boys</h1>
            </Header>

            <Main>
                <ul className="flex flex-col gap-12">
                    <li>
                        <img className="rounded object-cover" src="https://lh3.google.com/u/0/d/1P9z7HRoAxASwMM2nA-bcgKJxkeJsi7f6=w1960-h1380-iv1" alt="original" />
                        <h3 className="px-2 mt-2 text-sm bold text-center">Me and the Boys celebrating New Year</h3>
                    </li>

                    <li>
                        <img className="rounded object-cover" src="https://lh3.googleusercontent.com/fife/ABSRlIr4guXU0we_qHsIvrh1BLnMd7pBbeeW1_8b-dm9w7KjZcWE-jUI-U18R4GLJxkT3SSWkLD7zCvXGIhmdH4bBGuene7DmS1HDVRMk7ZluXkJKRclbG5KQYbHwDE1xcA6Gqy5A86tclWPbhII0P76Kz4ugByuTXORSlHAEZq7BYFtgCsyWh9pkrxynq5k96CaCfEmuJPyh3bN02hcnKv0g7mFNG2mZx5DVOzI2QFKubgyXIEdPQv-oizWN-pm424L5XVdlBJRR_gtCpPlvkjQ5kDlBRvEqESQIdDCpyY8JtZyeUXOJ7zHWHaX3jZnxguHZUvIOGVSfBNq-MMmpMK2L5rFj7LZy-A0MiQc7KPl1n6ipwieAn6i0UsxH6yrIEFATw_R7vCJ_DMz807BZx79_OfoVAthO6fElBxKFmc6n9l76w2OEzeBEVUhZDMfgqt-jZNhaFyHxLuTNr8BZS4_4kwbk_JMB-fKge60cn6K95JhArn0wGHXIraqtG1br5AW4AEmIb3HYAl3MFL8jpGEfdywK-J9J1KT8grPW2I_fA_XYYmvSwHMdvtBQenETvJTH8j3L56IWIrsk-We_lAG82fAY8NFVYrMYlplNlh8Squ-eU06iyj-RShuPEjkYCrf8bkpfEt3HnQXWrz0Dq8SXmuWP-fwsqXHL8HK5FSrmsIHv_YZfY8zF8FKEBbLB8LtTH77ffIni6ecNBOisv_flAb9KNo=w2880-h1380-ft" alt="original" />
                        <h3 className="px-2 mt-2 text-sm bold text-center">Me and the Boys protecting us from Covid</h3>
                    </li>

                    <li>
                        <img className="rounded object-cover" src="https://lh3.google.com/u/0/d/13qj6VFJ5lkvMneD0i0VmpOBKcpeE2yv5=w1960-h1380-iv1" alt="original" />
                        <h3 className="px-2 mt-2 text-sm bold text-center">Me and the Boys in the beginning</h3>
                    </li>
                </ul>
            </Main>

            <Footer>
                <p>
                    Made with ❤️ by <a className="underline" href="">Me and the Boys</a>
                </p>
            </Footer>
        </Fragment>
    )
} 

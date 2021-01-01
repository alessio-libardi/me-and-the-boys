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
                        <img className="rounded object-cover" src="https://lh3.googleusercontent.com/fife/ABSRlIotQuE0u3h17BxSLGHo89namiuY-HM3LwfW-T9kIiNzvSmNHgB77-pPpr3nzPNtQ_gSjfeHjfEvtYMYZg3_UDCfU7mzphrCzTT8i3otMXtOeIDEvTzv8M4Kt5D28sCawo4dngblKJFapmZBg4dOqIHz8ru_6QRzBAc7EY6EQsQW2LEazZZqypRNDjJpGJQ-3hBlHm1jvjcy5gkPS1VESz45X2zmislFxuaVBTmOuD1-odnwSS8foLRBdOZFGE4TFzx1iNE9RV8inIeIpB17tYFDCiQpzyQSjlzQpisuPfBAvv-bTJjgzSzz4d0A-ymPF7FPl4_UIsD98BTr8Xe4Poqf5ElukqBZg0Ope7RoLaep8eG7zDWsDsLQuZ1Th12HcgfG1lwzxsYBiDNpcYRgYnzUXDE82fDjAgMoUXY4ZhZGoR2Ip4xdarnXWhrENuUoJ_Zzhjv36QM4qpK1O_UaaJU0datWqODjfJMMDONZuO0pwqp76fmeLhSCcwj3OmGCVMsPnHK3sfKcXpsMenTLPP6y89LWWZPFHy6a9t3bmypGlKOzBiUarJRyLiFHKhTI755_lIOm7HZRsV6ehXydYIzyZSJhCk96Py3IVGEOsYQpGgPP5snRgkpACx_-ml6LJit1DUnsBe-xEzkjJ5MmQdr1BWkr-N5rCPOV2UrvYTH8Ar-BF4u6ONN6mjvBb3fsId0BLgf4DtRLGccZeUgEnzLK9Xo=w1960-h1348-ft" alt="New Year" />
                        <h3 className="px-2 mt-2 text-sm bold text-center">New Year</h3>
                    </li>

                    <li>
                        <img className="rounded object-cover" src="https://lh3.googleusercontent.com/fife/ABSRlIr4guXU0we_qHsIvrh1BLnMd7pBbeeW1_8b-dm9w7KjZcWE-jUI-U18R4GLJxkT3SSWkLD7zCvXGIhmdH4bBGuene7DmS1HDVRMk7ZluXkJKRclbG5KQYbHwDE1xcA6Gqy5A86tclWPbhII0P76Kz4ugByuTXORSlHAEZq7BYFtgCsyWh9pkrxynq5k96CaCfEmuJPyh3bN02hcnKv0g7mFNG2mZx5DVOzI2QFKubgyXIEdPQv-oizWN-pm424L5XVdlBJRR_gtCpPlvkjQ5kDlBRvEqESQIdDCpyY8JtZyeUXOJ7zHWHaX3jZnxguHZUvIOGVSfBNq-MMmpMK2L5rFj7LZy-A0MiQc7KPl1n6ipwieAn6i0UsxH6yrIEFATw_R7vCJ_DMz807BZx79_OfoVAthO6fElBxKFmc6n9l76w2OEzeBEVUhZDMfgqt-jZNhaFyHxLuTNr8BZS4_4kwbk_JMB-fKge60cn6K95JhArn0wGHXIraqtG1br5AW4AEmIb3HYAl3MFL8jpGEfdywK-J9J1KT8grPW2I_fA_XYYmvSwHMdvtBQenETvJTH8j3L56IWIrsk-We_lAG82fAY8NFVYrMYlplNlh8Squ-eU06iyj-RShuPEjkYCrf8bkpfEt3HnQXWrz0Dq8SXmuWP-fwsqXHL8HK5FSrmsIHv_YZfY8zF8FKEBbLB8LtTH77ffIni6ecNBOisv_flAb9KNo=w2880-h1380-ft" alt="Covid" />
                        <h3 className="px-2 mt-2 text-sm bold text-center">Covid</h3>
                    </li>

                    <li>
                        <img className="rounded object-cover" src="https://lh3.googleusercontent.com/fife/ABSRlIr9Jx-9bVRxVL0NbIh_YuNEChacmtnQvDUxYYmM0G56UIsp5-OdH5x7RVp2d880ZM-6IblNbC9pz5kLbQw2_ZrdWGeqEazpPG4YdokbsTKfK1LJ0fDWYxTPudaWDBCxVw-I4zsK6E7tC4nhkDVLY0kyPNzRIFu55YLk0R_CMy71gDZQAJ5WcBGTHM3N12iIZyGXPrh31gKaQDQds5WciQNHn2NdoH2dkyeXPKN6588F-obNPpqNhT3MfR0bZ-lXGDg0BN1ewqPj1yogo_D11PVDJZbxPFKCdDUEeYY-dubQP8cYLBPZ86H0kWlMR5EoBHQWz_RzHqIRADob6mJIsr962BhJ6i4KAbG4h_9S1hYWmGKFbVx8vtj6gpOpkBATOVj6Y61jsrBo1pG1SZ3QvaXIT3iGmUR9kmQKbj8L0HZxnzmPVJqxb3n6_3pwRotwD1VoREnMwLe_87LWuXUpKOYYcTtZ6v-TSdqMZCi6CIVzvhPrC_WgUBsra5oUN7zlEKLY7kphdFfeJdl0J3wrGDoEa1yiyqU7G09zyF1qnD86ufR4Zv9h7BEOd8w1GU3J2er-QPNr9oSzlYBe5WjzUInaIr68alRBjZMX02GNaguSIxsZqx7yf972IeAEsn-RsnAQ6eGMY8t3brRIPHWr2C2qudBkLj_Uv9B8rUK_LkBkf0DWIcVlsZXWmj2aHWs3EFxZNEMpWOF5ybTxHtxwOqI522k=w1960-h1348-ft" alt="Original" />
                        <h3 className="px-2 mt-2 text-sm bold text-center">Original</h3>
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

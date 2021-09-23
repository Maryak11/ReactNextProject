import { LoyoutProps } from './Loyout.props'
import styles from './Loyout.module.css'
import cn from 'classnames'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { SideBar } from '../SideBar/SideBar'
import { FunctionComponent } from 'react'

export const Loyout = ({ children }: LoyoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />

      <SideBar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>

      <Footer className={styles.footer} />
    </div>
  )
}

export const withLoyout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLoyoutComponent(props: T): JSX.Element {
    return (
      <Loyout>
        <Component {...props} />
      </Loyout>
    )
  }
}

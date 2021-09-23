import { TagProps } from './Tag.props'
import styles from './Tag.module.css'
import cn from 'classnames'

export const Tag = ({
  size = 'small',
  color,
  children,
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.tag, {
        [styles.small]: size == 'small',
        [styles.large]: size == 'large',
        [styles.red]: color == 'red',
        [styles.green]: color == 'green',
        [styles.ghost]: color == 'ghost',
        [styles.primary]: color == 'primary',
        [styles.gray]: color == 'gray'
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </p>
  )
}

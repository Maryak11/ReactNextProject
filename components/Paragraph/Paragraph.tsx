import { ParagraphProps } from './Parapgraph.props'
import styles from './Paragraph.module.css'
import cn from 'classnames'

export const Paragraph = ({
  size = 'middle',
  children,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles.small]: size == 'small',
        [styles.large]: size == 'large',
        [styles.middle]: size == 'middle'
      })}
      {...props}
    >
      {children}
    </p>
  )
}

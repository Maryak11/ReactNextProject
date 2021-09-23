import { RaitingProps } from './Raiting.props'
import Star from './Star.svg'
import styles from './Raiting.module.css'
import cn from 'classnames'
import { useEffect, useState, KeyboardEvent } from 'react'

export const Raiting = ({
  isEditable = true,
  raiting,
  setRaiting,
  className,
  ...props
}: RaitingProps): JSX.Element => {
  const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  )
  useEffect(() => {
    constructorStar(raiting)
  }, [raiting])

  const constructorStar = (currentRaitng: number) => {
    const upDateArray = raitingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRaitng
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(raiting)}
          onClick={() => onClick(i + 1)}
        >
          <Star
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => onKeyBoard(e, i + 1)}
          />
        </span>
      )
    })
    setRaitingArray(upDateArray)
  }

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return
    }
    constructorStar(i)
  }

  const onClick = (i: number) => {
    if (!isEditable || !setRaiting) {
      return
    }
    setRaiting(i)
  }

  const onKeyBoard = (e, i) => {
    if (!isEditable || !setRaiting) {
      return
    }
    if (e.code === 'Space') {
      setRaiting(i)
    }
  }
  return (
    <div {...props}>
      {raitingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  )
}

import styled from 'styled-components'

enum Directions {
  Up = -1,
  Down = 1,
  Left = -2,
  Right = 2,
}

const Container = styled.div`
  color: lightgray;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

type Props = {
  iconSize: number
  isExpanded: boolean
  direction?: Directions
  callback?: (isExpanded: boolean) => void
}

function ExpandArrow({
  iconSize,
  isExpanded,
  direction = Directions.Down,
  callback,
}: Props) {
  const ArrowIcon =
    require('react-icons/md')[
      `MdKeyboardArrow${Directions[direction * (isExpanded ? -1 : 1)]}`
    ]

  return (
    <Container
      onClick={() => {
        callback?.(!isExpanded)
      }}
    >
      <ArrowIcon size={iconSize} />
    </Container>
  )
}

export default ExpandArrow

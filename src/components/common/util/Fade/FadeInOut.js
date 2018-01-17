import { Transition } from 'react-transition-group'

const duration = 200

const defaultStyles = {
  display: 'inline-block',
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
}

const FadeInOut =({ in: inProp, children }) => {
  return (
    <Transition in={ inProp } timeout={ duration }>
      {(state) =>(
        <div style={{
          ...defaultStyles,
          ...transitionStyles[state] }}>
          { children }
        </div>
      )}
    </Transition>
  )
}

export default FadeInOut

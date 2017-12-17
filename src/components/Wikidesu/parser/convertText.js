import WikiParser from './wikiParser.js'

const convertText = (src) => {
  const nodes = WikiParser.parse(src)
  const lines = nodes.map((e,i) => {
    if (e.tag === 'ul') {
      const lis = e.items.map(
        (s,j) => <li key={`node${i}_${j}`}>{s}</li>
      )
      return <ul key={`node${i}`}>{lis}</ul>
    }
    if (e.tag === 'a') {
      return (
        <div key={`node${i}`}>
          <a href={`/wiki/${e.label}`}>to {e.label}</a>
        </div>
      )
    }
    return React.createElement(
      e.tag, { key: `node${i}`}, e.label
    )
  })
  return lines
}

export default convertText

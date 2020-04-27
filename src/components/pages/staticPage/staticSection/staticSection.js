import React from 'react'

const staticSection = (props) => {
	return (
		<section>
			<header>{props.header}</header>

			{/* There can be header with no content */}
			{(props.body === '') ? '' :
				<article className={props.className} >
					{props.body.split('|').map( (p,i) => <p key={i}>{p}</p>)}
					{(props.linkCopy) ? <p><a href={props.url}>{props.linkCopy}</a></p> : null}
				</article>
			}
		</section>
	)
}
export default staticSection;
import React, { Component } from 'react'
import '../../scss/item-cards.scss'
import { cardData } from './cardData'


export default class componentName extends Component {
	constructor() {
		super()
		this.state = {
			cards: []
		}

	}

	async componentDidMount() {
		try {
			// const { data: cards } = await axios.post('/cards')
			this.setState({
				cards: cardData
			})
		}
		catch(error) {
			console.error(error)
		}
	}

  render() {

	let cards = this.state.cards.map( v => 
		<div className="card-ctn__card">
			<div className="card-ctn__card__img-ctn">
				<img src={v.url} alt="💩" className="card-ctn__card__img-ctn--img"/>
				{/* { 
					v.workouts !== ''
					? 
					<div className="card-ctn__card__img-ctn--workout-count">
						<>{v.workouts}</>
						<>Workouts</>

					</div> 
					: 
					<></>
				} */}
			</div>
			<div className="card-ctn__card__desc-container">
				<div className="d-flex align-items-center">
					<div className="card-ctn__card__desc-container--title">
						Lake Innsicarra, Ireland-Pyramid
					</div>
					<div className="card-ctn__card__desc-container--profile">
						<img src={v.profile} alt=""/>
					</div>
				</div>
				<div className="card-ctn__card__desc-container__lower-title">
					<div className="card-ctn__card__desc-container__lower-title--info">
						<i className="far fa-clock"></i>
						${v.time}
					</div>
					<div className="card-ctn__card__desc-container__lower-title--info">
						<i className="fas fa-walking"></i>
						${v.distance}
					</div>
				</div>
				{ 
					v.link !== ''
					? 
					<a href={v.link} target="_blank">
						<div className="card-ctn__card__desc-container__details">
							VIEW DETAILS
						</div> 
					</a>
					: 
					<></>
				}
			</div>
		</div>
	);

	return (
		//I LIKE VUE. 🤫
	  <div className="card-ctn">{cards}</div>
	)
  }
}

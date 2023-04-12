import style from "./Detail.module.css";

export const Detail = ()=>{

	return (<>
	<div className={style.detail} >
		<p className={style.heading} >
		   Innovative Solutions For Account Problems
		</p>
		<p>
		  Our model is flexible enough to support individual needs and circumstances that you can outsource totally or partially:
		</p>
	</div>
	<div className={style.container} >
		<div className={style.constainerLeft} >
			<img src = "http://www.bookxpert.co.in/assets/img/innovative.jpg" alt="Detail" width="100%" height="100%" />
		</div>
		<div className={style.constainerRight} >
			<p>
			In the current situation, a person will not able to justify the work because it needs a broad range of skills, including accounting, technology, law, patience in addition to sincerity and costs. People like this are hard to find and much harder to afford. MSMEs are unable to afford or retain talent.
			</p>
			<br/>
			<p>
			All of the above features are included in our solution at a low cost and with ease of use. Our online site, applications, new technology, and techniques combine to eliminate the movement of people and physical data, allowing for day-to-day operations at no expense. With our technologies and techniques, data capture is flawless and fast.
			</p>
			<br/>
			<p>
			A number of tests will be carried out, and deliveries will be made in a precisely planned shape and with precision. This would make life simpler for professionals, agencies, and business owners.
			</p>
			<br/>
			<p>
			We assign experts in your company domain compliances who operate from various locations and at various times.
			</p>
			<br/>
			<p>
			Owners eventually forget about keeping track, asking, worrying, perplexing, and losing. You will never have to bring bags containing files and directories, coupons, bills, or records since source documents can be checked instantly online.
			</p>
		</div>
	</div>
	</>)
}
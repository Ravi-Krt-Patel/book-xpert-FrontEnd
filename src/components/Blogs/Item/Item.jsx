
import style from "./Item.module.css";


export const Item = ({detail})=>{
	return (<>
	<div className={style.main} >
		<div className={style.image} >
			<img src="http://placehold.it/" alt=""/>
		</div>
		<div className={style.content} >
			<p>
				Title : {detail.title}
			</p>
			<p>
				Description : {detail.description}
			</p>
		</div>
	</div>
	</>)
}
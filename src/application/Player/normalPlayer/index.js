import React from "react"
import {getName} from "../../../api/utils"
import{
	NormalPlayerContainer,
	Top,
	Middle,
	Bottom,
	Operators,
	CDWrapper
} from "./style"

function NormalPlayer(props){
	const {song}=props;
	return (
		<NormalPlayerContainer>
			<div className="background">
				<img 
					src={song.al.picUrl+'?params=300x300'}
					width="100%"
					height="100%"
					alt="music picture"/>
			</div>
			<div className="background layer"></div>
			<Top className="top">
				<div className="back">
					<i className="iconfont icon-back">&#xe662;</i>
				</div>
				<h1 className="title">{song.name}</h1>
				<h1 className="subtitle">{getName(song.ar)}</h1>
			</Top>
			<Middle>
				<CDWrapper>
					<div className="cd">
						<img className="image play"
							src={song.al.picUrl+'?params=400x400'}
							alt=""
						/>
					</div>
				</CDWrapper>
			</Middle>
			<Bottom>
				<Operators>
					<div className="icon i-left" >
			            <i className="iconfont">&#xe625;</i>
			        </div>
			        <div className="icon i-left">
			            <i className="iconfont">&#xe6e1;</i>
			        </div>
			        <div className="icon i-center">
			            <i className="iconfont">&#xe723;</i>
			        </div>
			        <div className="icon i-right">
			            <i className="iconfont">&#xe718;</i>
			        </div>
			        <div className="icon i-right">
			            <i className="iconfont">&#xe640;</i>
			        </div>
				</Operators>
			</Bottom>
		</NormalPlayerContainer>
	)
}

export default React.memo(NormalPlayer)
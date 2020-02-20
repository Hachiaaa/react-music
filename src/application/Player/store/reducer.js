import * as actionTypes from "./constants"
import {fromJS} from "immutable"

const playMode={
    sequence:0,
    loop:1,
    random:2
}

const defaultState=fromJS({
    fullScreen:false, //播放器是否为全屏
    playing:false, //歌曲是否正在播放
    sequencePlayList:[],
    playList:[],
    mode:playMode.sequence,
    currentIndex:-1,
    showPlayList:false,
    currentSong:{}
})

export default (state=defaultState,action)=>{
    switch(action.types){
        case actionTypes.SET_CURRENT_SONG:
            return state.set('currentSong',action.data);
        case actionTypes.SET_FULL_SCREEN:
            return state.set("fullScreen",action.data);
        case actionTypes.SET_PLAYING_STATE:
            return state.set("playing",action.data)
        case actionTypes.SET_SEQUECE_PLAYLIST:
            return state.set("sequencePlayList",action.data);
        case actionTypes.SET_PLAYLIST:
            return state.set("playList",action.data);
        case actionTypes.SET_PLAY_MODE:
            return state.set("mode",action.data);
        case actionTypes.SET_CURRENT_INDEX:
            return state.set("currentIndex",action.data);
        case actionTypes.SET_SHOW_PLAYLIST:
            return state.set("showPlayList",action.data);
        default:
            return state;
    }
}
// import { useSelector } from "react-redux";
import SongBoard from "./SongBoard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {DataInArray, GetMainSongAction} from "../redux/Action/index.js";
import {Card} from "react-bootstrap";
import {forEach} from "react-bootstrap/ElementChildren";
import SingleSong from "./singleSong.jsx";

const Home = (props) => {
    
    const dispatch = useDispatch();
    const singleFromRedux=useSelector(state => state.song.singleMusic)
    const[fetchData,setFetchData]=useState()
    useEffect(() => {
        dispatch(GetMainSongAction());
    },[] );
    
    const dataFromRedux = useSelector(state => state.song.songMain)
    const getId=()=>{
        
        dataFromRedux.map((el)=>{
            console.log(el);
            return el
        })
        
    }
    getId()
    
    return (
    <>
    
    
    </>
  )
};
export default Home;

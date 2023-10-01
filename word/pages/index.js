import styles from '../styles/Home.module.css';
import React, { useState } from "react"
import Image from "next/image";
import bgpi from '../public/bgpi.jpg'
export default function Home() {
  const[def, setDef]=useState("")
  
  const handleChange = (e) =>{
    setDef(e.target.value)
}
  
	const handleSubmit = async () => {
		try {
			const res = await fetch(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${def}`
			);
			const data = await res.json();
			console.log(data[0].meanings[0].definitions[0].definition);
		} catch (err) {
			console.log(err);
		}
	};
	return (
    <div>
      
                <div style={{
                  zIndex: -1,
                  position:"fixed",
                  width:"100vw",
                  height:"100vh",
                  display:"flex",
                  top: 0,
                  left: 0,
                  // alignItems:"center",
                  // justifyContent:"center",
                }}>
                  <Image src={bgpi}
                  // width={500}
                  // height={250}
                  alt="books"
               layout="fill"
               objectFit="cover"
                  />
                  </div>
		<div className={styles.header} >
		<h1>Type any word to know the meaning...</h1>
          <input className={styles.label} type="text" name="define" onChange={handleChange} />
          <div>
           
                <button  className={styles.main} onClick={handleSubmit}> Meaning of the word</button>
            
            </div>
        </div>
        </div>
	);
}

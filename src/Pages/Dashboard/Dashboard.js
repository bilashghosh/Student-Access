import React , {useEffect, useState} from 'react'
import "./Dashboard.css"
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

import { db } from '../../firebase/firebase';

{/*const docRef = doc(db,"Questions", "Electrician", "ES", "MCQ");/*}






{/*const docSnap = await getDoc(docRef);/*}
{/*const checkdata = ()=>{
  console.log("Document data:", docSnap.data());
}*/}


/*const docSnap = await getDoc(docRef)*/

{/*const checkdata = ()=>{
  console.log(docSnap.data());
}*/}


function Dashboard() {

  const [questionMcq , setquestionMcq] = useState([])

  useEffect( () =>{
    getData()
  },[]

  )


  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "Questions", "Electrician", "ES"));
    querySnapshot.forEach((doc) => {
      /*console.log(querySnapshot.docs);*/
      const data = querySnapshot.docs.map(doc=> ({
        id:doc.id, 
        ...doc.data()
      }))
      /*console.log(data)*/
      setquestionMcq(data);
    }
  );
  }


  return (
    <div className="dashboard-container">
      {/* Top Portion */}
      <div className="top-portion">
        <div>
          <div className="top-line">CBT Exam</div>
          <div className="bottom-line">Name of Institute</div>
        </div>
        <div className='time-left-container'>
          <h1 className='time-left-para'>Time Left</h1>
        </div>
      </div>

      {/* Middle Portion */}
      <div className="middle-portion">
        <div className="left-side">
          {/* Black section for navigation or additional information */}
          <div>
            <div className='summery-panel'>
              <h1 className='summery-text'>Summery Panel</h1>
            </div>
            <div className='p-3'>
            <div className='details-summery'>
              <div>
                <p>
                  Total Question
                </p>
              </div>
              <div>
                <p>75</p>
              </div>
            </div>
            <div className='details-summery'>
              <div className='flex row'>
                <div className='ans-shape'>
                </div>
                <div className='details-summery pl-1'>
                  <p>
                    Answered              </p>
                </div>
              </div>
              <div>
                <p>75</p>
              </div>
            </div>
            <div className='details-summery'>
              <div className='flex row'>
                <div className='bookmark-shape'>
                </div>
                <div className='details-summery pl-1'>
                  <p>
                    Bookmark With Ans.               </p>
                </div>
              </div>
              <div>
                <p>75</p>
              </div>
            </div>
            <div className='details-summery'>
              <div className='flex row'>
                <div className='bna'>
                </div>
                <div className='details-summery pl-1'>
                  <p>
                    Bookmarked and not ans              </p>
                </div>
              </div>
              <div>
                <p>75</p>
              </div>
            </div>
            <div className='details-summery'>
              <div className='flex row'>
                <div className='not-answered'>
                </div>
                <div className='details-summery pl-1'>
                  <p>
                    Not Answered              </p>
                </div>
              </div>
              <div>
                <p>75</p>
              </div>
            </div>
            </div>
          </div>
          <div>
          <div className='summery-panel'>
              <h1 className='summery-text'>Trade Theory</h1>
            </div>
            <div>
              <button className='question-button'>
                01
              </button>
            </div>

          </div>
        </div>
        <div className="right-side">
          {/* Blue section for main dashboard content */}
          <h1>Dashboard</h1>
          <p>Main dashboard content goes here.</p>
          {
            questionMcq.map(data => (
              <div key={data.id}>
                <p1>{data.iuobub7}</p1>
                
                
              </div>
            ))
          }
          {/* Add your dashboard components here */}
          {/*<button onClick={checkdata}>click me</button>*/}


        </div>
      </div>

      {/* Bottom Portion */}
      <div className="bottom-portion">
        <div className="top-line">Line 3</div>
        <div className="bottom-line">Line 4</div>
      </div>
    </div>
  );
}

export default Dashboard;
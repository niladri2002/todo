import React,{useState} from 'react'
import './addtodo.css'
import TodoForm from "./TodoForm";
function Addtodo(props) {
  
  const styles = {
    modalContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: '#E0E0E0',
      padding: 20,
      border: '1px solid #888',
      width: '40%',
      height: '60%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };

  
  return (
   <>
        <div style={styles.modalContainer}>
          <div style={styles.modalContent}>
            <h3>Title:</h3>
            <input type="text" />
            <h3>Description:</h3>
            <textarea />
            <h3 >Type:</h3>
            <select >
              <option value="team">Team</option>
              <option value="personal">Personal</option>
              <option value="professional">Professional</option>
            </select>
            <h3>Due Date:</h3>
            <input type="date" />
            <button >Add</button>
          </div>
        </div>
        </>
   
    
  
  )
}

export default Addtodo

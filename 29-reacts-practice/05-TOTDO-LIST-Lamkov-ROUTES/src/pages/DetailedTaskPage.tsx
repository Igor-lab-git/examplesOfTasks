import { useState, type JSX, useEffect } from "react"
import tasksApi from "../api/tasksAPI";
import type { ITasks } from "../components/ToDo";
import { useNavigate, useParams } from "react-router-dom";


const DetailedTaskPage = (): JSX.Element => {

  // const taskId = "206b";

    const [taskById, setaskById] = useState<ITasks | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [hasError, setHasError] = useState<boolean>(false);

    const {taskId} = useParams<string>();
    const navigate = useNavigate();

    useEffect(() => {
      if (taskId) {
        tasksApi.getTaskById(taskId)
        .then((task) => {
          setaskById(task);
          setHasError(false);
        })
        .catch((error) => {
          setHasError(true);
          console.log(error);
        })
        .finally(() => setIsLoading(false))
      }
        
    }, [taskId]);

    if (!taskId) {
      return (
        <div>
          <p>Task ID is missing</p>
          <button onClick={() => navigate("/")}>Go to homepage</button>
        </div>
      );
    }

    if(isLoading) {
      return (
        <div style={{ padding: '20px' }}>
          <span>Loading task data...</span>
        </div>
      );
    }

    if(hasError) {
      return <span>Such task not fount  :(</span>;
    }

  return (
    <div style={{ padding: '20px' }}>
      <button 
        onClick={() => navigate(-1)}
        style={{ marginBottom: '20px', padding: '8px 16px' }}
      >
        ← Back
      </button>
      
      <h2>{taskById?.text}</h2>
      <p>
        Status: 
        <span style={{ 
          color: taskById?.isDone ? 'green' : 'orange',
          fontWeight: 'bold',
          marginLeft: '10px'
        }}>
          {taskById?.isDone ? "✅ Task is Done" : "⏳ Task is Not Done"}
        </span>
      </p>
      
      {taskById?.id && (
        <p style={{ color: '#666', fontSize: '0.9em', marginTop: '10px' }}>
          ID: {taskById.id}
        </p>
      )}
    </div>
  )
};

export default DetailedTaskPage;

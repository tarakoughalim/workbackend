import React, { useEffect, useState } from 'react'
import './Workout.css'
import { IoTrashOutline } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';
import { formatDistanceToNow } from 'date-fns';
;
function Workout() {

    const [response, setResponse] = useState([])


    useEffect(() => {

        const handleData = async () => {

            try {
                const data = await fetch("http://localhost:4000/app/get")
                const result = await data.json()
                console.log(result);
                setResponse(result)
            } catch (error) {
                console.log("error :", error);
            }
        }
        handleData()
    }, [response])




    const handleDelete = (id) => {
        console.log(id);

        fetch(`http://localhost:4000/app/deleteExo/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the backend if needed
                console.log('Workout deleted successfully:', data);

                // Show success toast notification
                toast.success('Workout deleted successfully');
            })
            .catch(error => {
                // Handle errors
                console.error('Error deleting workout:', error);

                // Show error toast notification
                toast.error('Error deleting workout');
            });
    };





    return (
        <div className='workout'>
            {
                response.length > 0 ? (


                    response.map((item) => (



                        <div className="cart">
                            <div className="ico">

                                <h2>{item.title}</h2>

                                 <div className="icon" onClick={()=> handleDelete(item._id)}>
                                    <IoTrashOutline size={30} />
                                </div>
                            </div>
                            <div className="storng">

                                <strong>
                                    Load(kg):
                                </strong>
                                <small>
                                    {item.laod}
                                </small>
                            </div>
                            <div className="">
                                <strong>
                                    Number of reps:
                                </strong>
                                <small>
                                    {item.reps}
                                </small>
                                <p>{formatDistanceToNow(new Date(item.createdAt),{addSuffix:true})}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="">
                        there is no workout</div>
                )
            }
     <Toaster />
        </div>
    )
}

export default Workout
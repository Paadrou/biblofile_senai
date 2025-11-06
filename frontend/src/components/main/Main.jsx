import { useEffect, useState } from "react"

const Main = ()=>{
    const [userCard, setUserCard] = useState([]);

    async function fetchUser() {
        try {
            
            const res = await fetch("http://localhost:3000/user/1")
            .then(res => res.json())
            .then(setUserCard(res))
            console.log("data: ", res)
            console.log("user: ", userCard)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchUser()
    }, [])

    return(
        <>
        {/* {userCard.map((index, item) => (
           console.log(item)
           
        ))} */}
        </>
    )
}

export default Main
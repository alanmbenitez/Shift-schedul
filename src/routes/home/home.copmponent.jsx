
import React, { Fragment, useEffect, useState } from 'react';
import './home.styles.scss'
import OpenShifts from '../../components/open-shifts/open-shifts.component';
import { useSelector } from 'react-redux';
import TimeBar from '../../components/time-bar/time-bar.component';



const Home = () => {
    const availableShifts = useSelector(state => state.shiftAvailable)
    const takenShifts = useSelector(state => state.shiftsTaken)
    const [page, setPage] = useState(0)
    const [perPage, setPerPage] = useState(4)
    const [pages, setPages] = useState(0)
    
    const items = availableShifts.slice(page * perPage, (page + 1) * perPage)

    useEffect(() => {
        setPages(Math.floor(availableShifts.length / perPage))
    }, [availableShifts.length, perPage])

/*     const handleChangePage = (event, newPage) => {
        setPage(newPage)
      }; */
    
    return (
        <div className='home-container'>
            <div className='title-container'>
                <h1>Shifts</h1>
                <h2>You've been invited</h2>
            </div>
            <OpenShifts available={false} colorCard={'border-color-secondary'} shifts={takenShifts} />
            <div>
            <TimeBar rangeDate={'22 - 25 apr 2022'}/>
            </div>
            <OpenShifts available={true} colorCard={'border-color-primary'} shifts={items} />
        </div>
    );
}


export default Home

import React  from "react";
import './index.scss';
import Title from "../../components/title";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const FindUs = () => {
    const calendarRef = React.createRef();

    return(
        <div className="find-us" >
            <div data-aos="fade-up"><Title title="Nous retrouver"/></div>
            <div className="calendar" data-aos="fade-right">
                <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} height="100"/>
            </div>
        </div>
    )
}

export default FindUs

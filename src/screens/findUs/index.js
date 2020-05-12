import React  from "react";
import './index.scss';
import Title from "../../components/title";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const FindUs = () => {
    const calendarRef = React.createRef();

    return(
        <div className="find-us">
            <Title title="Nous retrouver" />
            {/*<div className="agenda" dangerouslySetInnerHTML={{__html: '<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FParis&amp;src=bW9sbGV0LnNpbW9uLnByb0BnbWFpbC5jb20&amp;src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=bGltaXRsZXNzcHJvZGNhbGVuZGFyQGdtYWlsLmNvbQ&amp;color=%23039BE5&amp;color=%230B8043&amp;color=%238E24AA&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;showDate=1" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>'}}>*/}
            {/*</div>*/}
            <div className="calendar">
                <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} height="100"/>
            </div>

        </div>
    )
}

export default FindUs

import { useSelector } from "react-redux"


export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector( state => state.calendar );

  return {
    //Propiedades

    activeEvent,
    events,

    //Metodos

  }
}

// import React from 'react';
// import moment from 'moment';
// import './Counter.css';

// const Counter = () => {
//     return (
//         <section className="counter">
//             <h2>Tiempo restante para el evento</h2>
//             <div className="counter-content">
//                 <div className="counter-content-box">
//                     <span>20</span>
//                     <p>Días</p>
//                 </div>
//                 <div className="counter-content-box">
//                     <span>15</span>
//                     <p>Horas</p>
//                 </div>
//                 <div className="counter-content-box">
//                     <span>30</span>
//                     <p>Minutos</p>
//                 </div>
//                 <div className="counter-content-box">
//                     <span>10</span>
//                     <p>Segundos</p>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Counter;
import React, { Component } from 'react';
import './Counter.css';



export default class Counter extends Component {
    state = {
        days: 0,
        hours:0,
        minutes:0,
        seconds:0
    };

    componentDidMount() {
        const { deadline } = this.props;
        this.intervalId = setInterval(() => {
          const now = new Date();
          // get total seconds between the times
          let delta = Math.abs(deadline - now) / 1000;
          // calculate (and subtract) whole days
          const days = Math.floor(delta / 86400);
          delta -= days * 86400;
          // calculate (and subtract) whole hours
          const hours = Math.floor(delta / 3600) % 24;
          delta -= hours * 3600;
          // calculate (and subtract) whole minutes
          const minutes = Math.floor(delta / 60) % 60;
          delta -= minutes * 60;
          // what's left is seconds
          const seconds = Math.floor(delta % 60); // in theory the modulus is not required
          this.setState({
            days,
            hours,
            minutes,
            seconds
          });
        }, 1000);
      }

      componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render() {
        const {days,hours,minutes,seconds} = this.state;
        return (
            <section className="counter">
             <h2>Tiempo restante para el evento</h2>
             <div className="counter-content">
                 <div className="counter-content-box">
                     <span>{days}</span>
                     <p>Días</p>
                 </div>
                 <div className="counter-content-box">
                     <span>{hours}</span>
                     <p>Horas</p>
                 </div>
                 <div className="counter-content-box">
                     <span>{minutes}</span>
                     <p>Minutos</p>
                 </div>
                 <div className="counter-content-box">
                     <span>{seconds}</span>
                     <p>Segundos</p>
                 </div>
             </div>
         </section>
        )
    }
}


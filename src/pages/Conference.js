import React, { Component } from 'react';
import '../pages/Conference.css';

class Conference extends Component{

    constructor(props){
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        }
    }

    obtenerMes(fecha){
      var monthNames = [
        "Enero", "Febrero", "Marzo",
        "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre",
        "Noviembre", "Diciembre"
      ];

      return monthNames[fecha];
    }

    componentDidMount(){
        fetch('http://localhost:4000/api/eventos')
        .then(res => res.json())
        .then(json => {
          let count = 0;
          for(var i = 0; i < json.length; i++){
            let nom_cof = json[i].id_conf;
            let fecha = new Date(json[i].fecha_evento);
            let fechaCompleta = fecha.getDate() +' '+ this.obtenerMes(fecha.getMonth()) +' '+ fecha.getFullYear();
            json[i].fecha_evento = fechaCompleta;
            
            fetch('http://localhost:4000/api/conferencista/'+nom_cof)
            .then(res => res.json())
            .then(data => {
              json[count]['nombre_conf'] = data[0].nombre_conf;
              count++;
              this.setState({
                isLoaded: true,
                items: json,
              })
              
             })
             
          }
          console.log(json);
        })
        .catch(function(error) {  
          console.log('Request failed', error)  
        });
        
      }
    

    render(){
        var { isLoaded, items} = this.state;
        if(!isLoaded){
            return <div>Loading...</div>;
        }
        
        return(
          <div>
              <div className="menu-evento">
                Eventos
              </div>
              <ul>
              {items.map(item =>(
                 <div className="eventos">
                  <li key={item.id_evento}>
                  <div className="fecha-evento">
                  <i className="fas fa-calendar-alt"></i><b>Fecha Evento: </b><i></i>{item.fecha_evento}
                  </div>
                  <i className="fas fa-code"></i><b>Nombre Evento:</b> {item.nombre_evento} 
                  <br/>
                  <i className="fas fa-user-tie"></i><b>Conferencista:</b> {item.nombre_conf}
                  <br/>
                  <i className="far fa-clock"></i><b>Hora Evento:</b>{item.hora_evento}
                  <br/>
                  <i className="fab fa-teamspeak"></i><b>Idioma:</b>{item.idioma}
                  <br/>
                  <i className="fas fa-money-bill-alt"></i><b>Precio:</b> {item.precio}
                  <br/>
                  <i className="fas fa-search-location"></i><b>Lugar Evento:</b> {item.lugar_evento}
                </li>
                </div>
              ))}
            </ul>
          </div>
    
        )
    }
  
}

export default Conference;
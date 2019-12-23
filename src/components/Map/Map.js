import React from 'react';
import './Map.css';

const Map = () => {
    return (
        <section id="map" className="map">
            <section className="map-content">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.867523144916!2d-99.16161198509356!3d19.418129086892495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3af7fbcf45%3A0xec5a734ec7b0cc4a!2sBe+tech!5e0!3m2!1ses!2smx!4v1563473382875!5m2!1ses!2smx"
                     allowFullScreen title="map"></iframe>
            </section>
        </section>
    );
}

export default Map;